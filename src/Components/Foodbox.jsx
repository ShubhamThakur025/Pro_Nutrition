import React, { Component } from 'react';
import Total from './total';
export default class Foodbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            calories: 0
        };
    }

    handleChange = (e) => {
        this.setState({
            counter: e.target.value,
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            calories: this.props.food.cal * this.state.counter
        });
    }

    handleReset = () => {
        this.setState({
            counter: 0,
            calories: 0
        });
    }

    render() {
        const { food } = this.props;
        return (
            <div className="foodItem">
                <div className="food-card">
                    <img src={food.img} alt="" className="food-Img" />
                    <div className="info">
                        {food.name}
                        <div>{food.cal}</div>
                    </div>
                    <div className="input-btn">
                        <input type="number" className="inputNumber" placeholder='Enter a number here' onChange={this.handleChange} />
                        <button className="btn" onClick={this.handleClick}>+</button>

                    </div>
                </div>

                <Total name={food.name} calories={this.state.calories} count={this.state.counter} />
                <button className="reset-btn" onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
