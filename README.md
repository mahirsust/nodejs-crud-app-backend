# Node.js CRUD App Backend

A simple CRUD (Create, Read, Update, Delete) API built using **Node.js** with **Express.js** and **MongoDB** as the database.

## Features

- RESTful API for managing a resource (e.g., users, products)
- Supports CRUD operations:
  - **Create** a new entry
  - **Read** entries (single or all)
  - **Update** an existing entry
  - **Delete** an entry
- Uses **MongoDB** for data storage
- **Express.js** for routing and handling HTTP requests
- Environment configuration using `.env` file
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

Create a .env file in the root directory of the project. Refer to .env.example for the required variables:

```bash
# .env file
STATUS=development
DEV_PORT=3000
PROD_PORT=8080
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
DB_COLLECTION_NAME=your_mongodb_collection_name
DB_APP_NAME=your_mongodb_app_name
```

Replace the placeholders with your actual MongoDB credentials and app configurations.

