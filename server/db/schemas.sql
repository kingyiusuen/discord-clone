CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE channels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users (id) NOT NULL,
    channelId INTEGER REFERENCES channels (id) NOT NULL,
    content TEXT NOT NULL,
    createdAt TIMESTAMPTZ
);