import React from 'react'
import TodoItem from './TodoItem'

class Todo extends React.Component {
    state = {
        elementsList: [
            {id: '10', isComplited: false, title: 'Czosnek'},
            {id: '12', isComplited: false, title: 'Cebula'},
        ],
        inputValue: ''
    }

    mark(id) {
        const index = this.state.elementsList
            .findIndex(x => x.id === id)


        const newElements = this.state.elementsList
        newElements[index].isComplited = true

        this.setState({ elements:newElements})
    }

    addItem(){
        // add Product
        const item = {
            id: Math.random(),
            title: this.state.inputValue,

        }
        const newElements = [item, ...this.state.elements]
        this.setState({elements: newElements})

    }

    inputHandler(event){
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }

   render () {
        const elements = this.state.elementsList.map( e => {
            return <TodoItem  element={e} markClicked={this.mark.bind(this)} />
        })
       return (
           <div>
               Lista Zakupów
               <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind.this}/>
               <button onClick={this.addItem.bind(this)}>Dodaj do listy zakupów</button>
               {elements}
           </div>
       )
   }
}

export default Todo