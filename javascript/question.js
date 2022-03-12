
let app = document.querySelector('#root')

let logo = document.createElement('img')
logo.src = 'qq.jpg'
app.appendChild(logo)

let container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)



fetch('https://opentdb.com/api.php?amount=20&category=23&difficulty=hard&type=multiple')
    .then((res) => {
        return res.json()
    }).then((results) => {
        console.log(results.results);
        results.results.forEach(question => {
            console.log(question);
            let card = document.createElement('div')
            card.setAttribute('class', 'card')
            container.appendChild(card)

            let title = document.createElement('h1')
            title.textContent = question.question
            card.appendChild(title)

            let multipleChoice = document.createElement('p')
            // multipleChoice.textContent = question.incorrect_answers + ","+ question.correct_answer
            card.appendChild(multipleChoice)
            let allAnswer = question.incorrect_answers + ","+ question.correct_answer
            let dataArray = allAnswer.split(',')
            console.log(dataArray);

            let containerChoice1 = document.createElement('div')
            containerChoice1.setAttribute('class','choice-container')
            multipleChoice.appendChild(containerChoice1)

            let containerChoice2 = document.createElement('div')
            containerChoice2.setAttribute('class','choice-container')
            multipleChoice.appendChild(containerChoice2)

            let containerChoice3 = document.createElement('div')
            containerChoice3.setAttribute('class','choice-container')
            multipleChoice.appendChild(containerChoice3)

            let containerChoice4 = document.createElement('div')
            containerChoice4.setAttribute('class','choice-container')
            multipleChoice.appendChild(containerChoice4)

            let choice1 = document.createElement('p')
            choice1.setAttribute('class','choice-prefix')
            choice1.textContent = "A"
            containerChoice1.appendChild(choice1)
            let q1 = document.createElement('p')
            q1.setAttribute('class','choice-text')
            q1.textContent = dataArray[0]
            containerChoice1.appendChild(q1)

            let choice2 = document.createElement('p')
            choice2.setAttribute('class','choice-prefix')
            choice2.textContent = "B"
            containerChoice2.appendChild(choice2)
            let q2 = document.createElement('p')
            q2.setAttribute('class','choice-text')
            q2.textContent = dataArray[1]
            containerChoice2.appendChild(q2)

            let choice3 = document.createElement('p')
            choice3.setAttribute('class','choice-prefix')
            choice3.textContent = "C"
            containerChoice3.appendChild(choice3)
            let q3 = document.createElement('p')
            q3.setAttribute('class','choice-text')
            q3.textContent = dataArray[2]
            containerChoice3.appendChild(q3)

            let choice4 = document.createElement('p')
            choice4.setAttribute('class','choice-prefix')
            choice4.textContent = "D"
            containerChoice4.appendChild(choice4)
            let q4 = document.createElement('p')
            q4.setAttribute('class','choice-text')
            q4.textContent = dataArray[3]
            containerChoice4.appendChild(q4)


        });
    }).catch(error => console.log(error))