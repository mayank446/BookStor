import React from "react";

function Button(props) {
    return (
        <div>
            <button onClick={props.handleClick} className="bg-slate-100 hover:bg-gray-200 hover:scale-105 text-gray-800 font-semibold py-2 px-4 m-2 rounded shadow-md">
                {props.children}
            </button>
        </div>
    )
}

export default Button