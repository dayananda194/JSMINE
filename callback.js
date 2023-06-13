
function fetch(url,fn){

    console.log("download started");
    setTimeout(function download(){
        console.log("download ended");
        let data = "dummy data";
        fn(data);
    },3000)
}

function writeData(filename,fn)
{
    console.log("writing started");
    setTimeout(function write(){
        console.log("writing ended");
        let response = "SUCCESS";
        fn(response);


    },5000);
}

fetch("www.google.com",function downloadCallback(data){

    console.log("data downloaded is ",data);
    writeData("output.txt",function writeCallBack(data){
            
        console.log("Written data is ",data);
        console.log("Writing data is completed");

    })

})
