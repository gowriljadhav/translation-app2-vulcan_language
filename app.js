
var translateButton=document.querySelector("#translate-button");
var textInput=document.querySelector("#text-input");

var outPut=document.querySelector("#output")

  var  serverURL="https://api.funtranslations.com/translate/vulcan.json"

function getTranslationURL(text){
    return serverURL+ "?" +"text="+text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server!! Try again after sometime.")
}


function clickEventHandler(){
 //   outPut.innerText = "ajsajsajajkda "+ textInput.value;
    var inputText=textInput.value; //taking input

    //getting server for processing
    fetch(getTranslationURL(inputText))
    .then(response=>response.json())

    .then(json=>{
        var translatedText=json.contents.translated;
        outPut.innerText=translatedText; //output
    })
    .catch(errorHandler)


};

translateButton.addEventListener("click",clickEventHandler)

// https://api.funtranslations.com/translate/shakespeare.json