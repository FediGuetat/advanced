import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import ProductTable from './ProductTable';

let object1 ={name: "frigidaire" , price : "1000dt", category:"electronics" }
let object2={name: "jebba", price : "50dt" , category:"clothes"}
let products=[object1, object2]


function App() {
  return (      
  <ProductTable produits={products}/>
  );
}


export default App;