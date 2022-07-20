const xp = require("express"), fs = require("fs");
let route = { };

fs.readdirSync("./route/").forEach(f=>{
    if(f.endsWith(".js") && !f.startsWith("index")){
        f = f.replace(".js", "");
        route[f] = require(`./${f}`)(xp);
    }
});

module.exports = route;