import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import like from './icons/like.svg';
import "./Footer.css";
import { fontSize } from '@mui/system';
import { Twitter } from '@mui/icons-material';
function footer() {
  return (
    <div>
    <div className='footer'>
      <div className='image'>
        <img className="my-3" height="20%" style={{position: 'absolute', top: 0, left: 200, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}src={like} alt='like'/>
      </div>
      <div className='buttons' style={{position: 'absolute', top: 30, left: 500, right: 0, bottom: 100, justifyContent: 'center', alignItems: 'center'}}>
        <button  className='button' >
          <p><b>About</b></p>
        </button>
        <button className='button'>
          <p><b>Contact</b></p>
        </button>
        <button className='button'>
          <p><b>ValueAd</b></p>
        </button>
        <button className='button'>
          <p><b>Careers</b></p>
        </button>


      </div>
      <div   style={{position: 'absolute', top: 90, left: 525, right: 0, bottom: 100, justifyContent: 'center', alignItems: 'center'}}>
      <button className='lowerbutton'>
        <p><b>Terms of Use</b></p>
      </button>
      <button className='lowerbutton'>
        <p><b>PrivacyPolicy</b></p>
      </button>
      </div>
    </div>


    <div className='footerbelow' >
      <p className='text' style={{position: 'relative', top: 10,  right:-200, bottom: 200, justifyContent: 'center', alignItems: 'center', fontSize:10}} >
       <b>Copyright ©  2022 Printline Media Pvt. Ltd. All rights reserved.</b> 
      </p>
      <div className='flex' style={{ position: 'relative', left: 20}}>
      <p style={{position: 'relative', top: 14, left:450,  right:-200, bottom: 200, justifyContent: 'center', alignItems: 'center', fontSize:10}}> <b>FollowUs</b></p>
     <div className='icons'  style={{position: 'relative', left:470}}>
        <FacebookIcon className='my-2'/>
      <InstagramIcon className='insta'/>
      <LinkedInIcon className='insta'/>
      <TelegramIcon className='insta'/>
      <TwitterIcon className='insta'/>
      <YouTubeIcon className='insta'/>
     </div>
     </div>
    </div>
    </div>
  )
}

export default footer
