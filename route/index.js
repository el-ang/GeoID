const xp = require("express"), route = xp.Router(), fs = require("fs");

fs.readdirSync(".").forEach(f=>{
    console.log(f);
});

module.exports = {};