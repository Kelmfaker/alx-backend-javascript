export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      resolve('Success');
    }, 1000);
  });
}
