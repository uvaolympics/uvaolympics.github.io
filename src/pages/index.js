import React from 'react';
import { TwitchEmbed, TwitchChat } from 'react-twitch-embed';
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import basketball from '../assets/images/basketball-resized.jpg';
import volleyball from '../assets/images/volleyball2-resized.jpg';
import trivia from '../assets/images/trivia-resized.jpg';
import tennis from '../assets/images/tennis-resized.png';
import rotunda from '../assets/images/rotunda2.jpg';
import food from '../assets/images/food2-resized.jpg';
import chess from '../assets/images/chess-resized.jpg';
import esports from '../assets/images/esports-resized.jpeg';
import upc from '../assets/images/upc.png';
import imrec from '../assets/images/uva-im-rec.jpg';
import classcouncils from '../assets/images/uva-class-councils.jpg';
import pic1 from '../assets/images/01.jpg';

import config from '../../config';


import EventCard from '../components/EventCard';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="inner">
        {/* Header and Landing Image */}
        <div className="site-header">
          <div className="header-intro">
            <header>
              <h1>
                The Olympics at the University of Virginia
              </h1>
              <p>
                This year, we're dedicated to hosting the first UVA Olympics hybrid style.
                We'll be hosting virtual competitions like Chess, Trivia, and Esports and traditional sports
                like Soccer, basketball, beach volleyball, eating competitions, and tennis. There's something
                for everyone. If you're interested, register down below <strong>by March 9th, 2021.</strong>
              </p>
              <a href="/" className="button primary">Register</a>
              <a href="/" className="button secondary">Schedule</a>
              <p className="event-duration"><strong>March 12th - 14th, 2021</strong></p>
            </header>
          </div>
          <div className="header-image">
            <img src={rotunda} />
          </div>
        </div>
        <div className="section-card">
          <h1>Our Commitment to Safety</h1>
          <p>Insert details on safety regulations here.</p>
        </div>
        {/* Twitch Livestream and Twitter Feed */}
        <div className="section-card media-feed">
          <h1>Event Livestreams</h1>
          <p>
            We'll be livestreaming the events on Twitch this year so
            that everyone can tune in from home! All of our events are sequential
            this year (none of them will overlap), so all events will be featured
            on this channel. Come show some love for your favorite competitor!
          </p>
          <div className="twitch-feed">
            <TwitchEmbed
              channel="thechocolatebean"
              id="moonstar_x"
              theme="light"
              muted
              width="100%" />
          </div>
        </div>
        {/* Social Media */}
        <div class="social-media-feed section-card">
          <h1>Follow Us on Social</h1>
          <div className="social-media-portal">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <div key={url}>
                  <a href={url} className={`button primary icon ${icon} social-media-style-${name.toLowerCase()}`}>
                    <span className="label">{name}</span>
                    {name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        {/* Our Events */}
        <div className="section-card events">
          <h1 className="section-header">Our Events</h1>
          <p>
            We have a ton of events this year.
            Anyone can join, and you don't have to any prior
            experience in any of the events!
            Some of our events will be virtual, and some will be
            in person, with safety guidelines.
          </p>
          <h2>In Person</h2>
          <section className="tiles">
            <EventCard
              title="Volleyball"
              description="Read more here"
              link="/Generic"
              image={volleyball}
              styleId={1} />
            <EventCard
              title="Basketball"
              description="Read more here"
              link="/Generic"
              image={basketball}
              styleId={2} />
            <EventCard
              title="Trivia"
              description="Read more here"
              link="/Generic"
              image={trivia}
              styleId={3} />
            <EventCard
              title="Tennis"
              description="Read more here"
              link="/Generic"
              image={tennis}
              styleId={4} />
            <EventCard
              title="Eating Contest"
              description="Read more here"
              link="/Generic"
              image={food}
              styleId={5} />
          </section>
          <h2>Virtual</h2>
          <section className="tiles">
            <EventCard
              title="Trivia"
              description="Read more here"
              link="/Generic"
              image={trivia}
              styleId={1} />
            <EventCard
              title="Chess"
              description="Read more here"
              link="/Generic"
              image={chess}
              styleId={2} />
            <EventCard
              title="Esports"
              description="Read more here"
              link="/Generic"
              image={esports}
              styleId={3} />
          </section>
          <p>Interested in participating? Register down below or check out the schedule.</p>
          <a href="/" className="button primary">Register</a>
          <a href="/" className="button secondary">Schedule</a>
        </div>
        {/* Sponsors */}
        <div className="section-card">
          <h1>Our Sponsors</h1>
          <p>
            Special thanks to our sponsors, who've helped us out
            with funding and planning the event. We couldn't have
            done this without them.
          </p>
          <div className="sponsor-grid">
            <div className="sponsor-grid-card">
              <img src={classcouncils} alt="" />
              <p>UVA Class Councils</p>
              <a href="https://alumni.virginia.edu/class-school/class-councils-trustees/" className="button primary">
                Class Councils Website
              </a>
            </div>
            <div className="sponsor-grid-card">
              <img src={imrec} alt="" />
              <p>UVA IM-Rec</p>
              <a href="" className="button primary">IM-Rec Website</a>
            </div>
            <div className="sponsor-grid-card">
              <img src={upc} alt="" />
              <p>University Program Council</p>
              <a href="" className="button primary">UPC Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout >
);

export default IndexPage;
