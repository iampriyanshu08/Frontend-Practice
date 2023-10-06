const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const clockTimer = () => {
  setInterval(() => {
    const time = new Date();
    hour.innerHTML =
      time.getHours < 10 ? "0" + time.getHours() : time.getHours() % 12;
    minute.innerHTML =
      time.getMinutes < 10 ? "0" + time.getMinutes() : time.getMinutes();
    second.innerHTML =
      time.getSeconds < 10 ? "0" + time.getSeconds() : time.getSeconds();
  });
};

clockTimer();
