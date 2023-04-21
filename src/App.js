
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
const [disabled,setDisabled]=useState(false);

  const cardImages = [
    { "src": helmet , matched:false},
    { "src": potion,  matched:false},
    { "src": ring , matched:false},
    { "src": scroll , matched:false},
    { "src": shield , matched:false},
    { "src": sword,  matched:false}
  ]

  const shaflleCard=()=>{
    const shaflleCards=[...cardImages,...cardImages]
    .sort(() => Math.random() -0.5)
    .map((card) =>(
   { ...card,id:Math.random()}
    ))

    setCards(shaflleCards);

    setTurn(0)
    // console.log(cards)
  }

  const choiceSelect=(card)=>{
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  }

  useEffect(() => {
    if(choiseOne && choiseTwo){
      if(choiseOne.src===choiseTwo.src){
console.log("Matched")
setCards(prevCards =>{
  return prevCards.map(card =>{
    if(card.src===choiseOne.src){
return {...card,matched:true}

    }else{
      return card;
    }
  })
  
})

resetChoise()
      }else{
        setTimeout(()=> resetChoise(),1000)
      }
    }
  }, [choiseOne,choiseTwo]);

  console.log(cards)
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
  
   <Card key={card.id} card={card} choiceSelect={choiceSelect}
    flipped={card===choiseOne || card===choiseTwo || card.matched}/>
   
  )
))}


</div>

<p>Turn: {turn}</p>
    </div>
    </>
    
  );
}

export default App;
