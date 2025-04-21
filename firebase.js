
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAY_JKc3B_IIGjsY2EJ_TSSmL8cs8ZViiw",
    authDomain: "jyp19tp.firebaseapp.com",
    projectId: "jyp19tp",
    storageBucket: "jyp19tp.firebasestorage.app",
    messagingSenderId: "170707899099",
    appId: "1:170707899099:web:c17fc2e09bde76e5f372fe",
    measurementId: "G-QKK0WB94Y2"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const form = document.getElementById("write_Favorite");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title_Favorite").value;
    const content = document.getElementById("content_Post_Favorite").value;

    try {
        const docRef = await addDoc(collection(db, "FavoritePosts"), {
          title: title,
          content: content,
          createdAt: new Date()
        });
        alert("保存されました!");
        form.reset();
      } catch (e) {
        console.error("保存中にエラー発生！:", e);
      }
});