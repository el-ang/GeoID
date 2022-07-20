const xp = require("express"), app = xp(), url = require("url"),
route = require("./route"), fs = require("fs"), port = process.env.PORT || 8080;
route.midWare = (w, name)=>{
    app.get(`/${w}`, route[name]);
}

/* Asset */
app.get("/pub", xp.static("pub"));
app.get("/favicon.ico", xp.static("pub/img/favicon.ico"));

/* Home */
app.get((req, res, next)=>{
    console.log(url.parse(req.url).hash);
    next();
});

/* Whole Data */
["all", "api", "dat", "data", "indo", "indonesia"].forEach(w=>route.midWare(w, "all"));

/* Zone */
["zone", "timezone"].forEach(w=>route.midWare(w, "zone"));

/* Main Islands */
["group", "big", "main"].forEach(w=>route.midWare(w, "group"));

/* Archipelago */
["argo", "archipel", "archipelago", "nusantara"].forEach(w=>route.midWare(w, "argo"));

/* 404 */
["lost", "404"].forEach(w=>route.midWare(w, "lost"));

app.listen(port, ()=>console.log(`\x1b[1m\x1b[38;5;42mServer\n\x1b[0m\x1b[38;5;221m   Port Ready: \x1b[1m\x1b[38;5;68m${port}\x1b[0m`));