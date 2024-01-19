
$(".openNav").click(function () {
    $("#navMenu").animate({ width: "200px" }, 50)
    $("#home-content").animate({ marginLeft: "200px" }, 50)
})

$(".closebtn").click(function () {
    $("#navMenu").animate({ width: "0px" }, 50)
    $("#home-content").animate({ marginLeft: "0px" }, 50)
})


$("#sliderDown .toggle").click(function () {
    $(this).next().slideToggle(500);
    $('.inner').not($(this).next()).slideUp(500);
})



window.onload = function () {
    countTo("21 may 2024 12:00:00");
}
function countTo(count) {
    let endPoint = new Date(count);
    endPoint = (endPoint.getTime() / 1000);
    let now = new Date();
    now = (now.getTime() / 1000)
    timeDifference = (endPoint - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);   
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

    setInterval(function () { countTo(count); }, 1000);
}


let maxLength = 100;
$('textarea').keyup(function(){
    let length= $(this).val().length;
    let result = maxLength-length
    // console.log(this);
    
    if(result<=0){
        $('#chars').text('your available character finished');
    }else{
     $('#chars').text(result)   
    }
})