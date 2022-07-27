fetch('https://dad-jokes.p.rapidapi.com/random/joke')
	.then(data => data.json())
	.then(jokeData => {
		const jokeText = jokeData.attachments[0].text;
		const jokeElement = document.getElementById('jokeElement');
		jokeElement.innerHTML = jokeText;
	 })		