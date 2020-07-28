# Treehouse Techdegree Project 1 - Random Quote Generator

Project Details
===============

The goal of this project is to create an app that displays a quote at random each time a button is clicked. Each quote contains:
* A _quote_ attribute that displays the quote string.
* A _source_ attribute that displays the creator of the quote.
* A _citation_ attribute that displays the work containing the quote.
* A _year_ number attribute that displays the quote's date.

## "getRandomQuote()" Function
The program's first function performs two actions.

1. Selects a quote at random from the "quotes" array.
2. Returns selected quote object.

## "printQuote()" Function
The program's second function performs the following:
1. Calls the "getRandomQuote()" function and stores the random quote in a variable.
2. Displays random quote object.
3. Additionally, if the "citation" and "year" conditions are met, the "printQuote()" function will display them.
