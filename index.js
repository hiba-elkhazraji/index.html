function showAnswer(response) {}
let apiKey = "cf91d38a44tc474fa778f9df1bo2b7a0";
let context = "be polite";
let prompt = "when was the first AI created";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(showAnswer);
