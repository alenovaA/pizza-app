import React from "react";
function Categories({ value, onClickCategory }) {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Calzones"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            onClick={() => onClickCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>

    </div>
  );
}
export default Categories;
