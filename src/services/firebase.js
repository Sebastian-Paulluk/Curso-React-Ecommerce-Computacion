// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWmJxdTUT0sEtmp7nhwaAVFccdKpyF9Vg",
  authDomain: "curso-react-coderhouse-44ad4.firebaseapp.com",
  projectId: "curso-react-coderhouse-44ad4",
  storageBucket: "curso-react-coderhouse-44ad4.appspot.com",
  messagingSenderId: "719693302632",
  appId: "1:719693302632:web:ae1973d282ea2a01ec24dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async()=> {
    const productsCollectionRef = collection(db, "products");
    const snapshot = await getDocs(productsCollectionRef);
    const docsData = snapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return docsData;
}


export const getProductById = async (productId) =>{
    const productsCollectionRef = collection(db, "products");
    const productRef = doc(productsCollectionRef, productId);
    const snapshot = await getDoc(productRef);

    return { id: snapshot.id, ...snapshot.data()};
}



export const getProductByCategory = async (category) =>{
    const productsCollectionRef = collection(db, "products");
    const queryCollection = query(
        productsCollectionRef,
        where("category", "==", category)
    );
    const snapshot = await getDocs(queryCollection);
    const docsData = snapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return docsData;
}



export const getProductByCategoryAndBrand = async({category, brand}) =>{
    const productsCollectionRef = collection(db, "products");

    const queryCollection = query(
        productsCollectionRef,
        where("category", "==", category),
        where ("brand", "==", brand)
    );
    const snapshot = await getDocs(queryCollection);
    const docsData = snapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return docsData;
}



export const getProductsByTitleBrandOrDescription = async(searchedText) =>{
    const productsCollectionRef = collection(db, "products");
    const snapshot = await getDocs(productsCollectionRef);

    const escapedText = searchedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('.*' + escapedText + '.*', 'i');

    const filteredProducts = snapshot.docs
        .map(doc => ({id: doc.id, ...doc.data() }))
        .filter(prod => (
            regex.test(prod.title) || regex.test(prod.brand) || regex.test(prod.description)
        ))

    return filteredProducts;
}


export const getCategories = async()=>{
    const productsCollectionRef = collection(db, "products");
    const snapshot = await getDocs(productsCollectionRef);
    const products = snapshot.docs.map(doc => doc.data());

    const categoriesSet = new Set(products.map ( prod => prod.category));
    const categoriesArray = Array.from(categoriesSet);
    
    const categories = categoriesArray.map( category => {
        const brands = products
            .filter(prod => prod.category === category)
            .map(prod => prod.brand);
      
        return {
            name: category,
            brands: Array.from(new Set(brands))
        };
    });

    return categories;
}

export const createBuyOrder = async(order) =>{
    const ordersCollectionRef = collection(db, "orders");
    const orderDoc = await addDoc(ordersCollectionRef, order);
    return orderDoc.id;
}