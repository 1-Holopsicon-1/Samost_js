document.querySelector('#fromAtoZ').addEventListener('click', () => fromAtoZ())
document.querySelector('#fromZtoA').addEventListener('click', () => fromZtoA())
document.querySelector('#search').addEventListener('input', (event) => srch(event))

fetch('https://reqres.in/api/users?page=1').then(res => res.json()).then(body=> photos(body.data))

let bs = []
let crd = []

function render(data) {
    let main = document.querySelector('.cards')
    let { email, avatar, first_name, last_name } = data

    let wrp = document.createElement('div')
    wrp.classList.add('card')

    let avatar_ = document.createElement('img')
    avatar_.src = avatar
    wrp.append(avatar_)

    let email_ = document.createElement('h3')
    email_.textContent = email
    wrp.append(email_)

    let firstName = document.createElement('h3')
    firstName.textContent = first_name
    wrp.append(firstName)

    let lastName = document.createElement('h3')
    lastName.textContent = last_name
    wrp.append(lastName)

    main.append(wrp)
    crd.push(data)
}

function fromAtoZ() {
    crd.sort((a, b) => a.first_name > b.first_name ? 1 : -1)
    render_no_async(crd)
}

function fromZtoA() {
    crd.sort((a, b) => a.first_name < b.first_name ? 1 : -1)
    render_no_async(crd)
}

function render_no_async(body) {
    let main = document.querySelector('.cards')
    let newcrd = body.slice()
    crd = []
    main.innerText = ''

    for (i in newcrd) {
        render(body[i])
    }
}

function srch(event) {
    let patient = bs.slice()
    let re = new RegExp(event.target.value + '.+$', 'i')
    if (event.target.value !== '') {patient = crd.filter((event, i, a) =>  event.first_name.search(re) != -1 )}
    if (patient.length === 0) {patient.push({email: '', avatar: 'https://avatars.mds.yandex.net/get-znatoki/1368855/2a0000016cc1fb6175fa439bc6ab108427ae/w480', first_name: '', last_name:''})}
    render_no_async(patient)
}

async function photos(body) {
	//console.log('photos', body)
	const newcrd = crd.slice()
	crd = []
	const mainTag = document.querySelector('.cards')
	mainTag.innerText = ''
	data = await body
	bs = data.slice()
	for (i in data) {render(data[i])}
}