import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import config from '../../config';
import EventCard from '../components/EventCard';
import lambethFields from '../assets/images/lambethfields.jpg';

import basketball from '../assets/images/basketball-resized.jpg';
import volleyball from '../assets/images/volleyball2-resized.jpg';
import trivia from '../assets/images/trivia-resized.jpg';
import tennis from '../assets/images/tennis-resized.png';
import rotunda from '../assets/images/rotunda2.jpg';
import food from '../assets/images/food2-resized.jpg';
import chess from '../assets/images/chess-resized.jpg';
import esports from '../assets/images/esports-resized.jpeg';
import soccer from '../assets/images/soccerballnet-resized.jpg';
import spikeball from '../assets/images/spikeball-resized.jpg';
import cornhole from '../assets/images/cornhole-resized.jpg';

const eventDetails = {
  inPerson: [
    {
      name: 'Volleyball',
      id: 'volleyball',
      image: volleyball,
      datetime: 'March 13th from 1pm - 4pm',
      location: 'Sand Courts by No Name Field',
      details: `
      Volleyball will be played on the sand courts by No Name Field. Bring your friends to 
      challenge other years! The teams will be 3 on 3 due to Covid restrictions. 
      We will supply equipment. All rules abide by college regulations; 
      if there are any safety concerns, please reference our safety conduct. 
    `
    },
    {
      name: 'Cornhole',
      id: 'cornhole',
      image: cornhole,
      datetime: 'March 13th from 1pm - 4pm',
      location: 'TBD',
      details: `
      Sign up at the introduction table to be placed in a bracket to 
      play other champions. Bring a teammate or we will pair you with 
      someone! We will supply the equipment. All rules abide by 
      professional regulations. Including but not limited to: on the 
      board is 1 point, in the hole is 3, and if the bean bag hits the 
      ground and bounces on, it does not count as any points. If there 
      are any safety concerns, please reference our safety conduct. 
    `
    },
    {
      name: 'Tennis',
      id: 'tennis',
      image: tennis,
      datetime: 'March 13th from 1pm - 4pm',
      location: 'Tennis Courts by No Name Field',
      details: `
      Join your competitors on the tennis courts next to No Name Field. 
      We will supply equipment, but if you have a special racquet or 
      ball, please feel free to bring them. All rules abide by college 
      regulations; if there are any safety concerns, please reference 
      our safety conduct. 
    `
    },
    {
      name: 'Spikeball',
      id: 'spikeball',
      image: spikeball,
      datetime: 'March 13th from 1pm - 4pm',
      location: "TBD",
      details: `
       Sign up at the introduction table to be placed in a bracket to
        play other champions. Bring a teammate or we will pair you with 
        someone! We will supply the equipment. Points are scored when the 
        ball hits the rim, the ground, or bounces more than once on the 
        net. If there are disagreements, please look at the original rule book. All rules abide by college regulations; 
       if there are any safety concerns, please reference our safety conduct. 
    `
    },
    {
      name: 'Soccer',
      id: 'soccer',
      image: soccer,
      datetime: 'March 13th from 1pm - 4pm',
      location: "Carr's Field",
      details: `
       We will be playing on Carr’s Field. Bring your crew to battle other years. The teams are limited to groups of 3 due to the Covid restrictions, but the games will go fast since we play to 3. We will supply equipment. All rules abide by college regulations; if there are any safety concerns, please reference our safety conduct. 
    `
    },
    {
      name: 'Basketball',
      id: 'basketball',
      image: basketball,
      datetime: 'March 13th from 2pm - 4pm',
      location: 'Courts Next to Dell Pond',
      details: `
      Basketball will be played on the courts next to Dell Pond. Come with a team of 3, 
      or we will assign you a team. You will be entered into brackets to determine 
      a champion! We will supply equipment. All rules abide by college 
      regulations; if there are any safety concerns, please reference our safety conduct.
    `
    },
  ],
  virtual: [
    {
      name: 'Trivia',
      id: 'trivia',
      image: trivia,
      datetime: 'March 12th at 7pm',
      details: `
        Pairing with the Quizbowl Club Team from UVA, we will have a variety of questions from many categories. Join with a team or come individually!
      `
    },
    {
      name: 'Chess',
      id: 'chess',
      image: chess,
      datetime: 'March 12th at 8pm',
      details: `
        We will stream the matches through Twitch. Join our Zoom and we will create a bracket for the contestants! All rules abide by the standard regulations.
      `
    },
    {
      name: 'Esports',
      id: 'esports',
      image: esports,
      datetime: 'March 12th at 9pm',
      details: `TBD`
    },
    {
      name: 'Eating Contest',
      id: 'eatingcontest',
      image: food,
      datetime: 'March 14th, TBD',
      details: `TBD`
    },
  ]
}

const EventsPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <div className="events-page">
          <div className="site-header">
            <div className="header-intro">
              <header>
                <h1>
                  Events and Competitions
                </h1>
                <p>
                  We have something for everyone! Our events range from physically intense sports
                  like soccer and tennis to competitive trivia and gaming. Check out our events below!
                </p>
                <a href="/" className="button primary">Register</a>
                <p className="event-duration"><strong>March 12th - 14th, 2021</strong></p>
              </header>
            </div>
            <div className="header-image">
              <img src={lambethFields} />
            </div>
          </div>
          <div className="event-listings">
            <h1>In Person Events</h1>
            {eventDetails.inPerson.map(event => {
              const { name, datetime, location, details, image, id } = event;
              return (
                <div id={id} className="event-details">
                  <div className="event-content">
                    <div>
                      <h2>{name}</h2>
                      <p>{details}</p>
                      <div>
                        <p className="datetime">
                          <strong>Date and Time: </strong>
                          {datetime}
                        </p>
                        <p className="location">
                          <strong>Location: </strong>
                          {location}
                        </p>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="event-image">
                    <img src={image} alt="" />
                  </div>
                </div>
              )
            })}
            <h1>Virtual Events</h1>
            {eventDetails.virtual.map(event => {
              const { name, datetime, details, image } = event;
              return (
                <div className="event-details">
                  <div className="event-content">
                    <div>
                      <h2>{name}</h2>
                      <p>{details}</p>
                      <div>
                        <p className="datetime">
                          <strong>Date and Time: </strong>
                          {datetime}
                        </p>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                  <div className="event-image">
                    <img src={image} alt="" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export { eventDetails };
export default EventsPage;
