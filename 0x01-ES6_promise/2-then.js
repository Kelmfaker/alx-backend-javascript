function handleResponseFromAPI(promise) {
  promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .then(() => {
      console.error();
    })
    .then(() => {
      console.log('Got a response from the API');
    })
    .catch((error) => {
      console.error('API call failed');
      return new Error(error);
    });
}

export default
handleResponseFromAPI;
