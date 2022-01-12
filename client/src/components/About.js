import React from 'react';
import ConvertBase64 from './ConvertBase64';

function About() {

    return (

      <div>
        <h2>About</h2>
        <li>Feel free to reach out to us with any questions.</li>
        <hr />

        <ul>

          <h3>The App</h3>
          <li>This is a web app designed to let users identify plants they see in nature, specifically in SouthWest Florida, USA.</li>
          <br />
          <li>There are custom drawings created to help users identify a plant's key features, which can be difficult with just pictures alone.</li>


          <h3>The Team</h3>
          <li>We are two twin brothers who decided to team up and make a cool hiking companion app.</li>

          <ul>
            <h4>Eric - Developer</h4>
            <li>A Node.js developer who loves competing in hackathons, hiking, and playing guitar.</li>
            <br></br>
            <li>Find me at <a href="https://github.com/cireneirbo" target="_blank">my GitHub</a>.</li>
          </ul>

          <ul>
            <h4>Ben - Artist</h4>
            <li>An animator/illustrator/barbarian who smashes things with sticks (plays drums).</li>
            <br></br>
            <li>Find me at <a href="https://github.com/drawdeneirbo" target="_blank">my GitHub</a>.</li>
          </ul>

        </ul>

        <ConvertBase64 />
      </div>

    );

}

export default About;
