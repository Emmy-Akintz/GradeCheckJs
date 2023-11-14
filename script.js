alert("This is to use your score to determine your grade.")
let score = prompt("Enter your score:")

if (score >= 70 && score <= 100) {
    document.write(`Your score is ${score} and your grade is A!`)
} else if (score >= 50 && score <= 69) {
    document.write(`Your score is ${score} and your grade is B!`)
} else if (score >= 45 && score <= 49) {
    document.write(`Your score is ${score} and your grade is C!`)
} else if (score >= 40 && score <= 44) {
    document.write(`Your score is ${score} and your grade is D!`)
} else if (score >= 0 && score <= 39) {
    document.write(`Your score is ${score} and your grade is E.<br>You failed!<br>Better luck next time`)
} else {
    document.write(`${score} is not a valid score. Please enter a score between 0 and 100.`)
}