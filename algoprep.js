// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

// anagrams('restful', 'fluster'); // -> true
// anagrams('cats', 'tocs'); // -> false

//i: string1, string2
//o: bool

const anagrams = (string1, string2) => {
    //if strings are of a different length, return false
    if (string1.length !== string2.length) return false;
    //create caches of string 1 and string 2, key is letters, values are number of times each letter appears
    const cache1 = {};
    const cache2 = {};
    //iterate through each string and add letters/frequency to each cache
    for (i = 0; i < string1.length; i++) {
        if (cache1[string1[i]]) {
            cache1[string1[i]]++;
        } else {
            cache1[string1[i]] = 1;
        }
    }
    for (i = 0; i < string2.length; i++) {
        if (cache2[string2[i]]) {
            cache2[string2[i]]++;
        } else {
            cache2[string2[i]] = 1;
        }
    }
    //iterate through each cache, comparing the values at each key
        //if value is not the same, return false
    for (let key in cache1) {
        if (cache1[key] !== cache2[key]) return false;
    }
    //return true
    return true;
}

console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false


// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

// uncompress("2c3a1t"); // -> 'ccaaat'
// uncompress("4s2b"); // -> 'ssssbb'
// uncompress("2p1o5p"); // -> 'ppoppppp'
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyy

// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

// compress('ccaaatsss'); // -> '2c3at3s'
// compress('ssssbbz'); // -> '4s2bz'
// compress('ppoppppp'); // -> '2po5p'
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'