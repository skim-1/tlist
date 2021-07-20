// bobux
import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

import InputForm from "./InputForm";

import List from './List';

import SearchForm from "./SearchForm"

import DeleteSearch from "./DeleteSearch";

class App extends Component {
  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      list: [],
      pendingItem: ""
    };
  }

  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name:this.state.pendingItem,
          check: false,
          highlight: false,
          x:this.state.pendingItemx,
          y:this.state.pendingItemy,
          z:this.state.pendingItemz,
        },
        ...this.state.list
      ],
      pendingItemx:"",
      pendingItemy:"",
      pendingItemz:"",
      pendingItem:""
    });
    console.log(this.state.pendingItem);
  };

  newItemSubmitHandler2 = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.map(item => {
        if(this.state.pendingItem2x === item.x && this.state.pendingItem2y === item.y && this.state.pendingItem2z === item.z) {
          return {...item, highlight: true};
          console.log("working");
        }
        else {
          return {...item, highlight: false}
        }
      }),

      pendingItem2x:"",
      pendingItem2y:"",
      pendingItem2z:"",
    });
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

  handleItemInputx = e => {
    this.setState({
      pendingItemx: e.target.value
    });
  }

  handleItemInputy = e => {
    this.setState({
      pendingItemy: e.target.value
    });
  }

  handleItemInputz = e => {
    this.setState({
      pendingItemz: e.target.value
    });
  }

  handleItemInput2x = e => {
    this.setState({
      pendingItem2x: e.target.value
    });
  }

  handleItemInput2y = e => {
    this.setState({
      pendingItem2y: e.target.value
    });
  }

  handleItemInput2z = e => {
    this.setState({
      pendingItem2z: e.target.value
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
        pendingItem = {this.pendingItem}
        handleItemInputx = {this.handleItemInputx}
        pendingItemx = {this.state.pendingItemx}
        handleItemInputy = {this.handleItemInputy}
        pendingItemy = {this.state.pendingItemy}
        handleItemInputz = {this.handleItemInputz}
        pendingItemz = {this.state.pendingItemz}
        />

        <SearchForm
        newItemSubmitHandler2 = {this.newItemSubmitHandler2}
        handleItemInput2x = {this.handleItemInput2x}
        pendingItem2x = {this.state.pendingItem2x}
        handleItemInput2y = {this.handleItemInput2y}
        pendingItem2y = {this.state.pendingItem2y}
        handleItemInput2z = {this.handleItemInput2z}
        pendingItem2z = {this.state.pendingItem2z}
        />

        <DeleteSearch
        DeleteSearchHandler = {this.DeleteSearchHandler}
        />

        <List list = {this.state.list}
        handleRemove = {this.handleRemove}
        handleCheck = {this.handleCheck}
        />

        <button onClick={this.handlecRemove}>
          Delete Checked
        </button>

        <br/>

        <button onClick={this.deleteall}>
          Delete All
        </button>

      </div>
    );
  }
}

export default App;
