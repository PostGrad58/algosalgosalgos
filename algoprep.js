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


