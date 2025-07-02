<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js"></script> <!-- se quiser saldo -->

<!-- Inicialização do Firebase -->
<script>
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBGAmqoDIy08FOJSWlimG0yXwfKnBbUeas",
    authDomain: "tarefaporebook.firebaseapp.com",
    projectId: "tarefaporebook",
    storageBucket: "tarefaporebook.firebasestorage.app",
    messagingSenderId: "1040636896600",
    appId: "1:1040636896600:web:cd3003e00e45674ec5f12d"
  };

  // Inicializar Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
</script>
