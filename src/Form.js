import React, {useState} from 'react';
import Food from './menuItem';
import './App.css'; 



class Form extends React.Component {

  
    
    constructor() {
      super();

      // array containing all menu items with details as props

      this.displayData = [<Food name="Burger" price="$4.45" source="/burger.jpg" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt in est et auctor"/>
    , <Food name="Fries" price="$2.20" source="/fries.jpg" desc="Ut vehicula, orci in semper tempor, elit ante fringilla nibh."/>, 
    <Food name="Pizza" price="$10.21" source="/pizza.jpg" desc="Suspendisse fringilla lacinia placerat. Integer vehicula lobortis feugiat."/>]; 

      this.state = {

        menuItems: this.displayData
        
      }

      this.appendData = this.appendData.bind(this);


    };

    


  appendData() {

        // add to list and update state

        this.displayData.push(<Food/>); 

   
        this.setState({menuItems: this.state.displayData}); 
        
      }
  


  render() {

    // form that takes in necessary attributes of menu item and adds it to array
    return (
          <div>

            <div >

              <h1 className="title">New Menu Item</h1>
              <form action="/">
              <ul className="in">

                <li>
                <input className="txt" type="text" placeholder="Title"/>
                </li>

                <li>
                <input className="txt" type="text" placeholder="Image URL"/>
                </li>

                <li>
                <input className="txt" type="text" placeholder="Price" />
                </li>

                <li>
                <input className="desc" type="text" placeholder="Description"/>
                </li>

                <li>
                <input className="subm" type="submit" onClick={this.appendData} value="Add To Menu"/>
                </li>
              </ul>
              </form>

       


         
             </div>



          </div>
      );
  }
}


export default Form;
