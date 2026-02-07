# ESL Grammar Exercises

A website for practicing English grammar with fill-in-the-blank exercises. Similar in concept to English-Hilfen / Ego4u.

## Structure

- **Left menu**: Grammar points with expandable submenus
- **Submenus**: Affirmative, Negative, Yes/No Question, Information Question, Mixed
- **Each form**: 3 exercises (Easy, Medium, Hard)
- **Each exercise**: 10 fill-in-the-blank questions

## How to Run

Open `index.html` in a web browser. No server required—it works as a static site.

For local development with live reload, use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or any static file server.

## Adding Content

Edit `data/exercises.js` to add new grammar points or exercises.

### Add a new grammar point

1. Add a new key to `EXERCISE_DATA` (e.g. `"simple-past": {...}`)
2. Include: `id`, `title`, `explanation` (HTML), and `exercises`
3. For each form (affirmative, negative, yes-no-question, information-question, mixed), add easy/medium/hard arrays

### Exercise format

```javascript
{
  sentence: "I ___ a student.",  // ___ = blank for the answer
  answer: "am",                  // correct answer
  hint: "I + am"                 // optional, for teacher reference
}
```

## File Structure

```
esl-grammar-exercises/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── data/
    └── exercises.js
```
