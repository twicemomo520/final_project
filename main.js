let express = require('express');
let app = express();
let user_router = require('./routers/main_router.js')

app.get("/", (req, res) => {
    res.send("This is main page.");
})

app.use("/user", user_router)

app.listen(8888, () => {
    console.log("server listen on port 8888")
});