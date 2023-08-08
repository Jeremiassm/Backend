import express from "express";
import ProductRouter from "./router/product.routes.js";
import CartsRouter from "./router/carts.routes.js";


const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true }));

app.use("/api/products", ProductRouter)
app.use("/api/carts", CartsRouter)

app.listen(PORT, () => {
    console.log(`Express por Local Host ${PORT}`);
});
