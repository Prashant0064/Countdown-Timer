window.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const form = document.getElementById('countdownForm');
    const inputDays = document.getElementById('daysInput');
    const inputHours = document.getElementById('hoursInput');
    const inputMinutes = document.getElementById('minutesInput');
    const inputSeconds = document.getElementById('secondsInput');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const days = parseInt(inputDays.value) || 0;
      const hours = parseInt(inputHours.value) || 0;
      const minutes = parseInt(inputMinutes.value) || 0;
      const seconds = parseInt(inputSeconds.value) || 0;
  
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + days);
      targetDate.setHours(targetDate.getHours() + hours);
      targetDate.setMinutes(targetDate.getMinutes() + minutes);
      targetDate.setSeconds(targetDate.getSeconds() + seconds);
  
      startCountdown(targetDate);
    });
  
    function startCountdown(targetDate) {
      function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;
  
        if (timeDifference <= 0) {
          countdownElement.textContent = 'Countdown Complete!';
          return;
        }
  
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
        setTimeout(updateCountdown, 1000); // Update every second
      }
  
      updateCountdown();
    }
  });
  