import React, { Component } from 'react';
import Nav from './Nav';
import './../css/contact.css';


class Contact extends Component {

    

    render() {



        return (
            <div className="container">
                <Nav  />


                <div className="container">

                    <div className="card" id="card-body">
                        <div className="card-body">
                            <h2 className="text-center">Contact</h2>

                            <p className="text-justify">Dolor nostrud duis id ut quis dolore sunt nulla. In nisi excepteur minim veniam fugiat labore. 
                            In reprehenderit sunt proident occaecat dolor officia commodo dolor mollit ullamco.</p>
                        
                            <div className="row">

                                <div className="col-6">

                                    <form>
                                        <input type="text" name="name" placeholder="Enter your name" required/>

                                        <input type="email" name="email" placeholder="Enter your email" required />

                                        <input type="text" name="business" placeholder="Nature of Business" required />

                                        <textarea rows="6" placeholder="What can we do for you?"></textarea>

                                        <br />

                                        <button className="btn btn-outline-success">Submit</button>
                                    </form>
                                
                                </div>

                                <div className="col-6">
                                    <img src="https://cdn.dribbble.com/users/219642/screenshots/2013708/dribbble-ttms-c003.jpg" />
                                </div>    
                            
                            </div>
                        
                        </div>

                    </div>

                </div>
                    
            </div>

        );
    }
}


export default Contact;