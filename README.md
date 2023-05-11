# React Native Guessing Game App

This is a simple guessing game app built using React Native, where the user picks a number between 1-100 and the phone guesses their number. The user tells the phone whether their number is higher or lower than the guess, and the phone keeps guessing until it correctly guesses the user's number. At the end of the game, the app displays a summary of all the guesses made, how many guesses were required to correctly guess the user's number, and allows the user to reset and play again.

![Android_Emulator_-_Pixel_3a_API_33_x86_64_5554_2023-05-11_17-17-37_AdobeExpress](https://github.com/jakeRPowell/numberGuessing/assets/43782301/e529403a-76e9-4357-b492-4bc79462d83d)

## Prerequisites


To run this app locally, you must have the following installed:

- Node.js
- npm (Node Package Manager)
- Expo CLI (you can install it by running `npm install -g expo-cli`)

## Installation

To clone and run this app locally, follow these steps:

1. Clone this repo using `git clone git@github.com:jakeRPowell/numberGuessing.git`
2. Navigate to the project directory using `cd numberGuessing`
3. Install the required dependencies by running `npm install`
4. Start the app using `npm start` or `expo start`
5. Open the Expo app on your mobile device and scan the QR code generated by the Metro Bundler to open the app. Alternatively, you can run the app in an iOS or Android simulator.

## Usage

Once the app is running, follow these steps to play the game:

1. Enter a number between 1-100 in the input field and press "Guess".
2. The phone will make a guess, and you must tell it whether your number is higher or lower than the guess.
3. The phone will make subsequent guesses until it correctly guesses your number.
4. Once the game is over, a summary of all the guesses made and the number of guesses required to correctly guess your number will be displayed.
5. Press the "Reset" button to start a new game.

## License

This app is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This app was built using the tutorial by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/) on Udemy.