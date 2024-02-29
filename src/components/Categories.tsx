import React from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories: React.FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((categorie, index) => (
            <li
              onClick={() => onChangeCategory(index)}
              key={index}
              className={value === index ? "active" : ""}
            >
              {categorie}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
