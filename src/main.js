import { json } from 'express';
import './style.css';

const form = document.querySelector('form')
form.addEventListener('submit',async (e) => {
  e.preventDefault();
  showSpinner();
  // to pass
  const data = new FormData(form);
  const response = await fetch('http://localhost:8080/jsProject1', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:json.stringify({
      prompt: data.get('prompt'),
    }),
  });

  const {image} = await response.json();
  const result = document.querySelector('#result'); //select html with id = result
  result.innerHTML = `<img src="${image}" width="512"/>`;

  hideSpinner();
});

function showSpinner() {
  // select enable writing
  const button = document.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'Creating...<span class="spinner">🤔</span>';
}
function hideSpinner() {
  const button = document.querySelector('button');
  button.disabled = false;

}