# Anythink Market

This project contains both a FastAPI server implemented in Python and an Express.js server implemented in Node.js. Both provide task management functionality with identical APIs.

## Project Structure

The project has the following files and directories:

### Python Server
- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with task management routes.
- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.
- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server.
- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server.

### Node.js Server
- `node-server/index.js`: This file contains the implementation of the Express.js server with task management routes.
- `node-server/package.json`: This file lists the dependencies and scripts for the Node.js server.
- `node-server/Dockerfile`: This file is used to build a Docker image for the Express.js server.

### Docker Configuration
- `docker-compose.yml`: This file is used to define and run both servers as multi-container Docker applications.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker images for both servers and start the containers defined in the `docker-compose.yml` file.

- The servers should now be running:
  - **Python FastAPI server**: accessible at port `8000` (http://localhost:8000)
  - **Node.js Express server**: accessible at port `8001` (http://localhost:8001)

## API Routes

Both servers provide identical API routes for task management:

### Available Endpoints
- `GET /`: Returns "Hello World" message
- `POST /tasks`: Adds a task to the task list. The request body should contain `{"text": "task description"}`
- `GET /tasks`: Retrieves the complete task list

### Server Access
- **Python FastAPI server**: http://localhost:8000
- **Node.js Express server**: http://localhost:8001
