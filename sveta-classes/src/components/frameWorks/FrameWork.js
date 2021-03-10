import React from 'react';
import './FrameWork.css';

const FrameWork = ({onClick, name, count}) => {
    return (
       <div className="fw" onClick={()=>onClick(name)}>{name}: {count} </div>
    )
  }

  export default FrameWork;