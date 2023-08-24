setTimeout(() => {
    console.log("Hello after 5 seconds!");
  }, 5000);
  function updateDigitalClock() {
    const currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
  }
  
  setInterval(updateDigitalClock, 1000); // Update every 1000 milliseconds (1 second)
  const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
  
  delayedPromise.then((message) => {
    console.log(message);
  });
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });
  
  const secondPromise = firstPromise.then((message) => {
    alert(message);
    console.log("Chained message!");
  });
  
  secondPromise.catch((error) => {
    console.error(error);
  });
  function simulateNetworkRequest() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve("Data fetched successfully!");
        } else {
          reject("Network Error!");
        }
      }, 3000);
    });
  }
  
  simulateNetworkRequest()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
    async function fetchSinglePost() {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
          const postData = await response.json();
          console.log(postData);
        } catch (error) {
          console.error(error);
        }
      }
      
      fetchSinglePost();
                