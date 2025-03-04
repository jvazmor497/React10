import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function ChildrenComponent(props) {
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(props.isActive ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [props.isActive]);

  const toggleActive = () => {
    props.onClick();
  };

  return (
    <div
      className="activity"
      style={{ transition: "height 0.5s ease-in-out" }}
      onClick={toggleActive}
    >
      <div className="title">
        <h2>{props.title}</h2>
      </div>
      <div
        className="container"
        ref={contentRef}
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 0.5s ease-in-out",
        }}
      >
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
        <p className="date">{props.fecha_vencimiento}</p>
        <textarea
          onClick={(e) => e.stopPropagation()}
          name="txtArea"
          id="txt_Area"
        />
      </div>
    </div>
  );
}

ChildrenComponent.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  description: PropTypes.string,
  fecha_vencimiento: PropTypes.string,
};

export default ChildrenComponent;
