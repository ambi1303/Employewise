
EmployWise Frontend Assignment

This is a React-based user management application for the EmployWise Frontend Assignment. It integrates with the Reqres API (https://reqres.in/) to perform user authentication, fetch a paginated list of users, and allow editing, deleting, and updating user details.

Live Demo
----------
Check out the live application here: https://employewise.onrender.com/

Table of Contents
-----------------
- Overview
- Features
- Installation
- Usage
- API Endpoints
- Deployment
- Technologies Used
- Assumptions & Considerations
- License

Overview
--------
This application is built as part of the EmployWise Frontend Assignment. The app is divided into three levels of functionality:

1. Level 1: Authentication Screen
   - Users can log in using the credentials:
     Email: eve.holt@reqres.in
     Password: cityslicka
   - On successful login, the token is stored in local storage, and the user is redirected to the Users List page.

2. Level 2: List All Users
   - After logging in, the app displays a paginated list of users fetched from the endpoint GET /api/users?page=1.
   - User details (first name, last name, and avatar) are shown in a card layout with pagination controls.

3. Level 3: Edit, Delete, and Update Users
   - Each user card includes options to edit or delete the user.
   - Clicking Edit opens a pre-filled form to update the user's first name, last name, and email using PUT /api/users/{id}.
   - Clicking Delete removes the user using DELETE /api/users/{id}.
   - Success and error messages are shown based on the outcome of these operations.

Additionally, the application includes client-side search and filtering for the user list.

Features
--------
- Authentication:
  - Log in using the provided credentials.
  - Token is stored in local storage for session persistence.
  
- User Management:
  - Display a paginated list of users.
  - Client-side search and filtering of user list.
  - Edit user details via a pre-filled form.
  - Delete users with confirmation and error handling.

- Responsive UI:
  - Custom CSS for a clean and user-friendly experience on both desktop and mobile.

Installation
------------
1. Clone the repository:
   git clone https://github.com/ambi1303/Employewise.git
   cd Employewise

2. Install dependencies:
   npm install

3. Build the project:
   npm run build

Usage
-----
1. Run the application locally:
   npm start
   The app will run on http://localhost:3000.

2. Login Credentials:
   Email: eve.holt@reqres.in
   Password: cityslicka

3. Testing Endpoints:
   Use Postman or your preferred API tool to test the following endpoints:
   - Login: POST https://reqres.in/api/login
   - Fetch Users: GET https://reqres.in/api/users?page=1
   - Update User: PUT https://reqres.in/api/users/{id}
   - Delete User: DELETE https://reqres.in/api/users/{id}

API Endpoints
-------------
- Login: POST https://reqres.in/api/login
  Request Body:
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }

- Fetch Users: GET https://reqres.in/api/users?page=1

- Update User: PUT https://reqres.in/api/users/{id}
  Request Body Example:
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  }

- Delete User: DELETE https://reqres.in/api/users/{id}

Deployment
----------
This application is hosted on Render. The deployment settings for a Create React App project include:
- Build Command: npm install && npm run build
- Publish Directory: build
The live URL is https://employewise.onrender.com/.

Technologies Used
-----------------
- Frontend: React, React Router v6
- HTTP Requests: Axios
- Styling: Custom CSS (responsive design)
- Deployment: Render

Assumptions & Considerations
----------------------------
- The application assumes the use of the provided static credentials for login.
- Error handling is implemented to display messages for API failures.
- Client-side search is implemented only for the currently fetched page of users.
- For production deployment, further enhancements to security and performance may be needed.

License
-------
This project is licensed under the MIT License.
"""

