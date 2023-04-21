function toggleMenu() {
    var x = document.getElementById('hide');    
    if(x.style.display == "none") { 
        x.style.display = "block";
    }
    else { 
        x.style.display = "none";
    }
  }
  function trashPop(){
    var x = document.getElementById('popup-div');  
    var y = document.getElementById('hide');    
    if(x.style.display == "none") { 
        x.style.display = "block";
        y.style.display = "none"
    }
    else { 
        x.style.display = "none";
    }
  }

    function editor(){
    var disabled1 = document.getElementById("text1").disabled;
    var disabled2 = document.getElementById("text2").disabled;
    if (disabled1,disabled2) {
        document.getElementById("text1").disabled= false;
        document.getElementById("text2").disabled = false;
        document.getElementById("text1").style.border = "1px solid gray";
        document.getElementById("text2").style.border = "1px solid gray";
        document.getElementById("text2").style.padding = "40px 15px"
    }
    else {
        document.getElementById("text1").disabled = true;
        document.getElementById("text2").disabled= true;
        document.getElementById("text1").style.border = "none";
        document.getElementById("text2").style.border = "none";
    }
}

  const dropdowns = document.querySelector(".show-div");
  const button = document.querySelector(".show-btn");
  function clickButton(){
    var y = document.getElementById('seek-div');
    if(y.style.display == "none"){
        dropdowns.classList.remove("is-open");

    }
    else{
        dropdowns.classList.toggle("is-open");
    }
  }
