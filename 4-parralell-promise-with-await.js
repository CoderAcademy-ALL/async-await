function rememberName(input) { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input)
        },1000)
    })
}

async function greetSomePeople(...names){
    const firstName = await rememberName(names[0]);
    const secondName = await rememberName(names[1]);
    const thirdName = await rememberName(names[2]);
    return `Hi ${firstName}, ${secondName}, ${thirdName}, and friends`
}

async function greetPeopleFaster(...names) { 
  const [firstName, secondName, thirdName] = await Promise.all([
            rememberName(names[0]), 
            rememberName(names[1]),
            rememberName(names[2])]);
  
        return `Hi ${firstName}, ${secondName}, ${thirdName}, and friends`
    }

greetPeopleFaster("Slawomir", "Rory", "Rodney", "Nicole")
    .then(greeting => console.log(greeting))