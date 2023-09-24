# MySql_CRUD_API
# Node.js API with Postman

This is a simple Node.js API that interacts with a MySQL database. You can use Postman to send POST requests to insert data and GET requests to retrieve data.

## Prerequisites

- Node.js installed on your machine
- MySQL database setup with a database named 'db1'
- Postman installed on your machine

## Setup

1. Clone the repository:
git clone [<repository_url>](https://github.com/aryananda2001/MySql_CRUD_API/)
2. Install the required dependencies:
npm install
3. Start the server:
node app.js
The server will start on port 3000 for POST requests and port 4000 for GET requests.

## Usage

### POST Request

To insert data, send a POST request to `http://localhost:3000/post` with the following JSON body:
json 
{ 
  "name": "Arya Nanda", 
  "id": 1, 
  "mark": 100 
}
Replace the values with your desired data.

### GET Request

To retrieve data, send a GET request to `http://localhost:4000/get`. The API will return a JSON response with all the student records in the database.

## Conclusion

You have successfully set up and used the Node.js API with Postman to get and post data to a MySQL database. Feel free to explore and modify the code to suit your needs.
