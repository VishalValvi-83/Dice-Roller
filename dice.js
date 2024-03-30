function roll(){
    const min = 1;
    const max = 6;

    const randomnumber = Math.round(Math.random() * (max - min) + min);
   
    const imgElement = document.getElementById('dice-img');
        switch(randomnumber){
            case 1:
                imgElement.scr = 'dice-one.png';
                break;
            case 2:
                imgElement.src='dice-two.png';
                break;
            case 3:
                imgElement.src='dice-three.png';
                break;
            case 4:
                imgElement.src='dice-four.png';
                break;
            case 5:
                imgElement.src="dice-five.png";
                break;
            case 5:
                imgElement.src='dice-six.png';
                break;
            default:
                imgElement.src='dice-default.png';
        }
    imgElement.classList.add("animation");

    setTimeout(() =>{
        imgElement.classList.remove("animation")}, 1000);
    
}