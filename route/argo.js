module.exports = (xp)=>{
    const r = xp.Router();
    r.get((req, res)=>{
        res.send("All data about Archipelago and Island(s) of the specified Province will be shown here.");
    });
    return r;
}