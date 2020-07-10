/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: 'What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.',
    source: 'Helen Keller',
  },
  {
    quote: "I believe whatever doesn't kill you simply makes you... stranger.",
    source: 'The Joker (Heath Ledger)',
    citation: 'The Dark Knight',
    year: 2008,
  },
  {
    quote: 'Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.',
    source: 'Malcolm X',
    citation: 'By Any Means Necessary: Speeches, Interviews, and a Letter by Malcolm X',
    year: 1970,
  },
  {
    quote: 'The future is no more uncertain than the present.',
    source: 'Walt Whitman',
  },
  {
    quote: 'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.',
    source: 'Oscar Wilde',
  },
  {
    quote: 'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.',
    source: 'Maimonides',
  },
  {
    quote: 'There are two kinds of pain in this world. The pain that hurts, the pain that alters.',
    source: 'Robert McCall (Denzel Washington)',
    citation: 'The Equalizer 2',
    year: 2018,
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: 'Thomas A. Edison',
  },
  {
    quote: 'The way I see it, if you want the rainbow, you gotta put up with the rain.',
    source: 'Dolly Parton',
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  for (var i = 0; i < array.length; i++) {
      var printQuote = array[randomQuote];
  }
  return printQuote;
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);