var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(" ");
    for(dic of dictionary){
        for(word in sentence){
            if(sentence[word].startsWith(dic)){
                sentence[word] = dic;
            }
        }
    }
    return sentence.join(" ")
};