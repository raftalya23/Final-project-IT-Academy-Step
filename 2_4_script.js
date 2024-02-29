let lexiconArray = [
  ['კატა', 'ძაღლი', 'თაგვი'], 
  ['cat', 'dog', 'mouse'],
  ['koshka', 'sobaka', 'mish']
]

let translatedWord = ''
const lexicon = () => {
  let languageFromTranslate = prompt("Enter the language to translate from")
  let languageToTranslate = prompt("Enter the language where translate to")

  // ქართული -> ინგლისური
  if (languageFromTranslate == 'ქართული' && languageToTranslate == "ინგლისური"){
    let wordToTranslate = prompt("Enter the word to translate")
    let wordDetected = false;

    for(let i = 0; i < lexiconArray[0].length; i++){
      if(wordToTranslate === lexiconArray[0][i]){
        translatedWord = lexiconArray[1][i]
        alert(translatedWord)
        wordDetected = true;
        break;
      }
    }

    if (!wordDetected) {
      alert("That word didn't detected. Please enter its translation");
    }
  }

  // ქართული -> რუსული
 if (languageFromTranslate == 'ქართული' && languageToTranslate == "რუსული"){
    let wordToTranslate = prompt("Enter the word to translate")
    let wordDetected = false;

    for(let i = 0; i < lexiconArray[0].length; i++){
      if(wordToTranslate === lexiconArray[0][i]){
        translatedWord = lexiconArray[2][i]
        alert(translatedWord)
        wordDetected = true;
        break;
      }
    }

    if (!wordDetected) {
      alert("That word didn't detected. Please enter its translation");
    }
  }
  //ინგლისური -> ქართული
 if (languageFromTranslate == 'ინგლისური' && languageToTranslate == "ქართული"){
    let wordToTranslate = prompt("Enter the word to translate")
    let wordDetected = false;

    for(let i = 0; i < lexiconArray[1].length; i++){
      if(wordToTranslate === lexiconArray[1][i]){
        translatedWord = lexiconArray[0][i]
        alert(translatedWord)
        wordDetected = true;
        break;
      }
    }

    if (!wordDetected) {
      alert("That word didn't detected. Please enter its translation");
    }
  }
//ინგლისური -> რუსული
 if (languageFromTranslate == 'ინგლისური' && languageToTranslate == "რუსული"){
    let wordToTranslate = prompt("Enter the word to translate")
    let wordDetected = false;

    for(let i = 0; i < lexiconArray[1].length; i++){
      if(wordToTranslate === lexiconArray[1][i]){
        translatedWord = lexiconArray[2][i]
        alert(translatedWord)
        wordDetected = true;
        break;
      }
    }

    if (!wordDetected) {
      alert("That word didn't detected. Please enter its translation");
    }
  }
  //რუსული  -> ქართული
 if (languageFromTranslate == 'რუსული' && languageToTranslate == "ქართული"){
    let wordToTranslate = prompt("Enter the word to translate")
    let wordDetected = false;

    for(let i = 0; i < lexiconArray[2].length; i++){
      if(wordToTranslate === lexiconArray[2][i]){
        translatedWord = lexiconArray[0][i]
        alert(translatedWord)
        wordDetected = true;
        break;
      }
    }
    if (!wordDetected) {
      alert("That word didn't detected. Please enter its translation");
    }
  }
  //რუსული  -> ინგლისური
 if (languageFromTranslate == 'რუსული' && languageToTranslate == "ინგლისური"){
    let wordToTranslate = prompt("Enter the word to translate")
    let wordDetected = false;

    for(let i = 0; i < lexiconArray[2].length; i++){
      if(wordToTranslate === lexiconArray[2][i]){
        translatedWord = lexiconArray[1][i]
        alert(translatedWord)
        wordDetected = true;
        break;
      }
    }

    if (!wordDetected) {
      alert("That word didn't detected. Please enter its translation");
    }
  }

}

lexicon();