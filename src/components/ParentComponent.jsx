import { useState, useEffect } from "react";
import ChildrenComponent from "./ChildrenComponent";

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
  const [activeIndex, setActiveIndex] = useState(null);
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
        }
      } catch (error) {
        console.log(error);
      }
    }

    setDescription(results);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const callbackFunction = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
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
    </>
  );
}

export default ParentComponent;
