import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(()=>{
    fetch('https://6457ad450c15cb14820e2f04.mockapi.io/items')
    .then((res)=>{ 
      return res.json()
    })
    .then((arr)=>{
      setItems(arr);
    })
  },[]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">All Pizzas</h2>
            <div className="content__items">
              {items.map((obj) => (
                <PizzaBlock key={obj.title} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
