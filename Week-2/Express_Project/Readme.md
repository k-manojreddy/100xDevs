# Hospital in Memory - Kidney Health Management

This is a simple Express.js project to manage and track kidney health for a user named "Manoj". The project demonstrates basic CRUD (Create, Read, Update, Delete) operations with Express.js and handles in-memory data. It provides a RESTful API to check kidney health, add kidneys, update unhealthy kidneys, and remove unhealthy kidneys.

## Features

- **GET**: Check the number of kidneys and their health status (healthy/unhealthy).
- **POST**: Add a new kidney with its health status.
- **PUT**: Replace an unhealthy kidney and make it healthy.
- **DELETE**: Remove unhealthy kidneys.

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js

## Project Structure

```bash
/Express_Project
├── index.js            
└── README.md           
```
## Endpoints
1. **GET**:
     Retrieve the number of kidneys John has and their health status.

*Response Example* :

```json
{
  "numOfKidneys": 2,
  "numOfHealthyKidneys": 1,
  "unhealthykidneys": 1
}
```

2. **POST**:
    Add a new kidney for John.

*Request Body Example*:
```json
{
  "isHealthy": true
}
```

```
{
  "msg": "Done"
}
```


*Response Example* :
```json
{
  "numOfKidneys": 3,
  "numOfHealthyKidneys": 2,
  "unhealthykidneys": 1
}
```

3. **PUT**:
Update unhealthy kidneys and make them healthy.

*Response Example*:
If unhealthy kidneys exist and are updated:
```
{
  "statusofPut": "Done"
}
```
If all kidneys are already healthy:
```
{
  "msg": "No unhealthy kidneys to update"
}
```
4. **DELETE**:
Remove unhealthy kidneys.

*Response Example*:
If unhealthy kidneys are removed:

```json
{
  "statusOfDelete": "Done"
}
```
If no unhealthy kidneys exist:
```json
{
  "msg": "You Have no bad Kidneys"
}
```

How to Run Locally
=
Clone the repository:

```
git clone https://github.com/your-username/hospital_in_memory.git
```
Navigate to the project directory:

```
cd hospital_in_memory
```
Install dependencies:

```
npm install express
```
Start the server:

```
node index.js
```
The server will start running on http://localhost:3000.
Requires Postman for executing corresponding endpoints
