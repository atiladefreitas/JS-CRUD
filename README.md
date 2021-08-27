# Estoque
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

Gerenciador de estoque com as funções de:
  - Adicionar uma peça de roupa (nome, tamanho, descição e valor)
  - Visualizar o estoque;
  - Editar as informações do produto;
  - Excluir produto do banco de dados.

Neste projeto foi utilizado:
  - JavaScript
  - React
  - NodeJs
  - mySQL

Junto com as API's:
  - [Express](https://expressjs.com/pt-br/);
  - [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS);
  - [AXIOS](https://github.com/axios/axios#readme).

## Overview de Funções

- Função de insert, irá ler o que foi inscrito nos inputs e enviar para o banco de dados.
```JavaScript
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
```
- Irá exibir na tela o que o produto que foi cadastrado.
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
- Função responsável por realizar o update no banco de dados <br />
 **NOT WORKING**

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
- Responsável por excluir o produto e sua informações.
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


## Screenshot
![](https://github.com/atiladefreitas/JS-CRUD/blob/main/proj2.png)

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
