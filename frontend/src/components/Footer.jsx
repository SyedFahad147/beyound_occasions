import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className='banner'>
      <div className='title'>
        <h1>BeyoundOccasions</h1>
        <p>Events and Weddings</p>
      </div>
      <div className='tag'>
        <label>News Latter!</label>
        <div>
          <input type='text' placeholder='E-mail'/>
          <button>Subscribe!</button>
        </div>
        <p>Sign Up with your E-mail to recieve news and updates!</p>
      </div>
    </div>
      
    </footer>
  );
}

export default Footer;
