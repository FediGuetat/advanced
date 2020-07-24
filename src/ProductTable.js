import React from 'react'
import { Table } from 'react-bootstrap';
const ProductTable = (props) => {

s
    return(  <div className="tableau" >
    <center><header style={{ backgroundColor:'blue' }} /></center>


    
    <Table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Categorie</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      {props.produits.map((element)=> (
        <tr key={element.name}>
        <td>{element.name}</td>
         <td>{element.category}</td>
         <td>{element.price}</td>
        </tr>
       )
       )
      }

      
    </tbody>
  </Table>
    </div>)
}


/* ProductTable.propTypes = {
     name: PropTypes.string,
     price: PropTypes.number,
     categorie: PropTypes.string ,
     products : PropTypes.array 
   }; */

export default ProductTable ;