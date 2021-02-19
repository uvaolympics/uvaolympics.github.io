import React from 'react'
import { Link } from 'gatsby'

const EventCard = ({ title, image, description, link, styleId }) => (
  <article className={`style${styleId}`}>
    <span className="image">
      <img src={image} alt="" />
    </span>
    <Link to={link}>
      <h2>{title}</h2>
      <div className="content">
        <p>{description}</p>
      </div>
    </Link>
  </article>
)

export default EventCard;