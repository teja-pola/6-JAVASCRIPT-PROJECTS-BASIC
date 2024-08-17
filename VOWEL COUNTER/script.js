function countWord() {
  var text = document.getElementById("text").value;
  var wordCount = 0;
  text = text.toLowerCase();

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    if (isWord(char)) {
      wordCount++;
    }
  }
  var result = document.getElementById("result");
  result.textContent = "Total words: " + wordCount;
}

function isWord(char) {
  var word = ["a", "e", "i", "o", "u","b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  return word.includes(char);
}

document.getElementById('cbutton').addEventListener('click',countWord);
