import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(()=>{
      fetch('https://6457ad450c15cb14820e2f04.mockapi.io/items')
      .then((res)=>{ 
        return res.json()
      })
      .then((arr)=>{
        setItems(arr);
        setIsLoading(false);
      })
    },[]);
  return (
    <div>
      {" "}
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All Pizzas</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.title} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;