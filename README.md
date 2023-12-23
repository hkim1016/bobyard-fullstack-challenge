# bobyard-fullstack-challenge

## Backend Setup
Go into the backend directory (`bobyard-backend`) and run `npm install` <br>
Run `nodemon index.js` or `npm run start` to start the backend environment <br>
Make sure you also have POSTGRES set up on your machine and enter these commands to set up the database and table:
```
create database bobyard;
\c bobyard;
create table comments (
    id bigint serial primary key,
    date timestamp with time zone not null default now(),
    author text null,
    text text null,
    likes bigint null default '0'::bigint,
    image text null
);
```

## Frontend Setup
Go into the backend directory (`bobyard-frontend`) and run `npm install` <br>
Run `npm run dev` to start the frontend environment <br><br>

## What more I would have done
I unfortunately was not able to finish all of the requirements listed in the document. Ignoring the frontend design/looks, I would have added a button to the `<div>` containing the individual comments that would allow me to delete a comment. The use of `useEffect` would allow the page to be automatically refreshed to display the remaining comments. I would have create a new page for both updating a comment's text and creating a new comment respectively. From then on, I would focus on the design of the pages, making them look nice.