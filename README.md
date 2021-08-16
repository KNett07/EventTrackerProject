# EventTrackerProject

## Full-Stack Spring/REST/JPA Project for Skill Distillery

# Overview

When a dog owner takes on a new veterinarian or dog walker, or when a dog lover finds a cute friendly dog on their daily walk, there is always a long conversation about who the dog is. The application RuffLife has been created with dog owners and lovers in mind, intended to be a spot (get it? Spot?) for listing the important details about your furry friend that everyone needs to know.

Currently, there is mapping for the functionality to list dogs in the database, look up a dog by their name, add a new dog, update a dog as their preferences change, and delete a record.

Additionally, there has been a Javascript and HTML file added to offer greater data manipulation with a more front end language and the use of AJAX.

Finally, RuffLife offers the strong foundation of Java with the ease of front end manipulation with Angular. Core CRUD functionality remains and a more aesthetic front end boosts user experience.

## REST Endpoints

| Method | URI                | Request Body | Response Body |
|--------|--------------------|--------------|---------------|
| GET    | `/api/dogs`      |   List All Dogs    | Collection of representations of all_dog_resources
| GET    | `/api/dog/{name}`      |  List Dog By Name  | Single representations of dog_resource_by_name
| POST    | `/api/dog`      |    Add a Dog    | Add to the Collection of representations of all_dog_resources
| PUT    | `/api/dog`      |    Update a Dog   | Update a single representation in the Collection of all_dog_resources
| DELETE    | `/api/dog/{id}`      |    Delete a Record  | Remove a single representation from the Collection of all_dog_resources



## Technologies Used
Java, SQL, MySQLWorkBench, Spring Boot, REST, JPA, Postman, Javascript, HTML, Angular, CSS, deployed to AWS EC2 server

### Lessons Learned

Practice in laying foundation for a full stack application, and how to layer up from there. I created a new project, linked JPA with Boot, and mapped with Postman. This is the first installment of a growing individual project, but the lessons learned are already plenty. There are more and more moving parts to full stack development, and many of those moving parts are actually options. There are so many ways to accomplish a task, it can be overwhelming to try and choose a direction. I am learning to rely on the skills I have developed in order to lay a clear path for the user.

It can be incredibly challenging to decide the best option, and utilize the specific syntax and fulfill all standards. However, once accomplished it is incredibly satisfying to look back and review the path that arrived at a solution.

Overall, the most important is to remain diligent and never hesitate to remind yourself of the end goal, and all you have accomplished up to your current state. It is easy to lose yourself in the red.
