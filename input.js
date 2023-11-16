
let connection;

//if the user enters control C it will terminate the program
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
};



//takes in connection object to write to server and this creates input for user to move snek
const setupInput = function(conn) {
  
  let intervalID;

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //uses callback function to kill connection
  stdin.on("data",(key)=>{
    handleUserInput(key);
  });

  //listens for data from terminal line and will send that info to server
  stdin.on("data", (key)=>{
    if (key === "w") {

      //clears the interval that was set previously
      clearInterval(intervalID);

      //sets an interval to keep snek moving and also sets intervalID so that we can clear the interval later
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