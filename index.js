// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// require('dotenv').config()
// const connectDB = require('./config/db')
// const router = require('./routes')


// const app = express()
// const corsOptions = {
//     origin: 'process.env.FRONTEND_URL', // URL của frontend
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Các phương thức yêu cầu được phép
//     credentials: true, // Cho phép gửi cookie và thông tin xác thực
//     allowedHeaders: 'Content-Type,Authorization', // Các header được phép
//   };

// app.use(cors(corsOptions));
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     credentials : true //access-control-allow-credentials:true
// }))
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api",router)

// const PORT = 8080 || process.env.PORT

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("connnect to DB")
//         console.log("Server is running "+PORT)
//     })
// })
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

const corsOptions = {
    origin: "https://eattolive.click/", // URL của frontend từ biến môi trường
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Các phương thức yêu cầu được phép
    credentials: true, // Cho phép gửi cookie và thông tin xác thực
    allowedHeaders: 'Content-Type,Authorization', // Các header được phép
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api", router);

const PORT = process.env.PORT || 8080; // Đặt PORT từ biến môi trường hoặc 8080

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});