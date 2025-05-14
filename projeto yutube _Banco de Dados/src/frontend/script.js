let token = "";

async function signUp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:3000/user/sign-up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (res.ok) {
    alert("Usuário cadastrado com sucesso!");
  } else {
    alert("Erro ao cadastrar usuário.");
  }
}

async function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (res.ok) {
    token = data.token;
    document.getElementById("auth").style.display = "none";
    document.getElementById("videoManager").style.display = "block";
  } else {
    alert("Erro no login: " + data.message);
  }
}

async function createVideo() {
  const title = document.getElementById("videoTitle").value;
  const description = document.getElementById("videoDescription").value;

  const res = await fetch("http://localhost:3000/video/create-video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ title, description }),
  });

  if (res.ok) {
    alert("Vídeo criado com sucesso!");
    getVideos();
  } else {
    alert("Erro ao criar vídeo.");
  }
}

async function getVideos() {
  const res = await fetch("http://localhost:3000/video/get-videos", {
    method: "GET",
    headers: { Authorization: token },
  });

  const data = await res.json();
  const videoList = document.getElementById("videoList");
  videoList.innerHTML = "";

  if (res.ok) {
    data.videos.forEach((video) => {
      const li = document.createElement("li");
      li.textContent = `${video.title} - ${video.description}`;
      videoList.appendChild(li);
    });
  } else {
    alert("Erro ao carregar vídeos.");
  }
}

async function searchVideos() {
  const search = document.getElementById("searchQuery").value;

  const res = await fetch(
    `http://localhost:3000/video/search-videos?search=${search}`
  );
  const data = await res.json();
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  if (res.ok) {
    data.videos.forEach((video) => {
      const li = document.createElement("li");
      li.textContent = `${video.title} - ${video.description}`;
      searchResults.appendChild(li);
    });
  } else {
    alert("Erro ao buscar vídeos.");
  }
}
