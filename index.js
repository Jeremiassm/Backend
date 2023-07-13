//Creamos una clase
class ProductManager {
      constructor(){
        this.products = []
      }
      //Usamos un static para el id
      static id = 0
      
      //Agregamos un producto
      addProduct(title, description, price, image, code, stock){
        //Verificamos que el producto que agregamos no tenga el mismo codigo de uno que ya estaba
        for(let i = 0; i< this.products.length;i++){
            if(this.products[i].code === code)
            console.log(`El codigo ${code} esta repetido, no puede agregar este producto`)
            break;
        }
        //Comprobamos si se ingresan los elementos que corresponden
        const newProduct ={
            title,
            description,
            price,
            image,
            code,
            stock,
        };
        //Si falta un elemento "(undefined)" va a llevar a que complete todos los campos
        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({
            ...newProduct,
            id:ProductManager.id,
        });
        } else {
            console.log("Todos los campos son requeridos");
        } 
    }
      //consultamos por un producto      
      getProduct(){
        return this.products;
      }
      //Si existe el id, mostramos el producto completo, sino "not found"
      existe(id){
        return this.products.find((producto) => producto.id === id)
      }

      getProductById(id){
        !this.existe(id)? console.log("Not found") : console.log(this.existe);
        }
}

const productos = new ProductManager
//Agregamos los productos

productos.addProduct("titulo1", "descripcion", 1000, "imagen1", "abc123", 5)
productos.addProduct("titulo2", "descripcion1", 1100, "imagen2", "abc124", 6)


//Obtenemos los productos por id
productos.getProductById();

//Verifcamos el codigo repetido
productos.addProduct("titulo2", "descripcion1", 1100, "imagen2", "abc123", 6)



