import React from 'react'

const AnalyticsBox = (props) => {
 
  const {icon,heading,data,color}=props;
  console.log(icon)
  return (
    <div className='analyticSingleContainer' style={{backgroundColor:`${color}`}}>
    <i className={icon}></i>
    <p>{heading}</p>
    <h2>{data}</h2>
    </div>
  )
}

export default AnalyticsBox
