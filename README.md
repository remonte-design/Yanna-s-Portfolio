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

3. Copy `.env.example` to `.env` in the project root, or copy
   `Backend/.env.example` to `Backend/.env`. Set the MySQL username and
   password in the copy. The backend checks the project root first, then the
   `Backend` folder.
4. Configure MySQL and start the API with `npm run dev` (or `npm start`). The
   frontend is also served at <http://localhost:3000>.

The backend health endpoint is available at `GET /api/health`. It returns a
successful response only when the server can query MySQL.

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
interest illustrations, EaterList project preview, floral Pictures artwork,
and pink background pattern. The floral artwork uses a transparent-background
copy of its single-file Canva export so its original colors remain intact over
the hero background. The selected Canva portfolio initial and portrait are
exported separately from the design elements. Education and experience details
remain placeholders until their details are provided. Project-category filters
and the day/night theme switch are interactive, and the skills section reflects
the interests described in the portfolio. Add the CV file and project details
before enabling their downloads or adding project links.
