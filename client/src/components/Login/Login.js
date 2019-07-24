import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import API from '../../utils/API';
import { Link } from 'react-router-dom';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: ""
        }
        this.handleChange.bind(this);
        this.send.bind(this);
    }
    send = event => {
        if(this.state.email.length === 0){
            return;
        }
        if(this.state.password.length === 0){
            return;
        }
        let self = this;
        API.login(this.state.email, this.state.password).then(function(data){
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('login', self.state.email);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    }    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    render() {
        return(
            <div className="Login">
            <h1 style={{ textAlign: "center" }}>Pokemon Team Builder</h1>
                <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
                </FormGroup>
                <Button className="btn btn-primary"
                onClick={this.send}
                block
                bsSize="large"
                type="submit"
                >
                Connexion
                </Button>
                <Link to="/signup" className="btn btn-link">Don't have an account yet</Link>
            </div>
        )
    }
}