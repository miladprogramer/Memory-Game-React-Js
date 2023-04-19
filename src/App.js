
import { useState, useEffect } from 'react';
import './App.css';
import helmet from './img/helmet.png';
import ring from './img/ring.png';
import scroll from './img/scroll.png';
import sword from './img/sword.png';
import shield from './img/shield.png';
import potion from './img/potion.png';

import Card from './components/Card';
function App() {

const [cards,setCards]=useState([]);
const [choiseOne,setChoiseOne]=useState(null);
const [choiseTwo,setChoiseTwo]=useState(null);
const [turn,setTurn]=useState(0);

  const cardImages = [
    { "src": helmet},
    { "src": potion},
    { "src": ring},
    { "src": scroll},
    { "src": shield},
    { "src": sword}
  ]

  const shaflleCard=()=>{
    const shaflleCards=[...cardImages,...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) =>(
   { ...card,id:Math.random()}
    ))

    setCards(shaflleCards);
    // console.log(cards)
  }

  const choiceSelect=(card)=>{
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  }

  useEffect(() => {
    if(choiseOne && choiseTwo){
      if(choiseOne.src===choiseTwo.src){
console.log("Matched")
resetChoise()
      }else{
        console.log("Not Matched")
        resetChoise()
      }
    }
  }, [choiseOne,choiseTwo]);

  const resetChoise=()=>{
    setChoiseOne(null)
    setChoiseTwo(null)
    setTurn(pervTurn =>pervTurn+1)
  }
  return (
    <>
    <div className="App">
    <h1>Memory Game</h1>

    <button onClick={shaflleCard}>New Game</button>
    

<div className='card-grid'>
{cards.map(card=>(
  (
  
   <Card key={card.id} card={card} choiceSelect={choiceSelect}/>
   
  )
))}


</div>


    </div>
    </>
    
  );
}

export default App;
