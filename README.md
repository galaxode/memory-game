# GitHub Memory Match

> A memory card matching game using GitHub API for card themes and content.

![Starting Game Board Screenshot](/screenshots/game-board.png?raw=true "Starting Game Board")

| | | |
| ------------ | ------------ | ------------ |
| ![Found Match Screenshot](/screenshots/found-match.png?raw=true "Match Found") | ![Mismatch Screenshot](/screenshots/mistmatch.png?raw=true "Mismatch") | ![Theme Change Screenshot1](/screenshots/nrr20-nebula.png?raw=true "Change identicon theme to GitHub username hrr20-nebula") | ![Theme Change Screenshot2](/screenshots/nrr20-nebula.png?raw=true "Change identicon theme to GitHub username GraceHopper") |

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)

## Usage

> Running the application requires the dependencies listed below.  After navigating to localhost:8000, a game board will populate with the default identicon theme.  Submit any GitHub username in the input field and the game board will immediately populate with the GitHub identicon associated with that username.  The photos behind the cards are GitHub user profile photos of people I know.  Click on two cards to see if you can find a match.  Find all the matches to win.

## Requirements

- Node 6.x
- Express 4.x
- React 15.x
- React-DOM 15.x
- Babel

## Development

### Building the project

From within the root directory:

```sh
npm install
```

To run Babel with watch activated:

```sh
npm run babel
```

To run the server:

```sh
npm start
```
