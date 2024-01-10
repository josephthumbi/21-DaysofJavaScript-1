function isPalindrome(word) {
  
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    
    const reversedWord = cleanWord.split('').reverse().join('');
  
    
    return cleanWord === reversedWord;
  }
  
  
  console.log(isPalindrome('level'));      
  console.log(isPalindrome('Hello'));       
  console.log(isPalindrome('A man a plan a canal Panama')); 
  console.log(isPalindrome('12321'));      
  console.log(isPalindrome('Palindrome'));