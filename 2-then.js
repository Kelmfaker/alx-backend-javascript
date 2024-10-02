function handleResponseFromAPI(promise) {
    promise
      .then(() => {
        console.log('Got a response from the API');
        return {
          status: 200,
          body: 'success'
        };
      })
      .catch(() => {
        return new Error();
      });
  }
  
  // Example usage:
  const promise = Promise.resolve();
  handleResponseFromAPI(promise);  