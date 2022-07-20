module.exports = (xp)=>{
    const r = xp.Router();
    r.use((req, res, next)=>{
        res.send("All or Specified data will be shown here.");
        next();
    });
    return r;
}