const app = require("./app");

const dotenv = require("dotenv");
const connectDatabse = require("./config/database");


process.on("uncaughtException",(err)=>{
    console.log('Error: ${err.message}');
    console.log('server was shutdown ');
        process.exit(1);
 
});

dotenv.config({ path: "backend/config/config.env" });

connectDatabse();


const server =app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
});


// unhandled promise rejaction

process.on("unhandledRejection",(err)=>{
    console.log('Error: ${err.message}');
    console.log('server was shutdown ');

    server.close(()=>{
        process.exit(1);
    });
});








