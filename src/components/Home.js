import React, { Component } from 'react';
import './../css/home.css';



class Home extends Component {
  render() {
    return (
        
        <div className="card">
            <div className="card-body">
                <h2 className="text-center">Home</h2>

                <p className="text-justify">Dolor nostrud duis id ut quis dolore sunt nulla. In nisi excepteur minim veniam fugiat labore. 
                In reprehenderit sunt proident occaecat dolor officia commodo dolor mollit ullamco.</p>
            </div>

            <div className="row text-center" id="info">

                    <div className="col-sm-6">

                        <ul id="listed">
                            <li>Usman Ali</li>
                            <li>Front-end Web Developer</li>
                            <li>Electrical Engineer</li>
                            <li>Traveller</li>
                        </ul>
                    
                    </div>

                    <div className="col-sm-6" >
                    
                         <img id="profile-pic" src="https://avatars1.githubusercontent.com/u/19556768?s=460&v=4" alt="Usman Ali" className="img-thumbnail" />

                    </div>

            </div>
        </div>

        


    );
  }
}

export default Home;
