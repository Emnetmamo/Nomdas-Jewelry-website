import React from 'react';
import historyImage1 from '../assets/images/Discovery-of-Eggcellence.jpg';
import historyImage2 from '../assets/images/jewl.jpg';
import historyImage3 from '../assets/images/global.jpg';
import '../assets/css/AboutUs/AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="history-section">
        <h2>Our History</h2>
        <p style={{ fontSize:'18px'}}> Welcome to the captivating journey of Nomdas Jewelry, where elegance seamlessly intertwines with innovation. Established in 20XX, Nomdas Jewelry was born out of a passion for crafting timeless pieces. In the early years, our designers introduced breakthrough designs that set new trends in the industry. With a commitment to quality, Nomdas gained global recognition and became a symbol of luxury and style. Our pieces adorned celebrities, graced red carpets, and were featured in renowned fashion publications. It was a defining moment that solidified Nomdas Jewelry as a leader in the world of high-end fashion.</p>

        <div className="history-events">
          <div className="history-event" style={{height: "500px", marginTop:"50px"}}>
            <img src={historyImage1} alt="Event 1" />
            <h3>Founding Moment</h3>
            <p>Established in 20XX, Nomdas Jewelry was born out of a passion for crafting timeless pieces.</p>
          </div>

          <div className="history-event"  style={{ marginTop:"150px"}}>
            <img src={historyImage2} alt="Event 2" />
            <h3>Breakthrough Designs</h3>
            <p>In the early years, our designers introduced breakthrough designs that set new trends in the industry.</p>
          </div>

          <div className="history-event"  style={{height: "620px", marginTop:"50px"}}>
            <img src={historyImage3} alt="Event 3" />
            <h3>Global Recognition</h3>
            <p>With a commitment to quality, Nomdas gained global recognition and became a symbol of luxury and style.</p>
            <p>Our pieces adorned celebrities, graced red carpets, and were featured in renowned fashion publications.</p>
            <p>It was a defining moment that solidified Nomdas Jewelry as a leader in the world of high-end fashion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
