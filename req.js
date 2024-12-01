(function() {
  const blackPromise = fetch(
    "https://fujifilmxindia.com/wp-json/wc/store/products/34439"
  );
  const silverPromise = fetch(
    "https://fujifilmxindia.com/wp-json/wc/store/products/34439"
  );

  blackPromise.then(async function(response) {
    let $prod = document.getElementById('prod');
    let json = await response.json();
    $prod.innerText += `\n\nBlack: ${json.is_in_stock}\n\n`;
  });
  silverPromise.then(async function(response) {
    let $prod = document.getElementById('prod');
    let json = await response.json();
    $prod.innerText += `\n\nSilver: ${json.is_in_stock}\n\n`;
  });


})();
