import { useState, useEffect } from "react";
import ChildrenComponent from "./ChildrenComponent";
import Loading from "./loadingComponent";

import { marked } from "marked";
import hljs from "highlight.js";
import markedAlert from "marked-alert";
import { markedHighlight } from "marked-highlight";

import "../assets/styles/darcula.css";
import "../assets/styles/githubStyles.css";
import "../assets/styles/githubStylesColor.css";

marked.use(
  markedHighlight({
    async: false,
    langPrefix: "hljs language-",
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
  markedAlert()
);

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
    setActiveIndex(index === activeIndex ? null : index);
  };
  if (Object.keys(description).length === 0) {
    return <Loading />;
  } else {
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
}

export default ParentComponent;
