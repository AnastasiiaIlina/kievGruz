var form = document.querySelector('.form');

document.querySelector('.orangeBtn').onclick = () => {
    if (form.classList.contains('displayNone')) {
		form.classList.remove("displayNone");
    }

    else {
        form.classList.add("displayNone");
    }
}