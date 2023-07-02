# Phase-2-project2
My app use components and client-side routes. Also, I pull information from my json file
with fetch and post requests. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Backend Deployment
https://github.com/bwallace4/json-server-template.git
