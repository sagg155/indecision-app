import React from 'react';


const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          className="button button--link"
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
        </button>
      </div>
    )  
  };

  export {Option as default};  //export default Option;

//OR

//   export default (props) => {
//     return (
//       <div>
//         {props.optionText}
//         <button
//           onClick={(e) => {
//             props.handleDeleteOption(props.optionText);
//           }}
//         >
//           remove
//         </button>
//       </div>
//     );
//   };