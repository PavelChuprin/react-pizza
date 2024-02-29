import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Watermark } from "antd";
import WatermarkImage from "../assets/img/pizza-svgrepo-com.svg";

type Pizza = {
  imageUrl: string;
  title: string;
  price: number;
  sizes: number[];
};

const FullPizza: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pizza, setPizza] = React.useState<Pizza>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://65239b78ea560a22a4e88b1b.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        console.log(error);
        alert("Ошибка при получении пиццы");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className="container">
      <div className="content__items">
        <Watermark
          content="React-Pizza"
          height={50}
          width={50}
          image={WatermarkImage}
        >
          <img
            className="content__item-img"
            src={pizza.imageUrl}
            alt={`Фото питсы: ${pizza.imageUrl}`}
            width={400}
            height={400}
          />
        </Watermark>

        <div className="content__item-info">
          <h1>{pizza.title}</h1>
          <h2>{pizza.price} ₽</h2>
          <ul>Возможные размеры:</ul>
          {pizza.sizes.map((size, index) => (
            <li key={index}>{size} см</li>
          ))}
        </div>
      </div>
      <Link to="/">
        <button className="button button--outline button--add go-back-btn">
          <span>Вернуться назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
