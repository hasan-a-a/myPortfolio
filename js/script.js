const darkModeToggle = document.getElementById("darModeToggle")
const body = document.body
const isDarkMode = localStorage.getElementById("darkMode")=== "enabled"
if (isDarkMode) {
    body.classList.add("dark-mode")
    darkModeToggle.checked = true
}
darkModeToggle.addEventListener("change" , () => {
    if(darkModeToggle.checked){
        body.classList.add("dark-mode")
        localStorage.setItem("darkMode", "enabled");
    }else{
        body.classList.remove("dark-mode")  
        localStorage.setItem("darkMode","disabled")  
    }

})