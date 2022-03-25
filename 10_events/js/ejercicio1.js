const story = document.getElementById('story')
const actionButton = document.getElementById('lib-button')

function hacerFrase() {
    const complement = document.getElementById('complement')
    const verb = document.getElementById('verb')
    const name = document.getElementById('person')

    const phrase = `${name.value} ${verb.value} ${complement.value}`
    // story.textContent = phrase
    story.innerHTML = `<strong>La frase es:</strong> ${phrase}`
}

actionButton.addEventListener('dblclick', hacerFrase);