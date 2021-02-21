const  example = (e) => {
    e.preventDefault();
    const fromInput = document.getElementById("example").value;
    document.getElementById("text").textContent = fromInput
}

document.getElementById("action").addEventListener("click", example);
