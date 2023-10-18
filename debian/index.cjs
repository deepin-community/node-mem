const mem = require('./_index.cjs');
const res=mem.default;
res.default=mem.default;
Object.keys(mem).forEach(k => {res[k]=mem[k]});
res.mem=mem.default;
module.exports = res;
