import React, { useState, useEffect } from 'react';
import '../../assets/css/Home/CallToAction.css'

const CallToAction = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index (1 to 5)
      setCurrentImage(prevImage => (prevImage % 5) + 1);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="call-to-action" >
         <button className="cta-button">Explore Now</button>
      {/* Use the `currentImage` state to dynamically set the background image */}
      <div className={`cta-background cta-image-${currentImage}`} style={{height:"400px", marginTop:"-40px"}}>
       
       
      </div>
    </div>
  );
}

export default CallToAction;
