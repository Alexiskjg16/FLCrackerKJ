import React, { Component } from 'react';
import '../App.css';


class HomePage extends Component {
    render() {
      return (
        <div className="App">
          <header>
          <h1>FLCrackerKJ</h1>
          </header>
          <body>
              <h1>New Blog Who Dis?</h1>
              <section className="sideBlurb">
          <h1 className="abTitle">Self-Blurb:</h1>
          <p className="aboutMe">Anybody else sick of labels? Hippie, country, rocker, emo, preppy... I got called most of those things LAST WEEK. I like to
              think of myself as a style-fluid person, because though my core values and personality never change, my aesthetic and outer
              appearance often shift.
              Though I know this isn't the historical definition of a Florida Cracker, I like to think of it like Florida is a Melting Pot. 
              And crackers go with everything! Cheese, peanut butter, lace, mud, lipstick... you get my drift. So my posts are going to be 
              all over the place in content, but will focus on different experiences and out-of-the-box living in sunny Florida. 
          </p>
          </section>
          {/* <section>
              <h1 className="abTitle">Insperations:</h1>
              <p className="aboutMe"> Legally Blonde the Musical, VlogBrothers, the Champagne Diet, Glam&Gore, Wreck This Journal,</p>
          </section> */}
          </body>
        </div>
      );
    }
  }
  
  export default HomePage;
  