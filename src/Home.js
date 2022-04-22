import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

  
// extending for gives access to array of menu items
class Menu extends Form {


  constructor() {
    super();
  
  };


  // method not functioning but idea is to map each delete button to an index for menu item deletion 
  removeData(index) {
    this.displayData.splice(index, 1); 

   this.setState({menuItems: this.state.displayData}); 
  }


  render() {
    return(
      <div>
        <div>
          
        </div>
        <div className="container">
            {this.displayData}
        </div>


      </div>
    );

  }
}





function Home() {

  // homepage contains all menu items, redirection to add menu items, and inline editing of current menu items

  return (
    <div>
      <h1 className="title">Restaurant Name</h1>
      <br />
      <ul className="pos">
        <div>
        <button className="options">
          <Link  className="options" to="/addfood">Add Menu Item</Link>
        </button>
        </div>
      </ul>

      <div>
        <Menu/>
      </div>

  

    </div>
  );
};

export default Home;
