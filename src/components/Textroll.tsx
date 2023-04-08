import React, { useEffect, useRef, useState } from 'react'
import { BsArrowRepeat } from 'react-icons/bs'
import PROVERBS from 'assets/json/proverb.json';
import Text from './Text';

function Textroll() {
    const [random, setRandom] = useState<number>(0);
    
    const rotate = () => {
        const rand = Math.floor(Math.random() * PROVERBS.length);
        setRandom(rand);
    }
    useEffect(()=>{
        rotate();
    }, [])

    return (
        <div className='textroll'>
            <div><img src="assets/images/book.gif" alt="book" width="200px"/></div>
            <div className='content-box'>
                <div><Text text={`"${PROVERBS[random].text}"`} color={"#4f4f4f"} fontSize="1.6rem"/></div>
                <div className='writer'>
                    <Text text={"- "} color={"#4f4f4f"} fontSize="1.4rem"/>
                    <Text text={PROVERBS[random].writer} color={"#2F4858"} fontSize="1.4rem"/>
                </div>
            </div>
            <div className='reroll' onClick={rotate}><BsArrowRepeat/></div>
        </div>
    )
}

export default Textroll
