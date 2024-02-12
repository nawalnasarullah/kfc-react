import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let menuItem = [
    {
      title: "Everyday Value",
      image: "/images/card-1.png"
    },
    {
      title: "All Cart-e and Combos",
      image: "/images/card-2.png"
    },
    {
      title: "Promotion",
      image: "/images/card-3.png"
    },
    {
      title: "Card Boxes",
      image: "/images/card-4.png"
    },
    {
      title: "Signature Boxes",
      image: "/images/card-5.png"
    },
    {
      title: "Sharing",
      image: "/images/card-6.png"
    },
    {
      title: "Midnight",
      image: "/images/card-1.png"
    },
  ];

  let itemCard = [
    {
      title: "Twister Combo",
      description: "Twister + 1 Regular fries + 1 Regular drink",
      price: "Rs 670",
      image: "/images/item-card-1.png"
    },
    {
      title: "Zinger Stacker Combo",
      description: "Zinger Stacker Combo + 1 Regular fries + 1 Regular drink",
      price: "Rs 850",
      image: "/images/item-card-2.png"
    },
    {
      title: "Crispy Duo Box",
      description: "Crispy Duo Box + 1 Regular fries + 1 Regular drink",
      price: "Rs 1250",
      image: "/images/item-card-3.png"
    },
    {
      title: "Family Festival 3",
      description: "Family Festival 3 + 1 Regular fries + 1 Regular drink",
      price: "Rs 850",
      image: "/images/item-card-2.png"
    },
  ]

  return (
    <>
      <Header />
      <Main items={menuItem} cards={itemCard}/>
      <Footer />
    </>
  );
}

export default App;
