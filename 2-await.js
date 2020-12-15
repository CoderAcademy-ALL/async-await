function rememberName(input) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(input)
        }, 2000)
    })
}



// function rememberThenGreet(input) {
//     console.log("oh hey...")
//      return rememberName(input)
//         .then(name => {
//             return `... ${name}! How are you?`
//         })
// }

async function asyncRememberThenGreet(input) {
    console.log("oh hey..."); 
    const name = await rememberName(input)
    return `... ${name}! How are you?`
}

// rememberThenGreet("Stone cold steve austin")
//     .then(greeting => console.log(greeting))


asyncRememberThenGreet("Triple H")
    .then(greeting => console.log(greeting))