function getJoke() {
	return new Promise(function(resolve, reject) {
		$.getJSON("https://icanhazdadjoke.com/", dadJoke => {
			if (dadJoke) resolve(dadJoke.joke)
			else reject("Error getting joke")
		})
	})
}

async function compileJokes(num) {
    let promises =[]
    for (let i =0; i< num; i++) {
        let result = getJoke()
        promises.push(result)
    }

    const jokes = await Promise.all(promises)
    return jokes
}

function addJokesToDom(jokes) {

    const jokesDiv = document.getElementById('jokes-div');
    jokesDiv.innerHTML= "";
    jokesDiv.classList.remove("spinner-border");
    jokes.forEach(joke => {
        jokesDiv.innerHTML += `<p> ${joke} </p>`
    })

}
document.getElementById("joke-button").addEventListener("click", () => {
    const jokesDiv = document.getElementById('jokes-div');
    jokesDiv.innerHTML= ""
    jokesDiv.classList.add("spinner-border")
    compileJokes(5)
    .then(addJokesToDom)
})