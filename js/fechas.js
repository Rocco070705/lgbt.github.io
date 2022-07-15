const countDate = new Date("May 17 2023 08:25:40").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDate - now;
    var d= Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var min = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));  
    
    document.getElementById('timer').innerHTML = d + "dias " + hrs + "hrs " + min + "mins ";

    if(distance <0){
    clearInterval(x);
    document.getElementById('timer').innerHTML = "Llego el dia papus";
    }
})
