module.exports = (xp)=>{
    const r = xp.Router();
    r.get((req, res)=>{
        res.send("All data about Big, Grouped, or Main Island(s) will be shown here.");
    });
    return r;
}