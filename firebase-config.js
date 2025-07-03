<script type="module">
  // Importar Firebase via CDN ES Modules
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getDatabase, ref, onValue, set, get, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

  // Configurações do seu Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBGAmqoDIy08FOJSWlimG0yXwfKnBbUeas",
    authDomain: "tarefaporebook.firebaseapp.com",
    projectId: "tarefaporebook",
    storageBucket: "tarefaporebook.appspot.com",
    messagingSenderId: "1040636896600",
    appId: "1:1040636896600:web:cd3003e00e45674ec5f12d"
  };

  // Inicialização do Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  // Exemplo: carregar saldo do usuário
  onAuthStateChanged(auth, user => {
    if (user) {
      const saldoRef = ref(database, "usuarios/" + user.uid + "/saldo");
      onValue(saldoRef, snapshot => {
        const saldo = snapshot.val() || 0;
        const saldoElemento = document.getElementById("saldo");
        if (saldoElemento) {
          saldoElemento.textContent = saldo.toFixed(2) + " MZN";
        }
      });
    } else {
      alert("⚠️ Você precisa estar logado.");
      window.location.href = "login.html";
    }
  });

  // Exemplo: função para atualizar saldo
  window.concluirTarefa = function(valor) {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = ref(database, "usuarios/" + user.uid);
    get(userRef).then(snapshot => {
      const dados = snapshot.val() || {};
      const saldoAtual = dados.saldo || 0;
      update(userRef, { saldo: saldoAtual + valor });
      alert("✅ Tarefa concluída! +" + valor + " MZN");
    });
  };
</script>
