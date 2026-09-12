# Maria's Glad

A lightweight, responsive Bengali-first cake business website built with plain HTML, CSS and JavaScript.

## 1. Project architecture

```text
marias-glad/
├── index.html
├── styles.css
├── script.js
├── netlify.toml
├── README.md
├── content/
│   └── products.json
├── admin/
│   ├── index.html
│   └── config.yml
└── assets/
    └── uploads/
```

### Why this architecture?

- No framework or build step is required for the public website.
- `script.js` contains site settings, translations and UI logic.
- `content/products.json` contains product data only.
- Decap CMS provides a simple admin UI for editing the product JSON.
- Netlify can deploy the repository directly from GitHub.
- The frontend never contains an admin password.

## 2. Where do I change things?

### Business name, Facebook, Messenger, phone and address

Open `script.js` and edit:

```js
const SITE_CONFIG = {
  businessName: "Maria's Glad",
  messengerUrl: "https://m.me/YOUR_PAGE_USERNAME",
  facebookUrl: "https://www.facebook.com/YOUR_PAGE_USERNAME",
  phone: "+880 1XXXXXXXXX",
  address: "আপনার ব্যবসার ঠিকানা এখানে দিন",
  currency: "৳"
};
```

Do not put secret API keys or passwords in this object.

### Product name, price, image and options

Open:

`content/products.json`

Each product contains:

- `nameBn`
- `nameEn`
- `descriptionBn`
- `descriptionEn`
- `image`
- `basePrice`
- `available`
- `badges`
- `flavors`
- `sizes`
- `fillings`
- `decorations`

After the CMS is configured, you normally edit products from `/admin/` instead of manually editing this JSON.

### Website translations

Open `script.js` and edit:

```js
const translations = {
  bn: { ... },
  en: { ... }
};
```

The site defaults to Bengali. The selected language is stored in `localStorage`.

## 3. Run locally

Because the site loads `content/products.json` with `fetch()`, do not open `index.html` directly with `file://`.

Use a small local web server instead.

If Python is installed:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

Or use the Live Server extension in VS Code.

## 4. Deploy to Netlify

### Step 1 — Create GitHub repository

1. Create a GitHub account if needed.
2. Create a new repository, for example `marias-glad`.
3. Keep the repository private if you do not want the source code public.
4. Put all files from this project into the repository.
5. Commit and push to the `main` branch.

### Step 2 — Import the repository into Netlify

In Netlify:

1. Open your team dashboard.
2. Choose **Add new project** / **Import an existing project**.
3. Choose GitHub.
4. Select the `marias-glad` repository.
5. Netlify will detect the static project.
6. Use:
   - Build command: leave empty
   - Publish directory: `.`
7. Deploy.

This project has no npm build process, so Netlify only needs to publish the repository root.

### Step 3 — Test before going live

Check:

- Bengali is the default language.
- English switch works.
- Language preference survives a refresh.
- Mobile navigation opens/closes.
- Category filters work.
- Every product opens in the order builder.
- Size/flavor/filling/decoration change the estimated price.
- Copy Summary works on HTTPS.
- Messenger button opens the configured URL.
- Facebook button opens the configured URL.
- Images load.
- There is no horizontal scrolling on mobile.
- Keyboard focus is visible.

## 5. Custom domain and HTTPS

After deployment:

1. Open your Netlify project.
2. Go to the domain settings area.
3. Add your custom domain.
4. Follow Netlify's DNS instructions.
5. Netlify provides HTTPS for the configured domain once DNS is correctly connected.

Do not put a separate private SSL certificate or secret in the repository.

## 6. Admin / CMS architecture

### Important 2026 decision

This project uses **Decap CMS with the GitHub backend**.

Netlify's current documentation says **Git Gateway is deprecated** and new Git Gateway configurations are not recommended. Therefore this starter intentionally does not depend on Git Gateway.

Decap's current GitHub backend lets CMS users work against a GitHub repository, but the user must have write access to that repository.

For a single-owner business, the simplest secure setup is:

- one private GitHub repository;
- one GitHub account for the owner/admin;
- that GitHub account has write access to the repository;
- Decap CMS is available at `/admin/`;
- no password is stored in this website's JavaScript.

### Configure the CMS

Open:

`admin/config.yml`

Change:

```yml
repo: YOUR_GITHUB_USERNAME/marias-glad
```

to your actual GitHub repository path.

Example:

```yml
repo: maria-example/marias-glad
```

Commit that change to GitHub.

### Admin access

The admin is controlled by the GitHub account/repository permission model rather than a fake username/password inside this project.

Do not add a public registration form.

Do not put a GitHub token, OAuth secret or password in `config.yml`.

### Open the CMS

After deployment:

`https://YOUR-DOMAIN.com/admin/`

