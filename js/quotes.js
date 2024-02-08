const quotes = [
{
  quote: "no pain no gain",
  author: "some one",
},
{
    quote: "do verything in love",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
},
{
    quote: "no pain no gain",
    author: "some one",
}];



const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//const quote = document.querySelector("#quote sapn:first-child");
//const author = document.querySelector("#quote sapn:last-child");

//const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//quote.innerText = todaysQuote.quote;
//author.innerText = todaysQuote.author;
