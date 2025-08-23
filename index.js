function showAnswer(response) {
  alert(response.data.answer);
}
let apiKey = "cf91d38a44tc474fa778f9df1bo2b7a0";
let context = "be polite and provide a very short answer";
let prompt = "who is the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
console.log("processing");
axios.get(apiUrl).then(showAnswer);
