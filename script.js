/*
  Maria's Glad — main site logic
  Edit business details in SITE_CONFIG and product content in content/products.json.
*/

const SITE_CONFIG = {
  businessName: "Maria's Glad",
  messengerUrl: "https://m.me/mariyasglad",
  facebookUrl: "https://www.facebook.com/mariyasglad",
  phone: "+880 ----",
  address: "----",
  currency: "৳"
};

const translations = {
  bn: {
    nav: { home: "হোম", cakes: "কেকসমূহ", howToOrder: "অর্ডার করার নিয়ম", facebook: "Facebook", contact: "যোগাযোগ", orderNow: "অর্ডার করুন" },
    hero: {
      eyebrow: "Maria's Glad",
      title: "আপনার আনন্দকে আরও মিষ্টি করে তুলুন।",
      text: "আপনার পছন্দের স্বাদ, সাইজ ও ডিজাইন বেছে নিয়ে সহজেই অর্ডার তৈরি করুন।",
      browse: "কেক দেখুন", how: "কীভাবে অর্ডার করবেন?", note: "অর্ডার নিশ্চিত হবে Messenger-এ",
      cardLabel: "Made for your moments", cardTitle: "ভালোবাসা, স্বাদ আর সুন্দর ডিজাইন"
    },
    process: { 1: "কেক বাছাই", 2: "পছন্দ নির্বাচন", 3: "অর্ডার সামারি তৈরি", 4: "Messenger-এ নিশ্চিত" },
    cakes: { eyebrow: "Cake Collection", title: "আপনার পছন্দের কেক খুঁজে নিন", subtitle: "কেক বেছে নিয়ে “অর্ডার করুন” চাপুন।" },
    filters: { all: "সব", birthday: "জন্মদিন", custom: "কাস্টম" },
    common: { loading: "কেক লোড হচ্ছে...", noProducts: "এই ক্যাটাগরিতে এখন কোনো কেক নেই।" },
    order: { eyebrow: "Order Builder", title: "আপনার কেকটি নিজের মতো করে তৈরি করুন", subtitle: "আপনার পছন্দগুলো বেছে নিন। দাম সঙ্গে সঙ্গে আপডেট হবে.", cake: "কেক", flavor: "স্বাদ", size: "সাইজ", filling: "ফিলিং", decoration: "ডেকোরেশন" },
    form: {
      cakeLabel: "কেক বেছে নিন", flavorLabel: "ফ্লেভার", sizeLabel: "সাইজ", fillingLabel: "ফিলিং", decorationLabel: "ডেকোরেশন",
      message: "কেকের মেসেজ", name: "আপনার নাম", instructions: "বিশেষ নির্দেশনা",
      note: "চূড়ান্ত মূল্য ও ডেলিভারি সংক্রান্ত তথ্য Messenger-এ নিশ্চিত করা হবে।"
    },
    summary: {
      eyebrow: "Order Summary", title: "আপনার অর্ডার", estimated: "আনুমানিক মূল্য",
      confirm: "Final price will be confirmed on Messenger.", copy: "সামারি কপি করুন", messenger: "Messenger-এ অর্ডার নিশ্চিত করুন"
    },
    how: {
      eyebrow: "Simple Process", title: "কীভাবে অর্ডার করবেন?",
      1: { title: "কেক বাছাই করুন", text: "আপনার পছন্দের কেকটি বেছে নিন।" },
      2: { title: "আপনার পছন্দ দিন", text: "স্বাদ, সাইজ, ফিলিং ও ডেকোরেশন ঠিক করুন।" },
      3: { title: "অর্ডার সামারি তৈরি করুন", text: "আপনার তথ্য ও আনুমানিক মূল্য দেখে নিন।" },
      4: { title: "Messenger-এ পাঠিয়ে নিশ্চিত করুন", text: "সামারি কপি করে Messenger-এ চূড়ান্তভাবে নিশ্চিত করুন।" }
    },
    about: {
      eyebrow: "About Maria's Glad", title: "কেক শুধু খাবার নয়, একটি সুন্দর স্মৃতি।",
      text: "সুন্দর ডিজাইন, ভালো স্বাদ আর আপনার নিজের পছন্দ—এই তিনটি মিলেই তৈরি হয় এমন একটি কেক, যেটি বিশেষ দিনের গল্পের অংশ হয়ে থাকে।"
    },
    facebook: { title: "আমাদের Facebook-এর সর্বশেষ পোস্ট", text: "নতুন কেক, ডিজাইন ও অফার দেখতে আমাদের Facebook Page দেখুন।", button: "Facebook Page দেখুন" },
    contact: {
      eyebrow: "Contact", title: "যোগাযোগ করুন", messenger: "Messenger", messengerText: "অর্ডার ও দ্রুত যোগাযোগ",
      facebookText: "আমাদের Page দেখুন", phone: "Phone", address: "Address"
    },
    footer: { tagline: "কেক, যা স্মৃতিকে আরও মিষ্টি করে।" },
    product: { from: "শুরু", order: "অর্ডার করুন" },
    summaryLabels: { customer: "Customer", cake: "Cake", flavor: "Flavor", size: "Size", filling: "Filling", decoration: "Decoration", message: "Cake Message", instructions: "Special Instructions", estimated: "Estimated Price" },
    alerts: { copied: "সামারি কপি হয়েছে।", copyFailed: "কপি করা যায়নি—সামারিটি ম্যানুয়ালি কপি করুন।" }
  },
  en: {
    nav: { home: "Home", cakes: "Cakes", howToOrder: "How to Order", facebook: "Facebook", contact: "Contact", orderNow: "Order Now" },
    hero: {
      eyebrow: "Maria's Glad",
      title: "Make your moments a little sweeter.",
      text: "Choose your preferred flavor, size and design, then build your order in a few simple steps.",
      browse: "Browse Cakes", how: "How to Order?", note: "Order confirmation happens on Messenger",
      cardLabel: "Made for your moments", cardTitle: "Thoughtful design, good taste and your preferences"
    },
    process: { 1: "Choose a cake", 2: "Select preferences", 3: "Create order summary", 4: "Confirm on Messenger" },
    cakes: { eyebrow: "Cake Collection", title: "Find your perfect cake", subtitle: "Choose a cake and press “Order Now”." },
    filters: { all: "All", birthday: "Birthday", custom: "Custom" },
    common: { loading: "Loading cakes...", noProducts: "No cakes are available in this category right now." },
    order: { eyebrow: "Order Builder", title: "Build your cake your way", subtitle: "Choose your preferences and watch the estimated price update.", cake: "Cake", flavor: "Flavor", size: "Size", filling: "Filling", decoration: "Decoration" },
    form: {
      cakeLabel: "Choose a cake", flavorLabel: "Flavor", sizeLabel: "Size", fillingLabel: "Filling", decorationLabel: "Decoration",
      message: "Cake message", name: "Your name", instructions: "Special instructions",
      note: "Final price and delivery details will be confirmed on Messenger."
    },
    summary: {
      eyebrow: "Order Summary", title: "Your order", estimated: "Estimated Price",
      confirm: "Final price will be confirmed on Messenger.", copy: "Copy Summary", messenger: "Confirm on Messenger"
    },
    how: {
      eyebrow: "Simple Process", title: "How to Order?",
      1: { title: "Choose a cake", text: "Pick the cake that fits your occasion." },
      2: { title: "Add your preferences", text: "Choose flavor, size, filling and decoration." },
      3: { title: "Create your order summary", text: "Review your details and estimated price." },
      4: { title: "Send it on Messenger", text: "Copy the summary and confirm the order with us." }
    },
    about: {
      eyebrow: "About Maria's Glad", title: "A cake is more than food; it becomes part of a memory.",
      text: "Beautiful design, good taste and your own preferences come together to make a cake that feels personal to the moment."
    },
    facebook: { title: "Our latest Facebook posts", text: "Visit our Facebook Page for new cakes, designs and offers.", button: "Visit Facebook Page" },
    contact: {
      eyebrow: "Contact", title: "Get in touch", messenger: "Messenger", messengerText: "Orders and quick contact",
      facebookText: "Visit our Page", phone: "Phone", address: "Address"
    },
    footer: { tagline: "Cakes that make memories a little sweeter." },
    product: { from: "From", order: "Order Now" },
    summaryLabels: { customer: "Customer", cake: "Cake", flavor: "Flavor", size: "Size", filling: "Filling", decoration: "Decoration", message: "Cake Message", instructions: "Special Instructions", estimated: "Estimated Price" },
    alerts: { copied: "Summary copied.", copyFailed: "Could not copy. Please copy the summary manually." }
  }
};

