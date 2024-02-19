import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { DocumentData, getDocs, getFirestore, query } from "firebase/firestore";

import { doc, getDoc, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD_WDt17WYHeaL_ROWaZKTgJjUY9orl9d4",
  authDomain: "portifolio-3b575.firebaseapp.com",
  projectId: "portifolio-3b575",
  storageBucket: "portifolio-3b575.appspot.com",
  messagingSenderId: "814918044170",
  appId: "1:814918044170:web:b3872edd904c056b186df3",
};

const app = initializeApp(firebaseConfig);
let firebaseApp;

try {
  // Tenta inicializar o Firebase
  firebaseApp = initializeApp(firebaseConfig);
} catch (error) {
  // Se já houver um aplicativo Firebase com o mesmo nome, capture o erro
  // @ts-ignore
  if (!/already exists/.test(error.message)) {
    // @ts-ignore
    console.error("Firebase initialization error", error.stack);
  }
}

// Se a inicialização foi bem-sucedida ou se já existir um aplicativo com o mesmo nome, continue

// Obtém a instância de armazenamento
const imgProject = getStorage(firebaseApp);
const db = getFirestore(app);
const imagesRef = ref(imgProject, "images/fitme.png");
const url = getDownloadURL(imagesRef);
console.log(url);

async function getDataProject() {
  const querySnapshot = await getDocs(collection(db, "projetos"));
  const resultArray: DocumentData[] = [];

  querySnapshot.docs.forEach((doc) => {
    resultArray.push(doc.data());
  });

  const promises = resultArray.map(async (data) => {
    const imagesRef = ref(imgProject, data.imagem);
    data.imagem = await getDownloadURL(imagesRef);
    return data;
  });

  return Promise.all(promises);
}

export async function fetchProjects() {
  try {
    return await getDataProject();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}
