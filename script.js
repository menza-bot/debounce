console.log("hello this lession about debounce")

const onChange = (e) => {
    console.log(e.target.value)
}

document.getElementById('searchbar').addEventListener('keyup', onChange)