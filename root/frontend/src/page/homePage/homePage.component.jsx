import React, { Component } from 'react';
import Header from '../../component/homePageElements/header/header.component';
import './homePage.styles.css';


class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }

    }


    render(){
        return(
            <div className= "">
                <Header/>
                <section>
                    <div>
                        <h1>INTERNATIONAL CONFERENCE FOR APPLICATION FRAMEWORKS</h1>
                        <h1>2021</h1>

                    </div>
                    <div className= "home-about">
                        <h1>About ICAF</h1>
                        <p></p>
                    </div>
                    <div className = "home-parallax"/>
                    <div className = "home-speakers">
                        <h1>Keynote Speakers</h1>
                    </div>
                    <div className = "home-parallax"/>
                    <div className = "home-track">
                        <h1>Conference Track</h1>
                    </div>
                    <div className = "home-parallax"/>
                    <div className = "home-important-dates">
                        <h1>Important Dates</h1>
                    </div>
                    <div className = "home-parallax"/>
                    <div className = "home-contact-us">
                        <h1>Contact Us</h1>
                    </div>
                </section>
            </div>
        )
    };
}

export default HomePage;