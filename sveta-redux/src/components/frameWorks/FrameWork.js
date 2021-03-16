import React from 'react';
import './FrameWork.css'

const FrameWork = ({onClick, name, count, id}) => {
    return (
       <div className="fw" onClick={()=>onClick(id)}>{name}: {count} </div>
    )
  }

  export default FrameWork;