import React from "react"
import ReactDOM from "react-dom"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    items: this.props.items
  }

  addEvent(todoItem) {
    this.setState({
      items: [...this.state.items, todoItem]
    })
  }

  onClear() {
    this.setState({
      items: []
    })

    this.clearItems()
    window.TodoPlugin.props.onItemsCleared()
  }

  clearItems() {
    fetch('https://todo-backend-rails.herokuapp.com', {
      method: 'DELETE'
    })
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return (
        <li key={index}><TodoItem item={item} /></li>
      )
    })

    return (
      <div>
        <ul>{list}</ul>
        <NewTodoItem addEvent={::this.addEvent} onClear={::this.onClear} />
      </div>
    )
  }
}

class TodoItem extends React.Component {
  render(){
    return(
      <div>
        <a>{`[#${this.props.item.id}] ${this.props.item.title}`}</a>
      </div>
    )
  }
}

class NewTodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.itemName).focus()
  }

  onClear() {
    this.props.onClear()
  }

  onSubmit() {
    const input = ReactDOM.findDOMNode(this.refs.itemName)
    this.persistItem(input.value)

    input.value = ''
    window.TodoPlugin.props.onItemAdd()
  }

  persistItem(itemTitle) {
    fetch('https://todo-backend-rails.herokuapp.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: itemTitle })
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {
      this.props.addEvent(jsonData)
    })
  }

  render(){
    return(
      <div className="input-group">
        <span className="input-group-addon" onClick={::this.onClear}>x</span>
        <input className="form-control" ref="itemName" type="text" />
        <span className="input-group-addon" onClick={::this.onSubmit}>+</span>
      </div>
    )
  }
}
