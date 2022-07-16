const xp = require("express"), app = xp(), url = require("url"), port = process.env.PORT || 8080;

app.use("/favicon.ico", xp.static("favicon.ico"));

app.use((req, res, next)=>{
    console.log(url.parse(req.url).hash);
    next();
});

app.listen(port, ()=>console.log(`\x1b[1m\x1b[4mServer\n\x1b[24m\x1b[0m\x1b[38;5;221m   Port Ready: \x1b[1m\x1b[6m\x1b[38;5;68m${port}\x1b[24m\x1b[0m`));