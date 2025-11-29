fetch('sample_log.csv')
  .then(res => res.text())
  .then(text => {
    document.getElementById("output").innerText = text;
  });
