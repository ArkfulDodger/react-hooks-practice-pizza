import React from "react";

function PizzaForm({ defaultForm, formData, setFormData, updatePizza }) {
  const { topping, size, vegetarian} = formData;

  // Reset formData to default values
  const resetForm = () => setFormData(defaultForm);

  // Handles form onSubmit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      updatePizza(formData);
      resetForm();
    } else {
      alert('click on a pizza to edit!')
    }
  }

  // Handles input onChange events: input name attributes must match formData keys
  const handleFormChange = ({ target: { type, name, value, checked } }) => {
    const newValue = type === 'radio' ? (value === "Vegetarian" ? checked : !checked) : value; 
    const updatedFormData = { ...formData, [name]: newValue };

    setFormData(updatedFormData);
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleFormChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleFormChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={!!vegetarian}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleFormChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
