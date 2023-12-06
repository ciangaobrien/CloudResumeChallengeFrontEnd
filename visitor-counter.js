function visitorCounter(){
  fetch("https://2yq7bxh9v7.execute-api.us-east-1.amazonaws.com/visitor_counter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}