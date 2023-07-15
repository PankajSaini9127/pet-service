import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//css
import "../../assets/css/utils/scrollToTop.css";

function handleClick(){
    window.scrollTo({top:0,left:0,behavior:"smooth"})
}



function ScrollToTop() {

    const [show, setShow] = useState(false)


function handleScroll(){
    const btnShow = 300;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if(btnShow < windowScroll){
        setShow(true)
    }else{
        setShow(false)
    }
}      

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    })

  return (
    <>
    {
        show&&<Box className="scroll-top-wrapper" onClick={handleClick}>
        <KeyboardArrowUpIcon/>
    </Box>
    }
    </>
  )
}

export default ScrollToTop
