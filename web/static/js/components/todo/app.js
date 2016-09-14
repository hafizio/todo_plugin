import React from "react"
import ReactDOM from "react-dom"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  state = {
    items: this.props.items
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return <li key={index}><TodoItem item={item} /></li>;
    })

    return(
      <div>
        <ul>{list}</ul>
        <NewTodoItem addEvent={this.addEvent} onClear={this.onClear} />
      </div>
    );
  }

  addEvent(todoItem) {
    this.setState({
      items: [...this.state.items, todoItem.newItem]
    });
  }

  onClear() {
    this.setState({
      items: []
    })
  }
}

class TodoItem extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.item}</p>
      </div>
    )
  }
}

class NewTodoItem extends React.Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }

  render(){
    return(
      <div>
        <input ref="itemName" type="text" />
        <a type="submit" onClick={this.onSubmit}>Add</a>
        <a onClick={this.onClear}>Clear</a>
      </div>
    )
  }

  onClear() {
    console.log("cleared")
    this.props.onClear()
  }

  onSubmit() {
    var input = ReactDOM.findDOMNode(this.refs.itemName)
    var newItem = input.value;
    this.props.addEvent({ newItem });
    input.value = '';
  }
}
