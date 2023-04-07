import React, { CSSProperties, useMemo } from 'react'

export interface TextProps {
    text: string;
    color?: string;
    fontSize?: string;
}
function Text({ text, color="#000", fontSize="1rem" }: TextProps) {
    
    const style:CSSProperties = { color:color, fontSize:fontSize };

    return (<span className='font' style={style}>{text}</span>);
}

export default Text;
