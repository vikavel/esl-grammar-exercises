/**
 * ESL Grammar Exercises - Data
 * Each grammar point has explanations and exercises organized by form and difficulty.
 */

const EXERCISE_DATA = {
  "simple-present-be": {
    id: "simple-present-be",
    title: "Simple Present with the verb to be",
    explanation: `
      <h2>Simple Present with the verb to be</h2>
      <p>Put the correct forms of the verb <strong>to be</strong> into the gaps. Use <strong>Simple Present</strong>.</p>
      <p>I → am / He, She, It → is / You, We, They → are</p>
      <ul>
        <li><strong>I</strong> → am</li>
        <li><strong>He / She / It</strong> → is</li>
        <li><strong>You / We / They</strong> → are</li>
      </ul>
      <p>Use the simple present to talk about facts, states, and general truths.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ a student.", answer: "am", hint: "I + am" },
          { sentence: "She ___ from Chile.", answer: "is", hint: "She + is" },
          { sentence: "They ___ my friends.", answer: "are", hint: "They + are" },
          { sentence: "He ___ a teacher.", answer: "is", hint: "He + is" },
          { sentence: "We ___ at school.", answer: "are", hint: "We + are" },
          { sentence: "You ___ very kind.", answer: "are", hint: "You + are" },
          { sentence: "It ___ a beautiful day.", answer: "is", hint: "It + is" },
          { sentence: "I ___ happy today.", answer: "am", hint: "I + am" },
          { sentence: "Maria ___ a doctor.", answer: "is", hint: "Maria (she) + is" },
          { sentence: "The children ___ in the garden.", answer: "are", hint: "The children (they) + are" }
        ],
        medium: [
          { sentence: "My brother ___ a pilot.", answer: "is" },
          { sentence: "The books ___ on the desk.", answer: "are" },
          { sentence: "Susan and Tom ___ married.", answer: "are" },
          { sentence: "That ___ a good idea.", answer: "is" },
          { sentence: "I ___ tired after the long trip.", answer: "am" },
          { sentence: "Your English ___ excellent.", answer: "is" },
          { sentence: "The weather ___ nice today.", answer: "is" },
          { sentence: "We ___ ready for the test.", answer: "are" },
          { sentence: "The keys ___ in my bag.", answer: "are" },
          { sentence: "John ___ at work right now.", answer: "is" }
        ],
        hard: [
          { sentence: "Neither of the boys ___ interested in sports.", answer: "is" },
          { sentence: "The news ___ very shocking.", answer: "is" },
          { sentence: "Each of the students ___ responsible for their own work.", answer: "is" },
          { sentence: "The team ___ practicing for the match.", answer: "is" },
          { sentence: "Five hundred dollars ___ a lot of money.", answer: "is" },
          { sentence: "Physics ___ my favorite subject.", answer: "is" },
          { sentence: "The police ___ looking for the suspect.", answer: "are" },
          { sentence: "Bread and butter ___ a simple breakfast.", answer: "is" },
          { sentence: "The number of students ___ increasing.", answer: "is" },
          { sentence: "The committee ___ divided on the issue.", answer: "is" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not) hungry.", answer: "am not", hint: "I + am not" },
          { sentence: "She ___ (not) at home.", answer: "is not", hint: "She + is not (or isn't)" },
          { sentence: "They ___ (not) my classmates.", answer: "are not", hint: "They + are not (or aren't)" },
          { sentence: "He ___ (not) a doctor.", answer: "is not", hint: "He + is not" },
          { sentence: "We ___ (not) tired.", answer: "are not", hint: "We + are not" },
          { sentence: "It ___ (not) cold today.", answer: "is not", hint: "It + is not" },
          { sentence: "You ___ (not) late.", answer: "are not", hint: "You + are not" },
          { sentence: "I ___ (not) from Spain.", answer: "am not", hint: "I + am not" },
          { sentence: "The dog ___ (not) in the garden.", answer: "is not", hint: "The dog (it) + is not" },
          { sentence: "My parents ___ (not) at work.", answer: "are not", hint: "My parents (they) + are not" }
        ],
        medium: [
          { sentence: "That ___ (not) the right answer.", answer: "is not" },
          { sentence: "The tickets ___ (not) expensive.", answer: "are not" },
          { sentence: "I ___ (not) sure about the date.", answer: "am not" },
          { sentence: "Her children ___ (not) at school today.", answer: "are not" },
          { sentence: "The meeting ___ (not) until next week.", answer: "is not" },
          { sentence: "We ___ (not) interested in that offer.", answer: "are not" },
          { sentence: "This ___ (not) what I expected.", answer: "is not" },
          { sentence: "The stores ___ (not) open on Sundays.", answer: "are not" },
          { sentence: "He ___ (not) feeling well.", answer: "is not" },
          { sentence: "You ___ (not) listening to me.", answer: "are not" }
        ],
        hard: [
          { sentence: "Neither of the options ___ (not) acceptable.", answer: "is not" },
          { sentence: "The staff ___ (not) happy with the new policy.", answer: "are not" },
          { sentence: "Mathematics ___ (not) as difficult as it seems.", answer: "is not" },
          { sentence: "The couple ___ (not) getting along well.", answer: "is not" },
          { sentence: "Ten miles ___ (not) a short distance.", answer: "is not" },
          { sentence: "Politics ___ (not) my area of expertise.", answer: "is not" },
          { sentence: "The jury ___ (not) in agreement.", answer: "is not" },
          { sentence: "Half of the cake ___ (not) left.", answer: "is not" },
          { sentence: "The rich ___ (not) always happy.", answer: "are not" },
          { sentence: "A pair of gloves ___ (not) enough for winter.", answer: "is not" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you a student?", answer: "Are", hint: "Are you...?" },
          { sentence: "___ she your sister?", answer: "Is", hint: "Is she...?" },
          { sentence: "___ they at home?", answer: "Are", hint: "Are they...?" },
          { sentence: "___ he a doctor?", answer: "Is", hint: "Is he...?" },
          { sentence: "___ I late?", answer: "Am", hint: "Am I...?" },
          { sentence: "___ it cold outside?", answer: "Is", hint: "Is it...?" },
          { sentence: "___ we in the right place?", answer: "Are", hint: "Are we...?" },
          { sentence: "___ the book interesting?", answer: "Is", hint: "Is the book...?" },
          { sentence: "___ your parents from England?", answer: "Are", hint: "Are your parents...?" },
          { sentence: "___ Maria a teacher?", answer: "Is", hint: "Is Maria...?" }
        ],
        medium: [
          { sentence: "___ your brother at the university?", answer: "Is" },
          { sentence: "___ the keys in the drawer?", answer: "Are" },
          { sentence: "___ this the way to the station?", answer: "Is" },
          { sentence: "___ you ready to leave?", answer: "Are" },
          { sentence: "___ the meeting tomorrow?", answer: "Is" },
          { sentence: "___ those your books?", answer: "Are" },
          { sentence: "___ she feeling better?", answer: "Is" },
          { sentence: "___ we supposed to wait here?", answer: "Are" },
          { sentence: "___ the coffee still hot?", answer: "Is" },
          { sentence: "___ your friends coming to the party?", answer: "Are" }
        ],
        hard: [
          { sentence: "___ either of the candidates qualified?", answer: "Is" },
          { sentence: "___ the committee in session?", answer: "Is" },
          { sentence: "___ there any questions?", answer: "Are" },
          { sentence: "___ the news true?", answer: "Is" },
          { sentence: "___ the police investigating the case?", answer: "Are" },
          { sentence: "___ three hours enough for the exam?", answer: "Is" },
          { sentence: "___ the majority in favor?", answer: "Is" },
          { sentence: "___ the scissors on the table?", answer: "Are" },
          { sentence: "___ everyone present?", answer: "Is" },
          { sentence: "___ the stairs safe to use?", answer: "Are" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "Where ___ you from?", answer: "are" },
          { sentence: "How old ___ she?", answer: "is" },
          { sentence: "What ___ your name?", answer: "is" },
          { sentence: "Who ___ they?", answer: "are" },
          { sentence: "Where ___ the bathroom?", answer: "is" },
          { sentence: "How ___ you today?", answer: "are" },
          { sentence: "What ___ your job?", answer: "is" },
          { sentence: "Where ___ my keys?", answer: "are" },
          { sentence: "Who ___ that man?", answer: "is" },
          { sentence: "How ___ the weather?", answer: "is" }
        ],
        medium: [
          { sentence: "Why ___ you so tired?", answer: "are" },
          { sentence: "When ___ the next bus?", answer: "is" },
          { sentence: "What ___ the problem?", answer: "is" },
          { sentence: "Where ___ your parents live?", answer: "do" },
          { sentence: "How far ___ it to the airport?", answer: "is" },
          { sentence: "Whose book ___ this?", answer: "is" },
          { sentence: "What time ___ the meeting?", answer: "is" },
          { sentence: "Why ___ they angry?", answer: "are" },
          { sentence: "How long ___ the journey?", answer: "is" },
          { sentence: "What ___ your plans for tonight?", answer: "are" }
        ],
        hard: [
          { sentence: "To whom ___ this letter addressed?", answer: "is" },
          { sentence: "In which room ___ the conference?", answer: "is" },
          { sentence: "Under what circumstances ___ this acceptable?", answer: "is" },
          { sentence: "Of what ___ the committee composed?", answer: "is" },
          { sentence: "Between whom ___ the agreement made?", answer: "is" },
          { sentence: "At what time ___ the train due?", answer: "is" },
          { sentence: "For whom ___ these flowers?", answer: "are" },
          { sentence: "With whom ___ you traveling?", answer: "are" },
          { sentence: "Against what ___ they protesting?", answer: "are" },
          { sentence: "Among whom ___ the prize divided?", answer: "is" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ a student. (affirmative)", answer: "am" },
          { sentence: "She ___ (not) at home. (negative)", answer: "is not" },
          { sentence: "___ you from Chile? (yes/no)", answer: "Are" },
          { sentence: "Where ___ the bathroom? (wh-question)", answer: "is" },
          { sentence: "They ___ my friends. (affirmative)", answer: "are" },
          { sentence: "He ___ (not) a doctor. (negative)", answer: "is not" },
          { sentence: "___ it cold? (yes/no)", answer: "Is" },
          { sentence: "What ___ your name? (wh-question)", answer: "is" },
          { sentence: "We ___ at school. (affirmative)", answer: "are" },
          { sentence: "The dog ___ (not) in the garden. (negative)", answer: "is not" }
        ],
        medium: [
          { sentence: "My brother ___ a pilot. (affirmative)", answer: "is" },
          { sentence: "That ___ (not) the right answer. (negative)", answer: "is not" },
          { sentence: "___ your brother at the university? (yes/no)", answer: "Is" },
          { sentence: "Why ___ you so tired? (wh-question)", answer: "are" },
          { sentence: "The team ___ practicing. (affirmative)", answer: "is" },
          { sentence: "We ___ (not) interested. (negative)", answer: "are not" },
          { sentence: "___ the keys in the drawer? (yes/no)", answer: "Are" },
          { sentence: "What ___ the problem? (wh-question)", answer: "is" },
          { sentence: "Susan and Tom ___ married. (affirmative)", answer: "are" },
          { sentence: "The stores ___ (not) open. (negative)", answer: "are not" }
        ],
        hard: [
          { sentence: "The news ___ very shocking. (affirmative)", answer: "is" },
          { sentence: "Neither of the options ___ (not) acceptable. (negative)", answer: "is not" },
          { sentence: "___ either of the candidates qualified? (yes/no)", answer: "Is" },
          { sentence: "To whom ___ this letter addressed? (wh-question)", answer: "is" },
          { sentence: "Physics ___ my favorite subject. (affirmative)", answer: "is" },
          { sentence: "The staff ___ (not) happy. (negative)", answer: "are not" },
          { sentence: "___ the committee in session? (yes/no)", answer: "Is" },
          { sentence: "In which room ___ the conference? (wh-question)", answer: "is" },
          { sentence: "The police ___ looking for the suspect. (affirmative)", answer: "are" },
          { sentence: "The jury ___ (not) in agreement. (negative)", answer: "is not" }
        ]
      }
    }
  },
  "simple-present-verbs": {
    id: "simple-present-verbs",
    title: "Simple Present with other verbs",
    explanation: `
      <h2>Simple Present with other verbs</h2>
      <p>Put the correct forms of the verbs into the gaps. Use <strong>Simple Present</strong> in the statements.</p>
      <p>I/You/We/They → base form / He, She, It → base form + s/es</p>
      <ul>
        <li><strong>I/You/We/They</strong> → work, play, go</li>
        <li><strong>He/She/It</strong> → works, plays, goes</li>
      </ul>
      <p>Use the simple present for habits, routines, facts, and general truths.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ to school every day. (to go)", answer: "go" },
          { sentence: "She ___ coffee in the morning. (to drink)", answer: "drinks" },
          { sentence: "They ___ football on Saturdays. (to play)", answer: "play" },
          { sentence: "He ___ in an office. (to work)", answer: "works" },
          { sentence: "We ___ English in class. (to study)", answer: "study" },
          { sentence: "The train ___ at 8 AM. (to leave)", answer: "leaves" },
          { sentence: "You ___ very well. (to sing)", answer: "sing" },
          { sentence: "My brother ___ in Santiago. (to live)", answer: "lives" },
          { sentence: "Cats ___ milk. (to like)", answer: "like" },
          { sentence: "She ___ her homework every evening. (to do)", answer: "does" }
        ],
        medium: [
          { sentence: "My sister ___ medicine at the university.", answer: "studies" },
          { sentence: "The sun ___ in the east.", answer: "rises" },
          { sentence: "Water ___ at 100 degrees Celsius.", answer: "boils" },
          { sentence: "He ___ two languages fluently.", answer: "speaks" },
          { sentence: "The company ___ in 50 countries.", answer: "operates" },
          { sentence: "Birds ___ south in winter.", answer: "fly" },
          { sentence: "She ___ her grandmother every Sunday.", answer: "visits" },
          { sentence: "The meeting ___ at 3 PM.", answer: "starts" },
          { sentence: "They ___ to the gym three times a week.", answer: "go" },
          { sentence: "This book ___ interesting.", answer: "seems" }
        ],
        hard: [
          { sentence: "Everyone ___ respect for the law.", answer: "deserves" },
          { sentence: "The data ___ that sales are increasing.", answer: "shows" },
          { sentence: "Neither of the options ___ suitable.", answer: "seems" },
          { sentence: "The committee ___ every Tuesday.", answer: "meets" },
          { sentence: "Ten thousand dollars ___ a lot to pay.", answer: "is" },
          { sentence: "The majority ___ in favor of the proposal.", answer: "votes" },
          { sentence: "Some of the information ___ incorrect.", answer: "is" },
          { sentence: "Each of the students ___ a laptop.", answer: "has" },
          { sentence: "The news ___ disappointing.", answer: "is" },
          { sentence: "Bread and butter ___ his usual breakfast.", answer: "is" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not) like coffee.", answer: "do not" },
          { sentence: "She ___ (not) play tennis.", answer: "does not" },
          { sentence: "They ___ (not) live here.", answer: "do not" },
          { sentence: "He ___ (not) eat meat.", answer: "does not" },
          { sentence: "We ___ (not) work on Sundays.", answer: "do not" },
          { sentence: "It ___ (not) rain much here.", answer: "does not" },
          { sentence: "You ___ (not) understand me.", answer: "do not" },
          { sentence: "My brother ___ (not) smoke.", answer: "does not" },
          { sentence: "The bus ___ (not) stop here.", answer: "does not" },
          { sentence: "Children ___ (not) like vegetables.", answer: "do not" }
        ],
        medium: [
          { sentence: "She ___ (not) believe in ghosts.", answer: "does not" },
          { sentence: "The store ___ (not) open until 10.", answer: "does not" },
          { sentence: "I ___ (not) know the answer.", answer: "do not" },
          { sentence: "They ___ (not) agree with the plan.", answer: "do not" },
          { sentence: "He ___ (not) remember my name.", answer: "does not" },
          { sentence: "We ___ (not) have enough time.", answer: "do not" },
          { sentence: "This ___ (not) make sense.", answer: "does not" },
          { sentence: "The children ___ (not) want to go.", answer: "do not" },
          { sentence: "She ___ (not) need any help.", answer: "does not" },
          { sentence: "You ___ (not) have to worry.", answer: "do not" }
        ],
        hard: [
          { sentence: "Neither of the candidates ___ (not) agree.", answer: "does not" },
          { sentence: "The staff ___ (not) like the new policy.", answer: "do not" },
          { sentence: "Mathematics ___ (not) come easily to him.", answer: "does not" },
          { sentence: "The couple ___ (not) argue much.", answer: "does not" },
          { sentence: "Ten miles ___ (not) seem far.", answer: "does not" },
          { sentence: "Politics ___ (not) interest me.", answer: "does not" },
          { sentence: "The jury ___ (not) agree on the verdict.", answer: "does not" },
          { sentence: "Half of the students ___ (not) pass the test.", answer: "do not" },
          { sentence: "The rich ___ (not) always understand poverty.", answer: "do not" },
          { sentence: "A pair of gloves ___ (not) cost much.", answer: "does not" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you like pizza?", answer: "Do" },
          { sentence: "___ she speak English?", answer: "Does" },
          { sentence: "___ they live here?", answer: "Do" },
          { sentence: "___ he work on weekends?", answer: "Does" },
          { sentence: "___ we have time?", answer: "Do" },
          { sentence: "___ it rain often?", answer: "Does" },
          { sentence: "___ your brother play guitar?", answer: "Does" },
          { sentence: "___ the bus stop here?", answer: "Does" },
          { sentence: "___ you understand?", answer: "Do" },
          { sentence: "___ Maria know the way?", answer: "Does" }
        ],
        medium: [
          { sentence: "___ your sister study abroad?", answer: "Does" },
          { sentence: "___ the train leave on time?", answer: "Does" },
          { sentence: "___ they need any help?", answer: "Do" },
          { sentence: "___ this belong to you?", answer: "Does" },
          { sentence: "___ we need to book in advance?", answer: "Do" },
          { sentence: "___ the meeting start at 9?", answer: "Does" },
          { sentence: "___ you mind if I smoke?", answer: "Do" },
          { sentence: "___ she ever complain?", answer: "Does" },
          { sentence: "___ the children like swimming?", answer: "Do" },
          { sentence: "___ it matter?", answer: "Does" }
        ],
        hard: [
          { sentence: "___ either of them know the answer?", answer: "Does" },
          { sentence: "___ the committee meet regularly?", answer: "Does" },
          { sentence: "___ anyone have a pen?", answer: "Does" },
          { sentence: "___ the news upset you?", answer: "Does" },
          { sentence: "___ the police suspect anyone?", answer: "Do" },
          { sentence: "___ three hours seem enough?", answer: "Does" },
          { sentence: "___ the majority agree?", answer: "Does" },
          { sentence: "___ everyone have a ticket?", answer: "Does" },
          { sentence: "___ the scissors cut well?", answer: "Do" },
          { sentence: "___ the stairs lead to the roof?", answer: "Do" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "Where ___ you live?", answer: "do" },
          { sentence: "What ___ she do?", answer: "does" },
          { sentence: "When ___ they arrive?", answer: "do" },
          { sentence: "Why ___ he leave?", answer: "did" },
          { sentence: "How ___ you know?", answer: "do" },
          { sentence: "What time ___ the bus leave?", answer: "does" },
          { sentence: "Where ___ your parents work?", answer: "do" },
          { sentence: "Who ___ you call?", answer: "do" },
          { sentence: "How often ___ she exercise?", answer: "does" },
          { sentence: "What ___ he want?", answer: "does" }
        ],
        medium: [
          { sentence: "Why ___ they refuse?", answer: "do" },
          { sentence: "How long ___ the journey take?", answer: "does" },
          { sentence: "What ___ this mean?", answer: "does" },
          { sentence: "When ___ the store close?", answer: "does" },
          { sentence: "Where ___ the meeting take place?", answer: "does" },
          { sentence: "How much ___ it cost?", answer: "does" },
          { sentence: "Why ___ she always late?", answer: "is" },
          { sentence: "What ___ you think?", answer: "do" },
          { sentence: "How ___ he manage?", answer: "does" },
          { sentence: "Which ___ you prefer?", answer: "do" }
        ],
        hard: [
          { sentence: "To what ___ this refer?", answer: "does" },
          { sentence: "Under what circumstances ___ it occur?", answer: "does" },
          { sentence: "For whom ___ she work?", answer: "does" },
          { sentence: "With whom ___ you agree?", answer: "do" },
          { sentence: "Against what ___ they protest?", answer: "do" },
          { sentence: "Among whom ___ the responsibility lie?", answer: "does" },
          { sentence: "At what time ___ the flight depart?", answer: "does" },
          { sentence: "In which room ___ the class meet?", answer: "does" },
          { sentence: "Of what ___ the committee consist?", answer: "does" },
          { sentence: "Between whom ___ the dispute?", answer: "is" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ to school every day. (affirmative)", answer: "go" },
          { sentence: "She ___ (not) like coffee. (negative)", answer: "does not" },
          { sentence: "___ you live here? (yes/no)", answer: "Do" },
          { sentence: "Where ___ she work? (wh-question)", answer: "does" },
          { sentence: "They ___ football. (affirmative)", answer: "play" },
          { sentence: "He ___ (not) eat meat. (negative)", answer: "does not" },
          { sentence: "___ the bus stop here? (yes/no)", answer: "Does" },
          { sentence: "What ___ your name? (wh-question)", answer: "is" },
          { sentence: "We ___ English. (affirmative)", answer: "study" },
          { sentence: "It ___ (not) rain much. (negative)", answer: "does not" }
        ],
        medium: [
          { sentence: "The sun ___ in the east. (affirmative)", answer: "rises" },
          { sentence: "She ___ (not) believe in ghosts. (negative)", answer: "does not" },
          { sentence: "___ the train leave on time? (yes/no)", answer: "Does" },
          { sentence: "Why ___ they refuse? (wh-question)", answer: "do" },
          { sentence: "Water ___ at 100°C. (affirmative)", answer: "boils" },
          { sentence: "We ___ (not) have enough time. (negative)", answer: "do not" },
          { sentence: "___ they need help? (yes/no)", answer: "Do" },
          { sentence: "How long ___ it take? (wh-question)", answer: "does" },
          { sentence: "He ___ two languages. (affirmative)", answer: "speaks" },
          { sentence: "The store ___ (not) open until 10. (negative)", answer: "does not" }
        ],
        hard: [
          { sentence: "The data ___ that sales are up. (affirmative)", answer: "shows" },
          { sentence: "Neither option ___ (not) suitable. (negative)", answer: "seems" },
          { sentence: "___ either of them know? (yes/no)", answer: "Does" },
          { sentence: "To what ___ this refer? (wh-question)", answer: "does" },
          { sentence: "The committee ___ every Tuesday. (affirmative)", answer: "meets" },
          { sentence: "The staff ___ (not) like the rules. (negative)", answer: "do not" },
          { sentence: "___ the majority agree? (yes/no)", answer: "Does" },
          { sentence: "Under what circumstances ___ it occur? (wh-question)", answer: "does" },
          { sentence: "Each student ___ a laptop. (affirmative)", answer: "has" },
          { sentence: "The committee ___ (not) unanimous. (negative)", answer: "is not" }
        ]
      }
    }
  },

  "present-progressive": {
    id: "present-progressive",
    title: "Present Progressive",
    explanation: `
      <h2>Present Progressive</h2>
      <p>Put the correct forms of the verbs into the gaps. Use <strong>Present Progressive</strong> (am/is/are + verb-ing).</p>
      <ul>
        <li><strong>I</strong> am working</li>
        <li><strong>He / She / It</strong> is working</li>
        <li><strong>You / We / They</strong> are working</li>
      </ul>
      <p>Use it for actions happening now, temporary situations, and future plans.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ right now. (to work)", answer: "am working" },
          { sentence: "She ___ English. (to study)", answer: "is studying" },
          { sentence: "They ___ football. (to play)", answer: "are playing" },
          { sentence: "He ___ TV. (to watch)", answer: "is watching" },
          { sentence: "We ___ lunch. (to eat)", answer: "are eating" },
          { sentence: "You ___ a book. (to read)", answer: "are reading" },
          { sentence: "It ___ outside. (to rain)", answer: "is raining" },
          { sentence: "The children ___. (to sleep)", answer: "are sleeping" },
          { sentence: "Maria ___ dinner. (to cook)", answer: "is cooking" },
          { sentence: "My brother ___ to work. (to drive)", answer: "is driving" }
        ],
        medium: [
          { sentence: "I ___ (wait) for the bus.", answer: "am waiting" },
          { sentence: "She ___ (look) for her keys.", answer: "is looking" },
          { sentence: "They ___ (have) a meeting.", answer: "are having" },
          { sentence: "He ___ (think) about it.", answer: "is thinking" },
          { sentence: "We ___ (plan) a trip.", answer: "are planning" },
          { sentence: "The sun ___ (shine).", answer: "is shining" },
          { sentence: "Someone ___ (knock) at the door.", answer: "is knocking" },
          { sentence: "The students ___ (take) a test.", answer: "are taking" },
          { sentence: "She ___ (wear) a red dress.", answer: "is wearing" },
          { sentence: "Prices ___ (rise) every year.", answer: "are rising" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal.", answer: "is discussing" },
          { sentence: "Neither of them ___ (work) today.", answer: "is working" },
          { sentence: "The number of students ___ (increase).", answer: "is increasing" },
          { sentence: "One of the boys ___ (cry).", answer: "is crying" },
          { sentence: "The police ___ (investigate) the case.", answer: "are investigating" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "is enjoying" },
          { sentence: "The team ___ (practice) for the match.", answer: "is practicing" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "are leaving" },
          { sentence: "The news ___ (spread) quickly.", answer: "is spreading" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "is writing" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not work) right now.", answer: "am not working" },
          { sentence: "She ___ (not study).", answer: "is not studying" },
          { sentence: "They ___ (not play) today.", answer: "are not playing" },
          { sentence: "He ___ (not watch) TV.", answer: "is not watching" },
          { sentence: "We ___ (not eat) meat.", answer: "are not eating" },
          { sentence: "You ___ (not listen) to me.", answer: "are not listening" },
          { sentence: "It ___ (not rain).", answer: "is not raining" },
          { sentence: "The children ___ (not sleep).", answer: "are not sleeping" },
          { sentence: "Maria ___ (not cook) tonight.", answer: "is not cooking" },
          { sentence: "My brother ___ (not work) today.", answer: "is not working" }
        ],
        medium: [
          { sentence: "I ___ (not wait) for anyone.", answer: "am not waiting" },
          { sentence: "She ___ (not look) well.", answer: "is not looking" },
          { sentence: "They ___ (not have) fun.", answer: "are not having" },
          { sentence: "He ___ (not think) about leaving.", answer: "is not thinking" },
          { sentence: "We ___ (not plan) to go.", answer: "are not planning" },
          { sentence: "The company ___ (not hire) anyone.", answer: "is not hiring" },
          { sentence: "Prices ___ (not fall).", answer: "are not falling" },
          { sentence: "She ___ (not wear) glasses.", answer: "is not wearing" },
          { sentence: "The bus ___ (not run) today.", answer: "is not running" },
          { sentence: "I ___ (not feel) well.", answer: "am not feeling" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) today.", answer: "is not working" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "are not accepting" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "is not listening" },
          { sentence: "Few people ___ (not attend) the meeting.", answer: "are not attending" },
          { sentence: "The committee ___ (not meet) until next week.", answer: "is not meeting" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "are not agreeing" },
          { sentence: "The government ___ (not change) the law.", answer: "is not changing" },
          { sentence: "Either of the options ___ (not work) for me.", answer: "is not working" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "is not supporting" },
          { sentence: "Half of the class ___ (not participate).", answer: "is not participating" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you working right now?", answer: "Are" },
          { sentence: "___ she studying English?", answer: "Is" },
          { sentence: "___ they playing football?", answer: "Are" },
          { sentence: "___ he watching TV?", answer: "Is" },
          { sentence: "___ we eating lunch?", answer: "Are" },
          { sentence: "___ it raining?", answer: "Is" },
          { sentence: "___ the children sleeping?", answer: "Are" },
          { sentence: "___ Maria cooking?", answer: "Is" },
          { sentence: "___ your brother working?", answer: "Is" },
          { sentence: "___ you listening?", answer: "Are" }
        ],
        medium: [
          { sentence: "___ you waiting for someone?", answer: "Are" },
          { sentence: "___ she looking for her keys?", answer: "Is" },
          { sentence: "___ they having a meeting?", answer: "Are" },
          { sentence: "___ he thinking about it?", answer: "Is" },
          { sentence: "___ we planning a trip?", answer: "Are" },
          { sentence: "___ the sun shining?", answer: "Is" },
          { sentence: "___ someone knocking at the door?", answer: "Is" },
          { sentence: "___ the students taking a test?", answer: "Are" },
          { sentence: "___ she wearing a red dress?", answer: "Is" },
          { sentence: "___ prices rising?", answer: "Are" }
        ],
        hard: [
          { sentence: "___ the committee discussing the proposal?", answer: "Is" },
          { sentence: "___ either of them working today?", answer: "Is" },
          { sentence: "___ the number of students increasing?", answer: "Is" },
          { sentence: "___ the police investigating the case?", answer: "Are" },
          { sentence: "___ everybody enjoying the party?", answer: "Is" },
          { sentence: "___ the team practicing for the match?", answer: "Is" },
          { sentence: "___ some of the staff leaving early?", answer: "Are" },
          { sentence: "___ the news spreading quickly?", answer: "Is" },
          { sentence: "___ each of the students writing an essay?", answer: "Is" },
          { sentence: "___ one of the boys crying?", answer: "Is" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "What ___ you doing?", answer: "are" },
          { sentence: "Where ___ she going?", answer: "is" },
          { sentence: "When ___ they leaving?", answer: "are" },
          { sentence: "Why ___ he crying?", answer: "is" },
          { sentence: "Who ___ you waiting for?", answer: "are" },
          { sentence: "What ___ Maria cooking?", answer: "is" },
          { sentence: "Where ___ the children playing?", answer: "are" },
          { sentence: "Why ___ they laughing?", answer: "are" },
          { sentence: "Who ___ she talking to?", answer: "is" },
          { sentence: "What ___ your brother watching?", answer: "is" }
        ],
        medium: [
          { sentence: "How long ___ you waiting?", answer: "are" },
          { sentence: "What ___ she looking for?", answer: "is" },
          { sentence: "Where ___ they living now?", answer: "are" },
          { sentence: "Why ___ he working so hard?", answer: "is" },
          { sentence: "What ___ we having for dinner?", answer: "are" },
          { sentence: "When ___ the meeting starting?", answer: "is" },
          { sentence: "Who ___ you speaking to?", answer: "are" },
          { sentence: "What ___ the students studying?", answer: "are" },
          { sentence: "Why ___ prices rising?", answer: "are" },
          { sentence: "Where ___ your brother working?", answer: "is" }
        ],
        hard: [
          { sentence: "What ___ the committee discussing?", answer: "is" },
          { sentence: "Why ___ neither of them working?", answer: "is" },
          { sentence: "Where ___ the police looking?", answer: "are" },
          { sentence: "What ___ everybody thinking?", answer: "is" },
          { sentence: "When ___ the team playing next?", answer: "is" },
          { sentence: "Who ___ some of the staff meeting?", answer: "are" },
          { sentence: "Why ___ the news spreading so fast?", answer: "is" },
          { sentence: "What ___ each student writing?", answer: "is" },
          { sentence: "How ___ the number of students changing?", answer: "is" },
          { sentence: "Where ___ one of the boys going?", answer: "is" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (work) right now. (affirmative)", answer: "am working" },
          { sentence: "She ___ (not study). (negative)", answer: "is not studying" },
          { sentence: "___ they playing? (yes/no)", answer: "Are" },
          { sentence: "What ___ you (do)? (wh-question)", answer: "are you doing" },
          { sentence: "They ___ (eat) lunch. (affirmative)", answer: "are eating" },
          { sentence: "He ___ (not watch) TV. (negative)", answer: "is not watching" },
          { sentence: "___ it (rain)? (yes/no)", answer: "Is it raining" },
          { sentence: "Where ___ she (go)? (wh-question)", answer: "is she going" },
          { sentence: "We ___ (read) a book. (affirmative)", answer: "are reading" },
          { sentence: "The children ___ (not sleep). (negative)", answer: "are not sleeping" }
        ],
        medium: [
          { sentence: "She ___ (look) for her keys. (affirmative)", answer: "is looking" },
          { sentence: "They ___ (not have) fun. (negative)", answer: "are not having" },
          { sentence: "___ he (think) about it? (yes/no)", answer: "Is he thinking" },
          { sentence: "Why ___ they (laugh)? (wh-question)", answer: "are they laughing" },
          { sentence: "The sun ___ (shine). (affirmative)", answer: "is shining" },
          { sentence: "We ___ (not plan) to go. (negative)", answer: "are not planning" },
          { sentence: "___ the students (take) a test? (yes/no)", answer: "Are the students taking" },
          { sentence: "What ___ she (cook)? (wh-question)", answer: "is she cooking" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "is knocking" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "are not falling" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "is discussing" },
          { sentence: "Neither of them ___ (not work) today. (negative)", answer: "is not working" },
          { sentence: "___ the police (investigate)? (yes/no)", answer: "Are the police investigating" },
          { sentence: "What ___ the committee (discuss)? (wh-question)", answer: "is the committee discussing" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "is enjoying" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "are not accepting" },
          { sentence: "___ the team (practice)? (yes/no)", answer: "Is the team practicing" },
          { sentence: "Why ___ the news (spread) so fast? (wh-question)", answer: "is the news spreading" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "is writing" },
          { sentence: "The committee ___ (not meet) yet. (negative)", answer: "is not meeting" }
        ]
      }
    }
  },

  "simple-past": {
    id: "simple-past",
    title: "Simple Past",
    explanation: `
      <h2>Simple Past</h2>
      <p>Put the correct forms of the verbs into the gaps. Use <strong>Simple Past</strong> in the statements.</p>
      <ul>
        <li>I/You/He/She/It/We/They <strong>worked</strong> / <strong>went</strong></li>
      </ul>
      <p>Use the simple past for completed actions and events in the past.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ to school yesterday. (to go)", answer: "went" },
          { sentence: "She ___ last week. (to work)", answer: "worked" },
          { sentence: "They ___ football. (to play)", answer: "played" },
          { sentence: "He ___ TV last night. (to watch)", answer: "watched" },
          { sentence: "We ___ lunch at noon. (to eat)", answer: "ate" },
          { sentence: "You ___ the movie. (to see)", answer: "saw" },
          { sentence: "It ___ yesterday. (to rain)", answer: "rained" },
          { sentence: "The children ___ well. (to sleep)", answer: "slept" },
          { sentence: "Maria ___ dinner. (to cook)", answer: "cooked" },
          { sentence: "My brother ___ to work. (to drive)", answer: "drove" }
        ],
        medium: [
          { sentence: "I ___ (wait) for the bus.", answer: "waited" },
          { sentence: "She ___ (look) for her keys.", answer: "looked" },
          { sentence: "They ___ (have) a meeting.", answer: "had" },
          { sentence: "He ___ (think) about it.", answer: "thought" },
          { sentence: "We ___ (plan) a trip.", answer: "planned" },
          { sentence: "The sun ___ (shine) all day.", answer: "shone" },
          { sentence: "Someone ___ (knock) at the door.", answer: "knocked" },
          { sentence: "The students ___ (take) a test.", answer: "took" },
          { sentence: "She ___ (wear) a red dress.", answer: "wore" },
          { sentence: "Prices ___ (rise) last year.", answer: "rose" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal.", answer: "discussed" },
          { sentence: "Neither of them ___ (work) yesterday.", answer: "worked" },
          { sentence: "The number of students ___ (increase).", answer: "increased" },
          { sentence: "One of the boys ___ (cry).", answer: "cried" },
          { sentence: "The police ___ (investigate) the case.", answer: "investigated" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "enjoyed" },
          { sentence: "The team ___ (practice) for the match.", answer: "practiced" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "left" },
          { sentence: "The news ___ (spread) quickly.", answer: "spread" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "wrote" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not go) to school yesterday.", answer: "did not go" },
          { sentence: "She ___ (not work) last week.", answer: "did not work" },
          { sentence: "They ___ (not play) football.", answer: "did not play" },
          { sentence: "He ___ (not watch) TV.", answer: "did not watch" },
          { sentence: "We ___ (not eat) meat.", answer: "did not eat" },
          { sentence: "You ___ (not see) the movie.", answer: "did not see" },
          { sentence: "It ___ (not rain) yesterday.", answer: "did not rain" },
          { sentence: "The children ___ (not sleep) well.", answer: "did not sleep" },
          { sentence: "Maria ___ (not cook) dinner.", answer: "did not cook" },
          { sentence: "My brother ___ (not drive) to work.", answer: "did not drive" }
        ],
        medium: [
          { sentence: "I ___ (not wait) for anyone.", answer: "did not wait" },
          { sentence: "She ___ (not look) well.", answer: "did not look" },
          { sentence: "They ___ (not have) fun.", answer: "did not have" },
          { sentence: "He ___ (not think) about leaving.", answer: "did not think" },
          { sentence: "We ___ (not plan) to go.", answer: "did not plan" },
          { sentence: "The company ___ (not hire) anyone.", answer: "did not hire" },
          { sentence: "Prices ___ (not fall).", answer: "did not fall" },
          { sentence: "She ___ (not wear) glasses.", answer: "did not wear" },
          { sentence: "The bus ___ (not run) yesterday.", answer: "did not run" },
          { sentence: "I ___ (not feel) well.", answer: "did not feel" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) yesterday.", answer: "did not work" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "did not accept" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "did not listen" },
          { sentence: "Few people ___ (not attend) the meeting.", answer: "did not attend" },
          { sentence: "The committee ___ (not meet) last week.", answer: "did not meet" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "did not agree" },
          { sentence: "The government ___ (not change) the law.", answer: "did not change" },
          { sentence: "Either of the options ___ (not work) for me.", answer: "did not work" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "did not support" },
          { sentence: "Half of the class ___ (not participate).", answer: "did not participate" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you go to school yesterday?", answer: "Did" },
          { sentence: "___ she work last week?", answer: "Did" },
          { sentence: "___ they play football?", answer: "Did" },
          { sentence: "___ he watch TV?", answer: "Did" },
          { sentence: "___ we eat lunch?", answer: "Did" },
          { sentence: "___ it rain yesterday?", answer: "Did" },
          { sentence: "___ the children sleep well?", answer: "Did" },
          { sentence: "___ Maria cook dinner?", answer: "Did" },
          { sentence: "___ your brother drive?", answer: "Did" },
          { sentence: "___ you see the movie?", answer: "Did" }
        ],
        medium: [
          { sentence: "___ you wait for the bus?", answer: "Did" },
          { sentence: "___ she look for her keys?", answer: "Did" },
          { sentence: "___ they have a meeting?", answer: "Did" },
          { sentence: "___ he think about it?", answer: "Did" },
          { sentence: "___ we plan a trip?", answer: "Did" },
          { sentence: "___ the sun shine?", answer: "Did" },
          { sentence: "___ someone knock at the door?", answer: "Did" },
          { sentence: "___ the students take a test?", answer: "Did" },
          { sentence: "___ she wear a red dress?", answer: "Did" },
          { sentence: "___ prices rise?", answer: "Did" }
        ],
        hard: [
          { sentence: "___ the committee discuss the proposal?", answer: "Did" },
          { sentence: "___ either of them work yesterday?", answer: "Did" },
          { sentence: "___ the number of students increase?", answer: "Did" },
          { sentence: "___ the police investigate the case?", answer: "Did" },
          { sentence: "___ everybody enjoy the party?", answer: "Did" },
          { sentence: "___ the team practice for the match?", answer: "Did" },
          { sentence: "___ some of the staff leave early?", answer: "Did" },
          { sentence: "___ the news spread quickly?", answer: "Did" },
          { sentence: "___ each student write an essay?", answer: "Did" },
          { sentence: "___ one of the boys cry?", answer: "Did" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "What ___ you do yesterday?", answer: "did" },
          { sentence: "Where ___ she go?", answer: "did" },
          { sentence: "When ___ they leave?", answer: "did" },
          { sentence: "Why ___ he cry?", answer: "did" },
          { sentence: "Who ___ you wait for?", answer: "did" },
          { sentence: "What ___ Maria cook?", answer: "did" },
          { sentence: "Where ___ the children play?", answer: "did" },
          { sentence: "Why ___ they laugh?", answer: "did" },
          { sentence: "Who ___ she talk to?", answer: "did" },
          { sentence: "What ___ your brother watch?", answer: "did" }
        ],
        medium: [
          { sentence: "How long ___ you wait?", answer: "did" },
          { sentence: "What ___ she look for?", answer: "did" },
          { sentence: "Where ___ they live?", answer: "did" },
          { sentence: "Why ___ he work so hard?", answer: "did" },
          { sentence: "What ___ we have for dinner?", answer: "did" },
          { sentence: "When ___ the meeting start?", answer: "did" },
          { sentence: "Who ___ you speak to?", answer: "did" },
          { sentence: "What ___ the students study?", answer: "did" },
          { sentence: "Why ___ prices rise?", answer: "did" },
          { sentence: "Where ___ your brother work?", answer: "did" }
        ],
        hard: [
          { sentence: "What ___ the committee discuss?", answer: "did" },
          { sentence: "Why ___ neither of them work?", answer: "did" },
          { sentence: "Where ___ the police look?", answer: "did" },
          { sentence: "What ___ everybody think?", answer: "did" },
          { sentence: "When ___ the team play?", answer: "did" },
          { sentence: "Who ___ some of the staff meet?", answer: "did" },
          { sentence: "Why ___ the news spread so fast?", answer: "did" },
          { sentence: "What ___ each student write?", answer: "did" },
          { sentence: "How ___ the number of students change?", answer: "did" },
          { sentence: "Where ___ one of the boys go?", answer: "did" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (go) to school yesterday. (affirmative)", answer: "went" },
          { sentence: "She ___ (not work) last week. (negative)", answer: "did not work" },
          { sentence: "___ they play football? (yes/no)", answer: "Did" },
          { sentence: "What ___ you do? (wh-question)", answer: "did" },
          { sentence: "They ___ (eat) lunch. (affirmative)", answer: "ate" },
          { sentence: "He ___ (not watch) TV. (negative)", answer: "did not watch" },
          { sentence: "___ it rain? (yes/no)", answer: "Did" },
          { sentence: "Where ___ she go? (wh-question)", answer: "did" },
          { sentence: "We ___ (read) a book. (affirmative)", answer: "read" },
          { sentence: "The children ___ (not sleep) well. (negative)", answer: "did not sleep" }
        ],
        medium: [
          { sentence: "She ___ (look) for her keys. (affirmative)", answer: "looked" },
          { sentence: "They ___ (not have) fun. (negative)", answer: "did not have" },
          { sentence: "___ he think about it? (yes/no)", answer: "Did" },
          { sentence: "Why ___ they laugh? (wh-question)", answer: "did" },
          { sentence: "The sun ___ (shine). (affirmative)", answer: "shone" },
          { sentence: "We ___ (not plan) to go. (negative)", answer: "did not plan" },
          { sentence: "___ the students take a test? (yes/no)", answer: "Did" },
          { sentence: "What ___ she cook? (wh-question)", answer: "did" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "knocked" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "did not fall" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "discussed" },
          { sentence: "Neither of them ___ (not work) yesterday. (negative)", answer: "did not work" },
          { sentence: "___ the police investigate? (yes/no)", answer: "Did" },
          { sentence: "What ___ the committee discuss? (wh-question)", answer: "did" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "enjoyed" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "did not accept" },
          { sentence: "___ the team practice? (yes/no)", answer: "Did" },
          { sentence: "Why ___ the news spread so fast? (wh-question)", answer: "did" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "wrote" },
          { sentence: "The committee ___ (not meet) last week. (negative)", answer: "did not meet" }
        ]
      }
    }
  },

  "simple-past-regular": {
    id: "simple-past-regular",
    title: "Simple Past - Regular verbs",
    explanation: `
      <h2>Simple Past - Regular verbs</h2>
      <p>Put the correct forms of the verbs into the gaps. Use <strong>Simple Past</strong> in the statements.</p>
      <p>Regular verbs add <strong>-ed</strong>: work → worked, play → played. Spelling: stop → stopped, study → studied.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "Emma ___ a film. (to watch)", answer: "watched" },
          { sentence: "He ___ a box. (to carry)", answer: "carried" },
          { sentence: "They ___ their mother. (to help)", answer: "helped" },
          { sentence: "Tom and Lily ___ things. (to swap)", answer: "swapped" },
          { sentence: "I ___ to my teacher. (to talk)", answer: "talked" },
          { sentence: "Sarah ___ with Paul. (to dance)", answer: "danced" },
          { sentence: "The boys ___ basketball. (to try)", answer: "tried" },
          { sentence: "We ___ a trip. (to plan)", answer: "planned" },
          { sentence: "She ___ her hair. (to wash)", answer: "washed" },
          { sentence: "The bus ___ at the traffic lights. (to stop)", answer: "stopped" }
        ],
        medium: [
          { sentence: "The people ___ something to each other. (to whisper)", answer: "whispered" },
          { sentence: "Mark ___ the report yesterday. (to finish)", answer: "finished" },
          { sentence: "The assistant ___ the file yesterday. (to delete)", answer: "deleted" },
          { sentence: "The weather ___ really nice. (to seem)", answer: "seemed" },
          { sentence: "Last year our class ___ a trip. (to plan)", answer: "planned" },
          { sentence: "Our dog ___ the ball. (to chase)", answer: "chased" },
          { sentence: "He ___ to 10. (to count)", answer: "counted" },
          { sentence: "She ___ her homework in the afternoon. (to complete)", answer: "completed" },
          { sentence: "Last summer I ___ to Berlin. (to travel)", answer: "travelled" },
          { sentence: "They ___ something to drink. (to order)", answer: "ordered" }
        ],
        hard: [
          { sentence: "The committee ___ the proposal at length. (to discuss)", answer: "discussed" },
          { sentence: "Neither of them ___ the mistake. (to admit)", answer: "admitted" },
          { sentence: "The number of students ___ over the years. (to multiply)", answer: "multiplied" },
          { sentence: "One of the boys ___ for his behavior. (to apologize)", answer: "apologized" },
          { sentence: "The police ___ the case thoroughly. (to investigate)", answer: "investigated" },
          { sentence: "Everybody ___ the party. (to enjoy)", answer: "enjoyed" },
          { sentence: "The team ___ for the match every day. (to practice)", answer: "practiced" },
          { sentence: "Some of the staff ___ last month. (to resign)", answer: "resigned" },
          { sentence: "The news ___ everyone. (to surprise)", answer: "surprised" },
          { sentence: "Each of the students ___ an essay. (to submit)", answer: "submitted" }
        ]
      }
    }
  },

  "simple-past-irregular": {
    id: "simple-past-irregular",
    title: "Simple Past - Irregular verbs",
    explanation: `
      <h2>Simple Past - Irregular verbs</h2>
      <p>Put the correct forms of the verbs into the gaps. Use <strong>Simple Past</strong> in the statements.</p>
      <p>Irregular verbs have their own past form: go → went, see → saw, eat → ate, write → wrote.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I ___ to school yesterday. (to go)", answer: "went" },
          { sentence: "She ___ the film last week. (to see)", answer: "saw" },
          { sentence: "They ___ lunch at noon. (to eat)", answer: "ate" },
          { sentence: "He ___ a letter. (to write)", answer: "wrote" },
          { sentence: "We ___ the bus. (to take)", answer: "took" },
          { sentence: "You ___ a new phone. (to buy)", answer: "bought" },
          { sentence: "It ___ to rain. (to begin)", answer: "began" },
          { sentence: "The children ___ well. (to sleep)", answer: "slept" },
          { sentence: "Lucy ___ home early. (to come)", answer: "came" },
          { sentence: "My sister ___ to work. (to drive)", answer: "drove" }
        ],
        medium: [
          { sentence: "I ___ a meeting yesterday. (to have)", answer: "had" },
          { sentence: "She ___ her glasses. (to find)", answer: "found" },
          { sentence: "They ___ early. (to leave)", answer: "left" },
          { sentence: "He ___ about it. (to think)", answer: "thought" },
          { sentence: "We ___ the red one. (to choose)", answer: "chose" },
          { sentence: "The sun ___ all day. (to shine)", answer: "shone" },
          { sentence: "Someone ___ the vase. (to break)", answer: "broke" },
          { sentence: "The students ___ the book. (to read)", answer: "read" },
          { sentence: "She ___ a blue dress. (to wear)", answer: "wore" },
          { sentence: "Prices ___ last year. (to rise)", answer: "rose" }
        ],
        hard: [
          { sentence: "The committee ___ last Tuesday. (to meet)", answer: "met" },
          { sentence: "Neither of them ___ the answer. (to know)", answer: "knew" },
          { sentence: "The number of students ___ steadily. (to grow)", answer: "grew" },
          { sentence: "One of the boys ___ his homework. (to forget)", answer: "forgot" },
          { sentence: "The police ___ the suspect. (to catch)", answer: "caught" },
          { sentence: "Everybody ___ the lesson. (to understand)", answer: "understood" },
          { sentence: "The team ___ the championship. (to win)", answer: "won" },
          { sentence: "Some of the staff ___ their jobs. (to quit)", answer: "quit" },
          { sentence: "The news ___ quickly. (to spread)", answer: "spread" },
          { sentence: "Each of the students ___ at the conference. (to speak)", answer: "spoke" }
        ]
      }
    }
  },

  "past-progressive": {
    id: "past-progressive",
    title: "Past Progressive",
    explanation: `
      <h2>Past Progressive</h2>
      <p>The past progressive (past continuous) is formed with <strong>was/were + verb-ing</strong>.</p>
      <ul>
        <li><strong>I / He / She / It</strong> was working</li>
        <li><strong>You / We / They</strong> were working</li>
      </ul>
      <p>Use it for actions in progress at a specific time in the past, or for interrupted actions.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ (work) when you called.", answer: "was working" },
          { sentence: "She ___ (study) at 8 PM.", answer: "was studying" },
          { sentence: "They ___ (play) football.", answer: "were playing" },
          { sentence: "He ___ (watch) TV.", answer: "was watching" },
          { sentence: "We ___ (eat) lunch.", answer: "were eating" },
          { sentence: "You ___ (read) a book.", answer: "were reading" },
          { sentence: "It ___ (rain) when we left.", answer: "was raining" },
          { sentence: "The children ___ (sleep).", answer: "were sleeping" },
          { sentence: "Maria ___ (cook) dinner.", answer: "was cooking" },
          { sentence: "My brother ___ (drive) to work.", answer: "was driving" }
        ],
        medium: [
          { sentence: "I ___ (wait) for the bus when it started to rain.", answer: "was waiting" },
          { sentence: "She ___ (look) for her keys.", answer: "was looking" },
          { sentence: "They ___ (have) a meeting.", answer: "were having" },
          { sentence: "He ___ (think) about it.", answer: "was thinking" },
          { sentence: "We ___ (plan) a trip.", answer: "were planning" },
          { sentence: "The sun ___ (shine) all day.", answer: "was shining" },
          { sentence: "Someone ___ (knock) at the door.", answer: "was knocking" },
          { sentence: "The students ___ (take) a test.", answer: "were taking" },
          { sentence: "She ___ (wear) a red dress.", answer: "was wearing" },
          { sentence: "Prices ___ (rise) quickly.", answer: "were rising" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal.", answer: "was discussing" },
          { sentence: "Neither of them ___ (work) at that time.", answer: "was working" },
          { sentence: "The number of students ___ (increase).", answer: "was increasing" },
          { sentence: "One of the boys ___ (cry).", answer: "was crying" },
          { sentence: "The police ___ (investigate) the case.", answer: "were investigating" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "was enjoying" },
          { sentence: "The team ___ (practice) for the match.", answer: "was practicing" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "were leaving" },
          { sentence: "The news ___ (spread) quickly.", answer: "was spreading" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "was writing" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not work) when you called.", answer: "was not working" },
          { sentence: "She ___ (not study) at 8 PM.", answer: "was not studying" },
          { sentence: "They ___ (not play) football.", answer: "were not playing" },
          { sentence: "He ___ (not watch) TV.", answer: "was not watching" },
          { sentence: "We ___ (not eat) meat.", answer: "were not eating" },
          { sentence: "You ___ (not listen) to me.", answer: "were not listening" },
          { sentence: "It ___ (not rain) when we left.", answer: "was not raining" },
          { sentence: "The children ___ (not sleep).", answer: "were not sleeping" },
          { sentence: "Maria ___ (not cook) dinner.", answer: "was not cooking" },
          { sentence: "My brother ___ (not work) that day.", answer: "was not working" }
        ],
        medium: [
          { sentence: "I ___ (not wait) for anyone.", answer: "was not waiting" },
          { sentence: "She ___ (not look) well.", answer: "was not looking" },
          { sentence: "They ___ (not have) fun.", answer: "were not having" },
          { sentence: "He ___ (not think) about leaving.", answer: "was not thinking" },
          { sentence: "We ___ (not plan) to go.", answer: "were not planning" },
          { sentence: "The company ___ (not hire) anyone.", answer: "was not hiring" },
          { sentence: "Prices ___ (not fall).", answer: "were not falling" },
          { sentence: "She ___ (not wear) glasses.", answer: "was not wearing" },
          { sentence: "The bus ___ (not run) that day.", answer: "was not running" },
          { sentence: "I ___ (not feel) well.", answer: "was not feeling" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) at that time.", answer: "was not working" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "were not accepting" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "was not listening" },
          { sentence: "Few people ___ (not attend) the meeting.", answer: "were not attending" },
          { sentence: "The committee ___ (not meet) last week.", answer: "was not meeting" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "were not agreeing" },
          { sentence: "The government ___ (not change) the law.", answer: "was not changing" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "was not supporting" },
          { sentence: "Half of the class ___ (not participate).", answer: "was not participating" },
          { sentence: "The news ___ (not spread) yet.", answer: "was not spreading" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you working when I called?", answer: "Were" },
          { sentence: "___ she studying at 8 PM?", answer: "Was" },
          { sentence: "___ they playing football?", answer: "Were" },
          { sentence: "___ he watching TV?", answer: "Was" },
          { sentence: "___ we eating lunch?", answer: "Were" },
          { sentence: "___ it raining?", answer: "Was" },
          { sentence: "___ the children sleeping?", answer: "Were" },
          { sentence: "___ Maria cooking?", answer: "Was" },
          { sentence: "___ your brother working?", answer: "Was" },
          { sentence: "___ you listening?", answer: "Were" }
        ],
        medium: [
          { sentence: "___ you waiting for the bus?", answer: "Were" },
          { sentence: "___ she looking for her keys?", answer: "Was" },
          { sentence: "___ they having a meeting?", answer: "Were" },
          { sentence: "___ he thinking about it?", answer: "Was" },
          { sentence: "___ we planning a trip?", answer: "Were" },
          { sentence: "___ the sun shining?", answer: "Was" },
          { sentence: "___ someone knocking at the door?", answer: "Was" },
          { sentence: "___ the students taking a test?", answer: "Were" },
          { sentence: "___ she wearing a red dress?", answer: "Was" },
          { sentence: "___ prices rising?", answer: "Were" }
        ],
        hard: [
          { sentence: "___ the committee discussing the proposal?", answer: "Was" },
          { sentence: "___ either of them working?", answer: "Was" },
          { sentence: "___ the number of students increasing?", answer: "Was" },
          { sentence: "___ the police investigating the case?", answer: "Were" },
          { sentence: "___ everybody enjoying the party?", answer: "Was" },
          { sentence: "___ the team practicing?", answer: "Was" },
          { sentence: "___ some of the staff leaving early?", answer: "Were" },
          { sentence: "___ the news spreading quickly?", answer: "Was" },
          { sentence: "___ each student writing an essay?", answer: "Was" },
          { sentence: "___ one of the boys crying?", answer: "Was" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "What ___ you doing when I called?", answer: "were" },
          { sentence: "Where ___ she going?", answer: "was" },
          { sentence: "When ___ they leaving?", answer: "were" },
          { sentence: "Why ___ he crying?", answer: "was" },
          { sentence: "Who ___ you waiting for?", answer: "were" },
          { sentence: "What ___ Maria cooking?", answer: "was" },
          { sentence: "Where ___ the children playing?", answer: "were" },
          { sentence: "Why ___ they laughing?", answer: "were" },
          { sentence: "Who ___ she talking to?", answer: "was" },
          { sentence: "What ___ your brother watching?", answer: "was" }
        ],
        medium: [
          { sentence: "How long ___ you waiting?", answer: "were" },
          { sentence: "What ___ she looking for?", answer: "was" },
          { sentence: "Where ___ they living?", answer: "were" },
          { sentence: "Why ___ he working so hard?", answer: "was" },
          { sentence: "What ___ we having for dinner?", answer: "were" },
          { sentence: "When ___ the meeting starting?", answer: "was" },
          { sentence: "Who ___ you speaking to?", answer: "were" },
          { sentence: "What ___ the students studying?", answer: "were" },
          { sentence: "Why ___ prices rising?", answer: "were" },
          { sentence: "Where ___ your brother working?", answer: "was" }
        ],
        hard: [
          { sentence: "What ___ the committee discussing?", answer: "was" },
          { sentence: "Why ___ neither of them working?", answer: "was" },
          { sentence: "Where ___ the police looking?", answer: "were" },
          { sentence: "What ___ everybody thinking?", answer: "was" },
          { sentence: "When ___ the team playing?", answer: "was" },
          { sentence: "Who ___ some of the staff meeting?", answer: "were" },
          { sentence: "Why ___ the news spreading so fast?", answer: "was" },
          { sentence: "What ___ each student writing?", answer: "was" },
          { sentence: "How ___ the number of students changing?", answer: "was" },
          { sentence: "Where ___ one of the boys going?", answer: "was" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (work) when you called. (affirmative)", answer: "was working" },
          { sentence: "She ___ (not study). (negative)", answer: "was not studying" },
          { sentence: "___ they playing? (yes/no)", answer: "Were" },
          { sentence: "What ___ you doing? (wh-question)", answer: "were" },
          { sentence: "They ___ (eat) lunch. (affirmative)", answer: "were eating" },
          { sentence: "He ___ (not watch) TV. (negative)", answer: "was not watching" },
          { sentence: "___ it raining? (yes/no)", answer: "Was" },
          { sentence: "Where ___ she going? (wh-question)", answer: "was" },
          { sentence: "We ___ (read) a book. (affirmative)", answer: "were reading" },
          { sentence: "The children ___ (not sleep). (negative)", answer: "were not sleeping" }
        ],
        medium: [
          { sentence: "She ___ (look) for her keys. (affirmative)", answer: "was looking" },
          { sentence: "They ___ (not have) fun. (negative)", answer: "were not having" },
          { sentence: "___ he thinking about it? (yes/no)", answer: "Was" },
          { sentence: "Why ___ they laughing? (wh-question)", answer: "were" },
          { sentence: "The sun ___ (shine). (affirmative)", answer: "was shining" },
          { sentence: "We ___ (not plan) to go. (negative)", answer: "were not planning" },
          { sentence: "___ the students taking a test? (yes/no)", answer: "Were" },
          { sentence: "What ___ she cooking? (wh-question)", answer: "was" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "was knocking" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "were not falling" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "was discussing" },
          { sentence: "Neither of them ___ (not work) then. (negative)", answer: "was not working" },
          { sentence: "___ the police investigating? (yes/no)", answer: "Were" },
          { sentence: "What ___ the committee discussing? (wh-question)", answer: "was" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "was enjoying" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "were not accepting" },
          { sentence: "___ the team practicing? (yes/no)", answer: "Was" },
          { sentence: "Why ___ the news spreading so fast? (wh-question)", answer: "was" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "was writing" },
          { sentence: "The committee ___ (not meet) last week. (negative)", answer: "was not meeting" }
        ]
      }
    }
  },

  "present-perfect": {
    id: "present-perfect",
    title: "Present Perfect",
    explanation: `
      <h2>Present Perfect</h2>
      <p>Put in the verbs in brackets into the gaps. Use <strong>Present Perfect</strong> (have/has + past participle).</p>
      <ul>
        <li><strong>I / You / We / They</strong> have worked</li>
        <li><strong>He / She / It</strong> has worked</li>
      </ul>
      <p>Use it for actions that happened at an unspecified time, or that connect past to present.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ my father's car. (to wash)", answer: "have washed" },
          { sentence: "Karen ___ me an e-mail. (to send)", answer: "has sent" },
          { sentence: "Dave and Pat ___ the museum. (to visit)", answer: "have visited" },
          { sentence: "I ___ at the pet shop. (to be)", answer: "have been" },
          { sentence: "They ___ their backpacks. (to pack)", answer: "have packed" },
          { sentence: "Marcus ___ an accident. (to have)", answer: "has had" },
          { sentence: "We ___ the shopping for our grandmother. (to do)", answer: "have done" },
          { sentence: "I ___ my bike. (to clean)", answer: "have cleaned" },
          { sentence: "Emily ___ her room. (to paint)", answer: "has painted" },
          { sentence: "Lisa and Colin ___ to a concert. (to go)", answer: "have gone" }
        ],
        medium: [
          { sentence: "I ___ (wait) for an hour.", answer: "have waited" },
          { sentence: "She ___ (look) for her keys everywhere.", answer: "has looked" },
          { sentence: "They ___ (have) several meetings.", answer: "have had" },
          { sentence: "He ___ (think) about it.", answer: "has thought" },
          { sentence: "We ___ (plan) the trip.", answer: "have planned" },
          { sentence: "The sun ___ (shine) all week.", answer: "has shone" },
          { sentence: "Someone ___ (knock) at the door.", answer: "has knocked" },
          { sentence: "The students ___ (take) the test.", answer: "have taken" },
          { sentence: "She ___ (wear) that dress before.", answer: "has worn" },
          { sentence: "Prices ___ (rise) this year.", answer: "have risen" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal.", answer: "has discussed" },
          { sentence: "Neither of them ___ (work) here before.", answer: "has worked" },
          { sentence: "The number of students ___ (increase).", answer: "has increased" },
          { sentence: "One of the boys ___ (cry).", answer: "has cried" },
          { sentence: "The police ___ (investigate) the case.", answer: "have investigated" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "has enjoyed" },
          { sentence: "The team ___ (practice) for the match.", answer: "has practiced" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "have left" },
          { sentence: "The news ___ (spread) quickly.", answer: "has spread" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "has written" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not go) to Paris yet.", answer: "have not gone" },
          { sentence: "She ___ (not work) here before.", answer: "has not worked" },
          { sentence: "They ___ (not play) football.", answer: "have not played" },
          { sentence: "He ___ (not watch) the movie.", answer: "has not watched" },
          { sentence: "We ___ (not eat) lunch yet.", answer: "have not eaten" },
          { sentence: "You ___ (not see) that film.", answer: "have not seen" },
          { sentence: "It ___ (not rain) today.", answer: "has not rained" },
          { sentence: "The children ___ (not sleep) well.", answer: "have not slept" },
          { sentence: "Maria ___ (not cook) dinner yet.", answer: "has not cooked" },
          { sentence: "My brother ___ (not drive) to work.", answer: "has not driven" }
        ],
        medium: [
          { sentence: "I ___ (not wait) long.", answer: "have not waited" },
          { sentence: "She ___ (not look) for it.", answer: "has not looked" },
          { sentence: "They ___ (not have) fun.", answer: "have not had" },
          { sentence: "He ___ (not think) about it yet.", answer: "has not thought" },
          { sentence: "We ___ (not plan) the trip yet.", answer: "have not planned" },
          { sentence: "The company ___ (not hire) anyone.", answer: "has not hired" },
          { sentence: "Prices ___ (not fall).", answer: "have not fallen" },
          { sentence: "She ___ (not wear) that before.", answer: "has not worn" },
          { sentence: "The bus ___ (not run) today.", answer: "has not run" },
          { sentence: "I ___ (not feel) well.", answer: "have not felt" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) here.", answer: "has not worked" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "have not accepted" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "has not listened" },
          { sentence: "Few people ___ (not attend) the meeting.", answer: "have not attended" },
          { sentence: "The committee ___ (not meet) yet.", answer: "has not met" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "have not agreed" },
          { sentence: "The government ___ (not change) the law.", answer: "has not changed" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "has not supported" },
          { sentence: "Half of the class ___ (not participate).", answer: "has not participated" },
          { sentence: "The news ___ (not spread) yet.", answer: "has not spread" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you gone to Paris?", answer: "Have" },
          { sentence: "___ she worked here before?", answer: "Has" },
          { sentence: "___ they played football?", answer: "Have" },
          { sentence: "___ he watched the movie?", answer: "Has" },
          { sentence: "___ we eaten lunch?", answer: "Have" },
          { sentence: "___ it rained today?", answer: "Has" },
          { sentence: "___ the children slept well?", answer: "Have" },
          { sentence: "___ Maria cooked dinner?", answer: "Has" },
          { sentence: "___ your brother driven to work?", answer: "Has" },
          { sentence: "___ you seen that film?", answer: "Have" }
        ],
        medium: [
          { sentence: "___ you waited long?", answer: "Have" },
          { sentence: "___ she looked for her keys?", answer: "Has" },
          { sentence: "___ they had a meeting?", answer: "Have" },
          { sentence: "___ he thought about it?", answer: "Has" },
          { sentence: "___ we planned the trip?", answer: "Have" },
          { sentence: "___ the sun shone?", answer: "Has" },
          { sentence: "___ someone knocked at the door?", answer: "Has" },
          { sentence: "___ the students taken the test?", answer: "Have" },
          { sentence: "___ she worn that dress before?", answer: "Has" },
          { sentence: "___ prices risen?", answer: "Have" }
        ],
        hard: [
          { sentence: "___ the committee discussed the proposal?", answer: "Has" },
          { sentence: "___ either of them worked here?", answer: "Has" },
          { sentence: "___ the number of students increased?", answer: "Has" },
          { sentence: "___ the police investigated the case?", answer: "Have" },
          { sentence: "___ everybody enjoyed the party?", answer: "Has" },
          { sentence: "___ the team practiced for the match?", answer: "Has" },
          { sentence: "___ some of the staff left early?", answer: "Have" },
          { sentence: "___ the news spread quickly?", answer: "Has" },
          { sentence: "___ each student written an essay?", answer: "Has" },
          { sentence: "___ one of the boys cried?", answer: "Has" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "What ___ you done?", answer: "have" },
          { sentence: "Where ___ she gone?", answer: "has" },
          { sentence: "When ___ they left?", answer: "have" },
          { sentence: "Why ___ he cried?", answer: "has" },
          { sentence: "Who ___ you seen?", answer: "have" },
          { sentence: "What ___ Maria cooked?", answer: "has" },
          { sentence: "Where ___ the children played?", answer: "have" },
          { sentence: "Why ___ they laughed?", answer: "have" },
          { sentence: "Who ___ she talked to?", answer: "has" },
          { sentence: "What ___ your brother watched?", answer: "has" }
        ],
        medium: [
          { sentence: "How long ___ you waited?", answer: "have" },
          { sentence: "What ___ she looked for?", answer: "has" },
          { sentence: "Where ___ they lived?", answer: "have" },
          { sentence: "Why ___ he worked so hard?", answer: "has" },
          { sentence: "What ___ we had for dinner?", answer: "have" },
          { sentence: "When ___ the meeting started?", answer: "has" },
          { sentence: "Who ___ you spoken to?", answer: "have" },
          { sentence: "What ___ the students studied?", answer: "have" },
          { sentence: "Why ___ prices risen?", answer: "have" },
          { sentence: "Where ___ your brother worked?", answer: "has" }
        ],
        hard: [
          { sentence: "What ___ the committee discussed?", answer: "has" },
          { sentence: "Why ___ neither of them worked?", answer: "has" },
          { sentence: "Where ___ the police looked?", answer: "have" },
          { sentence: "What ___ everybody thought?", answer: "has" },
          { sentence: "When ___ the team played?", answer: "has" },
          { sentence: "Who ___ some of the staff met?", answer: "have" },
          { sentence: "Why ___ the news spread so fast?", answer: "has" },
          { sentence: "What ___ each student written?", answer: "has" },
          { sentence: "How ___ the number of students changed?", answer: "has" },
          { sentence: "Where ___ one of the boys gone?", answer: "has" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (go) to Paris. (affirmative)", answer: "have gone" },
          { sentence: "She ___ (not work) here before. (negative)", answer: "has not worked" },
          { sentence: "___ they played football? (yes/no)", answer: "Have" },
          { sentence: "What ___ you done? (wh-question)", answer: "have" },
          { sentence: "They ___ (eat) lunch. (affirmative)", answer: "have eaten" },
          { sentence: "He ___ (not watch) the movie. (negative)", answer: "has not watched" },
          { sentence: "___ it rained? (yes/no)", answer: "Has" },
          { sentence: "Where ___ she gone? (wh-question)", answer: "has" },
          { sentence: "We ___ (read) the book. (affirmative)", answer: "have read" },
          { sentence: "The children ___ (not sleep) well. (negative)", answer: "have not slept" }
        ],
        medium: [
          { sentence: "She ___ (look) for her keys. (affirmative)", answer: "has looked" },
          { sentence: "They ___ (not have) fun. (negative)", answer: "have not had" },
          { sentence: "___ he thought about it? (yes/no)", answer: "Has" },
          { sentence: "Why ___ they laughed? (wh-question)", answer: "have" },
          { sentence: "The sun ___ (shine) all week. (affirmative)", answer: "has shone" },
          { sentence: "We ___ (not plan) the trip yet. (negative)", answer: "have not planned" },
          { sentence: "___ the students taken the test? (yes/no)", answer: "Have" },
          { sentence: "What ___ she cooked? (wh-question)", answer: "has" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "has knocked" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "have not fallen" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "has discussed" },
          { sentence: "Neither of them ___ (not work) here. (negative)", answer: "has not worked" },
          { sentence: "___ the police investigated? (yes/no)", answer: "Have" },
          { sentence: "What ___ the committee discussed? (wh-question)", answer: "has" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "has enjoyed" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "have not accepted" },
          { sentence: "___ the team practiced? (yes/no)", answer: "Has" },
          { sentence: "Why ___ the news spread so fast? (wh-question)", answer: "has" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "has written" },
          { sentence: "The committee ___ (not meet) yet. (negative)", answer: "has not met" }
        ]
      }
    }
  },

  "present-perfect-progressive": {
    id: "present-perfect-progressive",
    title: "Present Perfect Progressive",
    explanation: `
      <h2>Present Perfect Progressive</h2>
      <p>The present perfect progressive is formed with <strong>have/has been + verb-ing</strong>.</p>
      <ul>
        <li><strong>I / You / We / They</strong> have been working</li>
        <li><strong>He / She / It</strong> has been working</li>
      </ul>
      <p>Use it for actions that started in the past and continue to the present, or have just stopped.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ (work) here for five years.", answer: "have been working" },
          { sentence: "She ___ (study) English.", answer: "has been studying" },
          { sentence: "They ___ (play) football all morning.", answer: "have been playing" },
          { sentence: "He ___ (watch) TV all day.", answer: "has been watching" },
          { sentence: "We ___ (eat) lunch.", answer: "have been eating" },
          { sentence: "You ___ (read) for hours.", answer: "have been reading" },
          { sentence: "It ___ (rain) all day.", answer: "has been raining" },
          { sentence: "The children ___ (sleep) well.", answer: "have been sleeping" },
          { sentence: "Maria ___ (cook) dinner.", answer: "has been cooking" },
          { sentence: "My brother ___ (drive) for hours.", answer: "has been driving" }
        ],
        medium: [
          { sentence: "I ___ (wait) for the bus for an hour.", answer: "have been waiting" },
          { sentence: "She ___ (look) for her keys everywhere.", answer: "has been looking" },
          { sentence: "They ___ (have) meetings all week.", answer: "have been having" },
          { sentence: "He ___ (think) about it.", answer: "has been thinking" },
          { sentence: "We ___ (plan) the trip for months.", answer: "have been planning" },
          { sentence: "The sun ___ (shine) all week.", answer: "has been shining" },
          { sentence: "Someone ___ (knock) at the door.", answer: "has been knocking" },
          { sentence: "The students ___ (take) tests all day.", answer: "have been taking" },
          { sentence: "She ___ (wear) that dress a lot.", answer: "has been wearing" },
          { sentence: "Prices ___ (rise) steadily.", answer: "have been rising" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal.", answer: "has been discussing" },
          { sentence: "Neither of them ___ (work) here long.", answer: "has been working" },
          { sentence: "The number of students ___ (increase).", answer: "has been increasing" },
          { sentence: "One of the boys ___ (cry).", answer: "has been crying" },
          { sentence: "The police ___ (investigate) the case.", answer: "have been investigating" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "has been enjoying" },
          { sentence: "The team ___ (practice) for the match.", answer: "has been practicing" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "have been leaving" },
          { sentence: "The news ___ (spread) quickly.", answer: "has been spreading" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "has been writing" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not work) here long.", answer: "have not been working" },
          { sentence: "She ___ (not study) much.", answer: "has not been studying" },
          { sentence: "They ___ (not play) football.", answer: "have not been playing" },
          { sentence: "He ___ (not watch) TV.", answer: "has not been watching" },
          { sentence: "We ___ (not eat) lunch.", answer: "have not been eating" },
          { sentence: "You ___ (not read) long.", answer: "have not been reading" },
          { sentence: "It ___ (not rain) today.", answer: "has not been raining" },
          { sentence: "The children ___ (not sleep) well.", answer: "have not been sleeping" },
          { sentence: "Maria ___ (not cook) long.", answer: "has not been cooking" },
          { sentence: "My brother ___ (not drive) long.", answer: "has not been driving" }
        ],
        medium: [
          { sentence: "I ___ (not wait) long.", answer: "have not been waiting" },
          { sentence: "She ___ (not look) for it.", answer: "has not been looking" },
          { sentence: "They ___ (not have) fun.", answer: "have not been having" },
          { sentence: "He ___ (not think) about it.", answer: "has not been thinking" },
          { sentence: "We ___ (not plan) long.", answer: "have not been planning" },
          { sentence: "The company ___ (not hire) anyone.", answer: "has not been hiring" },
          { sentence: "Prices ___ (not fall).", answer: "have not been falling" },
          { sentence: "She ___ (not wear) that much.", answer: "has not been wearing" },
          { sentence: "The bus ___ (not run) today.", answer: "has not been running" },
          { sentence: "I ___ (not feel) well.", answer: "have not been feeling" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) here.", answer: "has not been working" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "have not been accepting" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "has not been listening" },
          { sentence: "Few people ___ (not attend) the meetings.", answer: "have not been attending" },
          { sentence: "The committee ___ (not meet) regularly.", answer: "has not been meeting" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "have not been agreeing" },
          { sentence: "The government ___ (not change) the law.", answer: "has not been changing" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "has not been supporting" },
          { sentence: "Half of the class ___ (not participate).", answer: "has not been participating" },
          { sentence: "The news ___ (not spread) yet.", answer: "has not been spreading" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you been working here long?", answer: "Have" },
          { sentence: "___ she been studying English?", answer: "Has" },
          { sentence: "___ they been playing football?", answer: "Have" },
          { sentence: "___ he been watching TV?", answer: "Has" },
          { sentence: "___ we been eating lunch?", answer: "Have" },
          { sentence: "___ it been raining?", answer: "Has" },
          { sentence: "___ the children been sleeping well?", answer: "Have" },
          { sentence: "___ Maria been cooking dinner?", answer: "Has" },
          { sentence: "___ your brother been driving long?", answer: "Has" },
          { sentence: "___ you been reading long?", answer: "Have" }
        ],
        medium: [
          { sentence: "___ you been waiting long?", answer: "Have" },
          { sentence: "___ she been looking for her keys?", answer: "Has" },
          { sentence: "___ they been having meetings?", answer: "Have" },
          { sentence: "___ he been thinking about it?", answer: "Has" },
          { sentence: "___ we been planning the trip?", answer: "Have" },
          { sentence: "___ the sun been shining?", answer: "Has" },
          { sentence: "___ someone been knocking at the door?", answer: "Has" },
          { sentence: "___ the students been taking tests?", answer: "Have" },
          { sentence: "___ she been wearing that dress?", answer: "Has" },
          { sentence: "___ prices been rising?", answer: "Have" }
        ],
        hard: [
          { sentence: "___ the committee been discussing the proposal?", answer: "Has" },
          { sentence: "___ either of them been working here?", answer: "Has" },
          { sentence: "___ the number of students been increasing?", answer: "Has" },
          { sentence: "___ the police been investigating the case?", answer: "Have" },
          { sentence: "___ everybody been enjoying the party?", answer: "Has" },
          { sentence: "___ the team been practicing for the match?", answer: "Has" },
          { sentence: "___ some of the staff been leaving early?", answer: "Have" },
          { sentence: "___ the news been spreading quickly?", answer: "Has" },
          { sentence: "___ each student been writing an essay?", answer: "Has" },
          { sentence: "___ one of the boys been crying?", answer: "Has" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "How long ___ you been working?", answer: "have" },
          { sentence: "Where ___ she been going?", answer: "has" },
          { sentence: "How long ___ they been leaving?", answer: "have" },
          { sentence: "Why ___ he been crying?", answer: "has" },
          { sentence: "Who ___ you been waiting for?", answer: "have" },
          { sentence: "What ___ Maria been cooking?", answer: "has" },
          { sentence: "Where ___ the children been playing?", answer: "have" },
          { sentence: "Why ___ they been laughing?", answer: "have" },
          { sentence: "Who ___ she been talking to?", answer: "has" },
          { sentence: "What ___ your brother been watching?", answer: "has" }
        ],
        medium: [
          { sentence: "How long ___ you been waiting?", answer: "have" },
          { sentence: "What ___ she been looking for?", answer: "has" },
          { sentence: "Where ___ they been living?", answer: "have" },
          { sentence: "Why ___ he been working so hard?", answer: "has" },
          { sentence: "What ___ we been having for dinner?", answer: "have" },
          { sentence: "When ___ the meeting been starting?", answer: "has" },
          { sentence: "Who ___ you been speaking to?", answer: "have" },
          { sentence: "What ___ the students been studying?", answer: "have" },
          { sentence: "Why ___ prices been rising?", answer: "have" },
          { sentence: "Where ___ your brother been working?", answer: "has" }
        ],
        hard: [
          { sentence: "What ___ the committee been discussing?", answer: "has" },
          { sentence: "Why ___ neither of them been working?", answer: "has" },
          { sentence: "Where ___ the police been looking?", answer: "have" },
          { sentence: "What ___ everybody been thinking?", answer: "has" },
          { sentence: "When ___ the team been playing?", answer: "has" },
          { sentence: "Who ___ some of the staff been meeting?", answer: "have" },
          { sentence: "Why ___ the news been spreading so fast?", answer: "has" },
          { sentence: "What ___ each student been writing?", answer: "has" },
          { sentence: "How ___ the number of students been changing?", answer: "has" },
          { sentence: "Where ___ one of the boys been going?", answer: "has" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (work) here for five years. (affirmative)", answer: "have been working" },
          { sentence: "She ___ (not study) much. (negative)", answer: "has not been studying" },
          { sentence: "___ they been playing? (yes/no)", answer: "Have" },
          { sentence: "How long ___ you been working? (wh-question)", answer: "have" },
          { sentence: "They ___ (eat) lunch. (affirmative)", answer: "have been eating" },
          { sentence: "He ___ (not watch) TV. (negative)", answer: "has not been watching" },
          { sentence: "___ it been raining? (yes/no)", answer: "Has" },
          { sentence: "Where ___ she been going? (wh-question)", answer: "has" },
          { sentence: "We ___ (read) for hours. (affirmative)", answer: "have been reading" },
          { sentence: "The children ___ (not sleep) well. (negative)", answer: "have not been sleeping" }
        ],
        medium: [
          { sentence: "She ___ (look) for her keys. (affirmative)", answer: "has been looking" },
          { sentence: "They ___ (not have) fun. (negative)", answer: "have not been having" },
          { sentence: "___ he been thinking about it? (yes/no)", answer: "Has" },
          { sentence: "Why ___ they been laughing? (wh-question)", answer: "have" },
          { sentence: "The sun ___ (shine) all week. (affirmative)", answer: "has been shining" },
          { sentence: "We ___ (not plan) long. (negative)", answer: "have not been planning" },
          { sentence: "___ the students been taking tests? (yes/no)", answer: "Have" },
          { sentence: "What ___ she been cooking? (wh-question)", answer: "has" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "has been knocking" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "have not been falling" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "has been discussing" },
          { sentence: "Neither of them ___ (not work) here. (negative)", answer: "has not been working" },
          { sentence: "___ the police been investigating? (yes/no)", answer: "Have" },
          { sentence: "What ___ the committee been discussing? (wh-question)", answer: "has" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "has been enjoying" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "have not been accepting" },
          { sentence: "___ the team been practicing? (yes/no)", answer: "Has" },
          { sentence: "Why ___ the news been spreading so fast? (wh-question)", answer: "has" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "has been writing" },
          { sentence: "The committee ___ (not meet) regularly. (negative)", answer: "has not been meeting" }
        ]
      }
    }
  },

  "past-perfect": {
    id: "past-perfect",
    title: "Past Perfect",
    explanation: `
      <h2>Past Perfect</h2>
      <p>The past perfect is formed with <strong>had + past participle</strong>.</p>
      <ul>
        <li>I / You / He / She / It / We / They <strong>had worked</strong></li>
      </ul>
      <p>Use it for an action that was completed before another action or time in the past.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ (go) to Paris before.", answer: "had gone" },
          { sentence: "She ___ (work) here before she moved.", answer: "had worked" },
          { sentence: "They ___ (play) football before lunch.", answer: "had played" },
          { sentence: "He ___ (watch) the movie before.", answer: "had watched" },
          { sentence: "We ___ (eat) lunch before the meeting.", answer: "had eaten" },
          { sentence: "You ___ (see) that film before.", answer: "had seen" },
          { sentence: "It ___ (rain) before we left.", answer: "had rained" },
          { sentence: "The children ___ (sleep) well.", answer: "had slept" },
          { sentence: "Maria ___ (cook) dinner before we arrived.", answer: "had cooked" },
          { sentence: "My brother ___ (drive) to work.", answer: "had driven" }
        ],
        medium: [
          { sentence: "I ___ (wait) for an hour when the bus came.", answer: "had waited" },
          { sentence: "She ___ (look) for her keys everywhere.", answer: "had looked" },
          { sentence: "They ___ (have) several meetings.", answer: "had had" },
          { sentence: "He ___ (think) about it before deciding.", answer: "had thought" },
          { sentence: "We ___ (plan) the trip for months.", answer: "had planned" },
          { sentence: "The sun ___ (shine) all day.", answer: "had shone" },
          { sentence: "Someone ___ (knock) at the door.", answer: "had knocked" },
          { sentence: "The students ___ (take) the test before the break.", answer: "had taken" },
          { sentence: "She ___ (wear) that dress before.", answer: "had worn" },
          { sentence: "Prices ___ (rise) before the crisis.", answer: "had risen" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal before voting.", answer: "had discussed" },
          { sentence: "Neither of them ___ (work) there before.", answer: "had worked" },
          { sentence: "The number of students ___ (increase).", answer: "had increased" },
          { sentence: "One of the boys ___ (cry).", answer: "had cried" },
          { sentence: "The police ___ (investigate) the case for months.", answer: "had investigated" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "had enjoyed" },
          { sentence: "The team ___ (practice) for the match.", answer: "had practiced" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "had left" },
          { sentence: "The news ___ (spread) quickly.", answer: "had spread" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "had written" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not go) to Paris before.", answer: "had not gone" },
          { sentence: "She ___ (not work) here before.", answer: "had not worked" },
          { sentence: "They ___ (not play) football before.", answer: "had not played" },
          { sentence: "He ___ (not watch) the movie.", answer: "had not watched" },
          { sentence: "We ___ (not eat) lunch yet.", answer: "had not eaten" },
          { sentence: "You ___ (not see) that film.", answer: "had not seen" },
          { sentence: "It ___ (not rain) before we left.", answer: "had not rained" },
          { sentence: "The children ___ (not sleep) well.", answer: "had not slept" },
          { sentence: "Maria ___ (not cook) dinner yet.", answer: "had not cooked" },
          { sentence: "My brother ___ (not drive) there before.", answer: "had not driven" }
        ],
        medium: [
          { sentence: "I ___ (not wait) long when the bus came.", answer: "had not waited" },
          { sentence: "She ___ (not look) for it.", answer: "had not looked" },
          { sentence: "They ___ (not have) fun.", answer: "had not had" },
          { sentence: "He ___ (not think) about it before.", answer: "had not thought" },
          { sentence: "We ___ (not plan) the trip yet.", answer: "had not planned" },
          { sentence: "The company ___ (not hire) anyone.", answer: "had not hired" },
          { sentence: "Prices ___ (not fall) before.", answer: "had not fallen" },
          { sentence: "She ___ (not wear) that before.", answer: "had not worn" },
          { sentence: "The bus ___ (not run) that day.", answer: "had not run" },
          { sentence: "I ___ (not feel) well before.", answer: "had not felt" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) there.", answer: "had not worked" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "had not accepted" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "had not listened" },
          { sentence: "Few people ___ (not attend) the meeting.", answer: "had not attended" },
          { sentence: "The committee ___ (not meet) before.", answer: "had not met" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "had not agreed" },
          { sentence: "The government ___ (not change) the law.", answer: "had not changed" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "had not supported" },
          { sentence: "Half of the class ___ (not participate).", answer: "had not participated" },
          { sentence: "The news ___ (not spread) yet.", answer: "had not spread" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you gone to Paris before?", answer: "Had" },
          { sentence: "___ she worked here before?", answer: "Had" },
          { sentence: "___ they played football?", answer: "Had" },
          { sentence: "___ he watched the movie?", answer: "Had" },
          { sentence: "___ we eaten lunch?", answer: "Had" },
          { sentence: "___ it rained before we left?", answer: "Had" },
          { sentence: "___ the children slept well?", answer: "Had" },
          { sentence: "___ Maria cooked dinner?", answer: "Had" },
          { sentence: "___ your brother driven there before?", answer: "Had" },
          { sentence: "___ you seen that film?", answer: "Had" }
        ],
        medium: [
          { sentence: "___ you waited long?", answer: "Had" },
          { sentence: "___ she looked for her keys?", answer: "Had" },
          { sentence: "___ they had a meeting?", answer: "Had" },
          { sentence: "___ he thought about it?", answer: "Had" },
          { sentence: "___ we planned the trip?", answer: "Had" },
          { sentence: "___ the sun shone?", answer: "Had" },
          { sentence: "___ someone knocked at the door?", answer: "Had" },
          { sentence: "___ the students taken the test?", answer: "Had" },
          { sentence: "___ she worn that dress before?", answer: "Had" },
          { sentence: "___ prices risen?", answer: "Had" }
        ],
        hard: [
          { sentence: "___ the committee discussed the proposal?", answer: "Had" },
          { sentence: "___ either of them worked there?", answer: "Had" },
          { sentence: "___ the number of students increased?", answer: "Had" },
          { sentence: "___ the police investigated the case?", answer: "Had" },
          { sentence: "___ everybody enjoyed the party?", answer: "Had" },
          { sentence: "___ the team practiced for the match?", answer: "Had" },
          { sentence: "___ some of the staff left early?", answer: "Had" },
          { sentence: "___ the news spread quickly?", answer: "Had" },
          { sentence: "___ each student written an essay?", answer: "Had" },
          { sentence: "___ one of the boys cried?", answer: "Had" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "What ___ you done before?", answer: "had" },
          { sentence: "Where ___ she gone?", answer: "had" },
          { sentence: "When ___ they left?", answer: "had" },
          { sentence: "Why ___ he cried?", answer: "had" },
          { sentence: "Who ___ you seen?", answer: "had" },
          { sentence: "What ___ Maria cooked?", answer: "had" },
          { sentence: "Where ___ the children played?", answer: "had" },
          { sentence: "Why ___ they laughed?", answer: "had" },
          { sentence: "Who ___ she talked to?", answer: "had" },
          { sentence: "What ___ your brother watched?", answer: "had" }
        ],
        medium: [
          { sentence: "How long ___ you waited?", answer: "had" },
          { sentence: "What ___ she looked for?", answer: "had" },
          { sentence: "Where ___ they lived?", answer: "had" },
          { sentence: "Why ___ he worked so hard?", answer: "had" },
          { sentence: "What ___ we had for dinner?", answer: "had" },
          { sentence: "When ___ the meeting started?", answer: "had" },
          { sentence: "Who ___ you spoken to?", answer: "had" },
          { sentence: "What ___ the students studied?", answer: "had" },
          { sentence: "Why ___ prices risen?", answer: "had" },
          { sentence: "Where ___ your brother worked?", answer: "had" }
        ],
        hard: [
          { sentence: "What ___ the committee discussed?", answer: "had" },
          { sentence: "Why ___ neither of them worked?", answer: "had" },
          { sentence: "Where ___ the police looked?", answer: "had" },
          { sentence: "What ___ everybody thought?", answer: "had" },
          { sentence: "When ___ the team played?", answer: "had" },
          { sentence: "Who ___ some of the staff met?", answer: "had" },
          { sentence: "Why ___ the news spread so fast?", answer: "had" },
          { sentence: "What ___ each student written?", answer: "had" },
          { sentence: "How ___ the number of students changed?", answer: "had" },
          { sentence: "Where ___ one of the boys gone?", answer: "had" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (go) to Paris before. (affirmative)", answer: "had gone" },
          { sentence: "She ___ (not work) here before. (negative)", answer: "had not worked" },
          { sentence: "___ they played football? (yes/no)", answer: "Had" },
          { sentence: "What ___ you done? (wh-question)", answer: "had" },
          { sentence: "They ___ (eat) lunch. (affirmative)", answer: "had eaten" },
          { sentence: "He ___ (not watch) the movie. (negative)", answer: "had not watched" },
          { sentence: "___ it rained? (yes/no)", answer: "Had" },
          { sentence: "Where ___ she gone? (wh-question)", answer: "had" },
          { sentence: "We ___ (read) the book. (affirmative)", answer: "had read" },
          { sentence: "The children ___ (not sleep) well. (negative)", answer: "had not slept" }
        ],
        medium: [
          { sentence: "She ___ (look) for her keys. (affirmative)", answer: "had looked" },
          { sentence: "They ___ (not have) fun. (negative)", answer: "had not had" },
          { sentence: "___ he thought about it? (yes/no)", answer: "Had" },
          { sentence: "Why ___ they laughed? (wh-question)", answer: "had" },
          { sentence: "The sun ___ (shine) all day. (affirmative)", answer: "had shone" },
          { sentence: "We ___ (not plan) the trip yet. (negative)", answer: "had not planned" },
          { sentence: "___ the students taken the test? (yes/no)", answer: "Had" },
          { sentence: "What ___ she cooked? (wh-question)", answer: "had" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "had knocked" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "had not fallen" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "had discussed" },
          { sentence: "Neither of them ___ (not work) there. (negative)", answer: "had not worked" },
          { sentence: "___ the police investigated? (yes/no)", answer: "Had" },
          { sentence: "What ___ the committee discussed? (wh-question)", answer: "had" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "had enjoyed" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "had not accepted" },
          { sentence: "___ the team practiced? (yes/no)", answer: "Had" },
          { sentence: "Why ___ the news spread so fast? (wh-question)", answer: "had" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "had written" },
          { sentence: "The committee ___ (not meet) before. (negative)", answer: "had not met" }
        ]
      }
    }
  },

  "going-to-future": {
    id: "going-to-future",
    title: "Going to-future",
    explanation: `
      <h2>Going to-future</h2>
      <p>The going to-future is formed with <strong>am/is/are + going to + base verb</strong>.</p>
      <ul>
        <li><strong>I</strong> am going to work</li>
        <li><strong>He / She / It</strong> is going to work</li>
        <li><strong>You / We / They</strong> are going to work</li>
      </ul>
      <p>Use it for plans, intentions, and predictions based on present evidence.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ (go) to Paris next year.", answer: "am going to go" },
          { sentence: "She ___ (work) tomorrow.", answer: "is going to work" },
          { sentence: "They ___ (play) football.", answer: "are going to play" },
          { sentence: "He ___ (watch) TV tonight.", answer: "is going to watch" },
          { sentence: "We ___ (eat) lunch soon.", answer: "are going to eat" },
          { sentence: "You ___ (see) the movie.", answer: "are going to see" },
          { sentence: "It ___ (rain) tomorrow.", answer: "is going to rain" },
          { sentence: "The children ___ (sleep) at grandma's.", answer: "are going to sleep" },
          { sentence: "Maria ___ (cook) dinner.", answer: "is going to cook" },
          { sentence: "My brother ___ (drive) to work.", answer: "is going to drive" }
        ],
        medium: [
          { sentence: "I ___ (wait) for the bus.", answer: "am going to wait" },
          { sentence: "She ___ (look) for a new job.", answer: "is going to look" },
          { sentence: "They ___ (have) a meeting.", answer: "are going to have" },
          { sentence: "He ___ (think) about it.", answer: "is going to think" },
          { sentence: "We ___ (plan) a trip.", answer: "are going to plan" },
          { sentence: "The sun ___ (shine) tomorrow.", answer: "is going to shine" },
          { sentence: "Someone ___ (knock) at the door.", answer: "is going to knock" },
          { sentence: "The students ___ (take) a test.", answer: "are going to take" },
          { sentence: "She ___ (wear) a red dress.", answer: "is going to wear" },
          { sentence: "Prices ___ (rise) next year.", answer: "are going to rise" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal.", answer: "is going to discuss" },
          { sentence: "Neither of them ___ (work) tomorrow.", answer: "is going to work" },
          { sentence: "The number of students ___ (increase).", answer: "is going to increase" },
          { sentence: "One of the boys ___ (cry).", answer: "is going to cry" },
          { sentence: "The police ___ (investigate) the case.", answer: "are going to investigate" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "is going to enjoy" },
          { sentence: "The team ___ (practice) for the match.", answer: "is going to practice" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "are going to leave" },
          { sentence: "The news ___ (spread) quickly.", answer: "is going to spread" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "is going to write" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not go) to Paris.", answer: "am not going to go" },
          { sentence: "She ___ (not work) tomorrow.", answer: "is not going to work" },
          { sentence: "They ___ (not play) football.", answer: "are not going to play" },
          { sentence: "He ___ (not watch) TV.", answer: "is not going to watch" },
          { sentence: "We ___ (not eat) meat.", answer: "are not going to eat" },
          { sentence: "You ___ (not see) the movie.", answer: "are not going to see" },
          { sentence: "It ___ (not rain) tomorrow.", answer: "is not going to rain" },
          { sentence: "The children ___ (not sleep) there.", answer: "are not going to sleep" },
          { sentence: "Maria ___ (not cook) dinner.", answer: "is not going to cook" },
          { sentence: "My brother ___ (not drive) to work.", answer: "is not going to drive" }
        ],
        medium: [
          { sentence: "I ___ (not wait) for anyone.", answer: "am not going to wait" },
          { sentence: "She ___ (not look) for a new job.", answer: "is not going to look" },
          { sentence: "They ___ (not have) a meeting.", answer: "are not going to have" },
          { sentence: "He ___ (not think) about it.", answer: "is not going to think" },
          { sentence: "We ___ (not plan) to go.", answer: "are not going to plan" },
          { sentence: "The company ___ (not hire) anyone.", answer: "is not going to hire" },
          { sentence: "Prices ___ (not fall).", answer: "are not going to fall" },
          { sentence: "She ___ (not wear) that dress.", answer: "is not going to wear" },
          { sentence: "The bus ___ (not run) tomorrow.", answer: "is not going to run" },
          { sentence: "I ___ (not feel) well.", answer: "am not going to feel" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) tomorrow.", answer: "is not going to work" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "are not going to accept" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "is not going to listen" },
          { sentence: "Few people ___ (not attend) the meeting.", answer: "are not going to attend" },
          { sentence: "The committee ___ (not meet) until next week.", answer: "is not going to meet" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "are not going to agree" },
          { sentence: "The government ___ (not change) the law.", answer: "is not going to change" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "is not going to support" },
          { sentence: "Half of the class ___ (not participate).", answer: "is not going to participate" },
          { sentence: "The news ___ (not spread) yet.", answer: "is not going to spread" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you going to Paris?", answer: "Are" },
          { sentence: "___ she going to work tomorrow?", answer: "Is" },
          { sentence: "___ they going to play football?", answer: "Are" },
          { sentence: "___ he going to watch TV?", answer: "Is" },
          { sentence: "___ we going to eat lunch?", answer: "Are" },
          { sentence: "___ it going to rain?", answer: "Is" },
          { sentence: "___ the children going to sleep there?", answer: "Are" },
          { sentence: "___ Maria going to cook dinner?", answer: "Is" },
          { sentence: "___ your brother going to drive?", answer: "Is" },
          { sentence: "___ you going to see the movie?", answer: "Are" }
        ],
        medium: [
          { sentence: "___ you going to wait for the bus?", answer: "Are" },
          { sentence: "___ she going to look for a new job?", answer: "Is" },
          { sentence: "___ they going to have a meeting?", answer: "Are" },
          { sentence: "___ he going to think about it?", answer: "Is" },
          { sentence: "___ we going to plan a trip?", answer: "Are" },
          { sentence: "___ the sun going to shine?", answer: "Is" },
          { sentence: "___ someone going to knock?", answer: "Is" },
          { sentence: "___ the students going to take a test?", answer: "Are" },
          { sentence: "___ she going to wear a red dress?", answer: "Is" },
          { sentence: "___ prices going to rise?", answer: "Are" }
        ],
        hard: [
          { sentence: "___ the committee going to discuss the proposal?", answer: "Is" },
          { sentence: "___ either of them going to work tomorrow?", answer: "Is" },
          { sentence: "___ the number of students going to increase?", answer: "Is" },
          { sentence: "___ the police going to investigate?", answer: "Are" },
          { sentence: "___ everybody going to enjoy the party?", answer: "Is" },
          { sentence: "___ the team going to practice?", answer: "Is" },
          { sentence: "___ some of the staff going to leave early?", answer: "Are" },
          { sentence: "___ the news going to spread quickly?", answer: "Is" },
          { sentence: "___ each student going to write an essay?", answer: "Is" },
          { sentence: "___ one of the boys going to cry?", answer: "Is" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "What ___ you going to do?", answer: "are" },
          { sentence: "Where ___ she going to go?", answer: "is" },
          { sentence: "When ___ they going to leave?", answer: "are" },
          { sentence: "Why ___ he going to cry?", answer: "is" },
          { sentence: "Who ___ you going to wait for?", answer: "are" },
          { sentence: "What ___ Maria going to cook?", answer: "is" },
          { sentence: "Where ___ the children going to play?", answer: "are" },
          { sentence: "Why ___ they going to laugh?", answer: "are" },
          { sentence: "Who ___ she going to talk to?", answer: "is" },
          { sentence: "What ___ your brother going to watch?", answer: "is" }
        ],
        medium: [
          { sentence: "How long ___ you going to wait?", answer: "are" },
          { sentence: "What ___ she going to look for?", answer: "is" },
          { sentence: "Where ___ they going to live?", answer: "are" },
          { sentence: "Why ___ he going to work so hard?", answer: "is" },
          { sentence: "What ___ we going to have for dinner?", answer: "are" },
          { sentence: "When ___ the meeting going to start?", answer: "is" },
          { sentence: "Who ___ you going to speak to?", answer: "are" },
          { sentence: "What ___ the students going to study?", answer: "are" },
          { sentence: "Why ___ prices going to rise?", answer: "are" },
          { sentence: "Where ___ your brother going to work?", answer: "is" }
        ],
        hard: [
          { sentence: "What ___ the committee going to discuss?", answer: "is" },
          { sentence: "Why ___ neither of them going to work?", answer: "is" },
          { sentence: "Where ___ the police going to look?", answer: "are" },
          { sentence: "What ___ everybody going to think?", answer: "is" },
          { sentence: "When ___ the team going to play?", answer: "is" },
          { sentence: "Who ___ some of the staff going to meet?", answer: "are" },
          { sentence: "Why ___ the news going to spread so fast?", answer: "is" },
          { sentence: "What ___ each student going to write?", answer: "is" },
          { sentence: "How ___ the number of students going to change?", answer: "is" },
          { sentence: "Where ___ one of the boys going to go?", answer: "is" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (go) to Paris next year. (affirmative)", answer: "am going to go" },
          { sentence: "She ___ (not work) tomorrow. (negative)", answer: "is not going to work" },
          { sentence: "___ they going to play? (yes/no)", answer: "Are" },
          { sentence: "What ___ you going to do? (wh-question)", answer: "are" },
          { sentence: "They ___ (eat) lunch soon. (affirmative)", answer: "are going to eat" },
          { sentence: "He ___ (not watch) TV. (negative)", answer: "is not going to watch" },
          { sentence: "___ it going to rain? (yes/no)", answer: "Is" },
          { sentence: "Where ___ she going to go? (wh-question)", answer: "is" },
          { sentence: "We ___ (read) a book. (affirmative)", answer: "are going to read" },
          { sentence: "The children ___ (not sleep) there. (negative)", answer: "are not going to sleep" }
        ],
        medium: [
          { sentence: "She ___ (look) for a new job. (affirmative)", answer: "is going to look" },
          { sentence: "They ___ (not have) a meeting. (negative)", answer: "are not going to have" },
          { sentence: "___ he going to think about it? (yes/no)", answer: "Is" },
          { sentence: "Why ___ they going to laugh? (wh-question)", answer: "are" },
          { sentence: "The sun ___ (shine) tomorrow. (affirmative)", answer: "is going to shine" },
          { sentence: "We ___ (not plan) to go. (negative)", answer: "are not going to plan" },
          { sentence: "___ the students going to take a test? (yes/no)", answer: "Are" },
          { sentence: "What ___ she going to cook? (wh-question)", answer: "is" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "is going to knock" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "are not going to fall" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "is going to discuss" },
          { sentence: "Neither of them ___ (not work) tomorrow. (negative)", answer: "is not going to work" },
          { sentence: "___ the police going to investigate? (yes/no)", answer: "Are" },
          { sentence: "What ___ the committee going to discuss? (wh-question)", answer: "is" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "is going to enjoy" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "are not going to accept" },
          { sentence: "___ the team going to practice? (yes/no)", answer: "Is" },
          { sentence: "Why ___ the news going to spread so fast? (wh-question)", answer: "is" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "is going to write" },
          { sentence: "The committee ___ (not meet) until next week. (negative)", answer: "is not going to meet" }
        ]
      }
    }
  },

  "will-future": {
    id: "will-future",
    title: "Will-future",
    explanation: `
      <h2>Will-future</h2>
      <p>The will-future is formed with <strong>will + base verb</strong>.</p>
      <ul>
        <li>I / You / He / She / It / We / They <strong>will work</strong></li>
      </ul>
      <p>Use it for predictions, promises, spontaneous decisions, and offers.</p>
    `,
    exercises: {
      affirmative: {
        easy: [
          { sentence: "I ___ (go) to Paris next year.", answer: "will go" },
          { sentence: "She ___ (work) tomorrow.", answer: "will work" },
          { sentence: "They ___ (play) football.", answer: "will play" },
          { sentence: "He ___ (watch) TV tonight.", answer: "will watch" },
          { sentence: "We ___ (eat) lunch soon.", answer: "will eat" },
          { sentence: "You ___ (see) the movie.", answer: "will see" },
          { sentence: "It ___ (rain) tomorrow.", answer: "will rain" },
          { sentence: "The children ___ (sleep) well.", answer: "will sleep" },
          { sentence: "Maria ___ (cook) dinner.", answer: "will cook" },
          { sentence: "My brother ___ (drive) to work.", answer: "will drive" }
        ],
        medium: [
          { sentence: "I ___ (wait) for the bus.", answer: "will wait" },
          { sentence: "She ___ (look) for a new job.", answer: "will look" },
          { sentence: "They ___ (have) a meeting.", answer: "will have" },
          { sentence: "He ___ (think) about it.", answer: "will think" },
          { sentence: "We ___ (plan) a trip.", answer: "will plan" },
          { sentence: "The sun ___ (shine) tomorrow.", answer: "will shine" },
          { sentence: "Someone ___ (knock) at the door.", answer: "will knock" },
          { sentence: "The students ___ (take) a test.", answer: "will take" },
          { sentence: "She ___ (wear) a red dress.", answer: "will wear" },
          { sentence: "Prices ___ (rise) next year.", answer: "will rise" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal.", answer: "will discuss" },
          { sentence: "Neither of them ___ (work) tomorrow.", answer: "will work" },
          { sentence: "The number of students ___ (increase).", answer: "will increase" },
          { sentence: "One of the boys ___ (cry).", answer: "will cry" },
          { sentence: "The police ___ (investigate) the case.", answer: "will investigate" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "will enjoy" },
          { sentence: "The team ___ (practice) for the match.", answer: "will practice" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "will leave" },
          { sentence: "The news ___ (spread) quickly.", answer: "will spread" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "will write" }
        ]
      },
      negative: {
        easy: [
          { sentence: "I ___ (not go) to Paris.", answer: "will not go" },
          { sentence: "She ___ (not work) tomorrow.", answer: "will not work" },
          { sentence: "They ___ (not play) football.", answer: "will not play" },
          { sentence: "He ___ (not watch) TV.", answer: "will not watch" },
          { sentence: "We ___ (not eat) meat.", answer: "will not eat" },
          { sentence: "You ___ (not see) the movie.", answer: "will not see" },
          { sentence: "It ___ (not rain) tomorrow.", answer: "will not rain" },
          { sentence: "The children ___ (not sleep) there.", answer: "will not sleep" },
          { sentence: "Maria ___ (not cook) dinner.", answer: "will not cook" },
          { sentence: "My brother ___ (not drive) to work.", answer: "will not drive" }
        ],
        medium: [
          { sentence: "I ___ (not wait) for anyone.", answer: "will not wait" },
          { sentence: "She ___ (not look) for a new job.", answer: "will not look" },
          { sentence: "They ___ (not have) a meeting.", answer: "will not have" },
          { sentence: "He ___ (not think) about it.", answer: "will not think" },
          { sentence: "We ___ (not plan) to go.", answer: "will not plan" },
          { sentence: "The company ___ (not hire) anyone.", answer: "will not hire" },
          { sentence: "Prices ___ (not fall).", answer: "will not fall" },
          { sentence: "She ___ (not wear) that dress.", answer: "will not wear" },
          { sentence: "The bus ___ (not run) tomorrow.", answer: "will not run" },
          { sentence: "I ___ (not feel) well.", answer: "will not feel" }
        ],
        hard: [
          { sentence: "Neither of them ___ (not work) tomorrow.", answer: "will not work" },
          { sentence: "The staff ___ (not accept) the offer.", answer: "will not accept" },
          { sentence: "Nobody ___ (not listen) to the lecture.", answer: "will not listen" },
          { sentence: "Few people ___ (not attend) the meeting.", answer: "will not attend" },
          { sentence: "The committee ___ (not meet) until next week.", answer: "will not meet" },
          { sentence: "Some of the staff ___ (not agree) with the plan.", answer: "will not agree" },
          { sentence: "The government ___ (not change) the law.", answer: "will not change" },
          { sentence: "The majority ___ (not support) the proposal.", answer: "will not support" },
          { sentence: "Half of the class ___ (not participate).", answer: "will not participate" },
          { sentence: "The news ___ (not spread) yet.", answer: "will not spread" }
        ]
      },
      "yes-no-question": {
        easy: [
          { sentence: "___ you go to Paris?", answer: "Will" },
          { sentence: "___ she work tomorrow?", answer: "Will" },
          { sentence: "___ they play football?", answer: "Will" },
          { sentence: "___ he watch TV?", answer: "Will" },
          { sentence: "___ we eat lunch?", answer: "Will" },
          { sentence: "___ it rain tomorrow?", answer: "Will" },
          { sentence: "___ the children sleep well?", answer: "Will" },
          { sentence: "___ Maria cook dinner?", answer: "Will" },
          { sentence: "___ your brother drive?", answer: "Will" },
          { sentence: "___ you see the movie?", answer: "Will" }
        ],
        medium: [
          { sentence: "___ you wait for the bus?", answer: "Will" },
          { sentence: "___ she look for a new job?", answer: "Will" },
          { sentence: "___ they have a meeting?", answer: "Will" },
          { sentence: "___ he think about it?", answer: "Will" },
          { sentence: "___ we plan a trip?", answer: "Will" },
          { sentence: "___ the sun shine tomorrow?", answer: "Will" },
          { sentence: "___ someone knock at the door?", answer: "Will" },
          { sentence: "___ the students take a test?", answer: "Will" },
          { sentence: "___ she wear a red dress?", answer: "Will" },
          { sentence: "___ prices rise?", answer: "Will" }
        ],
        hard: [
          { sentence: "___ the committee discuss the proposal?", answer: "Will" },
          { sentence: "___ either of them work tomorrow?", answer: "Will" },
          { sentence: "___ the number of students increase?", answer: "Will" },
          { sentence: "___ the police investigate the case?", answer: "Will" },
          { sentence: "___ everybody enjoy the party?", answer: "Will" },
          { sentence: "___ the team practice for the match?", answer: "Will" },
          { sentence: "___ some of the staff leave early?", answer: "Will" },
          { sentence: "___ the news spread quickly?", answer: "Will" },
          { sentence: "___ each student write an essay?", answer: "Will" },
          { sentence: "___ one of the boys cry?", answer: "Will" }
        ]
      },
      "information-question": {
        easy: [
          { sentence: "What ___ you do?", answer: "will" },
          { sentence: "Where ___ she go?", answer: "will" },
          { sentence: "When ___ they leave?", answer: "will" },
          { sentence: "Why ___ he cry?", answer: "will" },
          { sentence: "Who ___ you wait for?", answer: "will" },
          { sentence: "What ___ Maria cook?", answer: "will" },
          { sentence: "Where ___ the children play?", answer: "will" },
          { sentence: "Why ___ they laugh?", answer: "will" },
          { sentence: "Who ___ she talk to?", answer: "will" },
          { sentence: "What ___ your brother watch?", answer: "will" }
        ],
        medium: [
          { sentence: "How long ___ you wait?", answer: "will" },
          { sentence: "What ___ she look for?", answer: "will" },
          { sentence: "Where ___ they live?", answer: "will" },
          { sentence: "Why ___ he work so hard?", answer: "will" },
          { sentence: "What ___ we have for dinner?", answer: "will" },
          { sentence: "When ___ the meeting start?", answer: "will" },
          { sentence: "Who ___ you speak to?", answer: "will" },
          { sentence: "What ___ the students study?", answer: "will" },
          { sentence: "Why ___ prices rise?", answer: "will" },
          { sentence: "Where ___ your brother work?", answer: "will" }
        ],
        hard: [
          { sentence: "What ___ the committee discuss?", answer: "will" },
          { sentence: "Why ___ neither of them work?", answer: "will" },
          { sentence: "Where ___ the police look?", answer: "will" },
          { sentence: "What ___ everybody think?", answer: "will" },
          { sentence: "When ___ the team play?", answer: "will" },
          { sentence: "Who ___ some of the staff meet?", answer: "will" },
          { sentence: "Why ___ the news spread so fast?", answer: "will" },
          { sentence: "What ___ each student write?", answer: "will" },
          { sentence: "How ___ the number of students change?", answer: "will" },
          { sentence: "Where ___ one of the boys go?", answer: "will" }
        ]
      },
      mixed: {
        easy: [
          { sentence: "I ___ (go) to Paris next year. (affirmative)", answer: "will go" },
          { sentence: "She ___ (not work) tomorrow. (negative)", answer: "will not work" },
          { sentence: "___ they play football? (yes/no)", answer: "Will" },
          { sentence: "What ___ you do? (wh-question)", answer: "will" },
          { sentence: "They ___ (eat) lunch soon. (affirmative)", answer: "will eat" },
          { sentence: "He ___ (not watch) TV. (negative)", answer: "will not watch" },
          { sentence: "___ it rain? (yes/no)", answer: "Will" },
          { sentence: "Where ___ she go? (wh-question)", answer: "will" },
          { sentence: "We ___ (read) a book. (affirmative)", answer: "will read" },
          { sentence: "The children ___ (not sleep) there. (negative)", answer: "will not sleep" }
        ],
        medium: [
          { sentence: "She ___ (look) for a new job. (affirmative)", answer: "will look" },
          { sentence: "They ___ (not have) a meeting. (negative)", answer: "will not have" },
          { sentence: "___ he think about it? (yes/no)", answer: "Will" },
          { sentence: "Why ___ they laugh? (wh-question)", answer: "will" },
          { sentence: "The sun ___ (shine) tomorrow. (affirmative)", answer: "will shine" },
          { sentence: "We ___ (not plan) to go. (negative)", answer: "will not plan" },
          { sentence: "___ the students take a test? (yes/no)", answer: "Will" },
          { sentence: "What ___ she cook? (wh-question)", answer: "will" },
          { sentence: "Someone ___ (knock) at the door. (affirmative)", answer: "will knock" },
          { sentence: "Prices ___ (not fall). (negative)", answer: "will not fall" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal. (affirmative)", answer: "will discuss" },
          { sentence: "Neither of them ___ (not work) tomorrow. (negative)", answer: "will not work" },
          { sentence: "___ the police investigate? (yes/no)", answer: "Will" },
          { sentence: "What ___ the committee discuss? (wh-question)", answer: "will" },
          { sentence: "Everybody ___ (enjoy) the party. (affirmative)", answer: "will enjoy" },
          { sentence: "The staff ___ (not accept) the offer. (negative)", answer: "will not accept" },
          { sentence: "___ the team practice? (yes/no)", answer: "Will" },
          { sentence: "Why ___ the news spread so fast? (wh-question)", answer: "will" },
          { sentence: "Each student ___ (write) an essay. (affirmative)", answer: "will write" },
          { sentence: "The committee ___ (not meet) until next week. (negative)", answer: "will not meet" }
        ]
      }
    }
  },

  "past-perfect-progressive": {
    id: "past-perfect-progressive",
    title: "Past Perfect Progressive",
    explanation: `
      <h2>Past Perfect Progressive</h2>
      <p>Formed with <strong>had been + verb-ing</strong>. Use it for an action that was in progress before another action or time in the past.</p>
      <p>Example: I had been playing football when Susan came.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I ___ (work) for two hours when you called.", answer: "had been working" },
          { sentence: "She ___ (study) when the phone rang.", answer: "had been studying" },
          { sentence: "They ___ (play) football when it started to rain.", answer: "had been playing" },
          { sentence: "He ___ (watch) TV when the doorbell rang.", answer: "had been watching" },
          { sentence: "We ___ (eat) when she arrived.", answer: "had been eating" },
          { sentence: "You ___ (read) for hours.", answer: "had been reading" },
          { sentence: "It ___ (rain) all morning.", answer: "had been raining" },
          { sentence: "The children ___ (sleep) when we got home.", answer: "had been sleeping" },
          { sentence: "Maria ___ (cook) for hours.", answer: "had been cooking" },
          { sentence: "My brother ___ (drive) for six hours.", answer: "had been driving" }
        ],
        medium: [
          { sentence: "I ___ (wait) for an hour when the bus finally came.", answer: "had been waiting" },
          { sentence: "She ___ (look) for her keys all morning.", answer: "had been looking" },
          { sentence: "They ___ (have) meetings all week.", answer: "had been having" },
          { sentence: "He ___ (think) about it for days.", answer: "had been thinking" },
          { sentence: "We ___ (plan) the trip for months.", answer: "had been planning" },
          { sentence: "The sun ___ (shine) all day.", answer: "had been shining" },
          { sentence: "Someone ___ (knock) at the door.", answer: "had been knocking" },
          { sentence: "The students ___ (take) tests all week.", answer: "had been taking" },
          { sentence: "She ___ (wear) that dress a lot.", answer: "had been wearing" },
          { sentence: "Prices ___ (rise) steadily.", answer: "had been rising" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal for hours.", answer: "had been discussing" },
          { sentence: "Neither of them ___ (work) there long.", answer: "had been working" },
          { sentence: "The number of students ___ (increase) for years.", answer: "had been increasing" },
          { sentence: "One of the boys ___ (cry) for hours.", answer: "had been crying" },
          { sentence: "The police ___ (investigate) the case for months.", answer: "had been investigating" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "had been enjoying" },
          { sentence: "The team ___ (practice) for the match for weeks.", answer: "had been practicing" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "had been leaving" },
          { sentence: "The news ___ (spread) quickly.", answer: "had been spreading" },
          { sentence: "Each of the students ___ (write) an essay.", answer: "had been writing" }
        ]
      }
    }
  },

  "future-perfect": {
    id: "future-perfect",
    title: "Future Perfect",
    explanation: `
      <h2>Future Perfect</h2>
      <p>Formed with <strong>will have + past participle</strong>. Use it for an action that will be completed before a future time.</p>
      <p>Example: I will have played football by tomorrow.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I ___ (finish) by tomorrow.", answer: "will have finished" },
          { sentence: "She ___ (work) here for five years by June.", answer: "will have worked" },
          { sentence: "They ___ (leave) by then.", answer: "will have left" },
          { sentence: "He ___ (complete) the project by Friday.", answer: "will have completed" },
          { sentence: "We ___ (eat) lunch by noon.", answer: "will have eaten" },
          { sentence: "You ___ (see) the movie by then.", answer: "will have seen" },
          { sentence: "It ___ (stop) raining by evening.", answer: "will have stopped" },
          { sentence: "The children ___ (sleep) for hours.", answer: "will have slept" },
          { sentence: "Maria ___ (cook) dinner by 7.", answer: "will have cooked" },
          { sentence: "My brother ___ (arrive) by then.", answer: "will have arrived" }
        ],
        medium: [
          { sentence: "I ___ (wait) for an hour by the time you arrive.", answer: "will have waited" },
          { sentence: "She ___ (look) for a job for months.", answer: "will have looked" },
          { sentence: "They ___ (have) three meetings by Friday.", answer: "will have had" },
          { sentence: "He ___ (think) about it for days.", answer: "will have thought" },
          { sentence: "We ___ (plan) the trip by then.", answer: "will have planned" },
          { sentence: "The sun ___ (rise) by 6 AM.", answer: "will have risen" },
          { sentence: "Someone ___ (knock) by then.", answer: "will have knocked" },
          { sentence: "The students ___ (take) the test.", answer: "will have taken" },
          { sentence: "She ___ (wear) that dress many times.", answer: "will have worn" },
          { sentence: "Prices ___ (rise) by next year.", answer: "will have risen" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal by then.", answer: "will have discussed" },
          { sentence: "Neither of them ___ (work) there long.", answer: "will have worked" },
          { sentence: "The number of students ___ (increase) significantly.", answer: "will have increased" },
          { sentence: "One of the boys ___ (cry) for hours.", answer: "will have cried" },
          { sentence: "The police ___ (investigate) the case for months.", answer: "will have investigated" },
          { sentence: "Everybody ___ (enjoy) the party by midnight.", answer: "will have enjoyed" },
          { sentence: "The team ___ (practice) for weeks.", answer: "will have practiced" },
          { sentence: "Some of the staff ___ (leave) by then.", answer: "will have left" },
          { sentence: "The news ___ (spread) everywhere.", answer: "will have spread" },
          { sentence: "Each student ___ (write) an essay.", answer: "will have written" }
        ]
      }
    }
  },

  "future-perfect-progressive": {
    id: "future-perfect-progressive",
    title: "Future Perfect Progressive",
    explanation: `
      <h2>Future Perfect Progressive</h2>
      <p>Formed with <strong>will have been + verb-ing</strong>. Use it for an action that will have been in progress for a duration before a future time.</p>
      <p>Example: I will have been playing football for an hour by 10.30.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I ___ (work) for five hours by noon.", answer: "will have been working" },
          { sentence: "She ___ (study) for two hours by 8 PM.", answer: "will have been studying" },
          { sentence: "They ___ (play) football for an hour by then.", answer: "will have been playing" },
          { sentence: "He ___ (watch) TV for hours.", answer: "will have been watching" },
          { sentence: "We ___ (eat) for 30 minutes.", answer: "will have been eating" },
          { sentence: "You ___ (read) for hours.", answer: "will have been reading" },
          { sentence: "It ___ (rain) all day by evening.", answer: "will have been raining" },
          { sentence: "The children ___ (sleep) for eight hours.", answer: "will have been sleeping" },
          { sentence: "Maria ___ (cook) for two hours.", answer: "will have been cooking" },
          { sentence: "My brother ___ (drive) for six hours.", answer: "will have been driving" }
        ],
        medium: [
          { sentence: "I ___ (wait) for an hour when the bus arrives.", answer: "will have been waiting" },
          { sentence: "She ___ (look) for a job for months.", answer: "will have been looking" },
          { sentence: "They ___ (have) meetings all week.", answer: "will have been having" },
          { sentence: "He ___ (think) about it for days.", answer: "will have been thinking" },
          { sentence: "We ___ (plan) the trip for months.", answer: "will have been planning" },
          { sentence: "The sun ___ (shine) all day.", answer: "will have been shining" },
          { sentence: "Someone ___ (knock) for minutes.", answer: "will have been knocking" },
          { sentence: "The students ___ (take) tests all week.", answer: "will have been taking" },
          { sentence: "She ___ (wear) that dress a lot.", answer: "will have been wearing" },
          { sentence: "Prices ___ (rise) steadily.", answer: "will have been rising" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal for hours.", answer: "will have been discussing" },
          { sentence: "Neither of them ___ (work) there long.", answer: "will have been working" },
          { sentence: "The number of students ___ (increase) for years.", answer: "will have been increasing" },
          { sentence: "One of the boys ___ (cry) for hours.", answer: "will have been crying" },
          { sentence: "The police ___ (investigate) the case for months.", answer: "will have been investigating" },
          { sentence: "Everybody ___ (enjoy) the party for hours.", answer: "will have been enjoying" },
          { sentence: "The team ___ (practice) for weeks.", answer: "will have been practicing" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "will have been leaving" },
          { sentence: "The news ___ (spread) quickly.", answer: "will have been spreading" },
          { sentence: "Each student ___ (write) an essay for days.", answer: "will have been writing" }
        ]
      }
    }
  },

  "future-progressive": {
    id: "future-progressive",
    title: "Future Progressive",
    explanation: `
      <h2>Future Progressive</h2>
      <p>Formed with <strong>will be + verb-ing</strong>. Use it for an action that will be in progress at a specific time in the future.</p>
      <p>Example: I will be playing football next Sunday.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I ___ (work) tomorrow at noon.", answer: "will be working" },
          { sentence: "She ___ (study) at 8 PM.", answer: "will be studying" },
          { sentence: "They ___ (play) football next Sunday.", answer: "will be playing" },
          { sentence: "He ___ (watch) TV tonight.", answer: "will be watching" },
          { sentence: "We ___ (eat) lunch at noon.", answer: "will be eating" },
          { sentence: "You ___ (read) when I arrive.", answer: "will be reading" },
          { sentence: "It ___ (rain) tomorrow afternoon.", answer: "will be raining" },
          { sentence: "The children ___ (sleep) at 10 PM.", answer: "will be sleeping" },
          { sentence: "Maria ___ (cook) dinner at 6.", answer: "will be cooking" },
          { sentence: "My brother ___ (drive) to work tomorrow.", answer: "will be driving" }
        ],
        medium: [
          { sentence: "I ___ (wait) for the bus at 8 AM.", answer: "will be waiting" },
          { sentence: "She ___ (look) for a new job next month.", answer: "will be looking" },
          { sentence: "They ___ (have) a meeting at 3 PM.", answer: "will be having" },
          { sentence: "He ___ (think) about it tonight.", answer: "will be thinking" },
          { sentence: "We ___ (plan) the trip next week.", answer: "will be planning" },
          { sentence: "The sun ___ (shine) tomorrow.", answer: "will be shining" },
          { sentence: "Someone ___ (knock) at the door.", answer: "will be knocking" },
          { sentence: "The students ___ (take) a test at 9 AM.", answer: "will be taking" },
          { sentence: "She ___ (wear) a red dress.", answer: "will be wearing" },
          { sentence: "Prices ___ (rise) next year.", answer: "will be rising" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) the proposal tomorrow.", answer: "will be discussing" },
          { sentence: "Neither of them ___ (work) at that time.", answer: "will be working" },
          { sentence: "The number of students ___ (increase).", answer: "will be increasing" },
          { sentence: "One of the boys ___ (cry).", answer: "will be crying" },
          { sentence: "The police ___ (investigate) the case.", answer: "will be investigating" },
          { sentence: "Everybody ___ (enjoy) the party.", answer: "will be enjoying" },
          { sentence: "The team ___ (practice) for the match.", answer: "will be practicing" },
          { sentence: "Some of the staff ___ (leave) early.", answer: "will be leaving" },
          { sentence: "The news ___ (spread) quickly.", answer: "will be spreading" },
          { sentence: "Each student ___ (write) an essay.", answer: "will be writing" }
        ]
      }
    }
  },

  "adjectives": {
    id: "adjectives",
    title: "Adjectives",
    explanation: `
      <h2>Adjectives</h2>
      <p>Use the words in brackets as adjective or adverb in the gaps. Adjectives describe nouns; adverbs describe verbs.</p>
      <p>Example: Mandy is a careful girl. (adjective) / Mandy drives carefully. (adverb)</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "Mandy is a ___ girl. (careful)", answer: "careful" },
          { sentence: "This is an ___ book. (interesting)", answer: "interesting" },
          { sentence: "She has ___ hair. (long)", answer: "long" },
          { sentence: "The dog is ___. (big)", answer: "big" },
          { sentence: "He is ___ than his brother. (tall)", answer: "taller" },
          { sentence: "This is the ___ room. (small)", answer: "smallest" },
          { sentence: "The weather is ___. (nice)", answer: "nice" },
          { sentence: "She is ___ than me. (old)", answer: "older" },
          { sentence: "It's the ___ day of the year. (hot)", answer: "hottest" },
          { sentence: "The movie was ___. (bore)", answer: "boring" }
        ],
        medium: [
          { sentence: "She is ___ than her sister. (beautiful)", answer: "more beautiful" },
          { sentence: "This is the ___ book I've ever read. (good)", answer: "best" },
          { sentence: "He is ___ than he looks. (intelligent)", answer: "more intelligent" },
          { sentence: "The ___ thing happened. (strange)", answer: "strangest" },
          { sentence: "She felt ___ after the news. (happy)", answer: "happier" },
          { sentence: "It's ___ than I thought. (difficult)", answer: "more difficult" },
          { sentence: "He's the ___ person I know. (kind)", answer: "kindest" },
          { sentence: "The test was ___ than expected. (easy)", answer: "easier" },
          { sentence: "That's the ___ answer. (correct)", answer: "most correct" },
          { sentence: "She looked ___ when she left. (sad)", answer: "sadder" }
        ],
        hard: [
          { sentence: "This is the ___ solution we could find. (practical)", answer: "most practical" },
          { sentence: "He is ___ than his colleagues. (experienced)", answer: "more experienced" },
          { sentence: "The ___ thing was that nobody noticed. (peculiar)", answer: "most peculiar" },
          { sentence: "She became ___ as she spoke. (confident)", answer: "more confident" },
          { sentence: "It's ___ than the previous version. (reliable)", answer: "more reliable" },
          { sentence: "He's the ___ candidate for the job. (suitable)", answer: "most suitable" },
          { sentence: "The results were ___ than predicted. (satisfactory)", answer: "more satisfactory" },
          { sentence: "That's the ___ explanation. (comprehensive)", answer: "most comprehensive" },
          { sentence: "She felt ___ after the apology. (relieved)", answer: "more relieved" },
          { sentence: "The ___ part was yet to come. (challenging)", answer: "most challenging" }
        ]
      }
    }
  },

  "adverbs": {
    id: "adverbs",
    title: "Adverbs",
    explanation: `
      <h2>Adjective or adverb in English</h2>
      <p>Use the words in brackets as adjective or adverb in the gaps. Add <strong>-ly</strong> for adverbs: slow → slowly.</p>
      <p>Example: Peter works slowly. The dog barks loudly.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "The dog barks ___. (loud)", answer: "loudly" },
          { sentence: "He drives the car ___. (careful)", answer: "carefully" },
          { sentence: "He is a ___ driver. (careful)", answer: "careful" },
          { sentence: "She sings the song ___. (good)", answer: "well" },
          { sentence: "It's a ___ day today. (terrible)", answer: "terrible" },
          { sentence: "You can open this tin ___. (easy)", answer: "easily" },
          { sentence: "Max is a ___ singer. (good)", answer: "good" },
          { sentence: "The class is ___ today. (loud)", answer: "loud" },
          { sentence: "Mandy is a ___ girl. (pretty)", answer: "pretty" },
          { sentence: "He reads a book ___. (quick)", answer: "quickly" }
        ],
        medium: [
          { sentence: "He explained the problem ___. (clear)", answer: "clearly" },
          { sentence: "She responded ___ to the question. (immediate)", answer: "immediately" },
          { sentence: "They worked ___ on the project. (efficient)", answer: "efficiently" },
          { sentence: "He spoke ___ about the issue. (honest)", answer: "honestly" },
          { sentence: "She walked ___ into the room. (confident)", answer: "confidently" },
          { sentence: "The meeting went ___. (smooth)", answer: "smoothly" },
          { sentence: "He handled the situation ___. (professional)", answer: "professionally" },
          { sentence: "She reacted ___ to the news. (different)", answer: "differently" },
          { sentence: "They communicated ___. (effective)", answer: "effectively" },
          { sentence: "He performed ___ in the test. (excellent)", answer: "excellently" }
        ],
        hard: [
          { sentence: "She ___ agreed to help. (reluctant)", answer: "reluctantly" },
          { sentence: "He ___ completed the task. (remarkable)", answer: "remarkably" },
          { sentence: "They ___ reached a decision. (eventual)", answer: "eventually" },
          { sentence: "The project was ___ successful. (surprising)", answer: "surprisingly" },
          { sentence: "She ___ apologized for the delay. (sincere)", answer: "sincerely" },
          { sentence: "He ___ forgot about the meeting. (apparent)", answer: "apparently" },
          { sentence: "They ___ disagreed on the matter. (fundamental)", answer: "fundamentally" },
          { sentence: "She ___ qualified for the position. (adequate)", answer: "adequately" },
          { sentence: "He ___ understood the instructions. (complete)", answer: "completely" },
          { sentence: "The situation ___ improved. (significant)", answer: "significantly" }
        ]
      }
    }
  },

  "articles": {
    id: "articles",
    title: "Articles (a/an, the)",
    explanation: `
      <h2>Articles</h2>
      <p><strong>a/an</strong> = indefinite (a book, an apple). Use <strong>a</strong> before consonants, <strong>an</strong> before vowels.</p>
      <p><strong>the</strong> = definite (the book, the board). Use when something is specific or known.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "This is ___ book.", answer: "a" },
          { sentence: "Look at ___ board.", answer: "the" },
          { sentence: "She has ___ apple.", answer: "an" },
          { sentence: "___ sun is shining.", answer: "The" },
          { sentence: "I need ___ umbrella.", answer: "an" },
          { sentence: "___ dog is in the garden.", answer: "The" },
          { sentence: "He is ___ teacher.", answer: "a" },
          { sentence: "___ moon is full tonight.", answer: "The" },
          { sentence: "She bought ___ orange.", answer: "an" },
          { sentence: "___ cat is sleeping.", answer: "The" }
        ],
        medium: [
          { sentence: "I've been waiting for ___ hour.", answer: "an" },
          { sentence: "___ United States is large.", answer: "The" },
          { sentence: "She's ___ honest person.", answer: "an" },
          { sentence: "___ Alps are in Europe.", answer: "The" },
          { sentence: "He has ___ university degree.", answer: "a" },
          { sentence: "___ Thames flows through London.", answer: "The" },
          { sentence: "It's ___ unique opportunity.", answer: "a" },
          { sentence: "___ Pacific Ocean is vast.", answer: "The" },
          { sentence: "She's ___ European citizen.", answer: "a" },
          { sentence: "___ President will speak tonight.", answer: "The" }
        ],
        hard: [
          { sentence: "It was ___ one-time offer.", answer: "a" },
          { sentence: "___ European Union meets in Brussels.", answer: "The" },
          { sentence: "He's ___ FBI agent.", answer: "an" },
          { sentence: "___ Netherlands is flat.", answer: "The" },
          { sentence: "She gave ___ historic speech.", answer: "a" },
          { sentence: "___ Middle East has complex politics.", answer: "The" },
          { sentence: "It's ___ honorable thing to do.", answer: "an" },
          { sentence: "___ United Nations has many members.", answer: "The" },
          { sentence: "He's ___ one-eyed pirate.", answer: "a" },
          { sentence: "___ Andes run through South America.", answer: "The" }
        ]
      }
    }
  },

  "conditional-simple": {
    id: "conditional-simple",
    title: "Conditional Simple",
    explanation: `
      <h2>Conditional Simple (Type 2)</h2>
      <p>Formed with <strong>would + base verb</strong>. Use for hypothetical or unreal situations in the present or future.</p>
      <p>Example: I would work if I had time. If I studied, I would pass the test.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I ___ (go) if I had time.", answer: "would go" },
          { sentence: "She ___ (work) if she could.", answer: "would work" },
          { sentence: "They ___ (play) if it stopped raining.", answer: "would play" },
          { sentence: "He ___ (watch) TV if he weren't busy.", answer: "would watch" },
          { sentence: "We ___ (eat) lunch if we were hungry.", answer: "would eat" },
          { sentence: "You ___ (see) her if you came.", answer: "would see" },
          { sentence: "If I ___ (be) you, I would tell the truth.", answer: "were" },
          { sentence: "She ___ (help) if she could.", answer: "would help" },
          { sentence: "They ___ (come) if we invited them.", answer: "would come" },
          { sentence: "He ___ (buy) it if he had money.", answer: "would buy" }
        ],
        medium: [
          { sentence: "I ___ (wait) if I knew you were coming.", answer: "would wait" },
          { sentence: "She ___ (look) for it if she thought it was important.", answer: "would look" },
          { sentence: "They ___ (have) fun if the weather were better.", answer: "would have" },
          { sentence: "He ___ (think) about it if you asked.", answer: "would think" },
          { sentence: "We ___ (plan) a trip if we had vacation.", answer: "would plan" },
          { sentence: "If the sun ___ (shine), we would go out.", answer: "were shining" },
          { sentence: "She ___ (accept) the offer if it were better.", answer: "would accept" },
          { sentence: "They ___ (finish) if they started earlier.", answer: "would finish" },
          { sentence: "He ___ (wear) a suit if it were formal.", answer: "would wear" },
          { sentence: "If prices ___ (fall), we would buy more.", answer: "fell" }
        ],
        hard: [
          { sentence: "The committee ___ (discuss) it if there were time.", answer: "would discuss" },
          { sentence: "Neither of them ___ (work) if they didn't need money.", answer: "would work" },
          { sentence: "If the number of students ___ (increase), we would need more teachers.", answer: "increased" },
          { sentence: "She ___ (apologize) if she realized her mistake.", answer: "would apologize" },
          { sentence: "The police ___ (investigate) if they had evidence.", answer: "would investigate" },
          { sentence: "Everybody ___ (enjoy) it if the music were better.", answer: "would enjoy" },
          { sentence: "The team ___ (practice) if the field were available.", answer: "would practice" },
          { sentence: "Some of the staff ___ (resign) if conditions didn't improve.", answer: "would resign" },
          { sentence: "The news ___ (surprise) anyone who knew him. (negative)", answer: "wouldn't surprise" },
          { sentence: "Each student ___ (submit) if the deadline were extended.", answer: "would submit" }
        ]
      }
    }
  },

  "gerund": {
    id: "gerund",
    title: "Gerund (-ing form)",
    explanation: `
      <h2>Gerund (-ing form)</h2>
      <p>The gerund is the -ing form of a verb used as a noun. Use after certain verbs: enjoy, finish, avoid, mind, etc.</p>
      <p>Example: I enjoy playing football.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I enjoy ___ football. (play)", answer: "playing" },
          { sentence: "She finished ___ the book. (read)", answer: "reading" },
          { sentence: "They avoid ___ meat. (eat)", answer: "eating" },
          { sentence: "He loves ___ TV. (watch)", answer: "watching" },
          { sentence: "We like ___ in the park. (walk)", answer: "walking" },
          { sentence: "Do you mind ___ the door? (close)", answer: "closing" },
          { sentence: "She keeps ___ about it. (talk)", answer: "talking" },
          { sentence: "He stopped ___ years ago. (smoke)", answer: "smoking" },
          { sentence: "They suggested ___ early. (leave)", answer: "leaving" },
          { sentence: "I prefer ___ by train. (travel)", answer: "travelling" }
        ],
        medium: [
          { sentence: "I consider ___ a new job. (look for)", answer: "looking for" },
          { sentence: "She admitted ___ the mistake. (make)", answer: "making" },
          { sentence: "They postponed ___ the meeting. (have)", answer: "having" },
          { sentence: "He denied ___ the window. (break)", answer: "breaking" },
          { sentence: "We appreciate ___ from you. (hear)", answer: "hearing" },
          { sentence: "She avoids ___ to him. (talk)", answer: "talking" },
          { sentence: "He enjoys ___ in the morning. (swim)", answer: "swimming" },
          { sentence: "They miss ___ their family. (see)", answer: "seeing" },
          { sentence: "I practice ___ English every day. (speak)", answer: "speaking" },
          { sentence: "She risks ___ her job. (lose)", answer: "losing" }
        ],
        hard: [
          { sentence: "I can't help ___ about it. (think)", answer: "thinking" },
          { sentence: "She resented ___ treated that way. (be)", answer: "being" },
          { sentence: "They anticipated ___ the project. (complete)", answer: "completing" },
          { sentence: "He delayed ___ the decision. (make)", answer: "making" },
          { sentence: "We discussed ___ abroad. (study)", answer: "studying" },
          { sentence: "She regretted ___ to the party. (go)", answer: "going" },
          { sentence: "He mentioned ___ her before. (meet)", answer: "meeting" },
          { sentence: "They recommended ___ a reservation. (make)", answer: "making" },
          { sentence: "I fancy ___ out tonight. (eat)", answer: "eating" },
          { sentence: "She envisions ___ her own business. (run)", answer: "running" }
        ]
      }
    }
  },

  "modals": {
    id: "modals",
    title: "Modals (Modal auxiliaries)",
    explanation: `
      <h2>Modals</h2>
      <p>Modal verbs express necessity, possibility, permission, ability: can, could, may, might, must, shall, should, will, would.</p>
      <p>Example: You mustn't do that. She can swim. He should go.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "You ___ do that. (must not)", answer: "mustn't" },
          { sentence: "She ___ swim. (can)", answer: "can" },
          { sentence: "He ___ go to the party. (should)", answer: "should" },
          { sentence: "They ___ come tomorrow. (may)", answer: "may" },
          { sentence: "I ___ help you. (can)", answer: "can" },
          { sentence: "We ___ leave now. (must)", answer: "must" },
          { sentence: "You ___ smoke here. (cannot)", answer: "can't" },
          { sentence: "She ___ speak three languages. (can)", answer: "can" },
          { sentence: "He ___ have left already. (might)", answer: "might" },
          { sentence: "They ___ finish by Friday. (should)", answer: "should" }
        ],
        medium: [
          { sentence: "You ___ have told me earlier. (should)", answer: "should" },
          { sentence: "She ___ be at home now. (might)", answer: "might" },
          { sentence: "He ___ have finished the report. (must)", answer: "must" },
          { sentence: "They ___ have seen the movie. (could)", answer: "could" },
          { sentence: "I ___ rather stay home. (would)", answer: "would" },
          { sentence: "We ___ better hurry. (had)", answer: "had" },
          { sentence: "You ___ to see a doctor. (ought)", answer: "ought" },
          { sentence: "She ___ not have done that. (should)", answer: "should" },
          { sentence: "He ___ as well leave now. (might)", answer: "might" },
          { sentence: "They ___ to be more careful. (need)", answer: "need" }
        ],
        hard: [
          { sentence: "The committee ___ convene next week. (shall)", answer: "shall" },
          { sentence: "Neither of them ___ have known. (could)", answer: "could" },
          { sentence: "___ I suggest an alternative? (might)", answer: "Might" },
          { sentence: "She ___ have been more considerate. (ought to)", answer: "ought to have" },
          { sentence: "The rules ___ be followed. (must)", answer: "must" },
          { sentence: "Everybody ___ have a say. (shall)", answer: "shall" },
          { sentence: "He ___ not have completed it without help. (would)", answer: "would" },
          { sentence: "Some ___ prefer to wait. (may)", answer: "may" },
          { sentence: "The news ___ have been worse. (could)", answer: "could" },
          { sentence: "Each ___ do their part. (must)", answer: "must" }
        ]
      }
    }
  },

  "passive-voice": {
    id: "passive-voice",
    title: "Passive voice",
    explanation: `
      <h2>Passive Voice</h2>
      <p>Formed with <strong>be + past participle</strong>. The object becomes the subject; the agent is often omitted.</p>
      <p>Example: Cameras are built in Japan. The letter was written by Mary.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "Cameras ___ built in Japan. (are)", answer: "are" },
          { sentence: "The letter ___ written yesterday. (was)", answer: "was" },
          { sentence: "English ___ spoken worldwide. (is)", answer: "is" },
          { sentence: "The house ___ built in 1990. (was)", answer: "was" },
          { sentence: "The car ___ repaired last week. (was)", answer: "was" },
          { sentence: "Books ___ sold here. (are)", answer: "are" },
          { sentence: "The window ___ broken. (was)", answer: "was" },
          { sentence: "Coffee ___ grown in Brazil. (is)", answer: "is" },
          { sentence: "The job ___ completed on time. (was)", answer: "was" },
          { sentence: "The door ___ closed. (is)", answer: "is" }
        ],
        medium: [
          { sentence: "The proposal ___ discussed at the meeting. (was)", answer: "was" },
          { sentence: "The building ___ constructed last year. (was)", answer: "was" },
          { sentence: "The letter ___ delivered this morning. (was)", answer: "was" },
          { sentence: "The problem ___ solved by the team. (was)", answer: "was" },
          { sentence: "The meeting ___ postponed. (has been)", answer: "has been" },
          { sentence: "The report ___ written by John. (was)", answer: "was" },
          { sentence: "The decision ___ made yesterday. (was)", answer: "was" },
          { sentence: "The room ___ cleaned every day. (is)", answer: "is" },
          { sentence: "The contract ___ signed last week. (was)", answer: "was" },
          { sentence: "The cake ___ eaten by the children. (was)", answer: "was" }
        ],
        hard: [
          { sentence: "The committee ___ informed of the changes. (has been)", answer: "has been" },
          { sentence: "Neither of them ___ invited to the party. (was)", answer: "was" },
          { sentence: "The number of students ___ increased. (has been)", answer: "has been" },
          { sentence: "The case ___ investigated by the police. (is being)", answer: "is being" },
          { sentence: "Everybody ___ told about the delay. (was)", answer: "was" },
          { sentence: "The project ___ completed by Friday. (will be)", answer: "will be" },
          { sentence: "Some of the staff ___ transferred. (have been)", answer: "have been" },
          { sentence: "The news ___ spread quickly. (was)", answer: "was" },
          { sentence: "Each student ___ given a certificate. (was)", answer: "was" },
          { sentence: "The agreement ___ reached last month. (was)", answer: "was" }
        ]
      }
    }
  },

  "prepositions": {
    id: "prepositions",
    title: "Prepositions",
    explanation: `
      <h2>Prepositions</h2>
      <p>Prepositions show relationships: place (on, in, at), time (before, after), direction (to, from), etc.</p>
      <p>Example: The books are on the desk.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "The books are ___ the desk. (on)", answer: "on" },
          { sentence: "She lives ___ London. (in)", answer: "in" },
          { sentence: "The meeting is ___ 9 AM. (at)", answer: "at" },
          { sentence: "He went ___ the supermarket. (to)", answer: "to" },
          { sentence: "The cat is ___ the table. (under)", answer: "under" },
          { sentence: "She arrived ___ Monday. (on)", answer: "on" },
          { sentence: "The picture is ___ the wall. (on)", answer: "on" },
          { sentence: "He sat ___ me. (next to)", answer: "next to" },
          { sentence: "We met ___ the morning. (in)", answer: "in" },
          { sentence: "The keys are ___ my bag. (in)", answer: "in" }
        ],
        medium: [
          { sentence: "She's interested ___ music. (in)", answer: "in" },
          { sentence: "He's afraid ___ spiders. (of)", answer: "of" },
          { sentence: "They depend ___ each other. (on)", answer: "on" },
          { sentence: "She insisted ___ coming. (on)", answer: "on" },
          { sentence: "He apologized ___ being late. (for)", answer: "for" },
          { sentence: "We're looking ___ our keys. (for)", answer: "for" },
          { sentence: "She's good ___ math. (at)", answer: "at" },
          { sentence: "He's responsible ___ the project. (for)", answer: "for" },
          { sentence: "They're tired ___ waiting. (of)", answer: "of" },
          { sentence: "I'm familiar ___ the area. (with)", answer: "with" }
        ],
        hard: [
          { sentence: "She objected ___ the proposal. (to)", answer: "to" },
          { sentence: "He contributed ___ the discussion. (to)", answer: "to" },
          { sentence: "They refrained ___ commenting. (from)", answer: "from" },
          { sentence: "She abstained ___ voting. (from)", answer: "from" },
          { sentence: "He prevailed ___ his opponent. (over)", answer: "over" },
          { sentence: "We dispensed ___ formalities. (with)", answer: "with" },
          { sentence: "She conformed ___ the rules. (to)", answer: "to" },
          { sentence: "He despaired ___ success. (of)", answer: "of" },
          { sentence: "They partook ___ the meal. (of)", answer: "of" },
          { sentence: "I acquiesced ___ their request. (in)", answer: "in" }
        ]
      }
    }
  },

  "genitive-s": {
    id: "genitive-s",
    title: "Genitive s (Possessive s)",
    explanation: `
      <h2>Genitive s (Possessive s)</h2>
      <p>Add <strong>'s</strong> to show possession: Ronny's brother, the teacher's book.</p>
      <p>For plural nouns ending in s, add only <strong>'</strong>: the students' books.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "This is ___ brother. (Ronny)", answer: "Ronny's" },
          { sentence: "That is ___ book. (the teacher)", answer: "the teacher's" },
          { sentence: "This is ___ car. (my mother)", answer: "my mother's" },
          { sentence: "Where is ___ bag? (John)", answer: "John's" },
          { sentence: "That is ___ house. (Maria)", answer: "Maria's" },
          { sentence: "These are ___ toys. (the children)", answer: "the children's" },
          { sentence: "This is ___ office. (the doctor)", answer: "the doctor's" },
          { sentence: "That is ___ bike. (my brother)", answer: "my brother's" },
          { sentence: "These are ___ books. (the students)", answer: "the students'" },
          { sentence: "This is ___ room. (Sarah)", answer: "Sarah's" }
        ],
        medium: [
          { sentence: "___ opinion matters. (Everybody)", answer: "Everybody's" },
          { sentence: "The ___ house is on the corner. (Smiths)", answer: "Smiths'" },
          { sentence: "___ laptop is new. (Someone)", answer: "Someone's" },
          { sentence: "The ___ cars were stolen. (neighbors)", answer: "neighbors'" },
          { sentence: "___ birthday is tomorrow. (James)", answer: "James's" },
          { sentence: "The ___ meeting is at 3. (committee)", answer: "committee's" },
          { sentence: "___ desk is messy. (Nobody)", answer: "Nobody's" },
          { sentence: "The ___ voices were heard. (children)", answer: "children's" },
          { sentence: "___ book was lost. (Charles)", answer: "Charles's" },
          { sentence: "The ___ decision was final. (bosses)", answer: "bosses'" }
        ],
        hard: [
          { sentence: "___ sake, please be quiet. (Goodness)", answer: "Goodness'" },
          { sentence: "For ___ sake, hurry up. (heaven)", answer: "heaven's" },
          { sentence: "A ___ ride away. (week)", answer: "week's" },
          { sentence: "The ___ deadline is Friday. (project)", answer: "project's" },
          { sentence: "___ rights are important. (Everyone)", answer: "Everyone's" },
          { sentence: "The ___ contracts were signed. (companies)", answer: "companies'" },
          { sentence: "___ wish was granted. (Hercules)", answer: "Hercules'" },
          { sentence: "The ___ support was crucial. (members)", answer: "members'" },
          { sentence: "___ influence was significant. (Keats)", answer: "Keats'" },
          { sentence: "The ___ approval was needed. (directors)", answer: "directors'" }
        ]
      }
    }
  },

  "conjunctions": {
    id: "conjunctions",
    title: "Conjunctions and Fillers",
    explanation: `
      <h2>Conjunctions</h2>
      <p>Conjunctions connect words, phrases, or clauses: and, but, or, so, because, although, when, if.</p>
      <p>Example: I like tea and coffee.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I like tea ___ coffee. (and)", answer: "and" },
          { sentence: "She likes it, ___ I don't. (but)", answer: "but" },
          { sentence: "Do you want tea ___ coffee? (or)", answer: "or" },
          { sentence: "I'm tired, ___ I'm going to bed. (so)", answer: "so" },
          { sentence: "I stayed home ___ I was sick. (because)", answer: "because" },
          { sentence: "She came ___ she was invited. (because)", answer: "because" },
          { sentence: "___ it was raining, we went out. (Although)", answer: "Although" },
          { sentence: "I'll call you ___ I arrive. (when)", answer: "when" },
          { sentence: "___ you study, you'll pass. (If)", answer: "If" },
          { sentence: "He was tired ___ he stayed up late. (because)", answer: "because" }
        ],
        medium: [
          { sentence: "___ she tried hard, she failed. (Although)", answer: "Although" },
          { sentence: "I'll wait ___ you finish. (until)", answer: "until" },
          { sentence: "She left ___ I arrived. (before)", answer: "before" },
          { sentence: "We started ___ everyone was ready. (after)", answer: "after" },
          { sentence: "___ the weather was bad, we had fun. (Even though)", answer: "Even though" },
          { sentence: "He works ___ he can pay the bills. (so that)", answer: "so that" },
          { sentence: "I'll go ___ you come with me. (only if)", answer: "only if" },
          { sentence: "She smiled ___ she was sad. (although)", answer: "although" },
          { sentence: "We ran ___ we could catch the bus. (so that)", answer: "so that" },
          { sentence: "___ it was expensive, I bought it. (Despite)", answer: "Despite" }
        ],
        hard: [
          { sentence: "___ having studied, he failed the test. (Despite)", answer: "Despite" },
          { sentence: "She succeeded ___ the odds. (against)", answer: "against" },
          { sentence: "___ of the rain, the match continued. (In spite)", answer: "In spite" },
          { sentence: "I'll help you ___ you need it. (whenever)", answer: "whenever" },
          { sentence: "___ I may disagree, I respect your opinion. (Whilst)", answer: "Whilst" },
          { sentence: "He apologized ___ he had done nothing wrong. (even though)", answer: "even though" },
          { sentence: "___ she knew the answer, she remained silent. (Whereas)", answer: "Whereas" },
          { sentence: "I'll be there ___ it takes. (however long)", answer: "however long" },
          { sentence: "___ the circumstances, we must proceed. (Notwithstanding)", answer: "Notwithstanding" },
          { sentence: "She left ___ without saying goodbye. (thereby)", answer: "thereby" }
        ]
      }
    }
  },

  "imperative": {
    id: "imperative",
    title: "Imperative",
    explanation: `
      <h2>The Imperative</h2>
      <p>The imperative uses the base form of the verb for commands, requests, or instructions. No subject.</p>
      <p>Example: Go home! Be quiet! Don't touch that!</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "___ home! (Go)", answer: "Go" },
          { sentence: "___ quiet! (Be)", answer: "Be" },
          { sentence: "___ that! (Don't touch)", answer: "Don't touch" },
          { sentence: "___ the door. (Close)", answer: "Close" },
          { sentence: "___ late. (Don't be)", answer: "Don't be" },
          { sentence: "___ your homework. (Do)", answer: "Do" },
          { sentence: "___ the window. (Open)", answer: "Open" },
          { sentence: "___ here. (Come)", answer: "Come" },
          { sentence: "___ so fast. (Don't run)", answer: "Don't run" },
          { sentence: "___ me. (Help)", answer: "Help" }
        ],
        medium: [
          { sentence: "___ down, please. (Sit)", answer: "Sit" },
          { sentence: "___ to what I say. (Listen)", answer: "Listen" },
          { sentence: "___ your hand. (Raise)", answer: "Raise" },
          { sentence: "___ in line. (Wait)", answer: "Wait" },
          { sentence: "___ me a favor. (Do)", answer: "Do" },
          { sentence: "___ your mind. (Make up)", answer: "Make up" },
          { sentence: "___ it easy. (Take)", answer: "Take" },
          { sentence: "___ a seat. (Have)", answer: "Have" },
          { sentence: "___ attention. (Pay)", answer: "Pay" },
          { sentence: "___ your time. (Take)", answer: "Take" }
        ],
        hard: [
          { sentence: "___ yourself at home. (Make)", answer: "Make" },
          { sentence: "___ of the situation. (Take advantage)", answer: "Take advantage" },
          { sentence: "___ me out on this. (Hear)", answer: "Hear" },
          { sentence: "___ no notice of what they say. (Take)", answer: "Take" },
          { sentence: "___ for the best. (Hope)", answer: "Hope" },
          { sentence: "___ this to heart. (Take)", answer: "Take" },
          { sentence: "___ an eye on the children. (Keep)", answer: "Keep" },
          { sentence: "___ the matter into consideration. (Take)", answer: "Take" },
          { sentence: "___ at ease. (Feel)", answer: "Feel" },
          { sentence: "___ no offense. (Take)", answer: "Take" }
        ]
      }
    }
  },

  "quantifiers": {
    id: "quantifiers",
    title: "some, any, much, many (Quantifiers)",
    explanation: `
      <h2>Quantifiers</h2>
      <p><strong>some</strong> = affirmative; <strong>any</strong> = negative/questions. <strong>much</strong> = uncountable; <strong>many</strong> = countable.</p>
      <p>Example: There are some apples left. Is there any milk? How much sugar? How many books?</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "There are ___ apples left. (some)", answer: "some" },
          { sentence: "Is there ___ milk? (any)", answer: "any" },
          { sentence: "I don't have ___ money. (any)", answer: "any" },
          { sentence: "How ___ sugar do you need? (much)", answer: "much" },
          { sentence: "How ___ books do you have? (many)", answer: "many" },
          { sentence: "There is ___ water in the bottle. (some)", answer: "some" },
          { sentence: "Do you have ___ questions? (any)", answer: "any" },
          { sentence: "I need ___ help. (some)", answer: "some" },
          { sentence: "There aren't ___ students here. (many)", answer: "many" },
          { sentence: "There isn't ___ time left. (much)", answer: "much" }
        ],
        medium: [
          { sentence: "Would you like ___ coffee? (some)", answer: "some" },
          { sentence: "I have ___ friends in London. (a few)", answer: "a few" },
          { sentence: "There's ___ butter left. (a little)", answer: "a little" },
          { sentence: "___ of the students passed. (Most)", answer: "Most" },
          { sentence: "___ people attended the meeting. (Several)", answer: "Several" },
          { sentence: "I've got ___ work to do. (a lot of)", answer: "a lot of" },
          { sentence: "There are ___ options. (few)", answer: "few" },
          { sentence: "We have ___ time. (little)", answer: "little" },
          { sentence: "___ of them agreed. (All)", answer: "All" },
          { sentence: "___ students were absent. (No)", answer: "No" }
        ],
        hard: [
          { sentence: "___ a few of them knew the answer. (Only)", answer: "Only" },
          { sentence: "There's ___ a little sugar left. (only)", answer: "only" },
          { sentence: "___ the students passed. (Each of)", answer: "Each of" },
          { sentence: "I have ___ enough time. (hardly)", answer: "hardly" },
          { sentence: "___ both options work. (Either)", answer: "Either" },
          { sentence: "___ all of them were correct. (Not)", answer: "Not" },
          { sentence: "She has ___ patience left. (scarcely any)", answer: "scarcely any" },
          { sentence: "___ of the two will do. (Either)", answer: "Either" },
          { sentence: "There's ___ point in arguing. (little)", answer: "little" },
          { sentence: "___ of the suggestions were helpful. (None)", answer: "None" }
        ]
      }
    }
  },

  "question-tags": {
    id: "question-tags",
    title: "Question tags",
    explanation: `
      <h2>Question Tags</h2>
      <p>Question tags are short questions added to statements: positive statement + negative tag, or negative statement + positive tag.</p>
      <p>Example: You are John, aren't you? She doesn't like it, does she?</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "You are John, ___?", answer: "aren't you" },
          { sentence: "She likes coffee, ___?", answer: "doesn't she" },
          { sentence: "They left early, ___?", answer: "didn't they" },
          { sentence: "He isn't coming, ___?", answer: "is he" },
          { sentence: "You don't smoke, ___?", answer: "do you" },
          { sentence: "It's nice today, ___?", answer: "isn't it" },
          { sentence: "We can go now, ___?", answer: "can't we" },
          { sentence: "She won't mind, ___?", answer: "will she" },
          { sentence: "You've finished, ___?", answer: "haven't you" },
          { sentence: "He didn't know, ___?", answer: "did he" }
        ],
        medium: [
          { sentence: "You're from England, ___?", answer: "aren't you" },
          { sentence: "She's been there before, ___?", answer: "hasn't she" },
          { sentence: "They had left, ___?", answer: "hadn't they" },
          { sentence: "He would help, ___?", answer: "wouldn't he" },
          { sentence: "You could try, ___?", answer: "couldn't you" },
          { sentence: "She might come, ___?", answer: "mightn't she" },
          { sentence: "We should go, ___?", answer: "shouldn't we" },
          { sentence: "They must leave, ___?", answer: "mustn't they" },
          { sentence: "You'd rather stay, ___?", answer: "wouldn't you" },
          { sentence: "She'd been waiting, ___?", answer: "hadn't she" }
        ],
        hard: [
          { sentence: "I'm right, ___?", answer: "aren't I" },
          { sentence: "Let's go, ___?", answer: "shall we" },
          { sentence: "Nobody came, ___?", answer: "did they" },
          { sentence: "Everything is fine, ___?", answer: "isn't it" },
          { sentence: "Someone called, ___?", answer: "didn't they" },
          { sentence: "Nothing matters, ___?", answer: "does it" },
          { sentence: "Few people knew, ___?", answer: "did they" },
          { sentence: "Little was done, ___?", answer: "was it" },
          { sentence: "There's a problem, ___?", answer: "isn't there" },
          { sentence: "That was clever, ___?", answer: "wasn't it" }
        ]
      }
    }
  },

  "demonstratives": {
    id: "demonstratives",
    title: "this, that - these, those",
    explanation: `
      <h2>Demonstrative pronouns</h2>
      <p><strong>this/these</strong> = near; <strong>that/those</strong> = far. <strong>this/that</strong> = singular; <strong>these/those</strong> = plural.</p>
      <p>Example: This is Pat and that is John. These are mine, those are yours.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "___ is Pat. (This)", answer: "This" },
          { sentence: "___ is John. (That)", answer: "That" },
          { sentence: "___ book is mine. (This)", answer: "This" },
          { sentence: "___ books are interesting. (These)", answer: "These" },
          { sentence: "___ car is expensive. (That)", answer: "That" },
          { sentence: "___ flowers are beautiful. (Those)", answer: "Those" },
          { sentence: "___ is my friend. (This)", answer: "This" },
          { sentence: "___ are my parents. (These)", answer: "These" },
          { sentence: "___ was a long time ago. (That)", answer: "That" },
          { sentence: "___ were the days. (Those)", answer: "Those" },
          { sentence: "___ idea is great. (This)", answer: "This" }
        ],
        medium: [
          { sentence: "___ ones over there are cheaper. (Those)", answer: "Those" },
          { sentence: "___ one here is better. (This)", answer: "This" },
          { sentence: "___ kind of thing happens often. (This)", answer: "This" },
          { sentence: "___ sort of problem is common. (That)", answer: "That" },
          { sentence: "___ days we don't go out. (These)", answer: "These" },
          { sentence: "___ was in 2020. (That)", answer: "That" },
          { sentence: "___ people are my colleagues. (These)", answer: "These" },
          { sentence: "___ thing is, I don't know. (The)", answer: "The" },
          { sentence: "___ here are fresh. (These)", answer: "These" },
          { sentence: "___ there are old. (Those)", answer: "Those" }
        ],
        hard: [
          { sentence: "___ matters more than that. (This)", answer: "This" },
          { sentence: "Some of ___ are mine. (these)", answer: "these" },
          { sentence: "Some among ___ are valuable. (those)", answer: "those" },
          { sentence: "___ very thing bothered me. (That)", answer: "That" },
          { sentence: "___ same applies here. (The)", answer: "The" },
          { sentence: "___ such cases are rare. (In)", answer: "In" },
          { sentence: "___ aforesaid points matter. (The)", answer: "The" },
          { sentence: "___ latter option is better. (The)", answer: "The" },
          { sentence: "___ former was easier. (The)", answer: "The" },
          { sentence: "___ two are similar. (These)", answer: "These" }
        ]
      }
    }
  },

  "infinitive": {
    id: "infinitive",
    title: "Infinitive",
    explanation: `
      <h2>Infinitive</h2>
      <p>The infinitive is the base form of the verb (with or without <strong>to</strong>). Use after certain verbs, adjectives, and nouns.</p>
      <p>Example: Gagarin was the first to fly in a spaceship.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "I want ___ go home. (to)", answer: "to" },
          { sentence: "She hopes ___ see you soon. (to)", answer: "to" },
          { sentence: "They need ___ study. (to)", answer: "to" },
          { sentence: "He was the first ___ arrive. (to)", answer: "to" },
          { sentence: "We decided ___ leave. (to)", answer: "to" },
          { sentence: "She wants ___ learn English. (to)", answer: "to" },
          { sentence: "I'd like ___ help. (to)", answer: "to" },
          { sentence: "He refused ___ go. (to)", answer: "to" },
          { sentence: "They agreed ___ come. (to)", answer: "to" },
          { sentence: "She promised ___ call. (to)", answer: "to" }
        ],
        medium: [
          { sentence: "It's important ___ be on time. (to)", answer: "to" },
          { sentence: "She's too young ___ drive. (to)", answer: "to" },
          { sentence: "I'm happy ___ help. (to)", answer: "to" },
          { sentence: "He's eager ___ start. (to)", answer: "to" },
          { sentence: "We're ready ___ begin. (to)", answer: "to" },
          { sentence: "She seems ___ know. (to)", answer: "to" },
          { sentence: "He appears ___ be tired. (to)", answer: "to" },
          { sentence: "They tend ___ be late. (to)", answer: "to" },
          { sentence: "I expect ___ finish soon. (to)", answer: "to" },
          { sentence: "She managed ___ pass. (to)", answer: "to" }
        ],
        hard: [
          { sentence: "She persuaded him ___ stay. (to)", answer: "to" },
          { sentence: "I reminded her ___ call. (to)", answer: "to" },
          { sentence: "They encouraged us ___ try. (to)", answer: "to" },
          { sentence: "He allowed them ___ leave. (to)", answer: "to" },
          { sentence: "We advised her ___ wait. (to)", answer: "to" },
          { sentence: "She convinced him ___ go. (to)", answer: "to" },
          { sentence: "He warned them ___ be careful. (to)", answer: "to" },
          { sentence: "They invited us ___ join. (to)", answer: "to" },
          { sentence: "I asked him ___ help. (to)", answer: "to" },
          { sentence: "She taught us ___ swim. (to)", answer: "to" }
        ]
      }
    }
  },

  "personal-pronouns": {
    id: "personal-pronouns",
    title: "Personal pronouns",
    explanation: `
      <h2>Personal Pronouns</h2>
      <p>Subject: I, you, he, she, it, we, they. Object: me, you, him, her, it, us, them.</p>
      <p>Example: We read a book. Give it to me.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "___ read a book. (We)", answer: "We" },
          { sentence: "Give it to ___. (me)", answer: "me" },
          { sentence: "___ likes coffee. (She)", answer: "She" },
          { sentence: "I saw ___ yesterday. (him)", answer: "him" },
          { sentence: "___ are my friends. (They)", answer: "They" },
          { sentence: "She told ___ the news. (us)", answer: "us" },
          { sentence: "___ am tired. (I)", answer: "I" },
          { sentence: "Call ___ later. (me)", answer: "me" },
          { sentence: "___ is my brother. (He)", answer: "He" },
          { sentence: "I gave ___ a present. (her)", answer: "her" }
        ],
        medium: [
          { sentence: "Between you and ___, I don't like it. (me)", answer: "me" },
          { sentence: "___ and I went together. (She)", answer: "She" },
          { sentence: "They gave ___ to us. (it)", answer: "it" },
          { sentence: "___ yourselves to the food. (Help)", answer: "Help" },
          { sentence: "___ of us enjoyed it. (Each)", answer: "Each" },
          { sentence: "___ one of them passed. (Every)", answer: "Every" },
          { sentence: "___ of you is wrong. (Neither)", answer: "Neither" },
          { sentence: "___ of them agreed. (Both)", answer: "Both" },
          { sentence: "___ did you call? (Whom)", answer: "Whom" },
          { sentence: "___ went to the party? (Who)", answer: "Who" }
        ],
        hard: [
          { sentence: "It was ___ who left. (she)", answer: "she" },
          { sentence: "The winner was ___. (he)", answer: "he" },
          { sentence: "___ is more qualified than I. (She)", answer: "She" },
          { sentence: "Nobody but ___ knew. (he)", answer: "he" },
          { sentence: "Those ___ went home. (who)", answer: "who" },
          { sentence: "___soever comes first wins. (Who)", answer: "Who" },
          { sentence: "Give it to ___ needs it. (whoever)", answer: "whoever" },
          { sentence: "___ of us is perfect. (None)", answer: "None" },
          { sentence: "___ did you see? (Whom)", answer: "Whom" },
          { sentence: "___ is responsible? (Who)", answer: "Who" }
        ]
      }
    }
  },

  "reflexive-pronouns": {
    id: "reflexive-pronouns",
    title: "Reflexive pronouns",
    explanation: `
      <h2>Reflexive Pronouns (self, each other)</h2>
      <p>Myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.</p>
      <p>Example: They help each other. I did it myself.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "They help ___. (each other)", answer: "each other" },
          { sentence: "I did it ___. (myself)", answer: "myself" },
          { sentence: "She cut ___. (herself)", answer: "herself" },
          { sentence: "He hurt ___. (himself)", answer: "himself" },
          { sentence: "We enjoyed ___. (ourselves)", answer: "ourselves" },
          { sentence: "They enjoyed ___. (themselves)", answer: "themselves" },
          { sentence: "Did you hurt ___? (yourself)", answer: "yourself" },
          { sentence: "The cat washed ___. (itself)", answer: "itself" },
          { sentence: "We introduced ___. (ourselves)", answer: "ourselves" },
          { sentence: "They love ___. (each other)", answer: "each other" }
        ],
        medium: [
          { sentence: "She bought ___ a new dress. (herself)", answer: "herself" },
          { sentence: "He taught ___ English. (himself)", answer: "himself" },
          { sentence: "We made ___ at home. (ourselves)", answer: "ourselves" },
          { sentence: "They blamed ___ for the mistake. (themselves)", answer: "themselves" },
          { sentence: "I reminded ___ to call. (myself)", answer: "myself" },
          { sentence: "She praised ___ too much. (herself)", answer: "herself" },
          { sentence: "He spoke to ___. (himself)", answer: "himself" },
          { sentence: "We kept ___ busy. (ourselves)", answer: "ourselves" },
          { sentence: "They helped ___ to the food. (themselves)", answer: "themselves" },
          { sentence: "The machine turns ___ off. (itself)", answer: "itself" }
        ],
        hard: [
          { sentence: "She applied ___ to the task. (herself)", answer: "herself" },
          { sentence: "He dedicated ___ to his work. (himself)", answer: "himself" },
          { sentence: "We availed ___ of the opportunity. (ourselves)", answer: "ourselves" },
          { sentence: "They prided ___ on their success. (themselves)", answer: "themselves" },
          { sentence: "I contented ___ with less. (myself)", answer: "myself" },
          { sentence: "She busied ___ with work. (herself)", answer: "herself" },
          { sentence: "He excused ___ from the meeting. (himself)", answer: "himself" },
          { sentence: "We found ___ in a difficult situation. (ourselves)", answer: "ourselves" },
          { sentence: "They distinguished ___ from the others. (themselves)", answer: "themselves" },
          { sentence: "The door opened by ___. (itself)", answer: "itself" }
        ]
      }
    }
  },

  "relative-pronouns": {
    id: "relative-pronouns",
    title: "Relative pronouns (who, which, whose, that)",
    explanation: `
      <h2>Relative Pronouns</h2>
      <p><strong>who</strong> = people; <strong>which</strong> = things; <strong>whose</strong> = possession; <strong>that</strong> = people or things.</p>
      <p>Example: My house, which has a blue door, needs painting.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "The man ___ called is my brother. (who)", answer: "who" },
          { sentence: "The book ___ I read was good. (that)", answer: "that" },
          { sentence: "The house ___ has a blue door needs painting. (which)", answer: "which" },
          { sentence: "The girl ___ bag was stolen is crying. (whose)", answer: "whose" },
          { sentence: "The person ___ I met was kind. (who)", answer: "who" },
          { sentence: "The car ___ he bought is new. (which)", answer: "which" },
          { sentence: "The dog ___ bit me ran away. (that)", answer: "that" },
          { sentence: "The teacher ___ class I enjoy is nice. (whose)", answer: "whose" },
          { sentence: "The woman ___ lives next door is a doctor. (who)", answer: "who" },
          { sentence: "The movie ___ we saw was long. (that)", answer: "that" }
        ],
        medium: [
          { sentence: "Anyone ___ knows the answer should speak up. (who)", answer: "who" },
          { sentence: "The reason ___ I called is important. (why)", answer: "why" },
          { sentence: "The day ___ we met was sunny. (when)", answer: "when" },
          { sentence: "The place ___ we stayed was comfortable. (where)", answer: "where" },
          { sentence: "All ___ I want is peace. (that)", answer: "that" },
          { sentence: "The students ___ passed the test were happy. (who)", answer: "who" },
          { sentence: "The project ___ we worked on is done. (which)", answer: "which" },
          { sentence: "The company ___ CEO resigned is struggling. (whose)", answer: "whose" },
          { sentence: "The time ___ we have is limited. (that)", answer: "that" },
          { sentence: "The person to ___ I spoke was helpful. (whom)", answer: "whom" }
        ],
        hard: [
          { sentence: "She's one of the few ___ understand. (who)", answer: "who" },
          { sentence: "The extent to ___ they agreed was surprising. (which)", answer: "which" },
          { sentence: "The manner in ___ he spoke was rude. (which)", answer: "which" },
          { sentence: "The degree to ___ it matters varies. (which)", answer: "which" },
          { sentence: "Those ___ wish to leave may go. (who)", answer: "who" },
          { sentence: "The document ___ which he referred was lost. (to)", answer: "to" },
          { sentence: "The people with ___ I work are friendly. (whom)", answer: "whom" },
          { sentence: "The thing ___ bothers me most is the noise. (that)", answer: "that" },
          { sentence: "He's someone ___ opinion I respect. (whose)", answer: "whose" },
          { sentence: "The way in ___ it was done was wrong. (which)", answer: "which" }
        ]
      }
    }
  },

  "short-answers": {
    id: "short-answers",
    title: "Short answers",
    explanation: `
      <h2>Short Answers</h2>
      <p>Short answers use the auxiliary and the subject: Yes, I am. No, I don't.</p>
      <p>Example: Are you English? - Yes, I am. Do you speak French? - No, I don't.</p>
    `,
    exercises: {
      mixed: {
        easy: [
          { sentence: "Are you English? - Yes, ___. (I am)", answer: "I am" },
          { sentence: "Do you speak French? - No, ___. (I don't)", answer: "I don't" },
          { sentence: "Is she your sister? - Yes, ___. (she is)", answer: "she is" },
          { sentence: "Do they like it? - No, ___. (they don't)", answer: "they don't" },
          { sentence: "Can he swim? - Yes, ___. (he can)", answer: "he can" },
          { sentence: "Will you come? - No, ___. (I won't)", answer: "I won't" },
          { sentence: "Have you finished? - Yes, ___. (I have)", answer: "I have" },
          { sentence: "Did she call? - No, ___. (she didn't)", answer: "she didn't" },
          { sentence: "Are they coming? - Yes, ___. (they are)", answer: "they are" },
          { sentence: "Does he know? - No, ___. (he doesn't)", answer: "he doesn't" }
        ],
        medium: [
          { sentence: "Would you like some? - Yes, ___. (I would)", answer: "I would" },
          { sentence: "Could you help? - No, ___. (I couldn't)", answer: "I couldn't" },
          { sentence: "Should we leave? - Yes, ___. (we should)", answer: "we should" },
          { sentence: "Might she come? - No, ___. (she mightn't)", answer: "she mightn't" },
          { sentence: "Had they left? - Yes, ___. (they had)", answer: "they had" },
          { sentence: "Were you there? - No, ___. (I wasn't)", answer: "I wasn't" },
          { sentence: "Has he finished? - Yes, ___. (he has)", answer: "he has" },
          { sentence: "Had we met? - No, ___. (we hadn't)", answer: "we hadn't" },
          { sentence: "Were they waiting? - Yes, ___. (they were)", answer: "they were" },
          { sentence: "Has she called? - No, ___. (she hasn't)", answer: "she hasn't" }
        ],
        hard: [
          { sentence: "Need we wait? - No, ___. (you needn't)", answer: "you needn't" },
          { sentence: "Dare he go? - Yes, ___. (he dare)", answer: "he dare" },
          { sentence: "Ought we to stay? - No, ___. (we oughtn't)", answer: "we oughtn't" },
          { sentence: "Used she to smoke? - Yes, ___. (she used to)", answer: "she used to" },
          { sentence: "Had you rather leave? - Yes, ___. (I had)", answer: "I had" },
          { sentence: "Would you mind? - No, ___. (I wouldn't)", answer: "I wouldn't" },
          { sentence: "Could she have known? - Yes, ___. (she could have)", answer: "she could have" },
          { sentence: "Should they have left? - No, ___. (they shouldn't have)", answer: "they shouldn't have" },
          { sentence: "Must we pay? - Yes, ___. (you must)", answer: "you must" },
          { sentence: "May I come in? - Yes, ___. (you may)", answer: "you may" }
        ]
      }
    }
  }
};
