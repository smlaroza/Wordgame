$(document).ready(function() {

    var result = commonWords.filter(word => word.length > 2);
    var word = result[Math.floor(Math.random() * result.length )]
    console.log(word)
    var split = word.split("")
    var under = split.map(l => "_")
    
    var lives = 5 
    $("#lives").html("You have " + lives + " lives left.")
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let buttons = ''
    alphabet.split('').forEach(letter => {
        buttons += `<button>${letter.toUpperCase()}</button>`
    })

    $("#buttons").html(buttons)

    $("#underscores").html(under.join(""))

    $("#buttons").on("click", "button", function(e) {
        e.preventDefault()
    

            var guess = $(this).html().toLowerCase()

    $(this).attr("disabled", true)
    console.log(guess)
    console.log(word)
        if(word.includes(guess)){
            for(let i = 0; i < under.length; i++){
                if(word[i]===guess.toLowerCase()){
                    under[i] = guess;
                    $("#underscores").html(under.join(" "));

                    if(under.join("")===word){
                        $("#lose").html("You win a cookie! :D")
                        $("#buttons").hide()
                        $("#lives").hide()
                    }
                }
            
            }
        } else if(word.includes(guess)===false){
                lives -- 
                $("#lives").html("You have " + lives + " lives left.")
                if(lives===0) {
                    $("#lose").html("You lose. No cookie for you :(")
                    $("#buttons").hide()
                    $("#lives").hide()
                }
                }

    
    })})