import React from "react";
import './project.css'
function Image(props){
    return(
                <>       
        <img src={props.imag} alt={props.extra} class="image"></img>
         <p class="text">{props.msg}</p>
        <hr/>
        </>
    )
}
export default Image;