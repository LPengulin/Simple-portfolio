import React from 'react'


const ExpandableBar = ({isHovered}) => {


    const barStyles = {
        height: "2px",
        backgroundColor: "#39FF14",
        transition: "width 0.5s ease-in-out",
        width: isHovered ? "100%" : "0px"
    }
  return (
   
        <div style={barStyles}>
         </div>
 
  )
}

export default ExpandableBar