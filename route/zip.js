module.exports = (xp)=>{
    const r = xp.Router();
    r.use((req, res, next)=>{
        res.send("All specified data about zip code will be shown here.");
        next();
    });
    return r;
}