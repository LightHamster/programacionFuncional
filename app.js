const ProductDAO = require('./product-dao.js');

const dao = new ProductDAO('productos.json');
dao.cargarProductos();

const productosConExistenciaMayorA20 = dao.obtenerProductosConExistenciaMayorA20();
const productosConExistenciaMenosA15 = dao.obtenerProductosConExistenciaMenosA15();
const productosConClasificacionYPrecio = dao.obtenerProductosConClasificacionYPrecio('A', 15.50);
const productosConPrecioEntre = dao.obtenerProductosConPrecioEntre(20.30, 45.00);
const productosAgrupadosPorClasificacion = dao.obtenerNumeroDeProductosAgrupadosPorClasificacion();

console.log('Productos con existencia mayor a 20:', productosConExistenciaMayorA20);
console.log('Productos con existencia menos a 15:', productosConExistenciaMenosA15);
console.log('Productos con clasificación "A" y precio mayor a 15.50:', productosConClasificacionYPrecio);
console.log('Productos con precio entre 20.30 y 45.00:', productosConPrecioEntre);
console.log('Número de productos agrupados por clasificación:', productosAgrupadosPorClasificacion);
