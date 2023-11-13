const net = require("net");

const success = () =>{
  console.log("Connection Successful")
}



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



module.exports = connect
  
