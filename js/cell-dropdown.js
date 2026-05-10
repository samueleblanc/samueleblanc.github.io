const btn = document.getElementById("dropbtn");
const drop = document.getElementById("dropdown");

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    drop.classList.toggle("open");
});
document.addEventListener("click", (e) => {
    if (!drop.contains(e.target) && !btn.contains(e.target)) {
        drop.classList.remove("open");
    }
});