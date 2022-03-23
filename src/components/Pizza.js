import React from "react";

function Pizza( { pizza: { id, topping, size, vegetarian }, setFormData } ) {
  function handleEditPizzaClick(e) {
    setFormData({
      topping: topping,
      size: size,
      vegetarian: vegetarian,
      id: id
    })
  }


  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditPizzaClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
