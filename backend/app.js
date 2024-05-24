const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(express.json());
const ssss = app.use(cookieParser());
app.use(cors());
const errorMiddleware = require("./middleware/error")
console.log(ssss,"ffff")
const user = require("./routes/userRoute");
const category = require ("./routes/CatgoreyRoute")
const subCategory = require("./routes/subCategoryRoute")
const basicInfo = require("./routes/basicInfoRoutes")
const userAddress = require("./routes/userAddressRoute")
const privacyPolicy = require("./routes/privacy&PolicyRoute")


app.use("/api/v1/",user);
app.use("/api/v1/",category);
app.use("/api/v1/",subCategory);
app.use("/api/v1/",basicInfo);
app.use("/api/v1/",userAddress);
app.use("/api/v1/",privacyPolicy)

app.use(errorMiddleware)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));


module.exports =app



