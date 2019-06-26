import React, { Component } from 'react';
import "../App.css";

class Forms extends Component {
    render() {
        return (
            <div className="inputField">
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Város"/>
                <input type="text" name="country" placeholder="Ország" />
                <button>Mehet</button>
            </form>
            </div>
        );
    }
}

export default Forms;