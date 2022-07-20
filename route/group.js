module.exports = (xp)=>{
    const r = xp.Router();
    r.use((req, res, next)=>{
        res.send("All data about Big, Grouped, or Main Island(s) will be shown here.");
        next();
    });
    return r;
}