import React, { useEffect, useState }  from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/koala-animation.json';


function UnderConstruction() {
    return (
    <div className="under-construction">
      <p>Mēs vēl topam!</p>
      <Lottie animationData={animationData} height={300} width={300} />
    </div>
  );
}

export default UnderConstruction;
