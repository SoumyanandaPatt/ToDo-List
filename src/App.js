import React, { useState } from 'react';
import ToDoList from './ToDoList';
import "./index.css";

const App = () =>
{


    // Using React Hook: Declaring state variables (useState: initial Data, inputList: Current Data , setInputList: Updated data )
    const[inputList, setInputList] = useState("");

    
    const[items, setItems] = useState([]);


    
    const itemEvent = (e) =>{
        setInputList(e.target.value);
    };
   
    const listOfItems = () =>
    {
        setItems((oldItems) =>
        {

            return(
                [...oldItems, inputList]
            );
        }
        );
            setInputList("");
    };
    return(
        <div className = "main_div">
            <div className = "center_div"> <br/>
                <h1> To-Do List</h1> <br/>
                <input type="text" placeholder="Type here"
                        value = {inputList}
                        onChange = {itemEvent} />
                <button className="add_button" onClick={listOfItems}> + </button>
            
                    <ol>        
                        {
                                              
                             items.map((itemsValue) =>
                                {
                                    return(
                                        <ToDoList text={itemsValue}/>
                                        )
                                }
                                )
                                            
                        }
                   </ol>

            </div>
        </div>
    );
};
export default App;