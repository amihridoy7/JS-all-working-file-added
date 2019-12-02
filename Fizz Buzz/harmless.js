
/*                         // Constant runtime
function log(array) {   // Big O Notation: "0 (1)"
    console.log(array[0]);
    console.log(array[1]);
}

log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 */




/*                             //  Linear runtime
function logAll(array) {    // Big 0 Natation: "0 (n)"
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);
logAll([1, 2, 3, 4, 5, 6, 7, 8]); */



/*                   // Exponential runtime
function addAndLog(array) { //Big 0 Notation: "0 (n^2)"
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
}

addAndLog(['A', 'B', 'C']); // 9 pairs logged out 
addAndLog(['A', 'B', 'C', 'D'])// 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);// 25 pairs logged out */



/*                                 // Logarithmi runtime
function binarySearch(array, key) { // Big 0 Notation: 0 (log n)
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while (low <= high) {
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
} */


// function harmlessRansomNote (noteText, magazineText) {
//     var noteArr = noteText.split('');
//     var magazineArr = magazineText.split(' ');
//     var magazineObj = {};

//     magazineArr.forEach(word => {
//         if (!magazineObj[word]) magazineObj[word] = 0;
//         magazineObj[word]++;
//     });

//     console.log(magazineObj);
// }

// harmlessRansomNote('', 'this is all the magazine text in the magazine');

/* function harmlessRansomNote (noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    console.log(magazineObj);

}

harmlessRansomNote('', 'this is all the magazine text in the magazine'); */



function harmlessRansomNote (noteText, magazineText) {
    var noteArr =noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noeIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });

    return noteIsPossible;
}

harmlessRansomNote('this is a secret note for you from a secret admirer','puerto rico is a place of great wonder and excitement it has many secret  locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must war hiking boots this is one of the best places i have ever visited');