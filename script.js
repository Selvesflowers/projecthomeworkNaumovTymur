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
// API CLIENT (Django backend)
// =========================
const API_BASE = localStorage.getItem("apiBaseUrl") || "http://127.0.0.1:8000/api";
const TOKEN_KEY = "authToken";

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token) {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
}

async function apiRequest(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  const token = getToken();
  if (token) headers.Authorization = `Token ${token}`;

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (response.status === 204) return null;

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message =
      data.detail ||
      data.non_field_errors?.join(" ") ||
      data.password_confirm?.join(" ") ||
      data.username?.join(" ") ||
      data.password?.join(" ") ||
      "API request failed.";
    throw new Error(message);
  }
  return data;
}

function money(value) {
  return `$${Number(value || 0).toFixed(2)}`;
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
          <button class="add" data-slug="${p.id}">Add to cart</button>
          <div class="product-message" id="productMessage"></div>
        </div>
      </div>
    `;

    const addButton = productRoot.querySelector(".add");
    const productMessage = productRoot.querySelector("#productMessage");
    addButton.addEventListener("click", async () => {
      if (!getToken()) {
        window.location.href = "register.html";
        return;
      }
      const qty = Number(productRoot.querySelector(".qty").value.split(" ")[0]);
      productMessage.textContent = "Adding...";
      try {
        await apiRequest("/cart/items/", {
          method: "POST",
          body: JSON.stringify({ product_slug: p.id, quantity: qty }),
        });
        productMessage.textContent = "Added to cart.";
      } catch (error) {
        productMessage.textContent = error.message;
      }
    });
  }
}

// =========================
// REGISTER (register.html)
// =========================
const form = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
const authStatus = document.querySelector("#authStatus");
const registerSubmit = document.querySelector("#registerSubmit");
const logoutSubmit = document.querySelector("#logoutSubmit");

function setError(fieldId, message) {
  const small = document.querySelector(`.error[data-for="${fieldId}"]`);
  const input = document.querySelector(`#${fieldId}`);
  if (small) small.textContent = message || "";
  if (input) input.classList.toggle("input-error", !!message);
}

function validateUsername(v) {
  v = (v || "").trim();
  if (!v) return "Username is required";
  if (v.length < 3) return "Username must be at least 3 characters";
  return "";
}

function validateEmail(v) {
  v = (v || "").trim();
  if (!v) return "";
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

async function refreshAuthStatus() {
  if (!authStatus) return;
  if (!getToken()) {
    authStatus.textContent = "You are not signed in.";
    return;
  }
  try {
    const user = await apiRequest("/auth/me/");
    authStatus.textContent = `Signed in as ${user.username}.`;
  } catch (error) {
    setToken("");
    authStatus.textContent = "Session expired. Sign in again.";
  }
}

async function submitLogin() {
  const usernameMsg = validateUsername(usernameInput.value);
  const passMsg = validatePassword(passInput.value);

  setError("username", usernameMsg);
  setError("password", passMsg);

  if (usernameMsg || passMsg) return;

  authStatus.textContent = "Signing in...";
  const data = await apiRequest("/auth/login/", {
    method: "POST",
    body: JSON.stringify({
      username: usernameInput.value.trim(),
      password: passInput.value,
    }),
  });
  setToken(data.token);
  await refreshAuthStatus();
}

async function submitRegister() {
  const usernameMsg = validateUsername(usernameInput.value);
  const emailMsg = validateEmail(emailInput.value);
  const passMsg = validatePassword(passInput.value);

  setError("username", usernameMsg);
  setError("email", emailMsg);
  setError("password", passMsg);

  if (usernameMsg || emailMsg || passMsg) return;

  authStatus.textContent = "Creating account...";
  const data = await apiRequest("/auth/register/", {
    method: "POST",
    body: JSON.stringify({
      username: usernameInput.value.trim(),
      email: emailInput.value.trim(),
      password: passInput.value,
      password_confirm: passInput.value,
    }),
  });
  setToken(data.token);
  await refreshAuthStatus();
}

if (emailInput) emailInput.addEventListener("input", () => setError("email", ""));
if (passInput) passInput.addEventListener("input", () => setError("password", ""));
if (usernameInput) usernameInput.addEventListener("input", () => setError("username", ""));

if (form && usernameInput && passInput) {
  refreshAuthStatus();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      await submitLogin();
    } catch (error) {
      authStatus.textContent = error.message;
    }
  });

  registerSubmit.addEventListener("click", async () => {
    try {
      await submitRegister();
    } catch (error) {
      authStatus.textContent = error.message;
    }
  });

  logoutSubmit.addEventListener("click", async () => {
    try {
      if (getToken()) await apiRequest("/auth/logout/", { method: "POST" });
    } catch (error) {
      console.warn(error);
    } finally {
      setToken("");
      await refreshAuthStatus();
    }
  });
}

// =========================
// CART (cart.html)
// =========================
const cartItemsRoot = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const cartStatus = document.querySelector("#cartStatus");

async function loadCart() {
  if (!cartItemsRoot) return;
  if (!getToken()) {
    cartStatus.textContent = "Sign in to view your cart.";
    cartItemsRoot.innerHTML = "";
    return;
  }

  try {
    cartStatus.textContent = "Loading cart...";
    const cart = await apiRequest("/cart/");
    cartStatus.textContent = cart.items.length ? "" : "Cart is empty.";
    cartTotal.textContent = money(cart.total);
    cartItemsRoot.innerHTML = cart.items
      .map(
        (item) => `
          <div class="cart-item">
            <img src="${item.product.image}" alt="${item.product.name}">
            <div>
              <h3>${item.product.name}</h3>
              <p>${money(item.product.price)} / ${item.product.volume_ml} ml</p>
            </div>
            <div class="cart-actions">
              <input type="number" min="1" value="${item.quantity}" data-id="${item.id}">
              <button type="button" data-remove="${item.id}">Remove</button>
            </div>
          </div>
        `
      )
      .join("");
  } catch (error) {
    cartStatus.textContent = error.message;
  }
}

if (cartItemsRoot) {
  loadCart();

  cartItemsRoot.addEventListener("change", async (e) => {
    if (!e.target.matches("input[data-id]")) return;
    await apiRequest(`/cart/items/${e.target.dataset.id}/`, {
      method: "PATCH",
      body: JSON.stringify({ quantity: Number(e.target.value) }),
    });
    await loadCart();
  });

  cartItemsRoot.addEventListener("click", async (e) => {
    if (!e.target.matches("button[data-remove]")) return;
    await apiRequest(`/cart/items/${e.target.dataset.remove}/`, {
      method: "DELETE",
    });
    await loadCart();
  });
}

// =========================
// CHECKOUT (checkout.html)
// =========================
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutStatus = document.querySelector("#checkoutStatus");

if (checkoutForm) {
  checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!getToken()) {
      window.location.href = "register.html";
      return;
    }

    checkoutStatus.textContent = "Creating order...";
    try {
      const order = await apiRequest("/checkout/", {
        method: "POST",
        body: JSON.stringify({
          customer_name: document.querySelector("#customerName").value,
          customer_email: document.querySelector("#customerEmail").value,
          customer_phone: document.querySelector("#customerPhone").value,
          delivery_address: document.querySelector("#deliveryAddress").value,
          comment: document.querySelector("#orderComment").value,
        }),
      });
      checkoutForm.reset();
      checkoutStatus.textContent = `Order #${order.id} created. Total: ${money(order.total)}.`;
    } catch (error) {
      checkoutStatus.textContent = error.message;
    }
  });
}
