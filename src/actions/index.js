export const FETCH_QUOTES = "FETCH_QUOTES";
export const NEW_QUOTE = "NEW_QUOTE";

export const fetchQuotes = () => dispatch => {
  fetch(
    "https://raw.githubusercontent.com/sourabbanka22/random_quote_machine/master/quotes.json"
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: FETCH_QUOTES, quotes: data.quotes });
    })
    .catch(error => {
      console.log(error);
    });
};

export const newQuote = randomNo => {
  return {
    type: NEW_QUOTE,
    quotes: randomNo
  };
};