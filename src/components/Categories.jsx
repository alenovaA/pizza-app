import React from 'react';
function Categories() {
  const categories = ['All','Meat','Vegetarian','Grill', 'Spicy', 'Calzone'];
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index)=>{
    setActiveIndex(index)
  }

  return (            
  <div className="categories">
    <ul>
      {categories.map ( (value,index)=> (
         <li 
         key={value} 
         onClick = {()=> onClickCategory(index)} 
         className={activeIndex === index ? 'active' : ''} 
         >{value}</li>
      ))
      }
    </ul>
  </div>
)
}
export default Categories;