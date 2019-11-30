import React, { Component } from 'react';
import Header from "./Header";
import Table from "./Table";
import Form from './Form';
import Api from './Api';



class App extends Component {
    
    state = {
        characters : [],
    }

    handleSubmit = character => {
        this.setState({
            characters : [...this.state.characters, character],
        })
    }
    

    removeCharacter = index => {
        const { characters, removeCharacter } = this.state;
        
        this.setState({
            characters : characters.filter((character, i) => {
                return i !== index
            })
        });
    }
    
    render() {
        const { characters } = this.state;
        return (
            <div className="container-fluid">
                <Header />
                <div className="container">
                    <Table characterData={characters} removeCharacter= {this.removeCharacter} />
                    <Form handleSubmit={this.handleSubmit} />
                    <br />
                    <br />
                    <Api />
                </div>
            </div>
        );
    }
}

export default App;