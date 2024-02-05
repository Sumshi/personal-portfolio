import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My name is Sumaya</h2>
        <div className='prompt'>

          <p>I'm a Frontend Developer passionate about crafting user-friendly and visually appealing web experiences.</p>
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
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>

          <li className='item'>
            <h2> Back-End</h2>
            <span>
              NodeJS, Java, MySQL, MongoDB, DigitalOcean, AWS, MS SQL
            </span>
          </li>

          <li className='item'>
            <h2>Tech  Stacks</h2> 
            <span>
              JavaScript, Java, Python, C#, C, C++, TypeScript, Git
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
