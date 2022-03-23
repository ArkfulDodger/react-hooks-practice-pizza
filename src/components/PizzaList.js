import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, setFormData }) {
  const pizzasToDisplay = pizzas.map( pizza => <Pizza key={pizza.id} pizza={pizza} setFormData={setFormData} />)

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzasToDisplay}
      </tbody>
    </table>
  );
}

export default PizzaList;
