# Consider the Future — Advocacy Campaign Website

> **“Our future isn’t yours to risk.”**  
> *A youth-led global advocacy initiative founded by Oscar Zhou.*

An evidence-based, single-page advocacy website investigating the unconstrained acceleration of artificial intelligence, its existential and environmental toll, and its direct impacts on the United Nations Sustainable Development Goals (SDGs 3, 9, 13, and 16).

Designed with a **human, editorial aesthetic**—prioritizing typographical restraint, tangible documentary textures, smooth physics, parallax storytelling, and verified scientific evidence over generic AI clichés.

---

## Key Features

1. **Editorial Human Design**:
   - High-contrast typography pairing: `Newsreader` (investigative serif), `Plus Jakarta Sans` (humanist grotesk), and `JetBrains Mono` (journalistic data monospace).
   - Atmospheric broadsheet film texture for an authentic, tactile ink-on-paper feeling.
   - Restrained palette: deep obsidian carbon (`#0c0d10`), warm ivory (`#f6f5f1`), parchment sand (`#d8cca3`), and warning ember (`#e84734`).

2. **Parallax Motion & Real-World Evidence**:
   - Lenis smooth inertial scrolling integrated with GSAP ScrollTrigger.
   - Parallax background typographic watermarks and depth offsets.
   - Dynamic animated statistics counter tracking:
     - **945 TWh**: Projected AI data center electricity demand by 2030 (International Energy Agency).
     - **362 Critical Incidents**: Documented in 2025 alone (+55% YoY, Stanford AI Incident Database).
     - **Mid-2030 Horizon**: Catastrophic risk threshold identified in the *AI 2027* research inquiry.
     - **17 SDGs Impacted**: Health (SDG 3), Infrastructure (SDG 9), Climate (SDG 13), and Strong Institutions (SDG 16).

3. **Multi-Perspective Matrix**:
   - Interactive stakeholder switcher comparing the lived stakes across **Youth**, **Local Communities**, **Governments & Regulators**, and **Frontier AI Labs**.

4. **Strategic Precedents**:
   - Spotlight on grassroots public advocacy (such as *Siliconversations*, *ControlAI*, and the *Future of Life Institute*) using clarity and satire to break the tech industry's aura of inevitability.

5. **Tri-Level Action Blueprint**:
   - Concrete pathways for change at the **Personal**, **Community**, and **Global / Systemic** levels.

6. **Interactive Declaration & Letter Generator**:
   - Dynamic letter generator tailored by demographic and region with instant clipboard copy and a reactive global signature counter.

7. **Scholarly Harvard Reference Ledger**:
   - Rigorous citations for every statistic and legal precedent.

---

## Deployment to GitHub Pages

The project is pre-configured for standard GitHub Pages deployment with relative base paths (`./`) and zero extra server dependencies.

### Option A: Automated GitHub Actions (Recommended)

1. Create a repository on GitHub (e.g. `Consider_The_Future`).
2. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Consider the Future campaign"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site upon every push!

### Option B: Deploy from the `/docs` Folder

If you prefer classic branch deployment without GitHub Actions:
1. Run the docs build script:
   ```bash
   npm run build:docs
   ```
2. Commit and push:
   ```bash
   git add docs
   git commit -m "Build docs for GitHub Pages"
   git push origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch **`main`** and folder **`/docs`**, then click **Save**.

Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server with hot reload
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Author & Attribution

- **Founder & Campaigner:** Oscar Zhou
- **Campaign:** *Consider the Future*
- **Slogan:** *“Our future isn’t yours to risk.”*
