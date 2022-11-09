import { nanoid } from 'nanoid'
import './style.css'
import copy from 'clipboard-copy'

const passwordBtnElement = document.querySelector('button')
const displayPasswordElement = document.querySelector('h2')

passwordBtnElement.addEventListener('click', () => {
  const randomPassword = nanoid()
  displayPasswordElement.innerHTML = randomPassword
})
displayPasswordElement.addEventListener('click', async (event) => {
  await copy(event.target.innerHTML)
  alert('Senha copiada!')
})
