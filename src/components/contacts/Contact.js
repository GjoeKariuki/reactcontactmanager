import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Consumer} from '../../context'; 


class Contact extends Component {

    state = {
        showContactInfo: false,
    }

   
    showOnClick = (e) => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }

    deleteOnClick = (id, dispatch) => {
        dispatch({type:'DELETE_CONTACT', payload: id})
        
    }

    render() {

        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                { value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                <h4>{name} 
                <i onClick={this.showOnClick} className="fas fa-sort-down" style={{ cursor: 'pointer', paddingLeft: '10px'}}/>
                <i className="fas fa-times" style={{ cursor:'pointer', float:'right', color:'red', paddingRight: '10px'}} onClick={this.deleteOnClick.bind(this, id, dispatch)} />
                <Link to={`contact/edit/${id}`}>
                    <i className="fas fa-pencil-alt" style={{cursor:'pointer', float:'right', color:'blue',marginRight:'1rem'}}></i>
                </Link>
                </h4>
                { showContactInfo ? <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul> : null}
                
            </div>
                    )
                }}
            </Consumer>
            
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    
}

export default Contact;



 // static propTypes = {
    //     name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired,
    // }

    // this.props.deleteClickHandler();
    // deleteClickHandler: PropTypes.func.isRequired,