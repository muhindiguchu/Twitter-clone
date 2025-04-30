document.getElementById("postItem").onclick = function() {
    let tweet = document.getElementById("caption").value; 
  let sendtweet = firebase.firestore().collection("tweets").doc();
  sendtweet.set({
     tweet: tweet,
     
  }).then(() => {
    alert("Tweet Sent Successfully"); 
  })
 }