// bobux
import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

import InputForm from "./InputForm";

import List from './List';

import SearchForm from "./SearchForm"

import DeleteSearch from "./DeleteSearch";

import CheckedDelete from "./CheckedDelete";

class App extends Component {
  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      list: [],
      pendingItem:""
    };
  }

  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
          x:0,
          y:0,
          z:0,
          check: false,
          highlight: false
        },
        ...this.state.list
      ],
      pendingItem:""
    });
    console.log(this.state.list);
  };

  newItemSubmitHandler2 = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.map(item => {
        if(this.state.pendingItem2.toLowerCase().trim() === item.name.toLowerCase().trim()) {
          return {...item, highlight: true};
        }
        else {
          return {...item, highlight: false}
        }
      })
    });
    console.log(this.state.list[0]);
  };


  DeleteSearchHandler = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.map(item => {
        return {...item, highlight: false}
      })
    });
    console.log(this.state.list[0]);
  };

  handleItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  }

  handleItemInput2 = e => {
    this.setState({
      pendingItem2: e.target.value
    });
  }

  handlecRemove = e => {
    const newState = this.state.list.filter(item => item.check !== true);
    this.setState({
      list: newState
    });
  }

  handleRemove = index => {
    const newState = this.state.list.filter(item => this.state.list.indexOf(item) !== index);
    this.setState({
      list: newState
    });
  };

  /*handleRemove2 = index => {
    list: this.state.list.map(item => {
      if(box === 'checked') {
      }
    })
  });*/

  deleteall = e => {
    e.preventDefault();
    this.setState({
      list: []
    });
  };

  handleCheck = index => {
    var newlist = this.state.list;
    newlist[index].check = !newlist[index].check;
    this.setState({
      list: newlist
    });
  };

  /*handleSearch = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.map(item => {
        if(this.pendingItem2 === item.name) {
          return {...item, highlight: !item.highlight};
        }
        return item;
      })
    });
    console.log(this.state.list[0]);
  }*/

  render() {
    return (
      <div className="wrapper">
        <InputForm
        newItemSubmitHandler = {this.newItemSubmitHandler}
        handleItemInput = {this.handleItemInput}
        pendingItem = {this.state.pendingItem}
        />

        <SearchForm
        newItemSubmitHandler2 = {this.newItemSubmitHandler2}
        handleItemInput2 = {this.handleItemInput2}
        pendingItem2 = {this.state.pendingItem2}
        />

        <DeleteSearch
        DeleteSearchHandler = {this.DeleteSearchHandler}
        />

        <button onClick={this.handlecRemove}>
          Delete Checked
        </button>

        <List list = {this.state.list}
        handleRemove = {this.handleRemove}
        handleCheck = {this.handleCheck}
        />

        <button onClick={this.deleteall}>
          Delete All
        </button>

      </div>
    );
  }
}

export default App;
