# Exercise: Greg's Records

An exercise for a React app to display Hipster Greg's record collection.

#### Requirements
1. The application must be able to fetch and display Greg's albums in a paginated fashion. a. These fields must be visible for each album: Artist Name, Album Title, Year, and Record Condition

2. A user must be able to edit and update all the fields on an album, including the artists associated with the album. Don't worry about persisting edits on the server.

3. As a user, I should be able to update the Artist's name. Meaning if I update an Artist's name on one record, it should be updated across all records associated with that artist.

4. As a user, I want to filter my albums using a search query. The results should update as I type.

# Setup

#### Dependencies
You must create a `.env` file in the project's root folder based on the `.env.example` file included in the repository.

#### Installation
Run the following commands from a terminal in the project's root folder:
- `npm ci` creates a fresh install of all required packages.
- `npm start` starts the development server at [http://localhost:3000](http://localhost:3000).
- `npm run build` creates an optimized production build

Of course you can also use `yarn`.

# Testing
Unit tests using jest are still to be done.

# Notes
- As the project is very small, Redux is not used, however I could (and probably should) use React Context in some places to pass props (i.e. to the components in `src/components/Record`).

- The error `findDOMNode is deprecated in StrictMode` is thrown from `CSSTransition` in the `react-transition-group` package. From what I've seen, there's no fix for this.

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
