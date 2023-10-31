# My 4th of July app
My app use components and client-side routes. To render information about the 4th of July. I wanted to get creative and be informative with the delivery of my project. Also, I pull information from my json file with fetch and post requests to display names and text. For my second project I wanted to do things a little differently. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Backend Deployment
https://github.com/bwallace4/json-server-template.git

## Installation

Install my project with git clone  git@github.com:bwallace4/Phase-2-project2.git
run backend and frontend together 

```bash
 $ npm start json-server-template
 $ npm start project 2

```

## Instructions

On the site you navigate to the contributors page to see everyone, who made the 4th of July possible. Then, on the blog page you'll get to be interactive and can post a message to the site. 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage/Examples
```
  fetch("http://localhost:3300/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then((r) => r.json())
      .then((newblog) => setPosts([...posts, newblog]))
```
This is my post request where I render information from the json file to my blog.js

## Roadmap

- Extend my knowledge of css

- Extend my knowledge of html

- Extend my knowledge of js






