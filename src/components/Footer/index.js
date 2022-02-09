import React from 'react';
import {
    FaFacebook,
     FaInstagram,
     FaYoutube,
     FaTwitter,

} from 'react-icons/fa'


import { 

FooterContainer,
FooterWrap,
SocialMedia,
SocialMediaWrap,
SocialLogo,
SocialIcons,
SocialIconLink

} from "./FooterElements"


function Footer() {
  return (

<FooterContainer>
    <FooterWrap>
        <SocialMedia>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label="Facebook" rel="noopener noreferrer">
                    <FaFacebook/>
                </SocialIconLink>

                <SocialIconLink href='/' target='_blank' aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram/>
                </SocialIconLink>

                <SocialIconLink href='/' target='_blank' aria-label="Youtube" rel="noopener noreferrer">
                    <FaYoutube/>
                </SocialIconLink>

                <SocialIconLink href='/' target='_blank' aria-label="Twitter" rel="noopener noreferrer">
                    <FaTwitter/>
                </SocialIconLink>




            </SocialIcons>
        </SocialMedia>

    </FooterWrap>


</FooterContainer>

  )
}

export default Footer;
