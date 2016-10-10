function getTempPormise(location) {
    return new Promise(function(resolve, reject) {
        resolve(38);
        reject('city not found');
    });
}

getTempPormise('KL').then(function(temp) {
    console.log('success', temp);
}, function(err) {
    console.log('error', error);
});


function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            newNumber = a + b;
            resolve(newNumber);
        } else {
            reject('error');
        }
    });
}

addPromise('a', 4).then(function(newNumber) {
    console.log('success', newNumber)
}, function(err) {
    console.log('error', err);
});
