module.exports = (xp)=>{
    const r = xp.Router();
    r.use((req, res, next)=>{
        res.send("All or Specified data about time or regional zone will be shown here.");
        next();
    });
    return r;
}