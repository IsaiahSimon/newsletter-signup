<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IsaiahSimon">
    <img src="./public/images/logo_500x500_dark.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Newsletter Sign Up</h3>

  <p align="center">
    A personal newsletter sign up app with Mailchimp API integration!
    <br />
    <a href="https://github.com/IsaiahSimon/newsletter-signup"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://isimondev-newsletter.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/IsaiahSimon/newsletter-signup/issues">Report Bug</a>
    ·
    <a href="https://github.com/IsaiahSimon/newsletter-signup/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://isimondev-newsletter.herokuapp.com/)

Users can fill out the sign up form with the required information and the Express server will make a POST request to an audience list via Mailchimp's API.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.dev/)
* [Express.js](https://expressjs.com/)
* [Heroku](https://www.heroku.com/)
* [Bootstrap](https://getbootstrap.com/)
* [JavaScript](https://www.javascript.com/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LESSONS LEARNED -->
## Lessons Learned
<details>
<summary>
Learned a **LOT** from building this project, but I would say my biggest takeaway was figuring out why the app worked perfectly on my local and heroku's local environment, yet crashed spectacularly when deployed...
</summary>

I discovered that the Mailchimp url wasn't being built properly during deployment due to being "blind" to the environment variables I used.

The local versions saw these env variables perfectly fine, but for some reason heroku couldn't. After coming over the Heroku docs again, I learned about setting "config vars" ...and viola! The app now built the url correctly, got authenticated by Mailchimp and sucessfully completed the post request. This was a big moment for me, an one I shall not soon forget!


**Express.js:**
- creating different post routes (home, success, failure)
- using body-parser middleware for parsing incoming request bodies
- HTTPS Node.js module
- dotenv module and process.env
- packaging and stringify JSON data to be sent to Mailchimp

**Mailchimp API:**
- configure root url for making POST requests to an audience list.

**Git**
- push to multiple remotes at the same time (GitHub and Heroku)

**Heroku:**
- prepare app for deployment on Heroku's servers
- Heroku CLI
- pushing commits to Heroku's git repo
- scaling the app with Heroku dynos
- Heroku logs
- Procfile
- declaring app denendencies via package.json
- running app locally via Heroku local
- define Config Vars to externalize keys or external resource addresses
</details>

<!-- GETTING STARTED -->
## Getting Started
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/IsaiahSimon/newsletter-signup.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Set up the project locally or use the [demo](https://isimondev-newsletter.herokuapp.com/) of the fullstack app.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Integrate with Mailchimp API
- [x] Deploy on Heroku


See the [open issues](https://github.com/IsaiahSimon/newsletter-signup/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@iSimonDev](https://twitter.com/iSimonDev) - isimon.dev@gmail.com

Project Link: [https://github.com/IsaiahSimon/newsletter-signup](https://github.com/IsaiahSimon/newsletter-signup)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Working with multiple Git remotes](https://jigarius.com/blog/multiple-git-remote-repositories)
* [Preparing a Codebase for Heroku Deployment](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)
* [Heroku Express App Vs Netlify Serverless App](https://www.youtube.com/watch?v=hpvCd5WKGLU)
* [A better git log](https://coderwall.com/p/euwpig/a-better-git-log)
* [Define config vars](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-config-vars)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IsaiahSimon/newsletter-signup.svg?style=for-the-badge
[contributors-url]: https://github.com/IsaiahSimon/newsletter-signup/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IsaiahSimon/newsletter-signup.svg?style=for-the-badge
[forks-url]: https://github.com/IsaiahSimon/newsletter-signup/network/members
[stars-shield]: https://img.shields.io/github/stars/IsaiahSimon/newsletter-signup.svg?style=for-the-badge
[stars-url]: https://github.com/IsaiahSimon/newsletter-signup/stargazers
[issues-shield]: https://img.shields.io/github/issues/IsaiahSimon/newsletter-signup.svg?style=for-the-badge
[issues-url]: https://github.com/IsaiahSimon/newsletter-signup/issues
[license-shield]: https://img.shields.io/github/license/IsaiahSimon/newsletter-signup.svg?style=for-the-badge
[license-url]: https://github.com/IsaiahSimon/newsletter-signup/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/isaiahsimon101
[product-screenshot]: ./public/images/gif-isimondev-newsletter.gif