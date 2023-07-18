import React from "react";

export default function Die(props) {
    function number(){
        switch (props.value) {
            case 1:
                return "one"
            case 2:
                return "two"
            case 3:
                return "three"
            case 4:
                return "four"
            case 5:
                return "five"
            case 6:
                return "six"
            default:
                return ""
        }
    }
    const color = props.isHeld ? {color: "#386c5f"} : {color: "#1a5fb4"}
    return (
        // <div
        //     className={props.isHeld ? "die--face die--held" : "die--face"}
        //     onClick={props.holdDice}
        // >
        //     <h2 className="die--value">
        //         <i className="fa-solid fa-dice-one"></i>
        //     </h2>
        // </div>
        <i className={`fa-solid fa-dice-${number()} fa-5x`} style={color} onClick={props.holdDice}></i>
    )
}