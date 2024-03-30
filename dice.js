function roll(){
    const min = 1;
    const max = 6;

    const randomnumber = Math.round(Math.random() * (max - min) + min);
    console.log(randomnumber);
   
}