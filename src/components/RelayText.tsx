import React, { useEffect, useState } from 'react'
import Font, { TextProps } from './Text';

interface RelayTextProps extends TextProps {

}

function RelayText({ text, color, fontSize }: RelayTextProps) {
    const [offset, setOffset] = useState<number>(0);
    const textLength = text.length;

    const actionEvent = (callback:Function, interval:number) => {
        let flag = false;
        let offset = 0;

        const action = () => {
            setTimeout(() => {
                callback();
            }, interval)
        }
        action();

        const stop = () => {
            flag = false;
        }

        return stop;
    }

    useEffect(()=>{
        const changeOffset = () => {
            
        }
        return () => {}
    }, [])

    useEffect(()=>{
        console.log(offset)
    }, [offset])
    return (
        <span className='relay-font'>
            <Font text={text.slice(0, offset)} color={color} fontSize={fontSize} />
        </span>
    )
}

export default RelayText;
