import { Component } from "react";
import "./CardList.style.css";
import Card from '../Card/Card.component';

class CardList extends Component{
    render(){
        const { monsters } = this.props;
        return(
            <div className="card-list"> 
            {monsters.map((monster)=>{

                return( 
                <Card monster={monster}/>
            )})}
            </div>
        );
    }
    
}
export default CardList;