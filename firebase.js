
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore, setDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAL1XiOrc1f7DuRzxKvhY_TdMAAB2VLZng",
  authDomain: "ekrhrh-3b0ac.firebaseapp.com",
  projectId: "ekrhrh-3b0ac",
  storageBucket: "ekrhrh-3b0ac.firebasestorage.app",
  messagingSenderId: "26901071809",
  appId: "1:26901071809:web:553943e0b5379fa5e25140",
  measurementId: "G-K8FSNKCK9X"
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
      const customDocId = `${title.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`;

      await setDoc(doc(db, "FavoritePosts", customDocId), {
          title: title,
          content: content,
          createdAt: serverTimestamp()
        });
        alert("保存されました!");
        form.reset();
      } catch (e) {
        console.error("保存中にエラー発生！:", e);
      }
});