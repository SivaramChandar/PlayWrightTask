let browser = "Chrome"
function checkBrowserVersion(callback){
    console.log(browser)

    setTimeout(function(){
        theVersion(callback)
    },2000)
}
function theVersion(){
    console.log("Brower version is 141.11 ")
}

checkBrowserVersion()