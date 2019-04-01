var quotes = [
  `“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”
― Albert Einstein`,
 `“I want to be like water. I want to slip through fingers, but hold up a ship.”
― Michelle Williams`,
`“You are only as free as you think you are and freedom will always be as real as you believe it to be.”― Robert M. Drake`,
`“Life is not a problem to be solved, but a reality to be experienced.” – Soren Kierkegaard`,
`“Be happy for this moment. This moment is your life.” – Omar Khayyam`,
`“What matters in life is what you care about and what you will continue to make effort toward caring about it.” -Nokwethemba Nkosi`,
`“Dead people receive more flowers than the living ones because regret is stronger than gratitude.” – Anne Frank`,
`“You will not be punished for your anger, you will be punished by your anger.” – Buddha`,
`“Happiness is within. It has nothing to do with how much applause you get or how many people praise you. Happiness comes when you believe that you have done something truly meaningful.” – Martin Yan`
];

function newQuote() {
  let randomN = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoteDisplay").innerHTML = quotes[randomN];
}
