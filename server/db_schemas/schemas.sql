CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(60) NOT NULL
);

CREATE TABLE channels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE channel_messages (
    id SERIAL PRIMARY KEY,
    channel_id INTEGER REFERENCES channels (id) NOT NULL,
    author_id INTEGER REFERENCES users (id) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE private_messages (
    id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES users (id) NOT NULL,
    receiver_id INTEGER REFERENCES users (id) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);