document.querySelector('#fromAtoZ').addEventListener('click', () => fromAtoZ())
document.querySelector('#fromZtoA').addEventListener('click', () => fromZtoA())
document.querySelector('#search').addEventListener('input', (event) => srch(event))

fetch('https://reqres.in/api/users?page=1').then(res => res.json()).then(body=> photos(body.data))

let base = []
let cards = []

function render(data) {
    let main = document.querySelector('.cards')
    let { email, avatar, first_name, last_name } = data

    let wrp = document.createElement('div')
    wrp.classList.add('card')

    let avatar_ = document.createElement('img')
    avatar_.src = avatar
    wrp.append(avatar_)

    let email_ = document.createElement('p')
    email_.textContent = email
    wrp.append(email_)

    let firstName = document.createElement('p')
    firstName.textContent = first_name
    wrp.append(firstName)

    let lastName = document.createElement('p')
    lastName.textContent = last_name
    wrp.append(lastName)

    main.append(wrp)
    cards.push(data)
}

function fromAtoZ() {
    cards.sort((a, b) => a.first_name > b.first_name ? 1 : -1)
    render_no_async(cards)
}

function fromZtoA() {
    cards.sort((a, b) => a.first_name < b.first_name ? 1 : -1)
    render_no_async(cards)
}

function render_no_async(body) {
    let main = document.querySelector('.cards')
    let newCards = body.slice()
    cards = []
    main.innerText = ''

    for (i in newCards) {
        render(body[i])
    }
}

function srch(event) {
    let patient = base.slice()
    let re = new RegExp(event.target.value + '.+$', 'i')
    if (event.target.value !== '') {patient = cards.filter((event, i, a) =>  event.first_name.search(re) != -1 )}
    if (patient.length === 0) {patient.push({email: '', avatar: 'https://avatars.mds.yandex.net/get-znatoki/1368855/2a0000016cc1fb6175fa439bc6ab108427ae/w480', first_name: '', last_name:''})}
    render_no_async(patient)
}

async function photos(body) {
	//console.log('photos', body)
	const newCards = cards.slice()
	cards = []
	const mainTag = document.querySelector('.cards')
	mainTag.innerText = ''
	data = await body
	base = data.slice()
	for (i in data) {render(data[i])}
}