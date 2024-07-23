const Eris = require("eris");
const ka = require('./ka.js')

const b = new Eris(process.env.token);

b.on("error", (err) => {
  console.error(err);
});

b.connect(); 
