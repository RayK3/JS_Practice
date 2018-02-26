var sentimentConversion = function(sentiment) {
  sentiment += 2;
  sentiment *= 2.5;
  sentiment = Math.round(sentiment);
  return sentiment;
}

var sentimentGenerator = function() {
  var sentiment = (Math.random() * 4 - 2);
  console.log('The random sentiment was: ' + sentiment);

  var convertedSentiment = sentimentConversion(sentiment);
  console.log('The new sentiment is: ' + convertedSentiment);
}
