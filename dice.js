function roll(){
    const min = 1;
    const max = 6;

    const randomnumber = Math.round(Math.random() * (max - min) + min);
   
    const imgElement = document.getElementById('dice-img');
    const resultElement = document.getElementById('result');
    let resultText;

    switch (randomnumber) {
        case 1:
            imgElement.src = 'dice-one.png';
            resultText = "You rolled a 1!";
            break;
        case 2:
            imgElement.src = 'dice-two.png';
            resultText = "You rolled a 2!";
            break;
        case 3:
            imgElement.src = 'dice-three.png';
            resultText = "You rolled a 3!";
            break;
        case 4:
            imgElement.src = 'dice-four.png';
            resultText = "You rolled a 4!";
            break;
        case 5:
            imgElement.src = 'dice-five.png';
            resultText = "You rolled a 5!";
            break;
        case 6:
            imgElement.src = 'dice-six.png';
            resultText = "You rolled a 6!";
            break;
        default:
            imgElement.src = 'dice-default.png';
            resultText = "Oops! Something went wrong.";
    }

    resultElement.textContent = resultText;
    imgElement.classList.add("animation");

    setTimeout(() =>{
        imgElement.classList.remove("animation")}, 1000);
    
}