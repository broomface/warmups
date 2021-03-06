//var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

// FortuneTeller has an "ask" method that returns a promise. If you wanted to write a function that used the FortuneTeller.ask method to ask to questions (waiting for the first one to finish before asking the second) with promises, you would need to use .then like this:

/*
const askQuestionPromise = (question) => {
  FortuneTeller.ask(question).then(result => {
    console.log('Promise 1:', result.response)
    FortuneTeller.ask(question).then(result => {
      console.log('Promise 2:', result.response)
    })
  })
}

askQuestionPromise("Why is the sky blue?")
*/

// How could you rewrite the askQuestion function using async/await?

var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

const askQuestionPromise = async (question) => {    // so your async goes at the top of the
    const promise1 = await (FortuneTeller.ask(question))
      console.log('Promise 1:', promise1.response)
    const promise2 = await (FortuneTeller.ask(question))
      console.log('Promise 2:', promise2.response)
}

askQuestionPromise("Why is the sky blue?")
