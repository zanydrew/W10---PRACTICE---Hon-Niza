import React from "react";
import {useState} from "react";

function Entity({entity_name, entity_health}) {
    // const [health, setHealth] = React.useState(0);
    //
    // function updateHealth(health) {
    //     return {
    //         width: `${health}%`
    //     }
    // }

    return (
        <section className="container">
            <h2>{entity_name}</h2>
            <div className="healthbar">
                <div style={{width :`${entity_health}%`}} className="healthbar__value"></div>
            </div>
        </section>
    );
}

export default Entity;