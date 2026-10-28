# Flashcards

A flashcard-style quiz app built with React and Redux Toolkit - a challenge project from the Codecademy Full-Stack Engineer career path (Redux module).

## About The Project

The project brief (from the course assignment): practice using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users can create their own topics, quizzes for those topics, and flashcards for those quizzes, and interact with their quizzes by flipping flashcards over.

The app's state is fully normalized, with slices for topics, quizzes and cards.

## Built With

- React 17 (Create React App)
- Redux Toolkit / React Redux
- React Router 5

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm install
```

### Running the app

```bash
npm start
```

The app is served on [http://localhost:3000](http://localhost:3000).

## Usage

Routes:

- `/new-topic` - form to create a new topic
- `/topics` - index of all topics
- `/topics/:topicId` - page for an individual topic
- `/new-quiz` - form to create a new quiz
- `/quizzes` - index of all quizzes
- `/quizzes/:quizId` - page for an individual quiz

To test: create topics, create quizzes, visit the page for an individual quiz and flip the cards over.

## License

No license file is present in this repository.

## Contact

Dylan J. Gerrits - [GitHub](https://github.com/Dyrits)
