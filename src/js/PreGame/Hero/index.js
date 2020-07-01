import React from 'react';
import './index.scss';
import Hero from './Hero';

//insert wrapper that contains both columns, then start building out divs with rows. Create two different background colors so you can tell how the gradient is working. 

const index = () => {
  return (
<main className="flex-container">

    <div className="main-content red">
      <div className="teamLogos">
      <img className="blazersLogo" id="blazersLogo" src="https://publish.nba.com/blazers/sites/blazers/files/blazers.png"/>
      <img className="awayLogo" id="awayLogo" src="https://publish.nba.com/blazers/sites/blazers/files/pelicans.png"/>
      </div>
      <div className="teamNames">
        <h1 className="blazersName">Blazers</h1>
        <h2>VS</h2>
        <h1 className="awayName">Pelicans</h1>
      </div>
      <div className="gameDescription">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt turpis at ligula dictum, eu lobortis justo rutrum. Integer a ex magna. Aenean vel tristique dui, eget aliquet elit. Nulla eleifend tincidunt mattis. Morbi eget ante in sapien lobortis maximus a a nisi. In hac habitasse platea dictumst. Nulla eu.</p>
      </div>
      <div className="buttons">
        <button className="primaryButton" type="button">Primary</button>
        <button className="secondaryButton" type="button">Secondary</button>
      </div>
    </div>

    <aside class="sidebar black">
      <p>
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti temporibus recusandae nisi, ipsa esse tempore aperiam laborum libero ipsum at? Accusamus nostrum, atque amet, fugiat voluptate iusto maiores quam similique dolorum vel, voluptatum rerum dignissimos accusantium modi perferendis quidem in! Eum velit aut voluptate ea rerum. Mollitia possimus aut itaque! */}
      </p>

    </aside>

  </main>

  );
};

export default index;
