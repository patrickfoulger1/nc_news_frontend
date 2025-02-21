# NC News-frontend 📰

![Stack](https://skillicons.dev/icons?i=js,nodejs,react,css)

The website is hosted at https://news-spin.netlify.app/

You can find more details about the backend database, and api I made for this project here -> [backend](https://github.com/patrickfoulger1/nc_news) 

# What is it?

A front end react project serving up and posting users, articles and comments from a postgres database. 

## Features

- Explore through various articles
- Post and delete comments
- Like your favorite articles
- Sort articles by topic, comment counts, like counts and date created
- Interact with a full stack application built from scratch using Node.js, Express.js PostgresSql, and React

- ## Local Installation

Make sure you have Node.js and npm installed

[![Node.js](https://skillicons.dev/icons?i=nodejs)](https://nodejs.org/en/download) Requires Node.js v22.9.0  
[![Node.js](https://skillicons.dev/icons?i=npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) Requires npm 10.8.3

Clone the repo

```sh
git clone https://github.com/patrickfoulger1/nc_news
```

Install dependencies

```sh
npm i
```

Run website locally

```sh
npm run dev
```

---

## Initial Design 
![image](https://github.com/user-attachments/assets/66d00a31-0a14-4304-8ad3-eebd8ac1695c)
![image](https://github.com/user-attachments/assets/51350681-055b-4f9f-b3f9-2b46158ebf56)
![image](https://github.com/user-attachments/assets/39546af2-990e-4adf-a125-04480cadba5b)

## To Note
My initial plan for my app was to have a stack of articles you could swipe through, you'd be able to filter and sort this stack by most liked, most recent etc You'd be able to click on the articles topics to view only articles of that topic and you'd be able to open up a comment pane to see and post comments on the articles.

After starting work on the project it became clearer having a dedicated page for each article made a lot of sense, so I decided to split the logic of the site into two main pages. The first a page where users can explore and filter through articles to find things they might want to look at. And a 2nd dedicated page branching off the explore page where users can interact with the articles, see their full contents, post comments and add likes. 

I added a dedicated nav that connects these two pages together, and also changes to give the user different functionality depending what page they're visitng. 

![image](https://github.com/user-attachments/assets/f8e7e785-1b98-4d71-b052-ec14d9b21f64)
![image](https://github.com/user-attachments/assets/51b37419-f69d-41ef-a04e-2fe016158860)

The website for phones tries to take advantage of their colorful screens and touch screen navigation. I took a simple approach to the UI to try and leave room for a colorful carouselle of articles.

![image](https://github.com/user-attachments/assets/67ea2c95-e636-49c8-ac7c-12bfb9769d0f)
![image](https://github.com/user-attachments/assets/23109833-a182-4253-8112-42c16f88e827)

As the website scales in width it adds colums to keep making use of the space

![image](https://github.com/user-attachments/assets/f56c4d3b-5b73-47c2-9a82-8df518fb9002)
![image](https://github.com/user-attachments/assets/fc9cf69b-1f02-4c7f-8ac2-9001b1804435)

To keep the UI non clutterd I tucked the sort controls away in a pop up drawer

![image](https://github.com/user-attachments/assets/f85dcfe1-1ab6-4c4d-90ad-d2a08aa77889)

On the article page the main article content fits nicely within the boundaries of a phone screen

![image](https://github.com/user-attachments/assets/9ab2f2a8-5934-4a28-862d-14ba3199af54)

The like article button is on the nav so it follows you down when you read the comments.
For the comments future plans would be to add pagination, and add user profile pictures

![image](https://github.com/user-attachments/assets/0af7da9d-7c46-47f9-b275-428dbdb50f7e)

When you post a comment the post comment button, shows the comment is being sent so the user knows to wait for the database to update. Once the comment is succesfully posted it will be added to the list of comments. Comments made by the current user have a delete button that can remove the comments from the db 
![image](https://github.com/user-attachments/assets/6a57e826-ffbe-47e5-839a-9a55c3788ba8)
![image](https://github.com/user-attachments/assets/f1250044-22c0-40c5-ab27-10957fad51d9)

On refresh the comment will unrender completely, but stays with a "comment removed" message to keep the user informed on what they just did. If an comment fails to post, no comment will be added to the list and the user will see that they couldn't post a comment. 

Right now the website is automatically logged in as a defualt singles user. In the future the next steps would be to add a user page, sign up page, and authentication. 
























## Local Installation

Make sure you have Node.js and npm installed

[![Node.js](https://skillicons.dev/icons?i=nodejs)](https://nodejs.org/en/download) Requires Node.js v22.9.0  
[![Node.js](https://skillicons.dev/icons?i=npm)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) Requires npm 10.8.3

Clone the repo

```sh
git clone https://github.com/patrickfoulger1/nc_news
```

Install dependencies

```sh
npm i
```

Run website locally

```sh
npm run dev
```

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
