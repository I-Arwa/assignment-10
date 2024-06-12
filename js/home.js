
var logoutBtn = document.getElementById("logoutBtn");
let title = document.querySelector('.title');
let turn = 'x';
let squaresArray = [];
const squares = document.querySelectorAll('.square');
const playButton = document.getElementById('playButton');
let gameStarted = false;

function end( num1 , num2 , num3 ){

    title.innerHTML = `${squaresArray[num1]} winner`.toLocaleUpperCase();
    document.getElementById('item'+num1).style.cssText = `background-color: rgba(155, 112, 254, 0.693);
           color: rgb(57, 26, 128);`;
    document.getElementById('item'+num2).style.cssText = `background-color: rgba(155, 112, 254, 0.693);
    color: rgb(57, 26, 128);`;;
    document.getElementById('item'+num3).style.cssText = `background-color: rgba(155, 112, 254, 0.693);
    color: rgb(57, 26, 128);`;;


    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000)

}

function winner(){
   for( let i = 1; i<10 ; i++){
    squaresArray[i]= document.getElementById('item'+i).innerHTML;
   }

   if( squaresArray[1] == squaresArray[2] && squaresArray[2] ==squaresArray[3] && squaresArray[1]!=''){

    end(1, 2, 3);

   }

   else if( squaresArray[4] == squaresArray[5] && squaresArray[5] ==squaresArray[6] && squaresArray[5]!=''){
    end( 4, 5 , 6 );
   }

   else if( squaresArray[7] == squaresArray[8] && squaresArray[8] ==squaresArray[9] && squaresArray[8]!=''){
    end(7, 8 ,9 );
   }


   else if( squaresArray[1] == squaresArray[4] && squaresArray[4] ==squaresArray[7] && squaresArray[1]!=''){
    end( 1 , 4 , 7);
   }

   else if( squaresArray[2] == squaresArray[5] && squaresArray[5] ==squaresArray[8] && squaresArray[5]!=''){
    end( 2 , 5 , 8 );
   }

   else if( squaresArray[3] == squaresArray[6] && squaresArray[6] ==squaresArray[9] && squaresArray[9]!=''){
    end( 3 , 6 , 9);
   }


   else if( squaresArray[1] == squaresArray[5] && squaresArray[5] ==squaresArray[9] && squaresArray[9]!=''){
    end( 1 , 5 , 9 );
   }

   else if( squaresArray[3] == squaresArray[5] && squaresArray[5] ==squaresArray[7] && squaresArray[7]!=''){
    end( 3 , 5 , 7 );
   }
}




playButton.addEventListener('click', function () {
    gameStarted = true;
    playButton.style.display = 'none';
    title.innerHTML = 'X';
});



for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
       
       
      if(gameStarted && squares[i].innerHTML === ''){

        if (turn === 'x' && squares[i].innerHTML === '') {
            squares[i].innerHTML = 'x';
            turn = 'o';
            title.innerHTML = 'O';
        }

        else if(turn === 'o' && squares[i].innerHTML === ''){

            squares[i].innerHTML = 'o';
            turn = 'x';
            title.innerHTML = 'X';
        }
        winner();


      }




    });
}




logoutBtn.addEventListener('click' , function(){

    window.location = "./index.html";
  localStorage.removeItem("userName");
});

if (localStorage.getItem("userName")) {
    document.querySelector("h3").innerHTML += `  ${localStorage.getItem(
      "userName"
    )}
    `;
  }



  