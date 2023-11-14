
let connection;

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};




const setupInput = function(conn) {
  let intervalID;
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data",(key)=>{
    handleUserInput(key);
  });
  stdin.on("data", (key)=>{
    if (key === "w") {
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        connection.write("Move: up");
      }, 100);
      
    }
    if (key === "a") {
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        connection.write("Move: left");
      }, 100);
    }
    if (key === "s") {
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        connection.write("Move: down");
      }, 100);
    }
    if (key === "d") {
      clearInterval(intervalID);
      intervalID = setInterval(() => {
        connection.write("Move: right");
      }, 100);
    }
    if (key === "o") {
      connection.write("Say: OMG!");
    }
    if (key === "q") {
      connection.write("Say: I love coding");
    }
  });
  return stdin;
};

module.exports = setupInput;