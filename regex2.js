//program to return a string with all the capital letters joined together.

function capitalSentence(text){
    let pattern = /[A-Z]/g;
    let result = text.match(pattern);
    console.log(result.join(""));
}

capitalSentence("The Cat In The Hat") // "TCITH"
capitalSentence("And I Think to Myself What a Wonderful World") // "AITMWWW"