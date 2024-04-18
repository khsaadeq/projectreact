import React from "react";
import SocialItem from './SocialItem';

function Social(){
    return(
        <ul className="list-group">
    <SocialItem
    p={{ 
        media:'Facebook',
        id:'facebook',
        img:'https://picsum.photos/60'
        }}/>
    <SocialItem 
    p={{
    media:'Youtube', 
    id:'youtube',
    img:'https://picsum.photos/61'
    }}/>
    <SocialItem
     p={{media:'Instagram',
      id:'instagram',
      img:'https://picsum.photos/64'
      }}/>
    <SocialItem
    p={{media:'Linkedln',
        id:'linkedIn',
        img:'https://picsum.photos/63'
        }}/>
        </ul>

//  <ul className="list-group">
//     <SocialItem
//       media='Facebook'
//       id='facebook'
//       img='https://picsum.photos/60' 
//       />
//     <SocialItem 
//     media='Youtube' 
//     id='youtube'
//     img='https://picsum.photos/61'
//     />
//     <SocialItem
//      media='Instagram'
//       id='instagram'
//       img='https://picsum.photos/62'
//       />
//     <SocialItem
//      media='Linkedln'
//       id='linkedIn'
//       img='https://picsum.photos/62'
//       />    
//             </ul> 

    );
}
export default Social;