# Microservices Blog

## Objective
Learn about microservices creating a basic blog that allows to create a post - without any description or body - add a comment in the post, list posts and list commentaries of each post.

## Features
- Posts:
  - Create a post;
  - List all posts;
- Comments:
  - Create a comment;
  - List all comments;

## Architecture
- React App (Front-end)
- Post Service
- Comments Service
- Event Bus
  - Implementations: RabbitMQ, Kafka, NATS, etc...
  - Receives events, publishes them to listeners
