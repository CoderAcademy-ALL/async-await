function rememberName(input) {
    return new Promise((resolve, reject) => {
        if (typeof input !== "string") {
            reject(new Error("That's not a name, Elon!"))
        }
        setTimeout(() => {
            resolve(input);
        },
        2000)
    })
}

async function rememberThenGreet(input) {
    const name = await rememberName(input)
    return `Hi ${name}`
}

async function greetPeopleFaster(...names) { 
    const [firstName, secondName, thirdName] = await Promise.all([
              rememberName(names[0]).catch(error => "sorry, what was your name agian? "), 
              rememberName(names[1]).catch(error => "sorry, what was your name agian? "),
              rememberName(names[2]).catch(error => "sorry, what was your name agian? ")]);
    
          return `Hi ${firstName}, ${secondName}, ${thirdName}, and friends`
      }
  

greetPeopleFaster("Alice", "Bob", 42)
    .then(greeting => console.log(greeting))
    .catch(error => console.log(error.message))
