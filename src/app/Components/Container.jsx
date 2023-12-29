import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-16 lg:px-20 xl:px-24">
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.object,
};
