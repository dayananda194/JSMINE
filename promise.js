function fetch(val)
{
    return new Promise(function process(resolve,reject){

        console.log("inside function");
        setTimeout(function fn(){
            // some code
            if(val%2==0)    
                resolve("even");
            else    
                reject("odd");
        },1000)
    })
}

let x = fetch(4).then(function p(){

            console.log("sucess");
}).catch(
    function error()
    {
        console.log("Error");
    }
    
)
console.log("returned promise object is ", x);