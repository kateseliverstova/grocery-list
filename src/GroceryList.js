import { Component } from 'react';
import Check from './check.png'

export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            groceryList: [],
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if(input === '') {
            alert('Please add an item')
        }
        else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
    }}

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }

    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (

            <div>

                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                    <input type= 'text' 
                    placeholder = 'What do you want to buy?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>

                <div className='container'>
                    <button onClick = {() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                </div>

                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            <img src={Check} width="40px" alt='checkmark'/>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className='container'>
                    <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                </div>
                </form>
            </div>
    
        )
    }
}