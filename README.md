# Newsletter Signup
A newsletter signup app deployed on Heroku with Mailchimp API integration.

**Link to project:** https://isimondev-newsletter.herokuapp.com/

![newsletter-gif](./public/images/gif-isimondev-newsletter.gif)

## How It's Made:
### Client:
**Tech used:** HTML/CSS/JavaScript, Bootstrap

The Express server first delivers the html signup page to the client. The page is styled with Bootstrap styles pulled from their CDN alongside some custom styles.

After the user fills out the necessary info in the form, the submit button posts to the Express server's home route. The user is then redirected towards a success or failure page depending on the outcome of the API post request made to Mailchimp's API. They are also given the option to "Continue" back to homepage upon sucessful submission, or "Try Again" if something went wrong.

### Server:
**Tech used:** Node.js, Express.js, Heroku

*Why was this stack chosen?*

Node is a pretty lightweight server choice and can be spun up fairly easily.

The Express server listens for the form submission, then posts the form's data to Mailchimp's servers via their API. The data is added to a specified "audience list" at Mailchimp. After submission, the user is redirected server-side via a success route or failure route to the corresponding page client-side.

The Express server is connected with GitHub for automatic deployment on Heroku.

## Lessons Learned:
Learned a **LOT** from building this project, but I would say my biggest takeaway was figuring out why the app worked perfectly on my local and heroku's local environment, yet crashed spectacularly when deployed. After struggling for a few hours testing a few things, I took a good night's rest.

With fresh eyes on those error messages I decided the issue lied somewhere with the Heroku deployment. I discovered that it wasn't building the Mailchimp url properly during deployment due to being "blind" to the environment variables I used.

The local versions saw these env variables perfectly fine, but for some reason heroku couldn't. After coming over the Heroku docs again, I learned about setting "config vars" ...and viola! The app now built the url correctly, got authenticated by Mailchimp and sucessfully completed the post request. This was a big moment for me, an one I shall not soon forget!

Express.js:
- creating different post routes (home, success, failure)
- using body-parser middleware for parsing incoming request bodies
- using the https Node.js module
- using the dotenv module to load environment variables from .env into process.env
- how to package and stringify JSON data to sent to Mailchimp

Mailchimp API:
- how to properly configure root url for making POST requests to an audience list.

Git
- how to push to multiple remotes at the same time (GitHub and Heroku)

Heroku:
- how to prepare my app for deployment on Heroku's servers
- using the heroku CLI
- pushing commits to heroku's git repo
- scaling the app with heroku dynos
- viewing heroku logs
- Procfile creation
- declaring app denendencies via package.json
- running app locally via heroku local
- how to define config vars to externalize encryption keys or external resource addresses
