import { useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

function ParentComponent() {
  const [activeIndex, setActiveIndex] = useState(1);

  const callbackFunction = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="parentContainer">
      <ChildrenComponent
        title="Actividad 1"
        description="Lorem Ipsum"
        fecha_vencimiento="2025-10-10"
        isActive={activeIndex === 1}
        onClick={() => callbackFunction(1)}
      />
      <ChildrenComponent
        title="Actividad 2"
        description="Lorem Ipsum"
        fecha_vencimiento="2023-10-10"
        isActive={activeIndex === 2}
        onClick={() => callbackFunction(2)}
      />
    </div>
  );
}

export default ParentComponent;
