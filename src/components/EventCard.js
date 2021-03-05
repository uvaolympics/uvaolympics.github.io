import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const EventCard = ({ title, image, description, link, styleId }) => (
  <article className={`style${styleId}`}>
    <span className="image">
      <img src={image} alt="" />
    </span>
    <AnchorLink to={link}>
      <h2>{title}</h2>
      <div className="content">
        <p>{description}</p>
      </div>
    </AnchorLink>
  </article>
)

export default EventCard;