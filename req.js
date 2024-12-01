(function() {
  const blackPromise = fetch(
    "https://fujifilmxindia.com/wp-json/wc/store/products/34439"
  );
  const silverPromise = fetch(
    "https://fujifilmxindia.com/wp-json/wc/store/products/34439"
  );

  blackPromise.then((response) => {
    let $prod = document.getElementById('prod');
    $prod.innerText += `\n\nBlack: ${response.data.is_in_stock}\n\n`;
  });
  silverPromise.then((response) => {
    let $prod = document.getElementById('prod');
    $prod.innerText += `\n\nSilver: ${response.data.is_in_stock}\n\n`;
  });


})();
