// const element = document.getElementById("click-btn");
// element.addEventListener("click", function(){
//     console.log(Button clicked);
// });

// popups button

document.querySelector('.open-btn').onclick = () =>{
    document.querySelector('.cokkies-box ').classList.add('active');
}

document.querySelector('.close-btn').onclick = () =>{
    document.querySelector('.cokkies-box ').classList.remove('active');
}