const net = require("net");
const { IP, PORT } = require("./contsants");

const success = () =>{
  console.log("Connection Successful");
};


//this function creates the connection to the server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //As soon as server connects it sets name to Mat
  conn.on("connect", ()=>{
    conn.write("Name: Mat");
    success();
  });
  
  
  //This will automatically kill snek after idling for too long
  conn.on("data", ()=>{
    console.log("you ded cause you idled");
  });
  return conn;
};



module.exports = connect;
  
