/* ===========================================
   MYER-SYSTEMS eMARKET — MAIN JS
=========================================== */

// ── DATA ──────────────────────────────────
const categories = [
  { name: "Electronics & Gadgets", slug: "electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=300&fit=crop", count: 14 },
  { name: "Home & Living", slug: "home-living", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop", count: 18 },
  { name: "Fashion & Apparel", slug: "fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop", count: 12 },
  { name: "Beauty & Wellness", slug: "beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop", count: 15 },
  { name: "Sports & Outdoors", slug: "sports", image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vciUyMHNwb3J0fGVufDB8fDB8fHww", count: 10 },
  { name: "Kitchen & Dining", slug: "kitchen", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop", count: 16 },
  { name: "Baby & Kids", slug: "baby-kids", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300&h=300&fit=crop", count: 11 },
  { name: "Office & Stationery", slug: "office", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop", count: 9 },
  { name: "Garden & Outdoor", slug: "garden", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop", count: 13 },
  { name: "Pet Supplies", slug: "pets", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=300&fit=crop", count: 8 },
];

const products = [
  // Electronics
  { id: "e1", name: "Wireless Noise-Cancelling Headphones", slug: "wireless-headphones", category: "Electronics & Gadgets", categorySlug: "electronics", price: 79.99, originalPrice: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop"], description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable ear cups for all-day listening.", rating: 4.7, reviews: 234, badge: "sale", inStock: true },
  { id: "e2", name: "Smart Watch Fitness Tracker Pro", slug: "smart-watch-pro", category: "Electronics & Gadgets", categorySlug: "electronics", price: 149.00, originalPrice: null, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"], description: "Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and 7-day battery life.", rating: 4.5, reviews: 189, badge: "hot", inStock: true },
  { id: "e3", name: "Portable Bluetooth Speaker", slug: "bluetooth-speaker", category: "Electronics & Gadgets", categorySlug: "electronics", price: 45.99, originalPrice: 59.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop"], description: "Waterproof portable speaker with 360° sound, 12-hour playtime, and built-in microphone.", rating: 4.3, reviews: 156, badge: "sale", inStock: true },
  { id: "e4", name: "USB-C Fast Charging Hub", slug: "usb-c-hub", category: "Electronics & Gadgets", categorySlug: "electronics", price: 34.99, originalPrice: null, image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop"], description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and 100W power delivery pass-through.", rating: 4.6, reviews: 98, badge: "new", inStock: true },
  // Home
  { id: "h1", name: "Minimalist Ceramic Vase Set", slug: "ceramic-vase-set", category: "Home & Living", categorySlug: "home-living", price: 42.00, originalPrice: 55.00, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop"], description: "Set of 3 modern ceramic vases in matte finish, perfect for dried flowers and contemporary decor.", rating: 4.8, reviews: 67, badge: "sale", inStock: true },
  { id: "h2", name: "Luxury Scented Candle Collection", slug: "scented-candles", category: "Home & Living", categorySlug: "home-living", price: 38.00, originalPrice: null, image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&h=600&fit=crop"], description: "Hand-poured soy candles in lavender, vanilla, and sandalwood fragrances. 60-hour burn time.", rating: 4.9, reviews: 312, badge: "hot", inStock: true },
  { id: "h3", name: "Woven Cotton Throw Blanket", slug: "cotton-throw", category: "Home & Living", categorySlug: "home-living", price: 65.00, originalPrice: null, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop"], description: "Soft 100% cotton throw blanket with fringe detail. Machine washable, 50x60 inches.", rating: 4.4, reviews: 145, badge: null, inStock: true },
  { id: "h4", name: "Bamboo Wall Shelf Organizer", slug: "bamboo-shelf", category: "Home & Living", categorySlug: "home-living", price: 29.99, originalPrice: 39.99, image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&h=600&fit=crop"], description: "Floating bamboo shelf with 3 tiers, perfect for bathroom or living room organization.", rating: 4.2, reviews: 89, badge: "sale", inStock: true },
  // Fashion
  { id: "f1", name: "Classic Leather Crossbody Bag", slug: "leather-crossbody", category: "Fashion & Apparel", categorySlug: "fashion", price: 89.00, originalPrice: 120.00, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop"], description: "Genuine leather crossbody bag with adjustable strap, multiple compartments, and antique brass hardware.", rating: 4.6, reviews: 201, badge: "sale", inStock: true },
  { id: "f2", name: "Aviator Sunglasses UV400", slug: "aviator-sunglasses", category: "Fashion & Apparel", categorySlug: "fashion", price: 24.99, originalPrice: null, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop"], description: "Classic aviator style with UV400 protection, polarized lenses, and lightweight metal frame.", rating: 4.3, reviews: 445, badge: "hot", inStock: true },
  { id: "f3", name: "Merino Wool Beanie Hat", slug: "merino-beanie", category: "Fashion & Apparel", categorySlug: "fashion", price: 19.99, originalPrice: null, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop"], description: "Ultra-soft merino wool beanie, breathable and warm for all seasons.", rating: 4.7, reviews: 178, badge: "new", inStock: true },
  // Beauty
  { id: "b1", name: "Organic Face Serum Vitamin C", slug: "vitamin-c-serum", category: "Beauty & Wellness", categorySlug: "beauty", price: 28.00, originalPrice: 35.00, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop"], description: "Brightening vitamin C serum with hyaluronic acid for radiant, youthful skin.", rating: 4.8, reviews: 523, badge: "sale", inStock: true },
  { id: "b2", name: "Natural Bamboo Makeup Brush Set", slug: "makeup-brushes", category: "Beauty & Wellness", categorySlug: "beauty", price: 22.50, originalPrice: null, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop"], description: "12-piece makeup brush set with eco-friendly bamboo handles and synthetic bristles.", rating: 4.5, reviews: 267, badge: "new", inStock: true },
  { id: "b3", name: "Aromatherapy Essential Oil Kit", slug: "essential-oils", category: "Beauty & Wellness", categorySlug: "beauty", price: 32.99, originalPrice: null, image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop"], description: "Set of 8 pure essential oils including lavender, eucalyptus, tea tree, and peppermint.", rating: 4.6, reviews: 334, badge: "hot", inStock: true },
  // Sports
  { id: "s1", name: "Yoga Mat Premium Non-Slip", slug: "yoga-mat", category: "Sports & Outdoors", categorySlug: "sports", price: 39.99, originalPrice: 49.99, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop"], description: "Extra thick 6mm yoga mat with alignment lines, non-slip surface, and carrying strap.", rating: 4.7, reviews: 189, badge: "sale", inStock: true },
  { id: "s2", name: "Stainless Steel Water Bottle", slug: "water-bottle", category: "Sports & Outdoors", categorySlug: "sports", price: 24.99, originalPrice: null, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop"], description: "Double-wall insulated 32oz bottle keeps drinks cold 24hrs or hot 12hrs.", rating: 4.8, reviews: 567, badge: "hot", inStock: true },
  { id: "s3", name: "Resistance Bands Set", slug: "resistance-bands", category: "Sports & Outdoors", categorySlug: "sports", price: 18.99, originalPrice: null, image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=600&h=600&fit=crop"], description: "5-piece resistance band set with varying tension levels, door anchor, and travel bag.", rating: 4.4, reviews: 234, badge: "new", inStock: true },
  // Kitchen
  { id: "k1", name: "Japanese Chef Knife 8-inch", slug: "chef-knife", category: "Kitchen & Dining", categorySlug: "kitchen", price: 55.00, originalPrice: 75.00, image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&h=600&fit=crop"], description: "High-carbon stainless steel chef knife with ergonomic pakkawood handle.", rating: 4.9, reviews: 412, badge: "sale", inStock: true },
  { id: "k2", name: "Bamboo Cutting Board Set", slug: "cutting-boards", category: "Kitchen & Dining", categorySlug: "kitchen", price: 32.00, originalPrice: null, image: "https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1594226801341-41427b4e5c22?w=600&h=600&fit=crop"], description: "Set of 3 organic bamboo cutting boards in graduated sizes with juice grooves.", rating: 4.5, reviews: 178, badge: null, inStock: true },
  { id: "k3", name: "Pour-Over Coffee Maker Glass", slug: "coffee-maker", category: "Kitchen & Dining", categorySlug: "kitchen", price: 28.99, originalPrice: null, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop"], description: "Borosilicate glass pour-over coffee maker with reusable stainless steel filter.", rating: 4.7, reviews: 289, badge: "hot", inStock: true },
  // Baby & Kids
  { id: "bk1", name: "Soft Stacking Blocks Educational", slug: "stacking-blocks", category: "Baby & Kids", categorySlug: "baby-kids", price: 18.99, originalPrice: null, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop"], description: "BPA-free silicone stacking blocks with numbers, animals, and textures for sensory play.", rating: 4.8, reviews: 156, badge: "new", inStock: true },
  { id: "bk2", name: "Organic Cotton Baby Blanket", slug: "baby-blanket", category: "Baby & Kids", categorySlug: "baby-kids", price: 35.00, originalPrice: 45.00, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop"], description: "Super soft GOTS-certified organic cotton muslin blanket, 47x47 inches.", rating: 4.9, reviews: 234, badge: "sale", inStock: true },
  // Office
  { id: "o1", name: "Ergonomic Desk Organizer Wood", slug: "desk-organizer", category: "Office & Stationery", categorySlug: "office", price: 42.00, originalPrice: 55.00, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop"], description: "Walnut wood desk organizer with phone stand, pen holder, and cable management.", rating: 4.6, reviews: 123, badge: "sale", inStock: true },
  { id: "o2", name: "LED Desk Lamp Adjustable", slug: "desk-lamp", category: "Office & Stationery", categorySlug: "office", price: 36.99, originalPrice: null, image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop"], description: "Touch-control LED desk lamp with 5 color modes, 10 brightness levels, and USB charging port.", rating: 4.5, reviews: 198, badge: "hot", inStock: true },
  // Garden
  { id: "g2", name: "Self-Watering Planter Box", slug: "self-watering-planter", category: "Garden & Outdoor", categorySlug: "garden", price: 27.99, originalPrice: null, image: "https://unsplash.com/photos/a-desk-with-a-lamp-and-some-books-on-it-SsGglvy7Cm8", images: ["https://unsplash.com/photos/a-desk-with-a-lamp-and-some-books-on-it-SsGglvy7Cm8"], description: "Modern rectangular planter with built-in water reservoir, perfect for herbs and flowers.", rating: 4.3, reviews: 167, badge: "new", inStock: true },
  // Pets
  { id: "p1", name: "Interactive Dog Puzzle Toy", slug: "dog-puzzle-toy", category: "Pet Supplies", categorySlug: "pets", price: 19.99, originalPrice: null, image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=600&h=600&fit=crop"], description: "Level 2 difficulty puzzle feeder that stimulates your dog's mind and slows down eating.", rating: 4.6, reviews: 289, badge: "hot", inStock: true },
  { id: "p2", name: "Cat Tower Scratching Post", slug: "cat-tower", category: "Pet Supplies", categorySlug: "pets", price: 54.99, originalPrice: 69.99, image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop", images: ["https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&h=600&fit=crop"], description: "Multi-level cat tree with sisal scratching posts, plush platforms, and dangling toys.", rating: 4.5, reviews: 178, badge: "sale", inStock: true },
];

// ── STORE (Cart + Wishlist) ──────────────
const Store = {
  cart: JSON.parse(localStorage.getItem('ms_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('ms_wishlist') || '[]'),

  save() {
    localStorage.setItem('ms_cart', JSON.stringify(this.cart));
    localStorage.setItem('ms_wishlist', JSON.stringify(this.wishlist));
    this.updateBadges();
  },

  addToCart(productId, qty = 1) {
    const existing = this.cart.find(i => i.id === productId);
    if (existing) { existing.qty += qty; }
    else { this.cart.push({ id: productId, qty }); }
    this.save();
    const p = products.find(p => p.id === productId);
    showToast(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`, `"${p ? p.name.slice(0,28) + '…' : 'Item'}" added to cart`);
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.save();
  },

  updateQty(productId, qty) {
    if (qty < 1) { this.removeFromCart(productId); return; }
    const item = this.cart.find(i => i.id === productId);
    if (item) { item.qty = qty; this.save(); }
  },

  cartTotal() {
    return this.cart.reduce((sum, item) => {
      const p = products.find(p => p.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },

  cartCount() { return this.cart.reduce((s, i) => s + i.qty, 0); },

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx === -1) {
      this.wishlist.push(productId);
      showToast(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/></svg>`, 'Added to wishlist');
    } else {
      this.wishlist.splice(idx, 1);
    }
    this.save();
    return idx === -1;
  },

  isInWishlist(productId) { return this.wishlist.includes(productId); },

  updateBadges() {
    const cnt = this.cartCount();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = cnt;
      el.style.display = cnt > 0 ? 'flex' : 'none';
    });
    const wCnt = this.wishlist.length;
    document.querySelectorAll('.wishlist-badge').forEach(el => {
      el.textContent = wCnt;
      el.style.display = wCnt > 0 ? 'flex' : 'none';
    });
  }
};

// ── TOAST ──────────────────────────────────
function showToast(iconHtml, msg) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = iconHtml + `<span>${msg}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// ── STAR RENDERER ───────────────────────────
function starsHtml(rating) {
  let html = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= Math.floor(rating);
    html += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`;
  }
  return html + '</div>';
}

// ── PRODUCT CARD HTML ────────────────────────
function productCardHtml(p) {
  const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
  const badgeClass = p.badge === 'sale' ? 'badge-sale' : p.badge === 'hot' ? 'badge-hot' : 'badge-new';
  const badgeLabel = p.badge === 'sale' ? 'Sale' : p.badge === 'hot' ? 'Hot' : 'New';
  const inWishlist = Store.isInWishlist(p.id);
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-img-wrap">
      <a href="pages/product.html?slug=${p.slug}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </a>
      ${p.badge ? `<span class="product-badge ${badgeClass}">${badgeLabel}</span>` : ''}
      <div class="product-actions">
        <button class="product-action-btn wishlist-toggle-btn ${inWishlist ? 'active' : ''}" data-id="${p.id}" title="Add to Wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
        </button>
        <button class="product-action-btn quick-view-btn" data-id="${p.id}" title="Quick View">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </button>
      </div>
    </div>
    <div class="product-body">
      <p class="product-category-tag">${p.category}</p>
      <a href="pages/product.html?slug=${p.slug}" class="product-name">${p.name}</a>
      <div class="star-row">
        ${starsHtml(p.rating)}
        <span class="review-count">(${p.reviews})</span>
      </div>
      <div class="price-row">
        <span class="price-now">$${p.price.toFixed(2)}</span>
        ${p.originalPrice ? `<span class="price-was">$${p.originalPrice.toFixed(2)}</span><span class="price-off">-${discount}%</span>` : ''}
      </div>
      <button class="add-cart-btn add-to-cart-btn" data-id="${p.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
        Add to Cart
      </button>
    </div>
  </div>`;
}

// For sub-pages: fix relative path
function productCardHtmlShop(p) {
  const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
  const badgeClass = p.badge === 'sale' ? 'badge-sale' : p.badge === 'hot' ? 'badge-hot' : 'badge-new';
  const badgeLabel = p.badge === 'sale' ? 'Sale' : p.badge === 'hot' ? 'Hot' : 'New';
  const inWishlist = Store.isInWishlist(p.id);
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-img-wrap">
      <a href="product.html?slug=${p.slug}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </a>
      ${p.badge ? `<span class="product-badge ${badgeClass}">${badgeLabel}</span>` : ''}
      <div class="product-actions">
        <button class="product-action-btn wishlist-toggle-btn ${inWishlist ? 'active' : ''}" data-id="${p.id}" title="Wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
        </button>
        <button class="product-action-btn quick-view-btn" data-id="${p.id}" title="Quick View">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </button>
      </div>
    </div>
    <div class="product-body">
      <p class="product-category-tag">${p.category}</p>
      <a href="product.html?slug=${p.slug}" class="product-name">${p.name}</a>
      <div class="star-row">
        ${starsHtml(p.rating)}
        <span class="review-count">(${p.reviews})</span>
      </div>
      <div class="price-row">
        <span class="price-now">$${p.price.toFixed(2)}</span>
        ${p.originalPrice ? `<span class="price-was">$${p.originalPrice.toFixed(2)}</span><span class="price-off">-${discount}%</span>` : ''}
      </div>
      <button class="add-cart-btn add-to-cart-btn" data-id="${p.id}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
        Add to Cart
      </button>
    </div>
  </div>`;
}

// ── HERO SLIDER ─────────────────────────────
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;
  let current = 0;

  function goTo(i) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  document.querySelector('.hero-nav-btn.prev')?.addEventListener('click', () => goTo(current - 1));
  document.querySelector('.hero-nav-btn.next')?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  setInterval(() => goTo(current + 1), 5000);
}

// ── MOBILE NAV ──────────────────────────────
function initMobileNav() {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('mobile-nav');
  btn?.addEventListener('click', () => nav?.classList.toggle('open'));
}

// ── PRODUCT CARD EVENTS ─────────────────────
function bindProductCardEvents(container) {
  container?.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      Store.addToCart(btn.dataset.id);
    });
  });
  container?.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const added = Store.toggleWishlist(btn.dataset.id);
      const icon = btn.querySelector('svg');
      btn.classList.toggle('active', added);
      if (icon) icon.setAttribute('fill', added ? 'currentColor' : 'none');
    });
  });
}

// ── CATEGORY DROPDOWN POPULATION ────────────
function populateCatDropdown(id, prefix = '') {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = categories.map(c => `
    <a href="${prefix}pages/shop.html?category=${c.slug}">
      <span>${c.name}</span>
      <span class="cat-count">(${c.count})</span>
    </a>`).join('');
}

function populateCatDropdownShop(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = categories.map(c => `
    <a href="shop.html?category=${c.slug}">
      <span>${c.name}</span>
      <span class="cat-count">(${c.count})</span>
    </a>`).join('');
}

// ── SEARCH ──────────────────────────────────
function initSearch(prefix = '') {
  document.querySelectorAll('.search-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const q = form.querySelector('input')?.value.trim();
      if (q) window.location.href = `${prefix}pages/shop.html?q=${encodeURIComponent(q)}`;
    });
  });
}

// ── INIT BADGES ─────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Store.updateBadges();
  initHeroSlider();
  initMobileNav();
});
