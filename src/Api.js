import React, { Component } from 'react';

class Api extends Component {
    state = { 
        data : [],
     }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';
        
        fetch(url)
         .then(response => response.json())
          .then(result => {
              this.setState({
                  data : result,
              })
          });



    }

    render() {
        const { data } = this.state;

        const newArray = data.map((currentValue, index) => {
            return(
                <li key={index} className="list-group-item">{currentValue} <span className="badge badge-primary">14</span></li>
                
                );
        });
        return (
            <ul className="list-group">{newArray}</ul>
        );
    }
}

export default Api;