
dict = {};
for (let i = 0; i < word.length; i++) {
    dict[word[i]] = true;
}

function isWord(word) {
    return dict[word] === true;
}

module.exports = isWord;