import React, { ReactNode } from 'react'
import { Parallax } from 'react-parallax'

interface ParallaxProps {
  children? : ReactNode;
  url : string;
  strength : number;
}

function ParallaxComponent({ children, url, strength }:ParallaxProps) {
  return (<Parallax 
    bgImage={url} 
    strength={strength}>{children}</Parallax>);
}

export default ParallaxComponent;
