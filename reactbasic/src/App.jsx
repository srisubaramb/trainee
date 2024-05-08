import Pokemon from "./Pokemon";
import DoubleDice from "./DoubleDice";
import ColorList from "./ColorList";
import Poker from "./Poker";
import ShoppingList from "./ShoppingList";
import AirBnb from "./AirBnb";
export default function App()
{
    const data1 = [
      {id:1,name : "egg",quantity : 3 , status : true},
      {id:2,name: "milk" ,quantity:4,status : false},
      {id:3,name:"oil",quantity:5,status:false}
    ];
    const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
  return (
    <div className="appclass">
      <Pokemon/>
      <DoubleDice/>
      <ColorList colors={['green','black','blue']}/>
      <Poker val1= '🍅' val2= '🍅' val3='🍅' />
      <Poker val1='🌽' val2='🍔' val3='🍅'/>
      <ShoppingList data={data1}/>
      <h2>AirBnb</h2>
      <AirBnb properties = {properties}/>
     </div>
  )
}