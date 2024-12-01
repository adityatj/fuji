(function() {
  let $prod = document.getElementById('prod');
  const blackPromise = fetch(
    "https://fujifilmxindia.com/wp-json/wc/store/products/34439", { mode: "no-cors" }
  );
  const silverPromise = fetch(
    "https://fujifilmxindia.com/wp-json/wc/store/products/34439", { mode: "no-cors" }
  );

  blackPromise.then((response) => {
    $prod.innerText += `\n\nBlack: ${response.data.is_in_stock}\n\n`;
  });
  silverPromise.then((response) => {
    $prod.innerText += `\n\nSilver: ${response.data.is_in_stock}\n\n`;
  });


})();
