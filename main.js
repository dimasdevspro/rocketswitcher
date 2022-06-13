function switcher(){
    const button = document.querySelector('.circle')
    button.classList.toggle('slide');
    const bgColor = document.querySelector('body')
    bgColor.classList.toggle('changeColor')
}