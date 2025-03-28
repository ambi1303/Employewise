# EmployWise Frontend Assignment

This is a React-based user management application for the EmployWise Frontend Assignment. It integrates with the [Reqres API](https://reqres.in/) to perform user authentication, fetch a paginated list of users, and allow editing, deleting, and updating user details.

## Live Demo

Check out the live application here: [https://employewise.onrender.com/](https://employewise.onrender.com/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Assumptions & Considerations](#assumptions--considerations)
- [License](#license)

## Overview

This application is built as part of the EmployWise Frontend Assignment. The app is divided into three levels of functionality:

1. **Level 1: Authentication Screen**  
   - Users can log in using the credentials:  
     **Email:** eve.holt@reqres.in  
     **Password:** cityslicka  
   - On successful login, the token is stored in local storage, and the user is redirected to the Users List page.

2. **Level 2: List All Users**  
   - After logging in, the app displays a paginated list of users fetched from the endpoint `GET /api/users?page=1`.
   - User details (first name, last name, and avatar) are shown in a card layout with pagination controls.

3. **Level 3: Edit, Delete, and Update Users**  
   - Each user card includes options to edit or delete the user.
   - Clicking **Edit** opens a pre-filled form to update the user's first name, last name, and email using `PUT /api/users/{id}`.
   - Clicking **Delete** removes the user using `DELETE /api/users/{id}`.
   - Success and error messages are shown based on the outcome of these operations.

Additionally, the application includes client-side search and filtering for the user list.

## Features

- **Authentication:**  
  - Log in using the provided credentials.
  - Token is stored in local storage for session persistence.
  
- **User Management:**  
  - Display a paginated list of users.
  - Client-side search and filtering of user list.
  - Edit user details via a pre-filled form.
  - Delete users with confirmation and error handling.

- **Responsive UI:**  
  - Custom CSS for a clean and user-friendly experience on both desktop and mobile.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ambi1303/Employewise.git
   cd Employewise
