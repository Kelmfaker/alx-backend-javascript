function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    })
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    })
    .catch((error) => {
      console.error('API call failed');
      return new Error(error);
    });
}

// Simulating an error response with an Error object
const promise = Promise.reject(new Error('API error'));
handleResponseFromAPI(promise);
