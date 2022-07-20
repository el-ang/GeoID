module.exports = (xp)=>{
    const r = xp.Router();
    r.use((req, res, next)=>{
        res.send("Oops! It seems that you're off the map.");
        next();
    });
    return r;
}