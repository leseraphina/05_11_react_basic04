import { useState } from "react";
import ProductList from "./components/ProductList";
import data from './data.json';
import './App.css';

function App() {
const [order,setOrder] = useState('date');
const [items,setItmes] = useState(data);
// console.log(order);
// console.log(items);
const sortItems = items.sort((a,b)=> b[order]-a[order]);
// function newClick(){}
const newClick = () => { setOrder('date')}
const bestClick = () => { setOrder('rating')}
  return (
   <div id="wrap">
    <div className="btn">
      <button type="button" onClick={newClick}>최신순</button>
      <button type="button" onClick={bestClick}>베스트순</button>
    </div>
    <ProductList items={sortItems} />
   </div>
  );
}

export default App;
