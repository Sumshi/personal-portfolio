import React from 'react'
import '../styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/sumaya-ahmed-76b182255/' target='_blank' rel='noreferrer'>
          <LinkedInIcon />
        </a>

        <a href='https://github.com/Sumshi' target='_blank' rel='noreferrer'>
          <GitHubIcon />
        </a>

        <a href='https://twitter.com/Ibnatumaya' target='_blank' rel='noreferrer'>
          <TwitterIcon />
        </a>
      </div>
      <p>&copy; 2024 sumaya.me</p>
    </div>
  );
}

export default Footer;
