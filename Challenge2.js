function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed < speedLimit + kmPerDemeritPoint) {
      console.log("Ok");
      return;
    }
  
    const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
    if (points >= 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", points);
    }
  }
  
  speedDetector(80); // Points: 2
  speedDetector(70); // Ok
  speedDetector(150); // License suspended
  