
# White Elephant Gift Exchange App

## Overview
The **White Elephant Gift Exchange App** is a dynamic app for early organizing and managing a virtual White Elephant-style gift exchanges. The owner will be resonsible for adding all of the gifts to the game prior to play - whether the owner hand selects gifts or collects a list of gifts from players. Images of gifts, gift names, and player names will be needed to play. 

It follows these classic rules:

1. **Random Player Order:** Players are randomly assigned an order to take their turns.
2. **Gift Unwrapping:** Players can choose to unwrap a new gift or steal an unwrapped one from another player.
3. **Gift Stealing Limits:** 
   - Each gift can only be stolen a maximum of **two times**, after which it is locked.
   - A player cannot immediately steal back a gift that was just taken from them.
4. **Final Pick for First Player:** The first player gets a final opportunity to either keep their gift or swap it with another player at the end of the game.
5. **Game Conclusion:** The game ends when all players have had their turn, and the final pick phase is completed.

This app replicates the fun of a traditional White Elephant game while adding seamless set up and tracking, making it perfect for virtual holiday parties, team-building events, or family gatherings.

---

## Features
- **Randomized Player Order:** Automatically shuffles players to ensure fairness.
- **Gift Unwrapping and Stealing:** Allows players to unwrap new gifts or steal unwrapped ones from others.
- **Gift Locking:** Gifts can only be stolen twice, and locked gifts are clearly indicated.
- **Final Pick Phase:** Gives the first player a special opportunity to swap or keep their gift at the end of the game.
- **Responsive UI:** Optimized for various screen sizes, ensuring accessibility on desktop, tablet, or mobile devices.
- **Summary Screen:** For easy gift tracking and direct links to purchase

---

## Prerequisites
Before running the app, ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

---

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/tollbros/white-elephant-game.git
   cd white-elephant-game
   ```

2. **Install Dependencies:**
   Run the following command to install the required Node modules:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   Launch the app locally:
   ```bash
   npm start
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:3000` to view the app.



### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

#### `npm run build`
Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

---

## Usage
### Game Setup
1. Add players to the `basePlayers` array in `WhiteElephantGame.jsx`.
2. Customize gift names in the `giftNames` array.
3. Ensure gift images are added to the `/images` folder with filenames matching the `giftX.jpg` pattern.

### Game Play
1. The first player is randomly selected to start.
2. Players take turns to either:
   - Unwrap a new gift.
   - Steal an unwrapped gift (with a maximum of two steals per gift).
3. After all players have a gift, the first player has a **final pick** to swap or keep their gift.
4. The game ends, and a summary of all players and their gifts is displayed.

---

## Customization
### Adding Players
- Update the `basePlayers` array in `WhiteElephantGame.jsx` with player names.

### Adding Gifts
1. Update the `giftNames` array with the names of gifts.
2. Add gift images to the `/images` folder, naming them sequentially (e.g., `gift1.jpg`, `gift2.jpg`, etc.).
3. Update the `giftLinks` array with the links to all of the gifts. 

### Tailwind Styling
All styles are powered by **Tailwind CSS**. Modify styles in `src/styles/` or directly in the JSX.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## Technologies Used
- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **Node.js**: For managing dependencies and running the development server.

---

## Acknowledgments
- Icons from **lucide-react**
- Developed for virtual holiday season celebrations 🎁
