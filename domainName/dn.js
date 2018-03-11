function domainName(url){
    return url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#.]/)[0];
}

function domainName2(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName3(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}
function domainName4(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}



