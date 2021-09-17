import "./App.css";
import FruitContainer from "./FruitContainer";
import VegetableContainer from "./VegetableContainer";
import MeatContainer from './MeatContainer';
import SweetContainer from './SweetContainer';
import DrinkContainer from "./DrinkContainer";
import ChipContainer from "./ChipContainer";
import SeafoodContainer from "./SeafoodContainer";
import SoupContainer from "./SoupContainer";

function App() {
  const fruitArr = [
    "Apple 🍎",
    "Banana 🍌",
    "Grapes 🍇",
    "Kiwi 🥝",
    "Pineapple 🍍",
    "Dragonfruit 🍈",
    "Mango 🥭",
  ];
  const vegetableArr = [
    "Lettuce 🥬",
    "Bell Pepper 🫑",
    "Cucumber 🥒",
    "Eggplant 🍆",
    "Broccoli 🥦",
    "Tomato 🍅",
    "Onion 🧅",
    "Garlic 🧄",
    "Pepper 🌶",
  ];
  const meatArr = ["Beef 🥩", "Chicken 🍗", "Pork 🐷", "Hot Dog 🌭",];
  const sweetArr = [
    "Ice Cream 🍨",
    "Cake 🍰",
    "Chocolate 🍫",
    "Lollipop 🍭",
    "Donut 🍩",
    "Cookie 🍪",
  ];
  const drinkArr = ["Scotch 🥃", "Wine 🍷", "Champagne 🍾", "Beer 🍺", "Margarita 🍹", "Martini 🍸", "Boba 🧋", "Milk 🥛", "Coffee ☕️", "Tea 🫖", "Sprite 🥤",];

  const chipArr = ["Potato Chips 🥔", "Cheetos 🧀", "Doritos 🍕", "Funyuns 🧅", "Sun Chips ☀️",];

  const seafoodArr = ["Shrimp 🦐", "Crab 🦀", "Lobster 🦞", "Fish 🐟", "Octopus 🐙", "Squid 🦑",];

  const soupArr = ["Corn Chowder 🌽", "Clam Chowder 🦪", "Tomato 🍅", "Shrimp 🦐", "Crab 🦀", "Lobster Bisque 🦞", "Fish 🐟", "Octopus 🐙", "Squid 🦑",];


  return (
    <div className="foodsList">
      <FruitContainer fruits={fruitArr} />
      <VegetableContainer vegetables={vegetableArr} />
      <MeatContainer meats={meatArr} />
      <SweetContainer sweets={sweetArr} />
      <DrinkContainer drinks={drinkArr} />
      <ChipContainer chips={chipArr} />
      <SeafoodContainer seafoods={seafoodArr} />
      <SoupContainer soups={soupArr} />
    </div>
  );
}

export default App;
