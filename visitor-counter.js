function VisitorCounter(){
  fetch("https://fmhuub0nl2.execute-api.us-east-1.amazonaws.com/VisitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}