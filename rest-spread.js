// function ilterOutOdds(){
//     const nums = Array.call(...arguments);
//     return nums => {num % 2 === 0}
// }

const filterOutOdds = (...arguments) => arguments.filter(nums => num %2 === 0);

const findMin = (...argumnets) => Math.min(...argumnets);

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

const doubleAndReturnArgs = (arr, ...rest) => ([...arr, ...rest.map(x=> x*2)]);


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let getRandom = Math.round(Math.random()*items.length-1);
    let newArray = items.slice();
    return newArray.splice(getRandom,1);
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1,...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[`${key}`];
    return newObj;

}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    let newObj = {...obj1,...obj2};
    return newObj;
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}