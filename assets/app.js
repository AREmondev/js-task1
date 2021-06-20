const addBtn = document.getElementById('submit-btn')
const addForm = document.getElementById('add-form')
let tBody = document.querySelector('tbody')
let table = document.getElementById('table')
let userEmail = []

// Make user
const userMaker = (name, email) => {
  userEmail.push(email)
  let newUser = `
              <tr>
                <td>${userEmail.length}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td class="dlt-btn">delete</td>
              </tr>
              `

  tBody.insertAdjacentHTML('beforeend', newUser)
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
}
// Add User
const addUser = (name, email) => {
  if (name === '') {
    alert('Please enter name')
  } else if (email === '') {
    alert('Please enter Email')
  } else {
    console.log(userEmail)
    const oldUser = userEmail.includes(email)
    if (oldUser) {
      alert('User Already Exist')
    } else {
      userMaker(name, email)
    }
  }
}

// Form Submit Event
addForm.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value

  e.preventDefault()
  addUser(name, email)
})
// Dlt User
table.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.className == 'dlt-btn') {
    tBody.removeChild(e.target.parentElement)
    const dltMail = e.target.previousSibling.previousSibling.textContent
    console.log('dlt', dltMail)
    userEmail.map((mail) => {
      console.log('user', mail)
    })
    let filtered = userEmail.filter((userMail) => userMail != dltMail)
    userEmail = filtered
    console.log(userEmail)
  }
})