let currentLanguage = localStorage.getItem("mariasGladLanguage") || "bn";
let products = [];
let selectedProductId = null;

const $ = (selector) => document.querySelector(selector);

function formatCurrency(value) {
  return `${SITE_CONFIG.currency} ${Number(value || 0).toLocaleString(currentLanguage === "bn" ? "bn-BD" : "en-US")}`;
}

function label(item) {
  return currentLanguage === "bn" ? item.nameBn : item.nameEn;
}

function description(item) {
  return currentLanguage === "bn" ? item.descriptionBn : item.descriptionEn;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const path = element.dataset.i18n.split(".");
    let value = translations[currentLanguage];
    path.forEach((key) => { value = value?.[key]; });
    if (typeof value === "string") element.textContent = value;
  });

  $("#language-toggle").textContent = currentLanguage === "bn" ? "English" : "বাংলা";
  renderProducts();
  renderOrderOptions();
  updateSummary();
}

async function loadProducts() {
  try {
    const response = await fetch("content/products.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Product file could not be loaded.");
    const data = await response.json();
    products = data.products || [];
    selectedProductId = products.find((product) => product.available)?.id || products[0]?.id || null;
    renderProducts();
    renderOrderOptions();
    updateSummary();
  } catch (error) {
    console.error(error);
    $("#products-grid").innerHTML = `<div class="loading-state">${translations[currentLanguage].common.noProducts}</div>`;
  }
}

