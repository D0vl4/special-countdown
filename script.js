function updateCountdown() {
  const targetDate = new Date('June 2, 2023 00:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('hour-box').textContent = hours
      .toString()
      .padStart(2, '0');
    document.getElementById('minute-box').textContent = minutes
      .toString()
      .padStart(2, '0');
    document.getElementById('second-box').textContent = seconds
      .toString()
      .padStart(2, '0');
  } else {
    // Countdown has reached its end
    document.getElementById('hour-box').textContent = '--';
    document.getElementById('minute-box').textContent = '--';
    document.getElementById('second-box').textContent = '--';
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
