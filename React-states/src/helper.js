function genTicket(n){
    let arr = new Array(n);
    // console.log(arr);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random() * 10);
        // console.log(arr[i]);
    }
    // console.log(arr);

    return arr;
}

function sum(arr){
    // console.log(arr);
    return arr.reduce((sum,val) => sum+val,0);
}

export {genTicket,sum};