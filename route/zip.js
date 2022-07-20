module.exports = (xp)=>{
    const r = xp.Router();
    r.get((req, res)=>{
        res.send("All specified data about zip code will be shown here.");
    });
    return r;
}