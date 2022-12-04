import { Component } from "react";

export class ToDoList extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            todoList: []
        }
    }
onChangeEvent(e){
    this.setState({userInput: e});
    console.log(e);
}

addItem(input){
    if (input === ''){
        alert ("Please enter a task")
    } else {
        let listArray = this.state.todoList;
        listArray.push (input)
        this.setState ({todoList: listArray, userInput: ''})
        console.log(listArray);
    }
}

onFormSubmit = (event) =>{
    event.preventDefalt();
    console.log("submitted!");
}

render(){
    return(
        <div>
            <form onSubmit = {this.onFormSubmit}>

                <div className="container">
                    <input type="text"
                    placeholder="What are your plans for this year?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>

                <div>
                    <button onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>

                <ul>
                    {this.state.todoList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ul>


            </form>
        </div>
    )
}

}