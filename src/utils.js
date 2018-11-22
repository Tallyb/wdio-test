'use strict';

function delay(t) {
    return new Promise(resolve => { 
        setTimeout(resolve, t)
    });
 }

async function runDelays () {
    let arr = [1,2,3,4];

    for (let i of arr) {
        await delay(i*1000);
        console.log (new Date() , i);
    }
    //return await Promise.resolve()
}

module.exports = {
    delay, 
    runDelays
}