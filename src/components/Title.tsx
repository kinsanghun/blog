import React from 'react'

interface TitleProps {
    title : string;
}
function Title({title}:TitleProps) {
  return (
    <div className='title'>
        <span className='line'></span>
        <h1>{title}</h1>
        <span className='line'></span>
    </div>
  )
}

export default Title
