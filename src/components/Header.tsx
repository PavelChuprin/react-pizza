import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCart } from "../redux/cart/selectors";
import logoSvg from "../assets/img/pizza-logo.svg";
import { Search } from "./index";
import React from "react";
import { Affix } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartItem } from "../redux/cart/types";

export const Header: React.FC = () => {
  const location = useLocation();
  const isMounted = React.useRef(false);
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: CartItem) => {
    return item.count + sum;
  }, 0);

  React.useEffect(() => {
    if (isMounted.current) {
      const data = JSON.stringify(items);
      localStorage.setItem("cart", data);
    }

    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        {location.pathname !== "/cart" && <Search />}
        <div className="header__cart">
          {location.pathname !== "/cart" && (
            <Affix offsetTop={10}>
              <Link to="/cart">
                <button className="button button--cart">
                  <span>{totalPrice} ₽</span>
                  <div className="button__delimiter"></div>
                  <ShoppingCartOutlined
                    style={{
                      fontSize: "28px",
                    }}
                  />
                  <span>{totalCount}</span>
                </button>
              </Link>
            </Affix>
          )}
        </div>
      </div>
    </div>
  );
};
