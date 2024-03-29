# Discord Clone

A real-time chat application that mimics Discord.

![demo](https://user-images.githubusercontent.com/14181114/144297551-b79aff6a-f3f0-4791-b089-14c3475778a2.gif)

## Features

- Show who is typing.
- Show who is online.
- Allow users to edit/delete their own messages.

## Technologies

- JavaScript
- React
- Redux
- Styled components
- Node.js
- Express.js
- Socket.io
- PostgreSQL

## Installation

- Clone the repo.
- Run `npm install` to install dependencies for the server.
- Run `cd client` and then `npm install` to install dependencies for the client.

## Local Development

- Create a `.env` file in `server`, following the format of the `.evn.example` file. Fill in the details.
- Run `npm run client` to start the client.
- Run `npm run server` to start the server.
- Run `npm run dev` to start the client and the server concurrently.

## Deploy to Heroku

Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

Login to your Heroku account.

```
heroku login
```

Create a new Heroku app.

```
heroku create YOUR_APP_NAME
```

Setup Heroku Postgres Database. This should return a `DATABASE_URL`.

```
heroku addons:create heroku-postgresql:hobby-dev --app YOUR_APP_NAME
```

Log into the Heroku Postgre database.

```
heroku pg:psql DATABASE_URL --app YOUR_APP_NAME
```

Copy and paste the content in `server/src/db/schemas.sql` to create the tables.

Copy and paste the content in `server/src/db/sample_data.sql` to create the channels.

Use `\q` to quit the database.
