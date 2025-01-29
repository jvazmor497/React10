import { useState, useEffect } from "react";
import ChildrenComponent from "./ChildrenComponent";
import { marked } from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
});

function ParentComponent() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [description, setDescription] = useState({});

  const getDatas = async () => {
    let results = {};

    for (let index = 1; index < 20; index++) {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/jvazmor497/React${index}/refs/heads/master/README.md`
        );

        if (response.status === 200) {
          let data = await response.text();

          
          data = marked.parse(data);
          
          results[`Actividad ${index}`] = data;

          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    console.log(results);

    setDescription(results);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const callbackFunction = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="parentContainer">
      {description &&
        Object.keys(description).map((key, index) => (
          <ChildrenComponent
            key={key}
            title={key}
            description={description[key]}
            fecha_vencimiento={new Date().toLocaleDateString()}
            isActive={activeIndex === index}
            onClick={() => callbackFunction(index)}
          />
        ))}
    </div>
  );
}

export default ParentComponent;
