//Select Elements

let allSpans = document.querySelectorAll('.button span')
let results = document.querySelector('.results > span')
let theInput = document.getElementById('the-input')
// const InputValue = theInput.value

allSpans.forEach((span) => {
  span.addEventListener('click', (e) => {
    // contains => make shack on the class if found class to make afunction
    e.target.classList.contains('check-item') ? checkItem() : ''
    e.target.classList.contains('add-item') ? addItem() : ''
    e.target.classList.contains('delete-item') ? deleteItem() : ''
    e.target.classList.contains('show-item') ? showItem() : ''
  })
})
showMessge = () => {
  results.innerHTML = 'Input Can Be Empty'
}

checkItem = () => {
  if (theInput.value !== '') {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found Local Item Called <span>${theInput.value}</sapn>`
    } else {
      results.innerHTML = ` No Found Local Item Called <span>${theInput.value}</sapn>`
    }
  } else {
    showMessge()
  }
}

addItem = () => {
  if (theInput.value !== '') {
    localStorage.setItem(theInput.value, 'Test')

    results.innerHTML = `Local Storge Item <span>${theInput.value}</span> Added`

    theInput.value = ''
  } else {
    showMessge()
  }
}

deleteItem = () => {
  if (theInput.value !== '') {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value)

      results.innerHTML = `Local Storge  Item <span>${theInput.value}</span> Deleted`

      theInput.value = ''
    } else {
      results.innerHTML = `No Local Storge  Item With The Name  <span>${theInput.value}</span>`
    }
  } else {
    showMessge()
  }
}

showItem = () => {
  if (localStorage.length) {
    results.innerHTML = ''
    console.log(localStorage.length)

    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}</span>`
    }
  } else {
    results.innerHTML = `Local Stroge IS Empty`
  }
}
