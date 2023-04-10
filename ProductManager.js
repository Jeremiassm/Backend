class ProductManager {
  constructor() {
    // Inicializa el arreglo de productos vacío y el siguiente ID en 1
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Verifica si algún campo obligatorio está faltando y si el código ya existe
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios.");
      return;
    }
    if (this.products.some(product => product.code === code)) {
      console.log("Ya existe un producto con este código.");
      return;
    }
    // Crea un nuevo producto con el siguiente ID autoincrementable
    const product = {
      id: this.nextId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    // Incrementa el siguiente ID y agrega el nuevo producto al arreglo de productos
    this.nextId++;
    this.products.push(product);
  }

  getProductById(id) {
    // Busca el producto correspondiente al ID proporcionado y devuelve el producto o muestra un mensaje de error
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.log("Producto no encontrado.");
      return;
    }
    return product;
  }

  getProducts() {
    // Devuelve el arreglo completo de productos
    return this.products;
  }
}

// Crea una nueva instancia de la clase ProductManager
const productManager = new ProductManager();

// Agrega un nuevo producto llamando al método addProduct con los valores requeridos
productManager.addProduct(
  "Rtx 3070",
  "Placa de video Rtx 3070 msi",
  400.000,
  "img",
  "PV3070MSI",
  10
);

productManager.addProduct(
  "i7 13600k",
  "Procesador intel i7 13va generación",
  180.000,
  "img",
  "PI713600K",
  5
);

productManager.addProduct(
  "Fuente 850w 80+ Gold",
  "Fuente de alimentacion thermaltake",
  40.000,
  "img",
  "FP850W",
  2
);

productManager.addProduct(
  "Placa madre b560m",
  "Placa madre ASUS B560M",
  35.000,
  "img",
  "PMB560M",
  4
);

productManager.addProduct(
  "Memoria Ram 8GB",
  "Memoria Ram Hyperx",
  15.000,
  "img",
  "MR8GBH",
  2
);