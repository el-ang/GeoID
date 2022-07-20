module.exports = (xp)=>{
    const r = xp.Router();
    r.get((req, res)=>{
        res.send("All or Specified data will be shown here.");
    });
    return r;
}