const fs = require('fs'); // Para manejar archivos

class ProductDAO {
  constructor(dataFile) {
    this.dataFile = dataFile;
    this.productos = [];
  }

  cargarProductos() {
    try {
      const data = fs.readFileSync(this.dataFile, 'utf8');
      this.productos = JSON.parse(data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      this.productos = [];
    }
  }

  obtenerProductosConExistenciaMayorA20() {
    return this.productos.filter(producto => producto.existencia > 20);
  }

  obtenerProductosConExistenciaMenosA15() {
    return this.productos.filter(producto => producto.existencia < 15);
  }

  obtenerProductosConClasificacionYPrecio(clasificacion, precioMinimo) {
    return this.productos.filter(
      producto => producto.clasificacion === clasificacion && producto.precio > precioMinimo
    );
  }

  obtenerProductosConPrecioEntre(precioMinimo, precioMaximo) {
    return this.productos.filter(
      producto => producto.precio > precioMinimo && producto.precio < precioMaximo
    );
  }

  obtenerNumeroDeProductosAgrupadosPorClasificacion() {
    const productosAgrupados = {};
    this.productos.forEach(producto => {
      if (productosAgrupados[producto.clasificacion]) {
        productosAgrupados[producto.clasificacion]++;
      } else {
        productosAgrupados[producto.clasificacion] = 1;
      }
    });
    return productosAgrupados;
  }
}

module.exports = ProductDAO;
