/**
 * Contains the miscellaneous route handlers.
 * @return 200 status and the message
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
