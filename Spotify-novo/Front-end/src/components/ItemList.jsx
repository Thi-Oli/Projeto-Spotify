import React from "react";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  // console.log(items);
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  // isHome ? (finalItems = items) : (finalItems = Infinity)

  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} Populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className=" item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              idPath={idPath}
              // id={currObj.id}
              // name={currObj.name}
              // image={currObj.image}
              // banner={currObj.banner}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;

{
  /* {items === 5 ? (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        ) : (
          <>
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
            <SingleItem />
          </>
        )} */
}
