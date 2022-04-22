import React from "react";

function Delete() {

    // pop up for menu item deletion
    return (
        <div>
            <div className="popUp">
                <form>
                    <h2>Delete this Menu Item?</h2>
                    <input class="y" type="submit" value="Yes"/>
                    <br/>
                    <br/>
                    <input class="n" type="submit" value="No"/>
                </form>
            </div>
        </div>
    ); 
}

export default Delete; 