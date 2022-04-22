import React from "react";
import  './App.css'; 
import Delete from "./Deletion";

function Food(props) {

    // use to display menu item deletion confirmation
    const [pop, setPop] = React.useState(false)
    const onClick = () => setPop(true)

    
    // individual menu items taking prop names for title, image, description, price
    return (

        
        <div>

        
        <div className="itemCard" >

            <div className="remove"><button className="rem" onClick={onClick} >Delete</button></div>
            {pop ? <Delete/> : null}
            <div className="itemName"><input type="text" class="foodTxt" placeholder={props.name} /></div>
            <div className="itemImage"><img className="editIMG" alt="hi" src={props.source}/>
                                        
                                        <input type="text" class={props.name} placeholder="New Image URL"/>
            </div>
            <div className="itemPrice"><input type="text" class="priceTxt" placeholder={props.price}/></div>
            <div className="itemDesc"> 

            <h3>Description</h3>

            <textarea className="descTxt">{props.desc}</textarea>
            </div> 
        </div>

        </div>
    );
}



export default Food;
