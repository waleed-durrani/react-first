import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name : "",
            job : "",
        }
        
        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;
        return (
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Job:</label>
                    <input type="text" className="form-control" name="job" value={job} onChange={this.handleChange} />
                </div>
                <input type="button" value="Submit" className="btn btn-primary" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;