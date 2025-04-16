import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const makePromise = (state, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
};

const sucsessMessage = message => {
  iziToast.success({
    title: 'Success',
    message: message,
    position: 'topRight',
  });
};

const errorMessage = message => {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();

  let formData = new FormData(form);
  const state = formData.get('state');
  const delay = formData.get('delay');

  makePromise(state, delay)
    .then(value => sucsessMessage(`✅ Fulfilled promise in ${delay}ms`))
    .catch(error => errorMessage(`❌ Rejected promise in ${delay}ms`));
});
