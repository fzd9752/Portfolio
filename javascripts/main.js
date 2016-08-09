console.log('This would be the main JS file.');

var header =document.getElementById('obj');
var count = 0;

function showHide()
  {
    count = count + 1;
    if (count <= 2) {
      header.style.visibility='visible';
      time();
    }

    else if (count < 4 ){
      setTimeout(function(){
        alert("You can't know NOTHING about me \n by only looking this sentence!");
      }, 1000);
    }

    else if (count < 5) {
      setTimeout(function(){
        alert("Come on...I'm serious to look for a job.");
      }, 3000);
    }

    else if (count < 6){
      header.style.visibility='visible';
      alert("Alright...Now.You can see it FOREVER!!");
    }
    else if (count < 7 ){
      setTimeout(function(){
        alert("I will never hide my ambition! \nCan you please glance at my resume?");
      }, 5000);
    };
  }

function changeHide()
  {
    if (count <=  2){
      header.style.visibility='hidden';
    };
  }

function time(){
  setTimeout(function()
    {
      alert("I can't change the world \n if you don't scroll down (╯︵╰,)");
      changeHide();
    }
    ,2000);

}
