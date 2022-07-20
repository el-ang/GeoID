module.exports = (xp)=>{
    const r = xp.Router();
    r.use((req, res, next)=>{
        res.send("All data about Archipelago and Island(s) of the specified Province will be shown here.");
        next();
    });
    return r;
}