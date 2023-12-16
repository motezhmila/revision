While & For loops, Recursion || Material
/*****************************  1  ***********************/

function iterateAndLogWithFor(n) {
    for (var i=0;i<n;i=i+1){
        if (i%2===0){
           console.log (i+' is even')
        }
        else {
            console.log (i+' is odd')
        }}

}

function iterateAndLogWithWhile(n) {
    var i=0
    while (i<n){
        if (i%2===0){
           console.log (i+' is even')
        }
        else {
            console.log (i+' is odd') 
        }
        i=i+1}
}

/*****************************  2  ***********************/

function reverseIterateAndLogWithFor(n) {
    for (var i=n-1;i>=0;i=i-1){
        if (i%2===0){
           console.log (i+' is even')
        }
        else {
            console.log (i+' is odd')
        }}

}

function reverseIterateAndLogWithWhile(n) {
    var i=n-1
    while  (i>=0){
        if (i%2===0){
           console.log (i+' is even')
        }
        else {
            console.log (i+' is odd')
        }
        i=i-1
    }

}
