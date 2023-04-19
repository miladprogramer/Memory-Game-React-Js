import './Card.css';
import backcover from '../img/back.png';

const Card=(props)=>{

const handleClick=()=>{
    props.choiceSelect(props.card)
}
    return(
        <>
         <div className='card'>
           
    <img src={props.card.src}/>
    <img src={backcover} onClick={handleClick}/>
    </div>
        </>
    )
}
export default Card;