import React, { Component, createRef } from 'react'

class AddContact extends Component {
    constructor() {
        super();

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
    }

    static defaultProps = {
        name: "nigga please",
        email: "ngplease@bing.com",
        phone: "000-000-0000"
    }

    render() {

        const { name, email, phone } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    placeholder="Enter name..."
                                    className="form-control form-control-lg"
                                    defaultValue={name}
                                    ref={this.nameInput}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="Enter email..."
                                    className="form-control form-control-lg"
                                    defaultValue={email}
                                    ref={this.emailInput}
                                    />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input 
                                    type="text"
                                    name="phone"
                                    placeholder="Enter phone..."
                                    className="form-control form-control-lg"
                                    defaultValue={phone}
                                    ref={this.phoneInput}
                                    />
                            </div>
                            <input type="submit" value="Add contact" className="btn btn-block btn-secondary"/>
                        </form>
                    </div>
                </div>                
            </div>
        )
    }
}


export default AddContact;