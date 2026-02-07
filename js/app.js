/**
 * ESL Grammar Exercises - Main Application
 */

(function () {
  'use strict';

  // Form types and their display labels
  const FORM_LABELS = {
    'affirmative': 'Affirmative',
    'negative': 'Negative',
    'yes-no-question': 'Yes/No Question',
    'information-question': 'Information Question',
    'mixed': 'Mixed',
    'practice': 'Practice',
    'comparative': 'Comparative',
    'superlative': 'Superlative',
    'a-an': 'a/an',
    'the': 'the'
  };

  const DIFFICULTY_LABELS = {
    'easy': 'Easy',
    'medium': 'Medium',
    'hard': 'Hard'
  };

  // State
  let currentGrammarId = null;
  let currentForm = null;
  let currentDifficulty = null;

  // DOM Elements
  const menuEl = document.getElementById('menu');
  const welcomeEl = document.getElementById('welcome');
  const grammarViewEl = document.getElementById('grammar-view');
  const grammarExplanationEl = document.getElementById('grammar-explanation');
  const exerciseListEl = document.getElementById('exercise-list');
  const exerciseFormEl = document.getElementById('exercise-form');
  const exerciseTitleEl = document.getElementById('exercise-title');
  const difficultyBadgeEl = document.getElementById('difficulty-badge');
  const resultsEl = document.getElementById('results');
  const scoreEl = document.getElementById('score');
  const feedbackListEl = document.getElementById('feedback-list');
  const btnReset = document.getElementById('btn-reset');
  const btnCheck = document.getElementById('btn-check');

  /**
   * Build the sidebar menu from EXERCISE_DATA
   */
  function buildMenu() {
    if (typeof EXERCISE_DATA === 'undefined') {
      menuEl.innerHTML = '<p class="error">No exercise data loaded.</p>';
      return;
    }

    let html = '';

    for (const [grammarId, grammar] of Object.entries(EXERCISE_DATA)) {
      html += `
        <div class="grammar-group" data-grammar-id="${grammarId}">
          <button type="button" class="grammar-group-title" aria-expanded="false">
            ${escapeHtml(grammar.title)}
            <span class="icon" aria-hidden="true">›</span>
          </button>
          <div class="grammar-submenu">
            <ul class="grammar-submenu-list">
              ${buildSubmenuItems(grammarId, grammar.exercises)}
            </ul>
          </div>
        </div>
      `;
    }

    menuEl.innerHTML = html;

    // Toggle expand/collapse
    menuEl.querySelectorAll('.grammar-group-title').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.grammar-group');
        group.classList.toggle('open');
        btn.setAttribute('aria-expanded', group.classList.contains('open'));
      });
    });

    // Link clicks
    menuEl.querySelectorAll('.grammar-submenu-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const { grammarId, form, difficulty } = link.dataset;
        loadExercise(grammarId, form, difficulty);
        setActiveLink(link);
      });
    });
  }

  /**
   * Build submenu items for a grammar point
   */
  function buildSubmenuItems(grammarId, exercises) {
    let items = [];

    for (const [form, difficulties] of Object.entries(exercises)) {
      const formLabel = FORM_LABELS[form] || form;

      for (const [difficulty, itemsArr] of Object.entries(difficulties)) {
        if (!Array.isArray(itemsArr) || itemsArr.length === 0) continue;

        const diffLabel = DIFFICULTY_LABELS[difficulty] || difficulty;
        const exerciseNum = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;

        items.push(`
          <li class="grammar-submenu-item">
            <a href="#" class="grammar-submenu-link" 
               data-grammar-id="${grammarId}" 
               data-form="${form}" 
               data-difficulty="${difficulty}">
              ${formLabel} - Exercise ${exerciseNum} (${diffLabel})
            </a>
          </li>
        `);
      }
    }

    return items.join('');
  }

  /**
   * Load and display an exercise
   */
  function loadExercise(grammarId, form, difficulty) {
    const grammar = EXERCISE_DATA[grammarId];
    if (!grammar) return;

    const exercises = grammar.exercises?.[form]?.[difficulty];
    if (!exercises || !Array.isArray(exercises)) {
      console.error('Exercise not found:', grammarId, form, difficulty);
      return;
    }

    currentGrammarId = grammarId;
    currentForm = form;
    currentDifficulty = difficulty;

    // Hide welcome, show grammar view
    welcomeEl.classList.add('hidden');
    grammarViewEl.classList.remove('hidden');

    // Show grammar explanation
    grammarExplanationEl.innerHTML = grammar.explanation;

    // Exercise header
    const formLabel = FORM_LABELS[form] || form;
    const diffLabel = DIFFICULTY_LABELS[difficulty] || difficulty;
    exerciseTitleEl.textContent = `${formLabel} Form`;
    difficultyBadgeEl.textContent = diffLabel;
    difficultyBadgeEl.className = `difficulty-badge ${difficulty}`;

    // Build exercise items
    exerciseListEl.innerHTML = exercises.map((item, index) => {
      const id = `ex-${index}`;
      return `
        <li class="exercise-item" data-index="${index}">
          <label for="${id}">
            ${index + 1}. <span class="sentence">${formatSentence(item.sentence)}</span>
          </label>
          <input type="text" 
                 id="${id}" 
                 name="answer-${index}" 
                 data-answer="${escapeHtml(item.answer)}" 
                 autocomplete="off"
                 placeholder="Type your answer">
          <div class="feedback hidden"></div>
        </li>
      `;
    }).join('');

    // Hide results and reset form state
    resultsEl.classList.add('hidden');
    exerciseFormEl.querySelectorAll('.exercise-item').forEach(el => {
      el.classList.remove('correct', 'incorrect');
      el.querySelector('.feedback').classList.add('hidden');
      el.querySelector('input').disabled = false;
    });

    // Focus first input
    const firstInput = exerciseListEl.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  /**
   * Format sentence: replace ___ with an input placeholder
   */
  function formatSentence(sentence) {
    return escapeHtml(sentence).replace(/___/g, '<strong>_____</strong>');
  }

  /**
   * Normalize answer for comparison (trim, lowercase, collapse spaces)
   */
  function normalizeAnswer(answer) {
    return String(answer).trim().toLowerCase().replace(/\s+/g, ' ');
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Set active state on menu link
   */
  function setActiveLink(activeLink) {
    menuEl.querySelectorAll('.grammar-submenu-link').forEach(link => {
      link.classList.remove('active');
    });
    if (activeLink) activeLink.classList.add('active');
  }

  /**
   * Check if user answer matches (accepts variations)
   */
  function isAnswerCorrect(userAnswer, correctAnswer) {
    const normalized = normalizeAnswer(userAnswer);
    const correct = normalizeAnswer(correctAnswer);

    if (normalized === correct) return true;

    // Accept common contractions: isn't = is not, won't = will not, etc.
    const equivalents = {
      "isn't": "is not",
      "aren't": "are not",
      "am not": "am not",
      "don't": "do not",
      "doesn't": "does not",
      "wasn't": "was not",
      "weren't": "were not",
      "won't": "will not",
      "haven't": "have not",
      "hasn't": "has not",
      "hadn't": "had not",
      "i'm": "i am",
      "you're": "you are",
      "he's": "he is",
      "she's": "she is",
      "it's": "it is",
      "we're": "we are",
      "they're": "they are",
      "i've": "i have",
      "you've": "you have",
      "we've": "we have",
      "they've": "they have",
      "i'd": "i would",
      "you'd": "you would",
      "he'd": "he would",
      "she'd": "she would",
      "we'd": "we would",
      "they'd": "they would"
    };

    const userEquiv = equivalents[normalized] || normalized;
    const correctEquiv = equivalents[correct] || correct;

    return userEquiv === correctEquiv || normalized === correctEquiv || userEquiv === correct;
  }

  /**
   * Handle form submit - check answers
   */
  function handleCheckAnswers(e) {
    e.preventDefault();

    const items = exerciseListEl.querySelectorAll('.exercise-item');
    let correctCount = 0;

    items.forEach((item, index) => {
      const input = item.querySelector('input');
      const feedbackEl = item.querySelector('.feedback');
      const correctAnswer = input.dataset.answer;
      const userAnswer = input.value;

      const correct = isAnswerCorrect(userAnswer, correctAnswer);

      item.classList.remove('correct', 'incorrect');
      feedbackEl.classList.remove('hidden', 'correct-msg', 'incorrect-msg');

      if (correct) {
        correctCount++;
        item.classList.add('correct');
        feedbackEl.classList.add('correct-msg');
        feedbackEl.textContent = '✓ Correct!';
      } else {
        item.classList.add('incorrect');
        feedbackEl.classList.add('incorrect-msg');
        feedbackEl.textContent = `✗ Correct answer: ${correctAnswer}`;
      }

      input.disabled = true;
    });

    // Show results
    scoreEl.textContent = correctCount;
    resultsEl.classList.remove('hidden');

    // Scroll to results
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /**
   * Reset exercise - clear inputs and feedback
   */
  function handleReset() {
    exerciseListEl.querySelectorAll('.exercise-item').forEach(item => {
      const input = item.querySelector('input');
      const feedbackEl = item.querySelector('.feedback');

      input.value = '';
      input.disabled = false;
      item.classList.remove('correct', 'incorrect');
      feedbackEl.classList.add('hidden');
      feedbackEl.textContent = '';
    });

    resultsEl.classList.add('hidden');

    const firstInput = exerciseListEl.querySelector('input');
    if (firstInput) firstInput.focus();
  }

  // Event listeners
  exerciseFormEl.addEventListener('submit', handleCheckAnswers);
  btnReset.addEventListener('click', handleReset);

  // Initialize
  buildMenu();

  // Open first grammar group by default
  const firstGroup = menuEl.querySelector('.grammar-group');
  if (firstGroup) {
    firstGroup.classList.add('open');
    firstGroup.querySelector('.grammar-group-title').setAttribute('aria-expanded', 'true');
  }
})();
