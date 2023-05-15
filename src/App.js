import { useState } from "react";
import ProductList from "./components/ProductList";
import data from './data.json';
import './App.css';


function Option({etc,sortItems}){
  const etcChange = (e) => {
    return sortItems(e.target.value);
    }
  return (
    <select
    defaultValue={etc}
    onChange={etcChange}>
    <option value="necklaces">necklaces</option>
    <option value="earrings">earrings</option>
  </select>
  )
}
function App() {
const [etc , setEtc] = useState('')
const [items,setItmes] = useState(data);
let subData = data;
// console.log(subData)

const sortItems = (a) => {
  console.log(a)
const newItem = subData.filter((item) => {return item.kind === a})
console.log(newItem)
setEtc(a);
setItmes(newItem);
// setItmes(newItem)
}
const DelectItem = (id) =>{
  const newItem = items.filter((item) => item.id !== id);
  setItmes(newItem)
}
  return ( 
   <div id="wrap">
    <div className="btn">
  
    <Option etc={etc} sortItems={sortItems} />
    </div>
    <ProductList items={items} onDelete={DelectItem} />
   </div>
  );
}

export default App;
