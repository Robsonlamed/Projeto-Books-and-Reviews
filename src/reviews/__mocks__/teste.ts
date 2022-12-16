import { loremIpsum } from "lorem-ipsum";

loremIpsum({
    sentenceLowerBound: 5,   // Min. number of words per sentence.
    sentenceUpperBound: 15,  // Max. number of words per sentence.
  }) 
  
  const fakeText = loremIpsum()
  
  console.log(fakeText)