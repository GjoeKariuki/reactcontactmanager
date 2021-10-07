import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import {v4 as uuidv4} from 'uuid';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    }

    changeOnClick = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = {id:uuidv4(),name,email,phone};
        
        

        if (name === ''){
            this.setState({errors: {name: 'name is required'}});
            return;
        }
        if (email === ''){
            this.setState({errors: {email: 'name is required'}});
            return;
        }
        if (phone === ''){
            this.setState({errors: {phone: 'name is required'}});
            return;
        }

        dispatch({type:'ADD_CONTACT', payload: newContact});

        this.setState({name:'',email:'',phone:'', errors:''});

        this.props.history.push('/');
    }

    render() {

        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3">
                <div className="card-header">
                    <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <h3 className="display-4">Add Contacts</h3>
                            <TextInputGroup 
                            label="Name"                            
                            name="name"
                            placeholder="Enter name..."                            
                            value={name}
                            onChange={this.changeOnClick}
                            error={errors.name}
                            />
                            <TextInputGroup 
                            label="Email"
                            type="email"                            
                            name="email"
                            placeholder="Enter email..."                            
                            value={email}
                            onChange={this.changeOnClick}
                            error={errors.email}
                            />
                            <TextInputGroup 
                            label="Phone"                            
                            name="phone"
                            placeholder="Enter phone..."                            
                            value={phone}
                            onChange={this.changeOnClick}
                            error={errors.phone}
                            />           
                                                        
                            <input type="submit" value="Add contact" className="btn btn-warning mt-3"/>
                        </form>
                    </div>
                </div>                
            </div>

                    );
                }}
            </Consumer>
        );

    }
}


export default AddContact;