import { useEffect, useRef, useState } from "react";
import PLACEHOLDER from "assets/images/book.gif";

interface ImageProps {
    src : string;
    placeholder? : string;
}

function Image({ src, placeholder=PLACEHOLDER }: ImageProps) {
    const [isLoad, setIsLoad] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver>();
    
    useEffect(() => {
        if (!observerRef.current) {
          observerRef.current = new IntersectionObserver(onIntersection, {
            threshold : 0.3
          });
        }
    
        imgRef.current && observerRef.current.observe(imgRef.current);
      }, []);

    function onIntersection(entries: IntersectionObserverEntry[], io: IntersectionObserver) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          io.unobserve(entry.target);
          setIsLoad(true);
        }
      });
    }
  
    return (<img ref={imgRef} src={isLoad ? src : placeholder} />);
  };