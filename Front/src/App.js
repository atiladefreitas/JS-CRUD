import './App.css';
import {useState} from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const [newPrice, setNewPrice] = useState(0);

  const [estoqueList, setEstoqueList] = useState([]); // armazena todas as infos e a lista

  /*
  const display = () => {
    console.log(name + num + desc + price);
  };
  */

  const addProduto = () => {
    Axios.post('http://localhost:3001/create',{
    name: name, 
    num: num, 
    desc: desc, 
    price: price,
  }).then(() => { // enviar ao back end
    setEstoqueList([
      ...estoqueList,
      {
        name: name, 
        num: num, 
        desc: desc, 
        price: price,
      },
    ]);
  }); 
};

  const getEstoque = () => {
    Axios.get('http://localhost:3001/estoque').then((response) => {
    //  console.log(response); // traz do back end
    setEstoqueList(response.data);
  });
};

  const updateValorProduto = (id) => {
    Axios.put("http://localhost:3001/update", {price: newPrice, id: id}).then((response) => {
      alert("update feito!");
    });
  };

  const deleteEstoque = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
    setEstoqueList(estoqueList.filter((val) => {
      return val.id !== id
    })
    );
    });
  };

  return (

    <div className="App">
      <div className="title">
        <h2>Cadastrar produto 📋</h2>
      </div>
      <div className="infos">
        <div className="st-block">
          <label>Nome do Produto: </label>
          <input type="text" onChange={(event) => {setName(event.target.value)}}/> 
          <br />
          <label>Número / Tamanho: </label>
          <input type="text" onChange={(event) => {setNum(event.target.value)}}/>
        </div>
        <br />
        <div className="nd-block">
        <label>Descrição: </label>
        <textarea id="desc" name="desc"
            rows="3" cols="15" onChange={(event) => {setDesc(event.target.value)}}/>
            </div>
        <br />
        <div className="rd-block">
        <label>Preço: </label>
        <input type="number" placeholder="R$" onChange={(event) => {setPrice(event.target.value)}}/>
        </div>
        <br />
        <button type="button" onClick={addProduto} className="btn-main">Cadastrar</button>
        <br />
      </div>
      
      <label id="divider" className="divider">________________________________________________________________________</label>

      <div className="title">
        <h2>Estoque 📦</h2>
      </div>

      <div className="estoque"> 
      <button onClick={getEstoque} className="btn-main">Mostrar estoque</button>

      {estoqueList.map((val, key) => { // mapeia todos os elementos de estoqueList
        return (<div className="estoq">
          <h3>Produto: {val.name}</h3>
          <h3>Número / Tamanho: {val.num}</h3>
          <h3>Descrição: {val.desc}</h3>
          <h3>Valor: R$ {val.price}</h3>
          <div className="btn"> 
          <div className="update-input-area">
            <input type="text" placeholder="R$" className="update-input" onChange={(event) => {setNewPrice(event.target.value);}}/>
            </div>
            <button className="btn-edit" onClick={()=>{updateValorProduto(val.id); }}>Edit</button>
            <button className="btn-delete" onClick={() => {deleteEstoque(val.id); }}>Delete</button> 
            {/* passo o valor da ID pelo parâmetro */}
          </div>
        </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
