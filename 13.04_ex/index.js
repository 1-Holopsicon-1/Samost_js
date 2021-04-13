info()
let pg = document.getElementById('page')
pg.addEventListener('click', function(e) {
    if (e.target.tagName !== 'BUTTON') 
    return 
    info(e.target.textContent)
})

function info(page = 2) {
    fetch(`https://reqres.in/api/users?page=${page}`)
        .then(jsn => jsn.json())
            .then(jsn => out(jsn['data']))
}

function create(data) {
    let { first_name, last_name, email, avatar } = data
    let elment = document.createElement('div')
    
    let avatar_ = document.createElement('img')
    avatar_.src = avatar
    elment.append(avatar_)

    let first_name_ = document.createElement('h3')
    first_name_.textContent = first_name
    elment.append(first_name_)

    let last_name_ = document.createElement('h3')
    last_name_.textContent = last_name
    elment.append(last_name_) 

    let email_ = document.createElement('div')
    email_.textContent = email
    elment.append(email_)

    

    return elment
}

let card = document.getElementById('content')
function out(data) {
    card.innerHTML = ''
    data.map(i => card.append(create(i)))
}