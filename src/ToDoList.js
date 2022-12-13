import { Component } from "react";
import check from './verified.png';
import trash from './bin.png';


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

crossedWord(e){
    const li = e.target;
    li.classList.toggle ('crossed');
}

deleteTask(e){
    const apple = e.target;
    apple.classList ('deleted');
}

onFormSubmit = (event) =>{
    event.preventDefault();
    console.log("submitted!");
}

render(){
    return(
        <div>
            <form onSubmit = {this.onFormSubmit}>
                <div className="container">
                <div>
                    <input type="text"
                    className="inputField"
                    placeholder="What are your plans for this year? Type here..."
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>

                <div>
                    <button className="btn" onClick={() => this.addItem(this.state.userInput)}>➕</button>
                </div>
                </div>
                <ul>
                    {this.state.todoList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img className="check" src={check} width="30px" alt="check"/>
                                {item}
                                <img className="trash" onClick={this.deleteTask} key={index} src={trash} width="30px" alt="trash"/>
                            </li>
                        ))}
                </ul>


            </form>
        </div>
    )
}

}