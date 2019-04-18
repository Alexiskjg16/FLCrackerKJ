import React, { Component } from 'react';
import '../App.css';


class FloridaMan extends Component {
    render() {
      return (
        <div className="App">
          <header className="pageHeader">
     <h1>A weekly spotlight on the continuously appalling #FloridaMan stories inundating the internet. </h1>
          </header>
          <body>
             <section className="FLblurb">
              <h1 className="dateheader"> February 21, 2019 </h1>
              <h3 className="bodylines">A recent trend going around social media is the "Florida Man" challenge, where you Google "Florida Man + (insert your
                  birth date). Here's mine!!!!
                  <a href="https://www.riverfronttimes.com/newsblog/2019/02/21/florida-man-who-threw-toilet-through-window-in-east-st-louis-found-with-second-crapper"
                   target="_blank" no-openner no-referrer>
                  Florida Man Who Through Toilet Through Window In St. Louis Found With Second Crapper.</a>
              </h3>
              </section>
          </body>
        </div>
      );
    }
  }
  
  export default FloridaMan;
  