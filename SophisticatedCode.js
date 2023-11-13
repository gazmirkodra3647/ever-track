/*
Filename: SophisticatedCode.js

This code demonstrates a complex implementation of a social media platform, including user authentication, posting, commenting, and liking functionality.

*/

// User class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.loginStatus = false;
  }

  login() {
    // Simulating authentication
    // ...
    this.loginStatus = true;
    console.log(`${this.username} logged in successfully.`);
  }

  logout() {
    this.loginStatus = false;
    console.log(`${this.username} logged out successfully.`);
  }

  post(content) {
    if (this.loginStatus) {
      console.log(`${this.username} posted: ${content}`);
    } else {
      console.log("Cannot post. User is not logged in.");
    }
  }

  comment(post, comment) {
    if (this.loginStatus) {
      console.log(`${this.username} commented on ${post}: ${comment}`);
    } else {
      console.log("Cannot comment. User is not logged in.");
    }
  }

  like(post) {
    if (this.loginStatus) {
      console.log(`${this.username} liked ${post}.`);
    } else {
      console.log("Cannot like a post. User is not logged in.");
    }
  }
}

// Post class
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }
}

// Creating users
const user1 = new User("john_doe", "password123");
const user2 = new User("emma_roberts", "qwerty789");

// Logging in users
user1.login();
user2.login();

// Creating posts
const post1 = new Post("Hello, world!", user1);
const post2 = new Post("Check out this cool picture!", user2);

// Users interacting with posts
user1.post("I'm having a great day!");
user2.comment(post1, "Glad to hear it!");
user2.like(post1);

user2.post("Just reached 1000 followers!");
user1.comment(post2, "Congratulations!");
user1.like(post2);

// Logging out users
user1.logout();
user2.logout();

console.log("Executed successfully.");