function renderProducts(category = "all") {
  const grid = $("#products-grid");
  if (!grid) return;

  const visibleProducts = products.filter((product) =>
    product.available && (category === "all" || product.category === category)
  );

  if (!visibleProducts.length) {
    grid.innerHTML = `<div class="loading-state">${translations[currentLanguage].common.noProducts}</div>`;
    return;
  }

  grid.innerHTML = visibleProducts.map((product) => {
    const badge = product.badges?.length ? product.badges[0] : "";
    return `
      <article class="product-card reveal is-visible">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${escapeHtml(label(product))}" loading="lazy">
          ${badge ? `<span class="badge">${escapeHtml(badge)}</span>` : ""}
        </div>
        <div class="product-content">
          <h3>${escapeHtml(label(product))}</h3>
          <p>${escapeHtml(description(product))}</p>
          <div class="product-meta">
            <div class="product-price">
              <small>${translations[currentLanguage].product.from}</small>
              <strong>${formatCurrency(product.basePrice)}</strong>
            </div>
            <button class="product-order" type="button" data-product-id="${product.id}">
              ${translations[currentLanguage].product.order}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".product-order").forEach((button) => {
    button.addEventListener("click", () => selectProduct(button.dataset.productId, true));
  });
}

function populateSelect(selectId, items, placeholder) {
  const select = $(selectId);
  select.innerHTML = items.map((item, index) => `
    <option value="${escapeHtml(item.id)}" ${index === 0 ? "selected" : ""}>
      ${escapeHtml(label(item))}${item.extra ? ` (+${formatCurrency(item.extra)})` : ""}
    </option>
  `).join("");

  if (!items.length) {
    select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>`;
  }
}

function renderOrderOptions() {
  const product = products.find((item) => item.id === selectedProductId) || products[0];
  if (!product) return;

  $("#cake-select").innerHTML = products.filter((p) => p.available).map((item) =>
    `<option value="${item.id}" ${item.id === product.id ? "selected" : ""}>${escapeHtml(label(item))}</option>`
  ).join("");

  const emptyText = currentLanguage === "bn" ? "কোনো অপশন নেই" : "No options";
  populateSelect("#flavor-select", product.flavors || [], emptyText);
  populateSelect("#size-select", product.sizes || [], emptyText);
  populateSelect("#filling-select", product.fillings || [], emptyText);
  populateSelect("#decoration-select", product.decorations || [], emptyText);
}

function selectProduct(productId, shouldScroll = false) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  selectedProductId = product.id;
  renderOrderOptions();
  updateSummary();

  if (shouldScroll) {
    $("#order-builder").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getSelectedOption(list, id) {
  return (list || []).find((item) => item.id === id) || list?.[0];
}

function getOrderState() {
  const product = products.find((item) => item.id === $("#cake-select")?.value) || products.find((item) => item.id === selectedProductId);
  if (!product) return null;

  const flavor = getSelectedOption(product.flavors, $("#flavor-select")?.value);
  const size = getSelectedOption(product.sizes, $("#size-select")?.value);
  const filling = getSelectedOption(product.fillings, $("#filling-select")?.value);
  const decoration = getSelectedOption(product.decorations, $("#decoration-select")?.value);

  const price = (size?.price ?? product.basePrice) + (flavor?.extra || 0) + (filling?.extra || 0) + (decoration?.extra || 0);

  return {
    product, flavor, size, filling, decoration,
    message: $("#cake-message")?.value.trim() || "",
    customerName: $("#customer-name")?.value.trim() || "",
    instructions: $("#special-instructions")?.value.trim() || "",
    price
  };
}

function updateSummary() {
  const order = getOrderState();
  if (!order) return;

  const t = translations[currentLanguage].summaryLabels;
  const rows = [
    [t.customer, order.customerName || "—"],
    [t.cake, label(order.product)],
    [t.flavor, order.flavor ? label(order.flavor) : "—"],
    [t.size, order.size ? label(order.size) : "—"],
    [t.filling, order.filling ? label(order.filling) : "—"],
    [t.decoration, order.decoration ? label(order.decoration) : "—"],
    [t.message, order.message || "—"],
    [t.instructions, order.instructions || "—"]
  ];

  $("#summary-list").innerHTML = rows.map(([key, value]) => `
    <div class="summary-row"><span>${escapeHtml(key)}</span><span>${escapeHtml(value)}</span></div>
  `).join("");

  $("#estimated-price").textContent = formatCurrency(order.price);
  $("#messenger-order").href = SITE_CONFIG.messengerUrl;
}

function buildSummaryText() {
  const order = getOrderState();
  if (!order) return "";

  const t = translations[currentLanguage].summaryLabels;
  const lines = [
    `${SITE_CONFIG.businessName} — New Order`,
    `${t.customer}: ${order.customerName || "—"}`,
    `${t.cake}: ${label(order.product)}`,
    `${t.flavor}: ${order.flavor ? label(order.flavor) : "—"}`,
    `${t.size}: ${order.size ? label(order.size) : "—"}`,
    `${t.filling}: ${order.filling ? label(order.filling) : "—"}`,
    `${t.decoration}: ${order.decoration ? label(order.decoration) : "—"}`,
    `${t.message}: ${order.message || "—"}`,
    `${t.instructions}: ${order.instructions || "—"}`,
    `${t.estimated}: ${formatCurrency(order.price)}`,
    currentLanguage === "bn"
      ? "Final price will be confirmed on Messenger."
      : "Final price will be confirmed on Messenger."
  ];

  return lines.join("\n");
}

async function copySummary() {
  const summary = buildSummaryText();
  try {
    await navigator.clipboard.writeText(summary);
    showToast(translations[currentLanguage].alerts.copied);
    $("#copy-status").textContent = translations[currentLanguage].alerts.copied;
  } catch {
    $("#copy-status").textContent = translations[currentLanguage].alerts.copyFailed;
    showToast(translations[currentLanguage].alerts.copyFailed);
  }
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[character]));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setupNavigation() {
  const menuToggle = $("#menu-toggle");
  const nav = $("#site-nav");

  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  $("#language-toggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "bn" ? "en" : "bn";
    localStorage.setItem("mariasGladLanguage", currentLanguage);
    applyTranslations();
  });
}

function setupFilters() {
  $("#category-filters").addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
}

function setupOrderForm() {
  $("#order-form").addEventListener("input", updateSummary);
  $("#order-form").addEventListener("change", (event) => {
    if (event.target.id === "cake-select") {
      selectProduct(event.target.value);
    } else {
      updateSummary();
    }
  });
  $("#copy-summary").addEventListener("click", copySummary);
}

function setupSiteConfig() {
  const facebookLinks = ["#facebook-link", "#contact-facebook"];
  facebookLinks.forEach((selector) => {
    $(selector).href = SITE_CONFIG.facebookUrl;
  });

  $("#contact-messenger").href = SITE_CONFIG.messengerUrl;
  $("#contact-phone").href = `tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`;
  $("#phone-display").textContent = SITE_CONFIG.phone;
  $("#address-display").textContent = SITE_CONFIG.address;
  $("#current-year").textContent = new Date().getFullYear();
}

function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", async () => {
  setupNavigation();
  setupFilters();
  setupOrderForm();
  setupSiteConfig();
  applyTranslations();
  await loadProducts();
  setupRevealAnimation();
});
