<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyBGAmqoDIy08FOJSWlimG0yXwfKnBbUeas",
    authDomain: "tarefaporebook.firebaseapp.com",
    projectId: "tarefaporebook",
    storageBucket: "tarefaporebook.appspot.com",
    messagingSenderId: "1040636896600",
    appId: "1:1040636896600:web:cd3003e00e45674ec5f12d"
  };

  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);

  // Verificar usuário logado e buscar saldo
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const ref = firebase.database().ref("usuarios/" + user.uid + "/saldo");
      ref.on("value", snap => {
        const saldo = snap.val() || 0;
        document.getElementById("saldo").innerText = saldo.toFixed(2) + " MZN";
      });
    } else {
      window.location.href = "login.html";
    }
  });
</script>
