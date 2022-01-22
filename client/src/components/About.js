import React from 'react';

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
          <li>We decided to use custom drawings for the plants in order to sperate the viewer from reality and have them focus on the main key structures of the plants.</li>
          <li>Using black lines for the plant details allows us to highlight the main identifiers of the plants so it can be easier to find what they are looking for - or to dismiss something altogether.</li>


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
            <li>A freelance illustrator/animator who loves using open source programs to create while drinking too much coffee.</li>
            <br></br>
            <li>Find me at <a href="https://github.com/drawdeneirbo" target="_blank">my GitHub</a>.</li>
          </ul>
          
        </ul>
        
      </div>

    );

}

export default About;
