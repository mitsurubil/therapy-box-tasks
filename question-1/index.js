// Target cat-fact element
const factPlaceholder = document.getElementById("cat-fact");
const getFact = document.getElementById("get-fact");

// Append facts to cat-fact element
getFact.addEventListener('click', function () {
  const fetchPromise = fetch("https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random");
  fetchPromise.then(response => {
    return response.json();
  }).then(fact => {
    const facts = fact.text;
    // Loading Placeholder
    factPlaceholder.innerHTML = "Loading...";
    factPlaceholder.innerHTML = facts;
  }).catch(err => console.log('failed'));
});