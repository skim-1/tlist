// bobux
import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";

import InputForm from "./InputForm";

import List from './List';

import SearchForm from "./SearchForm"

import DeleteSearch from "./DeleteSearch";

import EditItem from "./EditItem";

class App extends Component {
  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      list: [],
      pendingItem: "",

      /*
      pendingItemx: 0,
      pendingItemy: 0,
      pendingItemz: 0,
      pendingItem2x: 0,
      pendingItem2y: 0,
      pendingItem2z: 0,
      pendingEditx: 0,
      pendingEdity: 0,
      pendingEditz: 0,
       */
      pendingEdit: {
        x: '',
        y: '',
        z: '',
      },

      pendingItemc: {
        x: '',
        y: '',
        z: '',
      },

      pendingItem2: {
        x: '',
        y: '',
        z: '',
      },
      showEdit: false
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
          coords: {
            x:this.state.pendingItemc.x,
            y:this.state.pendingItemc.y,
            z:this.state.pendingItemc.z,
          }
        },
        ...this.state.list
      ],
      pendingItemc: {
        x:"",
        y:"",
        z:"",
      },

      pendingItem:""
    });
    console.log(this.state.pendingItem);
  };

  newItemSubmitHandler2 = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.map(item => {
        if(this.state.pendingItem2.x === item.x && this.state.pendingItem2.y === item.y && this.state.pendingItem2.z === item.z) {
          return {...item, highlight: true};
          console.log("working");
        }
        else {
          return {...item, highlight: false}
        }
      }),
      pendingItem2: {
        x:"",
        y:"",
        z:"",
      },
    });
  };

  editHandler = e => {
    e.preventDefault();
    const newState = this.state.list;

    for(let i = 0; i < newState.length; i++) {
      if(newState[i].highlight) {
        newState[i].x = this.state.pendingEdit.x;
        newState[i].y = this.state.pendingEdit.y;
        newState[i].z = this.state.pendingEdit.z;
      }
    }

    this.setState({
      list: newState
    });
  }

  handleEditClick = index => {
    const newState = this.state.list;

    /*
    newState.forEach(item=>{
      item.highlight = false;
    })
    */
    let isHighlighted = false
    if(newState[index].highlight) {
      isHighlighted = true
    }

    for(let i = 0; i < newState.length; i++) {
      newState[i].highlight = false;
    }

    newState[index].highlight = !isHighlighted;

    this.state.showEdit = newState[index].highlight;

    this.setState({
      list: newState,
      pendingEdit: {
        x: newState[index].coords.x,
        y: newState[index].coords.y,
        z: newState[index].coords.z
      },
    });
  }

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
    let value = e.target.value
    let type = e.target.placeholder;
    if (type == "Item")
      this.setState({
        pendingItem: e.target.value
      });
    if (type == "x")
      this.setState(prevState => ({
        pendingItemc : {
          ...prevState.pendingItemc,
          x: value
        }
      }));

    if (type == "y")
      this.setState(prevState => ({
        pendingItemc : {
          ...prevState.pendingItemc,
          y: value
        }
      }));

    if (type == "z")
      this.setState(prevState => ({
        pendingItemc : {
          ...prevState.pendingItemc,
          z: value
        }
      }));
  }

  handleItemInputx = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingItemc : {
        ...prevState.pendingItemc,
        x: value
      }
    }));
  }

  handleItemInputy = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingItemc : {
        ...prevState.pendingItemc,
        y: value
      }
    }));
  }

  handleItemInputz = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingItemc : {
        ...prevState.pendingItemc,
        z: value
      }
    }));
  }

  handleItemInput2x = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingItem2 : {
        ...prevState.pendingItem2,
        x: value
      }
    }));
  }

  handleItemInput2y = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingItem2 : {
        ...prevState.pendingItem2,
        y: value
      }
    }));
  }

  handleItemInput2z = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingItem2 : {
        ...prevState.pendingItem2,
        z: value
      }
    }));
  }

  handleItemEditx = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingEdit : {
        ...prevState.pendingEdit,
        x: value
      }
    }));
  }

  handleItemEdity = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingEdit : {
        ...prevState.pendingEdit,
        y: value
      }
    }));
  }

  handleItemEditz = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      pendingEdit : {
        ...prevState.pendingEdit,
        z: value
      }
    }));
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
        pendingItemc = {this.state.pendingItemc}
        />

        <SearchForm
        newItemSubmitHandler2 = {this.newItemSubmitHandler2}
        handleItemInput2x = {this.handleItemInput2x}
        handleItemInput2y = {this.handleItemInput2y}
        handleItemInput2z = {this.handleItemInput2z}
        handleItemInput2z = {this.handleItemInput2z}
        pendingItem2 = {this.state.pendingItem2}
        />

        <EditItem

            showEdit = {this.state.showEdit}
            editHandler = {this.editHandler}
            handleItemEditx = {this.handleItemEditx}
            handleItemEdity = {this.handleItemEdity}
            handleItemEditz = {this.handleItemEditz}
            pendingEdit = {this.state.pendingEdit}
        />

        <DeleteSearch
        DeleteSearchHandler = {this.DeleteSearchHandler}
        />

        <List list = {this.state.list}
        handleRemove = {this.handleRemove}
        handleCheck = {this.handleCheck}
        handleEditClick = {this.handleEditClick}
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
