import React, { Component } from 'react';
import Nav from './Nav';

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <Nav />

                <div className="container">
                    
                    <div className="card" id="card-body">
                        <div className="card-body">
                            <h2 className="text-center">Portfolio</h2>

                            <p className="text-justify">Dolor nostrud duis id ut quis dolore sunt nulla. In nisi excepteur minim veniam fugiat labore. 
                            In reprehenderit sunt proident occaecat dolor officia commodo dolor mollit ullamco.</p>
                        </div>

                        <div className="row" id="tiles">

                                <div className="col-sm-4">
                                    <a href="#">
                                        <div>
                                            <h5>First Project</h5>
                                            <p>Lorem Ipsum Dolore epum fasjc comer</p>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="col-sm-4">
                                    <a href="#">
                                        <div>
                                            <h5>Second Project</h5>
                                            <p>Lorem Ipsum Dolore epum fasjc comer</p>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="col-sm-4">
                                    <a href="#">
                                        <div>
                                            <h5>Third Project</h5>
                                            <p>Lorem Ipsum Dolore epum fasjc comer</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-sm-4">
                                    <a href="#">
                                        <div>
                                            <h5>Fourth Project</h5>
                                            <p>Lorem Ipsum Dolore epum fasjc comer</p>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="col-sm-4">
                                    <a href="#">
                                        <div>
                                            <h5>Fifth Project</h5>
                                            <p>Lorem Ipsum Dolore epum fasjc comer</p>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="col-sm-4">
                                    <a href="#">
                                        <div>
                                            <h5>Sixth Project</h5>
                                            <p>Lorem Ipsum Dolore epum fasjc comer</p>
                                        </div>
                                    </a>
                                </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


export default Portfolio;