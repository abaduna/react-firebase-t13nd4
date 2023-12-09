import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../confic/firebase';
import {
  getDocs,
  collection,
} from "firebase/firestore";
import { CaritoComprarContex } from '../../contexts/carito';

function VerProductos() {
  const [productos, setProductos] = useState([]);
  const { agregarCarritoDeCompras} = useContext(CaritoComprarContex);

  const mostrarData = async () => {
    const productosCollectionRef = collection(db, "productos");
    try {
      const data = await getDocs(productosCollectionRef);
      setProductos(data.docs.map((doc) => doc.data()));
    } catch (error) {
      console.error(`mensaje de error ${error}`);
    }
  };

  useEffect(() => {
    mostrarData();
  }, []);

  const agregarACarrito = (product) => {
    agregarCarritoDeCompras(product)
  };

  return (
    <div>
      {productos.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <img className='producto-img' src={product.url} alt={product.title} />
          <button onClick={() => agregarACarrito(product)}>Agregar a carrito</button>
        </div>
      ))}
    </div>
  );
}

export default VerProductos;