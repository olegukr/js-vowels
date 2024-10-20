
function searchVowels(text) {
    charArray = [...text];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelsList = [];

    for ( i = 0; i < charArray.length; i++) {
        for ( k = 0; k < vowels.length; k++) {
            if (vowels[k] == charArray[i]) {
                vowelsList.push(charArray[i]);
            }
        }
    }

    return vowelsList
}

function deleteDuplicate(objList) {
    const uniqueCharList = [...new Set(objList)];
    return uniqueCharList
}

function getVowelsString(vowelsList) {
    let vowelsString = "";
    for ( i = 0; i < vowelsList.length; i++) {
        vowelsString += vowelsList[i];
        if ( i == (vowelsList.length - 1)) {
            break;
        }
        vowelsString += ",";

          
    }
    return vowelsString
}

function textAnalisis() {

    const inputText = document.getElementById('textInput').value;
    const searchVowelsResult = searchVowels(inputText);
    const searchVowelsResultDeduplicate = deleteDuplicate(searchVowelsResult);
    const getVowelsResult = getVowelsString(searchVowelsResultDeduplicate);

    document.getElementById('getSentenceResultID').textContent = `
        Get Sentence: '${inputText}'`;
    
    document.getElementById('searchVowelsResultID').textContent = `
        Search Vowels: [${searchVowelsResultDeduplicate}]`;

    document.getElementById('getVowelsResult').textContent = `
        Get Vowels String: '${getVowelsResult}'`;

    document.getElementById('deleteDuplicateResult').textContent = `
    Delete Duplicate: '${deleteDuplicateOutput}'`;

    return
}