'use client'

import React from "react";
import { useEffect, useState } from "react";
import { ArrowUpCircle  } from 'lucide-react';

const ButtonTop = () => {
    const [buttonTop, setButtonTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 90) {
                setButtonTop(true)
            } else {
                setButtonTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return ( 
        <div>
            {buttonTop && (

                <div className='flex flex-wrap justify-end mr-10'>
                    <button id="myBtn" onClick={scrollUp}><a href="#top"><ArrowUpCircle size={35}/></a></button>
                </div>
            )}
        </div>
     );
}
 
export default ButtonTop;