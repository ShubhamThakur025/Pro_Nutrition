import React from "react";
import Search from "./Components/search";
import Data from '../resources/FoodData'
import Foodbox from "./Components/Foodbox";
import "./App.css"
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput : ""
    }
  }
  handleSearch= (e) => {
    this.setState({
      searchInput : e.target.value
    })
  }
  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        {
          Data.filter((val) => {
            if(this.state.searchInput === ""){
              return val;
            }
            else if (val.name.toLowerCase().includes(this.state.searchInput.toLowerCase())){
              return val;
            }
          }).map((food) => {
            return(
              <div key={food.id}>
                <Foodbox food = {food}/>
              </div>
            )
          })
        }

      </div>
    )
  }
}