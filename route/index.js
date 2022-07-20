module.exports = (xp, app, fs)=>{
    const route = {
        midWare: (name, riot)=>{
            app.get(`/${name}`, riot[name]);
            riot.forEach(r=> app.get(`/${r}`, riot[name]));
        }
    }

    fs.readdirSync("./route/").forEach(f=>{
        if(f.endsWith(".js") && !f.startsWith("index")){
            f = f.replace(".js", "");
            route[f] = require(`./${f}`)(xp);
        }
    });

    return route;
}