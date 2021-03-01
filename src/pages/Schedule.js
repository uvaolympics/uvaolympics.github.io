import React from 'react';
import { Link } from 'gatsby';
import { Chrono } from 'react-chrono';

import Layout from '../components/Layout';
import lambethFields from '../assets/images/lambethfields.jpg';

import { eventDetails } from './Events';

const events = eventDetails.inPerson.concat(eventDetails.virtual)

const scheduleItems = events.map(event => {

})

const SchedulePage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        <div className="site-header">
          <div className="header-intro">
            <header>
              <h1>
                Schedule
              </h1>
              <p>
                The games will take place over the course of a weekend, starting from
                the 12th - 14th of March. Below is a complete schedule
                for the events, including opening and closing ceremonies.
              </p>
              <a href="/" className="button primary">Register</a>
              <a href="/" className="button secondary">Schedule</a>
              <p className="event-duration"><strong>March 12th - 14th, 2021</strong></p>
            </header>
          </div>
          <div className="header-image">
            <img src={lambethFields} />
          </div>
        </div>
        <div className="timeline">
          <Chrono items={scheduleItems} />
        </div>
      </div>
    </div>
  </Layout>
);

export default SchedulePage;