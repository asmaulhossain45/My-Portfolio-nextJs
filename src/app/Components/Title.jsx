"use client"
import Lottie from "lottie-react";
import PropTypes from "prop-types";
import title from "../../../public/Title.json";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="pb-3">
      <div className="flex items-center">
        <div className="w-10">
          <Lottie animationData={title} />
        </div>
        <h1 className="font-semibold uppercase text-primary text-lg text-center md:text-left">
          {heading}
        </h1>
      </div>

      <h1 className="text-3xl font-bold">{subHeading}</h1>
    </div>
  );
};

export default Title;

Title.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
