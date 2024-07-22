function showTime() {
    const name = prompt("Please enter your name:");
    document.getElementById("myName").innerText = name;
  
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const days = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];
      const day = days[now.getDay()];
  
      const timeString = `${hours}:${minutes}:${seconds} ${day}`;
      document.getElementById("myClock").innerText = timeString;
    }
  
    updateClock(); 
    setInterval(updateClock, 1000);
  }
  
  showTime();
  