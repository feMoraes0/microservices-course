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
- Query Service
  - Responsable for group post and comments
- Event Bus
  - Implementations: RabbitMQ, Kafka, NATS, etc...
  - Receives events, publishes them to listeners
- Moderation Service

## Notes

### Dealing with missing events
When you have a service that goes down, or is created after some time, and loses some events you have to find a way to resync and get all the data that you lost during that period.
- To prevent it you can storage all the events in the event bus service and create a way that asks event bus all the events since the last one that you received (or all of them since beginning).
