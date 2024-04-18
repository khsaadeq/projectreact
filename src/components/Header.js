import React from "react";

function Header(){
    
const client="Designer";
const  title = {
  Designer: "Designer",
  programing: "Designer"
}
// if(client === "programing"){
//     title="programing is my life.";
// }else{
//     title="Designer is my life.";
// }
   
const info ={
    name: "khattab",
    nick: "sadeq"
}
    return(
    <div className="navbar bg-dark  rounded text-white">
        {/* Hello {info.name+" "+ info.name} */}
            Hello {`${info.name} ${info.name}`}
        <h2 >
           
            {client == "programing" ? title.programing  : title.Designer  }
            is my life.</h2>

        {/* <h2 className="text-white">{title }</h2>
        <h3 className="text-white">{5+6}</h3>
        <h3 className="text-white">{5*6}</h3> */}

        {/* <a href='html'>html</a> |
        <a href='css'>css</a> |
        <a href='javascript'>javascript</a>  | 
        <a href='jquery'>jquery</a>   */}
    </div>
    );
}
export default Header;