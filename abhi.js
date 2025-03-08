const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

document.getElementById("logoutBtn").addEventListener("click", function () {
  window.location.href = "C:/sale/login.html";
});

