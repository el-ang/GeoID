const xp = require("express"), app = xp(), url = require("url"),
fs = require("fs"), port = process.env.PORT || 8080;

/* Asset */
app.get("/pub", xp.static("pub"));
app.get("/favicon.ico", xp.static("pub/img/favicon.ico"));

/* Home */


/* Whole Data */
app.get("/all", )

app.use((req, res, next)=>{
    console.log(url.parse(req.url).hash);
    next();
});

app.listen(port, ()=>console.log(`\x1b[1m\x1b[38;5;42mServer\n\x1b[0m\x1b[38;5;221m   Port Ready: \x1b[1m\x1b[38;5;68m${port}\x1b[0m`));