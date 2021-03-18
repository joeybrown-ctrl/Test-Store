import React from "react";

function Title(props) {
    return (
        <div className="row justify-content-center">
            <h1>{props.children}</h1>
        </div>
    )
}

export default Title;