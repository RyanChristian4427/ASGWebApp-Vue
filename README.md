# ASGWebApp-Vue

This project is a rewrite of my ASGWebApp that was a client project from university. For that project, we met with a client who requested a web server and a relational database to replace his previous booking and progress system that was handled in Excel. The project we built was written in Spring Boot using MySQL as the database system. However, I had wanted to try out other technologies, and redoing a project was the simplest solution.

Here I am using Vue.js as an SPA to consume an API I've written in C#. All state is managed with Vuex, and the project is built upon the Vue-CLI, so it includes resources like Webpack and TypeScript, and the styling is done in SCSS. 

This SPA will be updated in conjuction while the API back end is being built.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them

```
NPM
```

### Running

To run the web server on localhost, you will need to run from the root directory: 

```
npm install
npm run serve
```

Navigate to https://localhost:8080/login in your browser of choice to begin using the system. However, without a back end, this is an extremely limited tool. For full functionality, download and follow the instructions in the README to start the web API from [ASGWebApp-ASP](https://github.com/RyanChristian4427/ASGWebApp-ASP). As of now, the content is quite limited as I continue to learn how to fully use the wide range of tools needed to build an effective front end.

## Authors

* **Ryan Christian** - *Entire Project* - [Ryan Christian](https://github.com/RyanChristian4427)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
