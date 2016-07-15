
function showHide(divId){
  if (divId == 2) {
        var divId = 'CONTENT'+divId;
        var theDiv = document.getElementById(divId);
        if(theDiv.style.display=="block"){
            theDiv.style.display="none";
        }else{
            theDiv.style.display="block";
        }
          document.getElementById("CONTENT1").style.display="none";
          document.getElementById("jscolor2").style.color="#5f5743";
          document.getElementById("jscolor1").style.color="white";
    }
    if (divId == 1) {
          var divId = 'CONTENT'+divId;
          var theDiv = document.getElementById(divId);
          if(theDiv.style.display=="block"){
              theDiv.style.display="none";
          }else{
              theDiv.style.display="block";
          }
          document.getElementById("CONTENT2").style.display="none";
          document.getElementById("jscolor1").style.color="#5f5743";
          document.getElementById("jscolor2").style.color="white";


      }
  }
