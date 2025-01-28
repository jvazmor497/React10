// ### Componente Padre

// - El estado `activeIndex` controla cuál de los paneles (actividades) está expandido o activo.  Este estado usa el hook `useState` de React y comienza tal que el primer panel se mostrará por defecto. El estado se controla mediante setactiveIndex

// - La componente padre pasará una función de **callback** (`callbackFunction`) al hijo para manejar un evento de tipo `onClick` en el hijo. Este evento de tipo `onClick` en el hijo usará la función de `Callback` en el padre para saber si el panel está cerrado o abierto.

import { useState } from "react";
import Activity from "./ChildrenComponent";

function ParentComponent() {

    const [activeIndex, setActiveIndex] = useState(1);

    // const callbackFunction = (index) => {
    //     setActiveIndex(index === activeIndex ? -1 : index);
    // };

    console.log("ParentComponent");

    return (
        <>
            <Activity
                title="Actividad 1"
                description="Lorem Ipsum"
                fecha_vencimiento="2025-10-10"
                isActive={activeIndex === 1}
                // onClick={() => callbackFunction(1)}
            />
            <Activity
                title="Actividad 2"
                description="Lorem Ipsum"
                fecha_vencimiento="2023-10-10"
                isActive={activeIndex === 1}
                // onClick={() => callbackFunction(1)}
            />
        </>
    );
}

export default ParentComponent;
