player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
question_turn="player1";
answer_turn="player2";
player1_score=0;
player2_score=0;

document.getElementById("player1").innerHTML=player1_name + ":";
document.getElementById("player2").innerHTML=player2_name + ":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function sent(){

    number1 = document.getElementById("number1").value;

    number2 = document.getElementById("number2").value;


    

    var question_number = '<h4 id="display_number">' + number1 + "X" + number2 + '</h4>';

    var input_box = '<br> Answer : <input type="text" id="input_box" placeholder="Enter Your Answer" style="width:40%;">';

    var check_button = '<br><br> <button type="button" id="check_button" onclick="check();" class="btn btn-info">Check</button>';

    var row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";

    document.getElementById("number2").value = "";

}
function check(){
   
    answer=get_answer.toLowerCase();
    console.log("answer in lower case "+answer);
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
            
        }
    
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn-"+player2_name;

    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn-"+player1_name;
        
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn-"+player2_name;

    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML=" answer turn-"+player1_name;
        
    }
}

document.getElementById("output").innerHTML="";
}

