import React from "react";

//Styles
import "./WorkStepList.css";

const WorkStepList = ({ number, title, subtext }) => {
  return (
    <div className='workStepList__list' id={`${title}`}>
      <p className='list__number'>{`${number}`}</p>
      <div className='workStepList__text'>
        <p className='title'>{`${title}`}</p>
        <p className='subtext'>{`${subtext}`}</p>
      </div>
    </div>
  );
};
export default WorkStepList;
