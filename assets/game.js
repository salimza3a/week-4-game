$(document).ready( function() {
    let getRandomNumber;

    function randomNum () {
        getRandomNumber = Math.floor(Math.random() * 120)
        $("#green-number").html(getRandomNumber)
    }
    randomNum()
    

  
    let counter = 0;
    let wins = 0;
    let losses = 0;

    $("#wins").html(wins)
    $("#losses").html(losses)
    $("#score").html(counter)

    $(".crystal-image").on("click", function () {
        let crystalValue = $(this).attr("data-value")

      
        counter += +crystalValue

        console.log(counter)

        $("#score").html(counter)

        if( counter === getRandomNumber) {
            $("#text").html("You won!!")
            wins += 1;
            $("#wins").html(wins)
            counter = 0;
            $("#score").html(counter)
            randomNum()

        } else if(counter > getRandomNumber) {
            $("#text").html("You lost!!")
            losses += 1;
            $("#losses").html(losses)
            counter = 0;
            $("#score").html(counter)
            randomNum()
        }
    })
})