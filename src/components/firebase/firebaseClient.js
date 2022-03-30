// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, query, where, addDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcWt4S-kh6R5w8-n86-1l6N6lgyn5jESY",
    authDomain: "react-ecommers-25445.firebaseapp.com",
    projectId: "react-ecommers-25445",
    storageBucket: "react-ecommers-25445.appspot.com",
    messagingSenderId: "78380348315",
    appId: "1:78380348315:web:f8430bc019226fecfde73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const productsCollection = collection(db, "products")
const ordesCollection = collection(db, "orders")

export const getProducts = async() => {
    const querySnapshot = await getDocs(productsCollection);
    let products = []
    querySnapshot.forEach( doc => {
        //console.log(doc.data());///// ver si trae los productos
        products.push(doc.data())
    });

    return products
}




/////////// funcion generica recive una propiedad y valor a partir de eso se hace la busqueda
export const getProductsCategory = async(prop, value) => {
    const q = query(productsCollection, where(prop, "==", value));
    const querySnapshot = await getDocs(q);
    let products = []
    querySnapshot.forEach((doc) => {
    products.push(doc.data())
    });

    return products

    //const querySnapshot = await getDocs(q);
    //querySnapshot.forEach((doc) => {
        //console.log(doc.id, "=>,", doc.data());
    //});
}
//////////



////// recivir una order utilizar el add pasar la colleccion a la nos referimos y el nuevo objeto como parametro
export const addOrder = async (order) => {
    const docSnap = await addDoc(ordesCollection, order)

    return docSnap.id
}