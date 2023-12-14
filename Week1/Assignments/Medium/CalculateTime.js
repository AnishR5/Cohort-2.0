function calculateTime(n) {
    const startTime = new Date();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    const endTime = new Date();
    const elapsedTimeInSeconds = (endTime - startTime) / 1000; // Convert to seconds
    return elapsedTimeInSeconds;
  }
  
  console.log(calculateTime(100))
  console.log(calculateTime(1000))
  console.log(calculateTime(10000))
  