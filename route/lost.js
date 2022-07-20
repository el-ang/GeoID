module.exports = (xp)=>{
    const r = xp.Router();
    r.get((req, res)=>{
        res.send("Oops! It seems that you're off the map.");
    });
    return r;
}