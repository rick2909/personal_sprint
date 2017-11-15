const QUOTES = [ "“Be yourself; everyone else is already taken.” <br> ― Oscar Wilde",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> ― Albert Einstein", 
"“If you tell the truth, you don't have to remember anything.” <br> ― Mark Twain",
"“Don't cry because it's over, smile because it happened.” <br> ― Dr. Seuss",
"“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br> ― Mahatma Gandhi",
"“Never memorize something that you can look up.” <br> ― Albert Einstein",
"“In three words I can sum up everything I've learned about life: it goes on.” <br> ― Robert Frost",
"“It is better to be hated for what you are than to be loved for what you are not.” <br> ― André Gide, Autumn Leaves",
"“Whenever I feel the need to exercise, I lie down until it goes away.” <br> ― Paul Terry",
"“Reality continues to ruin my life.” <br> ― Bill Watterson"
];

function quotes(){
const ANSWER = document.getElementById('quotes');

let quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

ANSWER.innerHTML = quote;
}
