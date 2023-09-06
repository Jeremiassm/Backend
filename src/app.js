import express from "express";
import productRouter from './routes/product.Router.js';


const app = express();

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routers
app.use("/api/product", productRouter)

const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`Start server in PORT ${PORT}`) 
})