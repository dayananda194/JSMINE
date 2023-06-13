function fetchData(url)
{

    return new Promise(function process(resolve,reject){

        console.log("Starting Download");
        setTimeout(function (){

            console.log("Download completed");
            resolve("dummy data");
        
        },5000)
        console.log("Download will be done in 5 secs");
    });
}


function writeData(data)
{
    return new Promise(function process(resolve,reject){

        console.log("Writing data started and the data is ",data);
        setTimeout(function(){
            
            console.log("Writing data completed");
            resolve("writefile.txt");

        },7000)
        console.log("writing data will be completed after 7 secs");
    })
}

function uploadData(url,file)
{
    return new Promise(function process(resolve,reject){
        console.log("upload started to the url :",url);
        setTimeout(function (){
            console.log("file upload is done");
            resolve("exit status 0 : success");
        },8000)
        console.log("file uplaod is about to done in 8 secs");
    })
}
let x = fetchData("www.google.com")
.then(
    function process(value)
    {
        console.log("about to write the data to the file , Downloaded data is ",value);
        return writeData(value);
    }

)
.then(

    function p(value){

        console.log("uploading the file ",value);
        return uploadData("www.drive.com",value)
    }

)
