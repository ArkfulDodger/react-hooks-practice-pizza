import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

// Default Form Values
const defaultForm = {
  topping: "",
  size: "",
  vegetarian: false,
  id: ""
}


function App() {
  // State and Variable Declaration
  const [formData, setFormData] = useState(defaultForm);
  const [pizzas, setPizzas] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
      .then( res => res.json())
      .then( data => {
        console.log(data);
        return setPizzas(data)})
      .catch( error => alert(error.message));
  }, [])

  // const addPizza = (newPizzaData) => {
  //   fetch(`http://localhost:3001/pizzas`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify(newPizzaData)
  //   })
  //     .then( res => res.json())
  //     .then( newPizza => setPizzas([...pizzas, newPizza]))
  //     .catch( error => alert(error.message));
  // }
  
  const updatePizza = (updatedPizzaData) => {
    fetch(`http://localhost:3001/pizzas/${updatedPizzaData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(updatedPizzaData)
    })
      .then( res => res.json())
      .then( updatedPizza => {
        const updatedPizzas = pizzas.map( pizza => {
          return pizza.id === updatedPizza.id ? updatedPizza : pizza;
        })
        setPizzas(updatedPizzas);
      })
      .catch( error => alert(error.message));
  }
  
  // const removePizza = (pizzaToRemove) => {
  //   fetch(`http://localhost:3001/pizzas/${pizzaToRemove.id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     }
  //   })
  //     .then( res => {
  //       if (res.ok) {
  //         const updatedPizzas = pizzas.filter( pizza => {
  //           return pizza.id !== pizzaToRemove.id;
  //         })
  //         setPizzas(updatedPizzas);
  //       } else {
  //         alert('something went wrong');
  //       }
  //     })
  //     .catch( error => alert(error.message))
  // }

  return (
    <>
      <Header />
      <PizzaForm
        defaultForm={defaultForm}
        formData={formData}
        setFormData={setFormData}
        updatePizza={updatePizza}
      />
      <PizzaList pizzas={pizzas} setFormData={setFormData} />
    </>
  );
}

export default App;
