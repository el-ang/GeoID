$(()=>{
    const hash = window.location.hash;
    if(hash.length>0 && hash.includes("#/")) window.location.replace(window.location.href.replace("#/",""));
});