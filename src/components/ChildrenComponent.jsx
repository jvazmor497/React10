import { useState } from "react";
import PropTypes from "prop-types";

function Activity(props) {
  const [activeIndex, setActiveIndex] = useState(props.isActive);

  console.log(props);

  return (
    <div
      onClick={() => setActiveIndex(!activeIndex)}
      style={{ backgroundColor: activeIndex ? "red" : "white" }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.fecha_vencimiento}</p>
      <textarea name="txtArea" id="txt_Area"></textarea>
    </div>
  );
}

Activity.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  description: PropTypes.string,
  fecha_vencimiento: PropTypes.string,
};

export default Activity;
