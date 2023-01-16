import React from 'react'

const Key = (props) => {
  return (
    <>
        <div className="key" onClick={()=>{props.handleClick(props.num)}}>
            {props.num}
        </div>
    </>
  )
}

export default Key  