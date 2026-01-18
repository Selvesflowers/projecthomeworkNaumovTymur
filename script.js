console.log("script.js loaded");

// =========================
// THEME (all pages)
// =========================
const THEME_KEY = "theme";

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
}

applyTheme(localStorage.getItem(THEME_KEY) || "light");

const toggleThemeBtn = document.querySelector("#toggleThemeBtn");
if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  });
}

// =========================
// MODAL (index.html only)
// =========================
const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector("#openModal");
const closeModalBtn = document.querySelector("#modal .close");

function openModal() {
  if (!modal) return;
  modal.style.display = "flex";
}
function closeModal() {
  if (!modal) return;
  modal.style.display = "none";
}

if (modal && openModalBtn && closeModalBtn) {
  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// =========================
// DATA (used on second.html + product.html)
// =========================
const products = [
  {
    id: "black-afgano",
    name: "Black Afgano",
    price: 135,
    img: "nasomatto_blackafgano_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… blaženosti. Tato temná vůně evokuje účinky hašiše té nejlepší kvality. Je výsledkem honby za dosažením dočasného stavu blaženosti."
  },
  {
    id: "fantomas",
    name: "Fantomas",
    price: 135,
    img: "nasomatto-product-fantomas-cr_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně... prohřešku. Tento parfém je zdánlivou stopou k odhalení zločinu, jenž byl spáchán s lehkostí elegantní preciznosti."
  },
  {
    id: "baraonda",
    name: "Baraonda",
    price: 135,
    img: "nasomatto-product-baraonda-cr_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… alkoholu. Baraonda v sobě mísí vůni a chuť skotské single malt, lucidního snění a reality. Tato olfaktorická smršť, která vznikla jako óda na alkohol, vás obklopí směsí aromatických nót a vůní starých sudů nasáklých skotskou."
  },
  {
    id: "sadonaso",
    name: "Sadonaso",
    price: 135,
    img: "nase-cr_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně... rozkoše. Parfém Sadonaso vznikl z přesvědčení, že jediným opravdovým smyslem života je tělesná rozkoš. S touto smyslnou, dřevitě gurmánskou vůní s lehce živočišným podtónem objevíte skryté touhy, o kterých nemáte potuchy."
  },
  {
    id: "nudiflorium",
    name: "Nudiflorium",
    price: 135,
    img: "nasomatto-product-nudiflorum-cr_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… intimity. Bezprostřední, primitivní, smyslná. Nudiflorum je interpretací pocitu, který vyvolává dotek. Letmý dotek obnažené kůže, který pronikne povrchem a stane se vaší součástí."
  },
  {
    id: "pardon",
    name: "Pardon",
    price: 135,
    img: "nasomatto-pardon_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… šarmu. Sebevědomá vůně, ze které vyzařuje největší možná dávka mužné elegance a šarmu."
  },
  {
    id: "silver-musk",
    name: "Silver Musk",
    price: 135,
    img: "nasomatto-silvermusk_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… superhrdiny. Vůně, která evokuje magnetickou sílu superhrdiny."
  },
  {
    id: "absinth",
    name: "Absinth",
    price: 135,
    img: "nasomatto-absinth_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… šílenství. Vůně, která dokáže vyvolat nezodpovědné chování i stav šílenství."
  },
  {
    id: "blamage",
    name: "Blamage",
    price: 135,
    img: "nasomatto-blamage_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… omylu. Tato vůně je neuváženým a politováníhodným výtvorem, který vznikl na základě špatného úsudku."
  },
  {
    id: "narcotic-v",
    name: "Narcotic V.",
    price: 135,
    img: "nasomatto-narcoticv_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… ženské smyslnosti. Tato hypnotická vůně je čistou esencí smyslnosti a ženskosti. Má extrémně opojnou a návykovou sílu."
  },
  {
    id: "duro",
    name: "Duro",
    price: 135,
    img: "nasomatto-duro_retina.1000x1600.shrink_only.q85.jpg",
    desc: "Vůně… mužské potence. Cílem této vůně je umocnit všechny projevy mužské síly."
  }
];

// =========================
// NASOMATTO LIST (second.html)
// =========================
const perfumeRow = document.querySelector("#perfumeRow");
const searchInput = document.querySelector("#search");
const clearSearchBtn = document.querySelector("#clearSearch");
const loader = document.querySelector("#loader");

function showLoader(ms = 250) {
  if (!loader) return;
  loader.hidden = false;
  setTimeout(() => (loader.hidden = true), ms);
}

function renderCards(list) {
  if (!perfumeRow) return;

  perfumeRow.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "perfume-card";
    card.dataset.id = p.id;

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
    `;

    perfumeRow.appendChild(card);
  });
}

function applySearch() {
  if (!searchInput) return;
  const q = searchInput.value.trim().toLowerCase();
  showLoader(200);

  const filtered = products.filter((p) => p.name.toLowerCase().includes(q));
  setTimeout(() => renderCards(filtered), 200);
}

if (perfumeRow) {
  renderCards(products);

  // клик по карточке -> product.html?id=...
  perfumeRow.addEventListener("click", (e) => {
    const card = e.target.closest(".perfume-card");
    if (!card) return;

    const id = card.dataset.id;
    window.location.href = "product.html?id=" + encodeURIComponent(id);
  });

  if (searchInput) searchInput.addEventListener("input", applySearch);

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      showLoader(150);
      setTimeout(() => renderCards(products), 150);
    });
  }
}

// =========================
// PRODUCT PAGE (product.html)
// =========================
// В product.html должен быть блок <div id="product"></div>
const productRoot = document.querySelector("#product");
if (productRoot) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = products.find((x) => x.id === id);

  if (!p) {
    productRoot.innerHTML = "<p>Product not found.</p>";
  } else {
    productRoot.innerHTML = `
      <div class="product-layout">
        <div class="left">
          <div class="brand">NASOMATTO •</div>
          <h1 class="title">${p.name}</h1>
          <div class="subtitle">Extrait de Parfum</div>
          <p class="desc">${p.desc}</p>
        </div>

        <div class="center">
          <img class="product-img" src="${p.img}" alt="${p.name}">
        </div>

        <div class="right">
          <div class="meta">
            <span>30 ml</span>
            <span class="price">$${p.price}</span>
          </div>
          <select class="qty">
            <option>1 ks</option>
            <option>2 ks</option>
            <option>3 ks</option>
          </select>
          <button class="add">Add to cart</button>
        </div>
      </div>
    `;
  }
}

// =========================
// REGISTER (register.html)
// =========================
const form = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");

function setError(fieldId, message) {
  const small = document.querySelector(`.error[data-for="${fieldId}"]`);
  const input = document.querySelector(`#${fieldId}`);
  if (small) small.textContent = message || "";
  if (input) input.classList.toggle("input-error", !!message);
}

function validateEmail(v) {
  v = (v || "").trim();
  if (!v) return "Email is required";
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  if (!ok) return "Enter a valid email (example@mail.com)";
  return "";
}

function validatePassword(v) {
  v = (v || "").trim();
  if (!v) return "Password is required";
  if (v.length < 6) return "Password must be at least 6 characters";
  return "";
}

if (emailInput) emailInput.addEventListener("input", () => setError("email", ""));
if (passInput) passInput.addEventListener("input", () => setError("password", ""));

if (form && emailInput && passInput) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailMsg = validateEmail(emailInput.value);
    const passMsg = validatePassword(passInput.value);

    setError("email", emailMsg);
    setError("password", passMsg);

    if (!emailMsg && !passMsg) {
      alert("Signed in (demo).");
      emailInput.value = "";
      passInput.value = "";
      setError("email", "");
      setError("password", "");
    }
  });
}