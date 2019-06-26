import React, { Component } from 'react';
import "../App.css";

class Weather extends Component {
    render() {
        return (
            <div className="response">
                {this.props.city && this.props.country && <p>{this.props.city}, {this.props.country}</p>}
                
                {this.props.temp && <p>{this.props.temp} °C</p>}
                
                {this.props.humidity && <p>{this.props.humidity}%</p>}
   
                {this.props.desc && <p>{this.props.desc}</p>}
                
                {this.props.err && !(this.props.city && this.props.country) && <p><i>Hiba</i>: {this.props.err}</p>}
            
                {!this.props.country && !this.props.city && !this.props.err && <p id="special">Írd be a várost és az országot (pl: budapest - hu)</p>}
            </div>
        );
    }
}

export default Weather;