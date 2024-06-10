# Node.js Fundamentals

Welcome to the Node.js Fundamentals project documentation. This project serves as a practical exploration of fundamental Node.js concepts by building a basic API that allows you to create, list, update, and delete users. The project emphasizes utilizing core Node.js features, minimizing third-party dependencies, and leveraging native Node.js modules to accomplish these tasks.

## Getting Started

To run the server locally, follow these steps:

1. Clone the project repository:

```
git clone https://github.com/your-username/node-js-fundamentals.git
```

2. Navigate to the project folder:

```
cd nodejs-fundamentals
```

3. Install the required dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

The server will start, and you can access the API endpoints using tools like [Insomnia](https://insomnia.rest/) to test the calls.

**Note:** The API endpoints are accessible at `http://localhost:3333`.

## Project Structure

The project follows a structured layout to maintain clarity and modularity:

- `server.js`: Entry point of the application.
- `routes.js`: Defines the API endpoints and their corresponding handlers.
- `database.js`: Manages the data storage using the `fs` module to read and write data.
- `utils/build-route-path.js`: A utility to construct route paths.
- `utils/extract-query-params.js`: A utility to extract query parameters from requests.
- `middlewares/json.js`: Middleware to parse JSON data in requests.

## API Endpoints

<!-- ### Get All Users

- **Endpoint:** `GET http://localhost:3333/users`
- **Description:** Retrieve a list of all users.
- **Response:** An array of user objects.

### Search Users

- **Endpoint:** `GET http://localhost:3333/users?search=query`
- **Description:** Search for users by name or email using the provided query parameter.
- **Response:** An array of user objects that match the search criteria.

### Create User

- **Endpoint:** `POST http://localhost:3333/users`
- **Description:** Create a new user with the provided data.
- **Request Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
  ```

  - **Response:** The created user object.

  ### Update User

- **Endpoint:** `PUT http://localhost:3333/users/:id`
- **Description:** Update user data for the user with the specified `id`.
- **Request Body:**

  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com"
  }
  ```

- **Response:** The created user object.

### Delete User

- **Endpoint:** `DELETE http://localhost:3333/users/:id`
- **Description:** Delete the user with the specified `id`.
- **Response:** A success message indicating the deletion.

## Delete User

User data is stored in a physical file named `db.json` using the `database.js` module. This approach ensures data is not lost between server restarts.
 -->

## License

This project is licensed under the [MIT License](LICENSE).
