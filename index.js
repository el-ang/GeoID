const xp = require("express"), app = xp(), fs = require("fs"),
url = require("url"), route = require("./route")(xp, app, fs),
riot = {
    "all": ["api", "dat", "data", "indo", "indonesia"],
    "zone": ["timezone"],
    "group": ["big", "main"],
    "argo": ["archipel", "archipelago", "nusantara"],
    "lost": ["404"]
}, port = process.env.PORT || 8080;

/* Asset */
app.use("/pub", xp.static("pub"));
app.use("/favicon.ico", xp.static("pub/img/logo.svg"));

/* Home */
/* app.get((req, res, next)=>{
    console.log(url.parse(req.url).hash);
    next();
}); */

/* Other Route */
for(k in riot) route.midWare(k, riot[k]);

app.listen(port, ()=>console.log(`\x1b[1m\x1b[38;5;42mServer\n\x1b[0m\x1b[38;5;221m   Port Ready: \x1b[1m\x1b[38;5;68m${port}\x1b[0m`));