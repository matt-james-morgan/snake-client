const net = require("net");

const success = () =>{
  console.log("Connection Successful")
}

const handleUserInput = function(key) {
  console.log("Key pressed:", key); // Add this line to check the received key

  if(key === "\u0003"){
    process.exit();
  }
};

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", ()=>{
  conn.write("Name: ___");

  success();
  })
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);
  
  
  conn.on("data", ()=>{
  console.log("you ded cause you idled");
});
  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",(key)=>{handleUserInput(key)});
  return stdin;
};

module.exports = {
  connect,
  setupInput,
};