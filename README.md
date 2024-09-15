# Node.js CRUD App Backend

A simple CRUD (Create, Read, Update, Delete) API built using **Node.js** with **Express.js** and **MongoDB** as the database.

# Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Environment Configuration](#3-environment-configuration)
  - [4. Running the App](#4-running-the-app)
  - [5. Access the API](#5-access-the-api)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- RESTful API for managing a resource (e.g. products)
- Supports CRUD operations:
  - **Create** a new entry
  - **Read** entries (single or all)
  - **Update** an existing entry
  - **Delete** an entry
- Uses **MongoDB** for data storage
- **Express.js** for routing and handling HTTP requests
- Environment configuration using **.env** file
- Swagger documentation for API routes

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)
- **MongoDB** (Local or remote instance)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mahirsust/nodejs-crud-app-backend.git
cd nodejs-crud-app-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a **.env** file in the root directory of the project. Refer to **.env.example** for the required variables:

```bash
# Environment variables.
STATUS=development
# Development port
DEV_PORT=3000
# Production port
PROD_PORT=8080

# DB CONFIG
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
DB_COLLECTION_NAME=your_mongodb_collection_name
DB_APP_NAME=your_mongodb_app_name
```

Replace the placeholders with your actual MongoDB credentials and app configurations.

### 4. Running the App

#### In Development Mode

```bash
npm run dev
```

The application will run on the port defined in **DEV_PORT** (default is 3000).

#### In Production Mode

```bash
npm start
```

The application will run on the port defined in **PROD_PORT**.

### 5. Access the API

The base URL for accessing the API is:

```bash
http://localhost:[PORT]/
```
Replace **[PORT]** with the port number your server is running on (e.g., 3000 or 8080).

You can interact with the API using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

Here are some example endpoints:
- **GET** `/api/items` - Get all items
- **POST** `/api/items` - Create a new item
- **GET** `/api/items/:id` - Get an item by ID
- **PUT** `/api/items/:id` - Update an item by ID
- **DELETE** `/api/items/:id` - Delete an item by ID

Replace **items** with the resource name (e.g. products).

## API Documentation

This project includes a Swagger file (**swagger.yaml**) for API documentation. You can visualize the documentation using [Swagger UI](https://swagger.io/tools/swagger-ui/) or similar tools. To view the interactive Swagger UI in your browser, use the following URL once the server is running:

```bash
http://localhost:[PORT]/api-docs
```

This URL will give you access to the full API documentation where you can interact with the endpoints directly from the browser.

## Folder Structure

```plaintext
├── controllers   # API route logic
├── models        # Database schemas
├── routes        # API routes
├── .env.example  # Environment variable example
├── index.js      # Application entry point
├── swagger.yaml  # Swagger API documentation
└── package.json  # Project metadata and dependencies
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Swagger**: API documentation

## Usage

Once the app is running, you can test the CRUD functionality by sending HTTP requests to the available endpoints. Here are some common scenarios:

- **Create a new item**: Send a POST request to **/api/items** with the item data in the request body.
- **Retrieve all items**: Send a GET request to **/api/items** to get a list of all items in the collection.
- **Retrieve a single item**: Send a GET request to **/api/items/:id** where **:id** is the **ID** of the item.
- **Update an item**: Send a PUT request to **/api/items/:id** with the updated data.
- **Delete an item**: Send a DELETE request to **/api/items/:id**.

You can use a tool like Postman, curl, or even a frontend application to interact with the API.

## Contributing

Feel free to open issues or submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
