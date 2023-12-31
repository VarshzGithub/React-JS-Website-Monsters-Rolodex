import { Component } from 'react';
import "./Card.style.css";

class Card extends Component{
    render(){
        const { id, name, email }=this.props.monster;
        return(
            <div className="card-conatiner"key={id}>
                <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
                </div>
        );
    }
}
export default Card;