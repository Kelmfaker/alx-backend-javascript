function handleResponseFromAPI(promise) {
  new Promise((resolve, reject) => {
    if (promise) {
      resolve();
    } else {
      reject();
    }
  })
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .then((response) => {
      console.error('');
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

export default
handleResponseFromAPI;
