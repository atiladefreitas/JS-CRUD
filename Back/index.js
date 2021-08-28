const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'productSystem',
});

//post requet, vai inserrir os dados no database
app.post('/create', (req, res) => { // rota ; font end -> back end
    //variáveis do front end
    const name = req.body.name;
    const num = req.body.num;
    const desc = req.body.desc;
    const price = req.body.price;
    
    database.query('INSERT INTO produtos (`name`, `num`, `desc`, `price`) VALUES (?,?,?,?)', //insert
    [name, num, desc, price], (err, result) => { //verify
        if (err) {
            console.log(err);
        } else {
            res.send("inserido!");
        }
    }
);
});

app.get('/estoque', (req, res) => {
    database.query('SELECT * FROM produtos', (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put('/update', (req, res) => {
    const id = req.body.id;
    const price = req.body.price;
    database.query("UPDATE produtos SET price = ? WHERE id = ?", [price, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {  //ID será acessível
    const id = req.params.id;
    database.query("DELETE FROM produtos WHERE id = ?", id, (err, result) => { // ? => recebe id
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }); 
});

app.listen(3001, ()=>{
    console.log("server on!");
});
