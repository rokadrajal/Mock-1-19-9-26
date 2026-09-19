let num = Math.floor(Math.random()*100)+1;
document.querySelector('.check').onclick = function(){

    let value = Number(prompt("Enter random number : "));
    document.querySelector('.rendom p').innerHTML = value;

    let count = 0;
    let data = count+1;

    if(num > value){
        document.querySelector('.p1').innerHTML = "⬇️ Too Low!";
    }
    else if(num < value){
        document.querySelector('.p1').innerHTML = "⬆️ Too High!";
    }
    else{
        document.querySelector('.p1').innerHTML = "🎉 Correct Number!";
        document.querySelector('.right-number').innerHTML = num;
    }

    
    document.querySelector('.p2 span').innerHTML = data;
    document.querySelector('.p3 span').innerHTML = data;

}



