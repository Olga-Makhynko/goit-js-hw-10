import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startButton = document.querySelector('.button');
const dateTimePicker = document.getElementById('datetime-picker');
const timerFields = {
  days: document.querySelector('.data-days'),
  hours: document.querySelector('.data-hours'),
  minutes: document.querySelector('.data-minutes'),
  seconds: document.querySelector('.data-seconds'),
};

let userSelectedDate = null;
let timerId = null;
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const picked = selectedDates[0];
    if (picked <= new Date()) {
      startButton.disabled = true;
      iziToast.warning({
        title: 'Warning',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    } else {
      userSelectedDate = picked;
      startButton.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

startButton.addEventListener('click', () => {
  if (!userSelectedDate) return;

  startButton.disabled = true;
  dateTimePicker.disabled = true;
  timerId = setInterval(() => {
    const now = new Date();
    const timerLast = userSelectedDate - now;

    if (timerLast <= 0) {
      clearInterval(timerId);
      updateTimer(0);
      dateTimePicker.disabled = false;
      return;
    }

    updateTimer(timerLast);
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  timerFields.days.textContent = addLeadingZero(days);
  timerFields.hours.textContent = addLeadingZero(hours);
  timerFields.minutes.textContent = addLeadingZero(minutes);
  timerFields.seconds.textContent = addLeadingZero(seconds);
}
console.log(convertMs(2000));
console.log(convertMs(140000));
console.log(convertMs(24140000));
