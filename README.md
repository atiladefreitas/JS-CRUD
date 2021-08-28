# Product & Inventury manager
<p align="center">
    <img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
</p>

## Description

Inventory manager with the following functions:
  - Add a piece of clothing (name, size, description and price)
  - View inventory;
  - Update product price;
  - Delete product from database.

In this project was used the following tools:
  - JavaScript
  - React
  - NodeJs
  - mySQL

Along with the API's and Packages:
  - [Express](https://expressjs.com/pt-br/);
  - [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS);
  - [AXIOS](https://github.com/axios/axios#readme).

## Steps

After download the code, run on terminal (in both folders):

```
npm install
```
Open _backend_ folder and run:
```
npm install mysql express cors
```

#### To start the aplication
on _frontend_ folder, run:
```
npm start
```
on _backend_ folder, run:
```
node index.js
```

## Overview de Funções

- Insert function, will receive the data from fronend end send it to the backend.
```JavaScript
//post requet, vai inserrir os dados no database
app.post('/create', (req, res) => { // rota ; font end -> back end
    //variáveis do front end
    /*
    const name = req.body.name;
    const num = req.body.num;
    const desc = req.body.desc;
    const price = req.body.price;
    */
    const { name, num, desc, price } = req.body;
    
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
```
- Display function, will show on the screen the registeres product.
```JavaScript
app.get('/estoque', (req, res) => {
    database.query('SELECT * FROM produtos', (err, result) =>{
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
```
- Update function, will update the price on database.

```JavaScript
app.put('/update', (req, res) => {
    const id = req.body.id;
    const price = req.body.price;
    database.query("UPDATE SET produtos price = ? WHERE id = ?", [price, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
```
- Delete function.
```JavaScript
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
```
> **NOTICE**
> after add a product, for a better usage of update & delete function, refresh page are require (F5).



## Screenshot
![](https://github.com/atiladefreitas/JS-CRUD/blob/main/crud_proj.png)

## Author

**Átila de Freitas**
<p align="center">
  <a href="https://instagram.com/atiladefreitas.io">
        <img  src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.linkedin.com/in/atilafreitas">
        <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="mailto:atiladefreitas@protonmail.ch">
        <img src="https://img.shields.io/badge/-atiladefreitas@protonmail.ch-%230077B5?style=for-the-badge&logo=protonmail&logoColor=white&color=lightgrey">
    </a>
  </p>
