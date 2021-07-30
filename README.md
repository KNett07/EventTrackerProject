# EventTrackerProject
## Full-Stack Spring/REST/JPA Project for Skill Distillery

# Overview
When a dog owner takes on a new veterinarian, walker, or the dog is in someone else's care, there is always a long conversation about who the dog is, what they like, and many times more importantly, what they do not like. The application RuffLife has been created with dog owners in mind, intended to be a one stop shop for listing the important details about your dog that everyone needs to know. There is mapping for the functionality to list the dogs in the database, look up a dog by their id, add a new dog, update a dog as their preferences change, and delete one in the event you no longer need that information.

## REST Endpoints

| Method | URI                | Request Body | Response Body |
|--------|--------------------|--------------|---------------|
| GET    | `/api/dogs`      |              | Collection of representations of all_dog_resources
| GET    | `/api/{id}`      |              | Collection of representations of all all_dog_resources resources
| GET    | `/api/create`      |              | Collection of representations of all all_dog_resources resources
| GET    | `/api/update`      |              | Collection of representations of all all_dog_resources resources
| GET    | `/api/delete`      |              | Collection of representations of all all_dog_resources resources



## Technologies Used
Java, SQL, MySQLWorkBench, Spring Boot, REST, JPA, Postman

### Lessons Learned
More practice in laying foundation for a full stack application. Creating a new project, linking JPA with Boot, and mapping with Postman. This is the first installment of a growing individual project, but the lessons learned are already plenty. There are more and more moving parts to full stack development, and many of those moving parts are actually options. There are so many ways to accomplish a task, it can be overwhelming to try and choose a direction. I am learning to rely on the skills I have developed in order to lay a clear path.
