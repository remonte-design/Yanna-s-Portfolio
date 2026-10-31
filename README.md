# Portfolio starter

The project is split into two workspace areas:

- `Frontend/` contains the static HTML page, a loading-screen component, modular
  CSS/JavaScript assets, and the animated portfolio illustration. The loading
  illustration animates the cat walking to and eating three strawberries in
  sequence before the portfolio card lifts out and enlarges at center.
- `Backend/` contains the Express app, MySQL configuration, API routes, and
  server entry point.

## Requirements

- Node.js 18 or newer
- MySQL Server only if you want to run the backend API

## Run the website

1. From the project root, run `npm run frontend`.
2. Open <http://localhost:4173>.
3. If port 4173 is in use, choose another port in PowerShell, for example:

   ```powershell
   $env:FRONTEND_PORT = "4180"
   npm run frontend
   ```

The standalone frontend server uses only Node.js, so you can run and preview
the portfolio without installing packages or configuring MySQL.

## Run the backend API (optional)

1. Install the Node.js dependencies from the project root with `npm install`.
2. Create a MySQL database, for example:

   ```sql
   CREATE DATABASE my_portfolio;
   ```

3. Copy `.env.example` to `.env` in the project root and set the MySQL username
   and password. The backend checks the project root first, then the `Backend`
   folder.
4. Configure MySQL and start the API with `npm run dev` (or `npm start`). The
   frontend is also served at <http://localhost:3000>.

The backend health endpoint is available at `GET /api/health`. It returns a
successful response only when the server can query MySQL.

The contact postcard sends messages through Gmail SMTP on the backend. In your
local `.env`, set `SMTP_USER` to the Gmail account that will send the messages,
`SMTP_PASSWORD` to an App Password for that account, and `CONTACT_EMAIL` to the
inbox that should receive them (the default is `remonte@gmail.com`). Create a
Google App Password after enabling 2-Step Verification; do not put it in
frontend files or commit it. The sample `.env.example` contains placeholders
only. Start the backend with `npm run dev`
and either use its frontend at <http://localhost:3000> or run `npm run frontend`
at port 4173; the development frontend proxies contact submissions to the
backend. Without valid Gmail SMTP settings, the form reports that sending
failed instead of claiming success.

## Deploy to Firebase Hosting

The Firebase project `riyanna-portfolio` is configured to host the static
portfolio and route `/api/contact` to a Node.js 22 Cloud Function. The existing
MySQL-backed API is not deployed with Hosting.

1. Install the Firebase CLI and sign in with an account that has access to
   `riyanna-portfolio`:

   ```powershell
   npm install --global firebase-tools
   firebase login
   ```

2. From the project root, configure the three Cloud Function secrets. Use a
   Google App Password for `SMTP_PASSWORD`, not your normal Gmail password:

   ```powershell
   firebase functions:secrets:set SMTP_USER
   firebase functions:secrets:set SMTP_PASSWORD
   firebase functions:secrets:set CONTACT_EMAIL
   ```

   Enter the sending Gmail address for `SMTP_USER` and the receiving inbox
   (default: `remonte@gmail.com`) for `CONTACT_EMAIL`.

3. Deploy Hosting and the contact function:

   ```powershell
   firebase deploy --only hosting,functions
   ```

The live URL is printed by the CLI after deployment. Firebase Functions
deployment may require the Blaze billing plan and the Cloud Functions, Cloud
Build, and Artifact Registry APIs enabled in the Google Cloud project.

The loading composition follows the Figma intro frame (1336 × 1000 px). Its
illustration stage is 1440 × 450 px and intentionally extends past the frame's
right edge. The frontend scales the composition to the available viewport and
reflows it on portrait screens. The updated palette uses `#FDE8EC` for the
canvas, `#6B3040` for the main heading, and `#D4607A` for accent text.
Typography uses Cormorant Garamond and Inter from Google Fonts, with local
serif and system-font fallbacks.

The illustration uses the exported Figma artwork for Strawcat, the strawberries,
and the portfolio folder layers. The measured positions are: cat at (285, 186),
three 32 × 43 px strawberries at (557, 285.81), (621.21, 286), and (717,
246.21), and the 330 × 220 px portfolio folder at (773, 129). Positions are
relative to the illustration stage. The cat eats the strawberries in order
before the homepage paper lifts and scales toward the center. Click or focus
and activate the paper card to expand a pink reveal into the portfolio page.
The profile, interests, and contact details are based on the provided portfolio
design. The Canva exports supply the Strawcat brand mark, profile photo,
interest illustrations, floral artwork, and pink
background pattern. The supplied notebook illustration frames the About Me
text, with a transparent background so its paper, paperclip, and tabs sit
cleanly over the page. Leckerli One is bundled under its SIL Open Font License
for the About, Personal Interest, name-label, and basic-information headings.
The user-provided pink interest icons have transparent backgrounds. The About
and basic-information cards are widened to keep their text readable and inside
their artwork. The hero cycles through the five supplied personal photos
every six seconds, with dimmed previews above and below the active photo; all
three frames stay within the hero. The About portrait overlaps the top edge of
its panel with a decorative curved arrow leading toward the name. The
user-supplied flower artwork is placed at both edges of the hero. The large
"Welcome to my Portfolio" heading follows the Canva Light mode layout without
the tagline; its initial is cleaned of the white export effect and the word
uses natural letter spacing with a soft shadow. The selected Canva portrait is
exported separately from the design elements. The My Journey section uses the
provided open-book illustration with separate, vertically scrollable education
and experience timelines. Timeline entries follow the supplied reference.
The supplied pixel-art Yanna border separates the journey and featured-project
sections with a seamless horizontal loop; it becomes static for reduced-motion
preferences.
The Featured Projects section follows the supplied Canva layout, including its
background artwork, category filters, project search, and responsive project
cards. Project cards open a keyboard-accessible modal with project details,
previous/next navigation, and a dark lavender backdrop.
Prelims includes Berry in Bloom and Strawcat, with the supplied traditional
drawings and Strawcat's Photoshop, badge, horizontal-logo, and vertical-logo
images available in the activity gallery. The modal arrows navigate images
within the selected activity and are disabled when it contains one image.
Midterms includes BrewHaven Cafe (Activity 3) and Trick or Treat (Activity 4),
with the supplied sketches, finished artwork, and BrewHaven design materials
available in their activity galleries.
Each activity from Prelims, Midterms, and Finals also links to its Google Drive
folder from the activity modal.
EaterList remains in the journey timeline but is no longer listed as a featured
project.
The contact footer links to the portfolio owner's CCC email, Facebook,
GitHub, and Instagram, alongside Psalm 73:26 and a back-to-top link.
The “Let's Work Together” postcard validates a visitor's name, email, subject,
and message, then sends it through the backend Gmail SMTP service. The visitor's
email is set as the reply-to address so replies go directly back to them.
On the static Firebase Hosting site, if the contact API is not deployed, the
form opens a prefilled email draft to `remonte@gmail.com` instead; visitors must
send that draft from their email app.
The CV button downloads the supplied resume image directly. Project-category
filters, search, the view-all reset, and the day/night theme switch are
interactive, and the skills section displays the three reference titles on
clickable closed file folders. Opening a folder reveals its matching
background-removed portfolio spread at a larger size over the soft pink skills
background; click outside the cutout image or use the close button to return
to the folders.
Project details can be added before enabling project links.

The "My Journey" heading uses the Amoresa Regular webfont from
[FontDownloader](https://fontdownloader.net/amoresa-font/), which lists the
font as free for personal, non-commercial use. A commercial license is required
for commercial use.
