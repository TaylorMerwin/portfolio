/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 */
import image from "../images/mountain-range.jpg";

const imageAltText = "A mountain range with trees in the foreground illuminated by a sunset.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <div className="overlay" >
        <img
          className="background"
          src={image}
          alt="A summer sunset seen on a mountain range in the PNW."
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          left: "5rem",
          width: "17rem",
          textShadow: "2px 2px 4px #000000",

        }}
      >
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
