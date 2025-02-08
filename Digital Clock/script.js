function updateTime(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('min').textContent = String(minutes).padStart(2, '0');
    document.getElementById('sec').textContent = String(seconds).padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;

    const days = ['sum', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const todayIndex = now.getDay();

    document.querySelectorAll('.days-of-week span').forEach((span, index) => {
        span.classList.toggle('active', index === todayIndex);
    });

    document.getElementById('year').textContent = now.getFullYear();
    document.getElementById('month').textContent = now.toLocaleString('default', { month:'short'});
    document.getElementById('day').textContent = String(now.getDate()).padStart(2, '0');
}

setInterval(updateTime, 1000);
updateTime();