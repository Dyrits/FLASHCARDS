# Challenge Project: Flashcards

<details>
<summary>[Codecademy - Full-Stack Engineer Career Path] Redux / Challenge Project: Flashcards</summary>

## Overview
Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Project Goals
In this project, you will practice using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users will also be able to interact with their quizzes by flipping flashcards over.

The following task descriptions will walk through implementing the app’s Redux logic starting with topics, then quizzes, and then cards. If you would like to implement it in a different order feel free to do what is comfortable for you.

## Setup Instructions
If you choose to do this project on your computer instead of Codecademy, you can download what you’ll need by clicking the “Download” button below. Make sure you have [Node installed on your computer](https://www.codecademy.com/article/setting-up-node-locally) and then, inside the project’s root directory, run `npm install`. Finally, run `npm start` which will automatically open up a new tab in your browser with your running application. If a new tab does not appear, you can visit [http://localhost:3000/](http://localhost:3000/).

</details>

## To Run

Run `npm start` in the project root and the app will be available on port 3000.

##  State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

##  Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

##  Questions

Is this appropriately scoped? Does it have too many features? Too few?
