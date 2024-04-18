import React from "react";

function SocialItem(props){
    return(
        <li className="list-group-item">
            <img src={props.p.img}/>
        <input type="checkbox" id={props.p.id}/>
        <label htmlFor={props.p.id}>{props.p.media}</label>
    </li>
    //     <li className="list-group-item">
    //         <img src={props.img}/>
    //     <input type="checkbox" id={props.id}/>
    //     <label htmlFor={props.id}>{props.media}</label>
    // </li>
    );
}
export default SocialItem;