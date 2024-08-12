import React,{useState} from "react";
function ToDoList(){


    const [tasks,setTasks] = useState([])
    
    function addTasks(){
        const newTask = document.getElementById("inp").value
        document.getElementById("inp").value=""

        if(newTask===""){
            alert("u goin to add nothing??")

        }else{
            setTasks((t)=>[...t,newTask])

        }
    }
    function deleteTasks(index){
        setTasks(
            tasks.filter((_,i)=>{
                return i!=index
            }
    
            )

        )
       

    }

    function goUp(index){
        const updatedTasks = [...tasks]
        if(index>0){
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]

            setTasks(
                (t)=>updatedTasks
             )
        }
    
    
        


    }
    function goDown(index){
        const updatedTasks = [...tasks]
        if(index<tasks.length-1){
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]]
            setTasks(
                (t)=>updatedTasks
             )
        }
    
    
        

    }
    

    return(
        <div className="container">
            <h1>To Do List</h1>

            <div className="inp">
                <input type="text" id="inp" placeholder="Enter your task"/>
                <button id="addo" onClick={addTasks}>Add!</button>
            </div>

            <ul>
                {tasks.map((element,index)=>{
                    return <div className="added">
                                
                                <li key={index}>{element}
                                <div className="but">
                                <button id="delete" onClick={()=>deleteTasks(index)}>Delete</button>
                                <button id="up" key={index} onClick={()=>goUp(index)}>👆</button>
                                <button id="down" key={index} onClick={()=>goDown(index)}>👇</button>
                                </div>
                                </li>
                            
                            </div> 
                }

                )}
            </ul>



        </div>
    )
}
export default ToDoList