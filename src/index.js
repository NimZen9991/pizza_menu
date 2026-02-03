import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer2 />
    </div>
  );
}

function Header() {
  return <h1>Pizza Reacts Yumm Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h1> Our Menu</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer2() {
  const time = new Date().getHours();
  const openHours = 8;
  const closeHours = 23;
  const isOpen = time >= openHours && time <= closeHours;
  console.log(isOpen);

  // if (time >= openHours && time <= closeHours) alert("We're currently open!!!");
  // else alert("Sorry we're closed for today !");
  return (
    <footer>
      {new Date().toLocaleTimeString()}. We're currently Open!!!! React with
      taste...
    </footer>
  );
}
function Pizza() {
  return (
    <div>
      <img src="pizzas/prosciutto.jpg" alt="Pizza spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>;
    </div>
  );
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); // strict mode will check if there is some outdate libraries we are using

// React before 18 was a bit diffrent .