Log in through the configured authentication flow.

## 7. Adding and editing products

From `/admin/`:

1. Open **Products**.
2. Open **Cake Products**.
3. Edit an existing product or add another item to the list.
4. Change names, descriptions, image, base price and availability.
5. Add/remove sizes, flavors, fillings and decorations.
6. Add badges such as Popular, New, Bestseller or Seasonal.
7. Publish/save the change.

The CMS updates `content/products.json` in GitHub.

Because Netlify is connected to GitHub, a repository change triggers a new deployment. The public site then reads the updated product data.

## 8. Product image uploads

The CMS is configured with:

```yml
media_folder: "assets/uploads"
public_folder: "/assets/uploads"
```

Uploaded product images are stored in the repository under `assets/uploads/`.

For performance, use reasonably sized WebP/JPEG images rather than huge original camera files.

## 9. Facebook integration

This site does **not** scrape Facebook.

For the initial version, set the official Page URL in:

```js
SITE_CONFIG.facebookUrl
```

The Facebook section simply links customers to the Page.

If you later want an embedded official Facebook Page component, use Meta's current supported Page/plugin/embed mechanism and place it into the Facebook section. Do not build a scraper or copy Facebook posts into the site manually.

If Meta changes or restricts public Page-feed/embed functionality, the safest fallback is the Page link already included here.

## 10. Customer ordering flow

1. Customer browses cakes.
2. Customer presses **অর্ডার করুন / Order Now**.
3. The selected cake is loaded into the order builder.
4. Customer selects flavor, size, filling and decoration.
5. Customer enters name, cake message and special instructions.
6. Estimated price updates in real time.
7. Customer presses **সামারি কপি করুন / Copy Summary**.
8. Customer opens Messenger.
9. Customer pastes the summary and confirms details with the business.
10. The business confirms the final price and delivery/pickup details.

The website does not pretend to send a Messenger message automatically. Automatic messaging would require an actual supported Meta integration.

## 11. Security checklist

- Never hard-code admin passwords.
- Never put private API secrets in `script.js`.
- Use Netlify environment variables for server-side secrets if a future backend needs them.
- Keep the GitHub repository permissions restricted.
- Do not enable public CMS registration.
- Use HTTPS.
- Keep Decap/Netlify dependencies current.
- Do not store unnecessary customer personal information.
- Do not scrape Facebook.
- Treat the estimated price as an estimate until the business confirms it.

## 12. Future upgrades

Good next upgrades, when the business needs them:

1. Real product photography.
2. Delivery-area rules and delivery charges.
3. Business hours / order cutoff settings.
4. A dedicated site settings file managed by the CMS.
5. Order notification workflow.
6. Analytics with privacy-conscious configuration.
7. Search/filter improvements as the catalogue grows.
8. A supported Meta integration if the business needs more automation.
9. Structured data / LocalBusiness SEO after real business details are available.

## 13. CMS note

Decap CMS is intentionally used here without a custom server. If you later need multi-admin roles, audit-heavy workflows, inventory, customer accounts, or a full order database, a headless CMS such as Sanity or a dedicated backend can be considered.

For the current one-admin, small-business product catalogue, keeping the frontend static and the content in Git is easier to understand and maintain.


## 14. Requested website updates

### Header / mobile

The Order button and language switch are now outside the hamburger navigation. On mobile they remain visible beside the Maria's Glad brand and menu button.

### Order Builder

The customer-facing builder now uses four main option groups:

1. Cake Flavor
2. Size
3. Filling
4. Decoration

Cake and flavor are merged into one dropdown. The existing product/flavor data structure is preserved, so the current product CMS workflow does not need to be rebuilt.

### Order Summary files

The summary now has:

- Copy Summary
- Download Image
- Download PDF
- Confirm on Messenger

The Messenger button copies the summary first and then opens the configured Messenger URL. A normal static `m.me` link cannot attach a generated file automatically, so the customer can paste the copied summary and attach the downloaded image/PDF if desired.

The PDF is generated as an image-based PDF so Bengali text remains readable without requiring a custom Bengali PDF font.

### Cake Gallery

A new `content/gallery.json` file is connected to Decap CMS.

In `/admin/` you will see:

**Cake Gallery → Gallery Images**

You can upload images, edit titles/alt text, and publish. Uploaded images are stored under `assets/uploads/`.

The gallery is intentionally separate from product data, so it can contain inspiration/design photos that are not necessarily products.

### Replace the gallery placeholders

The included gallery images are lightweight placeholders only. Replace them from:

**Admin → Cake Gallery → Gallery Images**

Then publish.

### PDF dependency

The PDF button uses jsPDF from a CDN. If the CDN is unavailable, the Image download remains available and the site shows a fallback message instead of failing silently.

The public site remains plain HTML/CSS/JavaScript.
