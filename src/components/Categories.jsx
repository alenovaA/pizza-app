import React from 'react';
function Categories() {
  const categories = ['All','Meat','Vegetarian','Grill', 'Spicy', 'Calzone'];
  const [activeIndex, setActiveIndex] = React.useState()
  const onClickCategory = (index)=>{
    setActiveIndex(index)
  }
  return (            
  <div className="categories">
    <ul>
      {categories.map ( (value,index)=> (
         <li onClick = {()=> onClickCategory(index)}className={activeIndex === index ? 'active' : ''}>{value}</li>
      ))
      }
     
 
    </ul>
  </div>
)
}
export default Categories;