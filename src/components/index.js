import React ,{useState} from 'react';
import Navbar from './Navbar';
import { HeroContainer, HeroContent,HeroItems,
     HeroH1, HeroP, HeroBtn } from "./HeroElelments"
import Sidebar from './sidebar';


const Hero =()=>{
    const [isOpen, setIsOpen]=useState(false)

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }





    return(
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Delicious pizza Ever  </HeroH1>
                    <HeroP> Ready in 5 Minutes</HeroP>
                    <HeroBtn> Order Now</HeroBtn>

                  
                </HeroItems>

            </HeroContent>

            
             </HeroContainer>
    )
}
export default Hero