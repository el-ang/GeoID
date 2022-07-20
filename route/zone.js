module.exports = (xp)=>{
    const r = xp.Router();
    r.get((req, res)=>{
        res.send("All or Specified data about time or regional zone will be shown here.");
    });
    return r;
}