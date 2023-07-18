import React from "react";

export default function Die(props) {
    return (
        <div
            className={props.isHeld ? "die--face die--held" : "die--face"}
            onClick={props.holdDice}
        >
            <h2 className="die--value">{props.value}</h2>
        </div>
    )
}