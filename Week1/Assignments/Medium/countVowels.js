function countVowels(str) {
    // Your code here
    const vowels="aeiou"
    let count=0;
    for(const char of str.toLowerCase())
    {
      if(vowels.includes(char))
      count+=1;
    }
    return count;
}