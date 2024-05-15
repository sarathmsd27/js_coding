// Function to fetch random user data
function fetchRandomUserData() {
  return new Promise((resolve, reject) => {
    // Fetch data from the API
    fetch("https://randomuser.me/api/")
      .then((response) => {
        // Check if response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        // Parse response JSON
        return response.json();
      })
      .then((data) => {
        // Extract user information
        const user = data.results[0];
        const userData = {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          city: user.location.city,
          country: user.location.country,
          picture: user.picture.large,
        };
        // Resolve the promise with user data
        resolve(userData);
      })
      .catch((error) => {
        // Reject the promise with the error
        reject(error);
      });
  });
}

// Usage example
fetchRandomUserData()
  .then((userData) => {
    console.log("Random User Data:", userData);
    // Do something with the user data, like updating the UI
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
    // Handle the error, like displaying an error message
  });
