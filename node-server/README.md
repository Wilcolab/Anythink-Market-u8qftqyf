# Express Server

A simple Express.js server with task management endpoints that listens on port 8001.

## Features

- Express.js server running on port 8001
- Nodemon for automatic server restart on code changes
- Basic request logging middleware
- Docker support for containerized deployment

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Server

#### Development Mode (with auto-restart)
```bash
npm start
# or
yarn start
```

The server will start on port 8001 and automatically restart when you make changes to the code.

#### Using Docker

1. Build the Docker image:
   ```bash
   docker build -t express-server .
   ```

2. Run the container:
   ```bash
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001`

## Project Structure

```
.
├── index.js          # Main server file
├── package.json      # Project dependencies and scripts
├── Dockerfile        # Docker configuration
└── README.md         # This file
```

## Adding Endpoints

The server currently includes the following endpoints:

- `GET /` - Returns "Hello World"
- `GET /tasks` - Returns all tasks in JSON format
- `POST /tasks` - Adds a new task (expects JSON body with `text` field)

To add more endpoints to the server, edit the `index.js` file and add routes before the `app.listen()` call:

```javascript
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
```
