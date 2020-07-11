import React from "react";
import Card from "./Card";

const CardList = ({ names }) => {
  return (
    <div>
      {load.map((user, i) => {
        return (
          <Card
            key={i}
            id={load[i].id}
            name={load[i].name}
            email={load[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
