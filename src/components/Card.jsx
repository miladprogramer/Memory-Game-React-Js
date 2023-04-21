import './Card.css';
import backcover from '../img/back.png';

const Card=(props)=>{

const handleClick=()=>{
    props.choiceSelect(props.card)
}
    return(
        <>
         <div className={props.flipped ? "card flipped" : "card"}>
           
    <img src={props.card.src} className='front'/>
    <img src={backcover} className='back' onClick={handleClick}/>
    </div>
        </>
    )
}
export default Card;