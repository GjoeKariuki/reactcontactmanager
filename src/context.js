import React, { Component } from 'react'
import {v4 as uuidv4}  from 'uuid';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
            
        default:
            return state;
         
    }
}

export class Provider extends Component{
    state = { 
        contacts: [
            {
                id: uuidv4(),
                name: "Shakes Makena",
                email: "shakes@supastrikas.com",
                phone: "111-222-1221"
            },
            {
                id: uuidv4(),
                name: "El Matador",
                email: "matador@supastrikas.com",
                phone: "111-222-2121"
            },
            {
                id: uuidv4(),
                name: "Dancing Rasta",
                email: "Drasta@supastrikas.com",
                phone: "444-344-3344"
            }],
            dispatch: action => {
                this.setState(state => reducer(state, action))
            }
        }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer;
