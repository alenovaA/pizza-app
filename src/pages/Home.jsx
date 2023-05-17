import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://6457ad450c15cb14820e2f04.mockapi.io/items?category=` + categoryId )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0)
    }, [categoryId]);
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories value = {categoryId} onClickCategory= {(id) => setCategoryId(id)}/>
          <Sort sortType = {sortType} setSortType = {setSortType}/>
        </div>
        <h2 className="content__title">All pizzas</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.title} {...obj} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
