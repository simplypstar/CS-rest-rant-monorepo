# Project REST-Rant
REST-Rant is an app where users can review restaurants.

## Setup
First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5001
DB_USERNAME=rest_rant_user
DB_PASSWORD=password
DB_DATABASE=rest_rant
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

## API (http://localhost:5001)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /places                              | Places index page                         |
| POST   | /places                              | Create new place                          |
| GET    | /places/:placeId                     | Details about a particular place          |
| PUT    | /places/:placeId                     | Update a particular place                 |
| DELETE | /places/:placeId                     | Delete a particular place                 |
| POST   | /places/:placeId/comments            | Create a comment about a particular place |
| DELETE | /places/:placeId/comments/:commentId | Delete a comment about a particular place |


## App (http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /log-out              | `users/UserLogout.js`      | A link in the navigation bar that allows a logged on user to logout
| /places               | `places/PlaceIndex.js`    | List of places                                                                  |
| /places/new           | `places/NewPlaceForm.js`  | Form for creating a new place                                                   |
| /places/:placeId      | `places/PlaceDetails.js`  | Details of a place, including it's comments, and a form to create a new comment |
| /places/:placeId/edit | `places/EditPlaceForm.js` | Form for editing a place                                                        |

## Added a User-Logout function
- Referenced GitHub-CoPilot for assistance with fixing errors with the use of React Hooks to implement this function

## Photo references:
- burger-photo.jpg
    - The Burger Joint
    - Image source: https://www.istockphoto.com/photo/junk-food-homemade-beef-burgers-on-vintage-wooden-background-gm1302436326-394176005?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhamburger-restaurant&utm_medium=affiliate&utm_source=unsplash&utm_term=hamburger+restaurant%3A%3A%3A
    - Photo by: Zygonema

- jason-leung-unsplash.jpg
    - Mama's Kitchen
    - Photo source: https://unsplash.com/collections/4308781/restaurant
    - Photo by: Jason Leung

-   jiangxulei1990-unsplash.jpg
    - Dad's Barbecue
    - Image source: https://unsplash.com/collections/4308781/restaurant
    - Photo by: Jiangxulei1990

    