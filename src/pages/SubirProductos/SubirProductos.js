import React, { useState } from 'react'
import { db } from '../../confic/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { storage } from '../../confic/firebase'
import  {ref,uploadBytes,listAll,getDownloadURL } from "firebase/storage" 
import { v4} from "uuid"
function SubirProductos() {
    const [title,SetTitle]= useState("")
    const [descripcion,SetDescripcion]= useState("")
    const [precio,SetPrecion]= useState("")
    const [url,SetUrl]= useState("")
    const [id,SetId]= useState("")
    // const [producto,SetProductos] = useState({})
    const [imageUpLoading,setImageUpLoading] = useState(null)


    const handlerMandaData = async () => {
        const productosCollectionRef = collection(db, "productos");
        console.log(title);
        console.log(descripcion);
        try {
          // Agregar el nuevo documento a Firestore
          const productosColectionRef = collection(db, "productos")
          await addDoc(productosColectionRef, {
            url,
            title,
            descripcion,
            precio
        })
          console.log("Documento subido");
        } catch (error) {
          console.error("Error al subir el documento:", error);
        }
      };
      const conseguiURLdeLaImagen=()=>{
        
        const imageRef = ref(storage, `productos/${imageUpLoading.name + v4()}`)
        uploadBytes(imageRef,imageUpLoading).then((snaphost)=>{
            getDownloadURL(snaphost.ref).then((url)=>{
                SetUrl(url)
                console.log(url);
            })
            
          })
      }
      const handlerMandeDataTotal=()=>{
        conseguiURLdeLaImagen()
        handlerMandaData()
      }
  return (
    <>
     <h1>Subir Producto</h1>
    <label>Titulo </label>
    <input 
    placeholder='Titulo'
    value={title}
    onChange={(e)=>SetTitle(e.target.value)} 
    type='string' />
    <label>A nombre de quien esta</label>
    <input 
    placeholder='Descripcion...'
    value={descripcion}
    onChange={(e)=>SetDescripcion(e.target.value)} 
    type='string' />
    <input type="file" onChange={(e)=> setImageUpLoading(e.target.files[0])} /> 
    <input 
    placeholder='Precio'
    value={precio}
    onChange={(e)=>SetPrecion(e.target.value)} 
    type='number' />
    <button onClick={handlerMandeDataTotal}>Agregar producto</button>
    
    
    
    </>
  )
}

export default SubirProductos