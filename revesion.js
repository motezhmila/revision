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

function reverseIterateAndLogRecursively(n) {
    var x=n-1
        if (x<0){
            return  
        }
          if (x%2===0){
               console.log (x+' is even')
            }
         else {
                console.log (x+' is odd')
            }
        
     return reverseIterateAndLogRecursively(n-1)
    }

    /*****************************  3  ***********************/

 function weirdDivisionWithFor(n) {
        for (var i=1;i<=n;i++){
            if ((i%3===0)&&(i%5!==0)){
                console.log ('Julia')}
            else if ((i%5===0)&&(i%3!==0)){
                console.log ('james')}
            else if  ((i%3===0)&&(i%5===0)){
            console.log  ('JuliaJames')}
            else {
                console.log (i)}
        }
}

function weirdDivisionWithWhile(n) {
    var i=1
    while (i<=n){
        if ((i%3===0)&&(i%5!==0)){
            console.log ('Julia')}
        else if ((i%5===0)&&(i%3!==0)){
            console.log ('james')}
        else if  ((i%3===0)&&(i%5===0)){
        console.log  ('JuliaJames')}
        else {
            console.log (i)}
            i=i+1
    }}

function inverseWeirdDivisionRecursively(n) {
        if (n===1){
            return 1}
       else if ((n%3===0)&&(n%5!==0)){
                console.log ('Julia')}
            else if ((n%5===0)&&(n%3!==0)){
                console.log ('james')}
            else if  ((n%3===0)&&(n%5===0)){
            console.log  ('JuliaJames')}
            else {
                console.log (n)}
        return inverseWeirdDivisionRecursively(n-1)
    }

    
/*****************************  4  ***********************/

function laughWithFor(number) {
    var string=''
    for (i=0;i<number;i++){
        string=string+'ha'
    }
    return string }

function laughWithWhile(number) {
        var string =''
        var i=0
        while (i<number){
            string =string +'ha'
            i=i+1
        }return string 
    }

function laughRecursively(number) {
        if (number===0){
            return ''}
        return 'ha'+laughRecursively(number-1)
    }
    

/*****************************  5  ***********************/

function sumWithWhile(number) {
    var result=0
    for (i=1;i<=number;i++){
        result =result+i}
    return result
}


/*****************************  6  ***********************/

function factorialRecursively(number) {
    if (number===1){
        return number}
    return number*factorialRecursively(number-1)
}

/*****************************  7  ***********************/

function rangeFor(min, max) {
    var result =[]
        for (i=min;i<max;i++){
            result=result.concat (i) }
    return result
}

function rangeWhile(min, max) {
    var result =[]
        var i=min
    while (i<max){
        result=result.concat (i)
    i++
    }return result
    }