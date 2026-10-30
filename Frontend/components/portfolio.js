export function mountPortfolio(container) {
  container.innerHTML = `
    <div class="portfolio-site">
      <header class="portfolio-header">
        <a class="portfolio-brand" href="#home" aria-label="Yanna home">
          <img src="/assets/images/canva/brand-strawcat.png" alt="" />
        </a>
        <nav class="portfolio-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experiences">Experiences</a>
          <a href="#projects">Project</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <button class="portfolio-theme" type="button" aria-label="Switch to night theme" aria-pressed="false">
          <span class="theme-label">DAY</span>
          <span class="theme-icon" aria-hidden="true">☼</span>
        </button>
      </header>

      <main>
        <section class="portfolio-hero patterned-section" id="home" aria-labelledby="portfolio-title">
          <div class="hero-copy">
            <p class="hero-kicker">Welcome to my</p>
            <h1 id="portfolio-title" aria-label="Portfolio" tabindex="-1">
              <img src="/assets/images/canva/portfolio-initial.png" alt="" />
              <span>ortfolio</span>
            </h1>
            <p class="hero-intro">Curious by nature. Creative by heart.</p>
          </div>
          <img
            class="hero-pictures-artwork"
            src="/assets/images/canva/hero-pictures-group-transparent.png"
            alt="Pink flowers beside a green Pictures card"
          />
        </section>

        <section class="about-section" id="about" aria-labelledby="about-title">
          <div class="profile-heading">
            <img
              class="profile-photo"
              src="/assets/images/canva/profile-photo.png"
              alt="Riyanna Jelaine E. Monte"
            />
            <div class="profile-name">
              <p>My name is</p>
              <h2>Riyanna Jelaine E. Monte</h2>
            </div>
          </div>

          <div class="about-grid">
            <article class="about-note">
              <h3 id="about-title">About Me</h3>
              <p>
                I'm an Information Technology student passionate about combining
                technology and creativity. I enjoy exploring web development,
                UI/UX design, and digital illustration to transform ideas into
                meaningful and visually engaging experiences. Driven by
                curiosity and a love for learning, I continuously strive to
                improve my skills and create designs that are both functional
                and purposeful.
              </p>
            </article>

            <article class="basic-information">
              <h3>Basic Information</h3>
              <dl>
                <div><dt>Nickname:</dt><dd>Yanna</dd></div>
                <div><dt>Birthdate:</dt><dd>November 04, 2005</dd></div>
                <div><dt>Location:</dt><dd>Pacific Hills Subdivision</dd></div>
                <div><dt>Contact Number:</dt><dd><a href="tel:+639944655011">0994 465 5011</a></dd></div>
                <div><dt>Professional Title:</dt><dd>IT Student</dd></div>
                <div><dt>Email:</dt><dd><a href="mailto:remonte@gmail.com">remonte@gmail.com</a></dd></div>
              </dl>
            </article>
          </div>

          <section class="interests-section" aria-labelledby="interests-title">
            <h3 id="interests-title">Personal Interest</h3>
            <div class="interest-grid">
              <article class="interest-card">
                <img class="interest-icon" src="/assets/images/canva/interest-creativity.png" alt="" />
                <h4>Creativity</h4>
                <p>Bringing ideas to life through imagination, innovation, and unique perspectives.</p>
              </article>
              <article class="interest-card">
                <img class="interest-icon" src="/assets/images/canva/interest-development.png" alt="" />
                <h4>Development</h4>
                <p>Transforming ideas into functional and innovative digital solutions through coding and problem-solving.</p>
              </article>
              <article class="interest-card">
                <img class="interest-icon" src="/assets/images/canva/interest-crafts.png" alt="" />
                <h4>Arts &amp; Crafts</h4>
                <p>Expressing creativity through handmade creations, artistic designs, and attention to detail.</p>
              </article>
              <article class="interest-card">
                <img class="interest-icon" src="/assets/images/canva/interest-leadership.png" alt="" />
                <h4>Leadership</h4>
                <p>Inspiring teamwork, taking initiative, and guiding others toward shared goals.</p>
              </article>
            </div>
          </section>

          <div class="cv-action">
            <button type="button" disabled title="Add your CV file to enable this download">Download CV</button>
            <span>Add your CV file to enable download</span>
          </div>
        </section>

        <section class="journey-section patterned-section" id="experiences" aria-labelledby="journey-title">
          <h2 id="journey-title">My Journey</h2>
          <div class="journey-book">
            <article class="journey-page">
              <h3>Education</h3>
              <p>Education details coming soon.</p>
            </article>
            <article class="journey-page">
              <h3>Experience</h3>
              <p>Experience details coming soon.</p>
            </article>
          </div>
        </section>

        <section class="projects-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Featured Projects</h2>
          <div class="project-filters" role="group" aria-label="Filter projects by category">
            <button type="button" data-project-filter="all" aria-pressed="true">All Projects</button>
            <button type="button" data-project-filter="prelims" aria-pressed="false">Prelims</button>
            <button type="button" data-project-filter="midterms" aria-pressed="false">Midterms</button>
            <button type="button" data-project-filter="finals" aria-pressed="false">Finals</button>
          </div>
          <div class="project-grid">
            <article class="project-card" data-project-category="prelims">
              <img src="/assets/images/canva/project-eatenlist.png" alt="EaterList project website preview" />
              <div class="project-card-copy">
                <span class="project-tag">Prelims</span>
                <h3>EaterList</h3>
                <p>Project details coming soon.</p>
              </div>
            </article>
          </div>
          <p class="project-empty-state" role="status" hidden>No projects in this category yet.</p>
        </section>

        <section class="skills-section patterned-section" id="skills" aria-labelledby="technical-skills-title">
          <h2 id="technical-skills-title">Technical Skills</h2>
          <div class="skills-grid">
            <article class="skill-card">
              <h3>Web Development</h3>
              <p>Exploring ways to build useful digital experiences.</p>
            </article>
            <article class="skill-card">
              <h3>UI/UX Design</h3>
              <p>Interested in thoughtful, user-friendly interfaces.</p>
            </article>
            <article class="skill-card">
              <h3>Digital Illustration</h3>
              <p>Bringing visual ideas to life through creative design.</p>
            </article>
          </div>
        </section>
      </main>

      <footer class="portfolio-contact" id="contact">
        <h2>Contact</h2>
        <p>Have a question or want to connect?</p>
        <a href="mailto:remonte@gmail.com">remonte@gmail.com</a>
      </footer>
    </div>
  `;

  const themeToggle = container.querySelector(".portfolio-theme");
  const themeLabel = container.querySelector(".theme-label");
  const themeIcon = container.querySelector(".theme-icon");
  const projectFilters = container.querySelector(".project-filters");
  const projectCards = [...container.querySelectorAll(".project-card")];
  const emptyState = container.querySelector(".project-empty-state");

  if (
    !(themeToggle instanceof HTMLButtonElement) ||
    !(themeLabel instanceof HTMLElement) ||
    !(themeIcon instanceof HTMLElement)
  ) {
    throw new Error("The portfolio theme control could not be found.");
  }

  if (!(projectFilters instanceof HTMLElement) || !(emptyState instanceof HTMLElement)) {
    throw new Error("The project filters could not be initialized.");
  }

  themeToggle.addEventListener("click", () => {
    const site = container.querySelector(".portfolio-site");
    if (!(site instanceof HTMLElement)) {
      throw new Error("The portfolio theme could not be changed.");
    }

    const isNight = site.dataset.theme !== "night";
    site.dataset.theme = isNight ? "night" : "day";
    themeToggle.setAttribute("aria-pressed", String(isNight));
    themeToggle.setAttribute(
      "aria-label",
      isNight ? "Switch to day theme" : "Switch to night theme",
    );
    themeLabel.textContent = isNight ? "NIGHT" : "DAY";
    themeIcon.textContent = isNight ? "☾" : "☼";
  });

  projectFilters.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const filter = event.target.closest("button[data-project-filter]");
    if (!(filter instanceof HTMLButtonElement)) {
      return;
    }

    const category = filter.dataset.projectFilter;
    if (!category) {
      throw new Error("The selected project category is missing.");
    }

    let visibleProjects = 0;
    projectFilters.querySelectorAll("button[data-project-filter]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button === filter));
    });

    projectCards.forEach((card) => {
      const matches = category === "all" || card.dataset.projectCategory === category;
      card.hidden = !matches;
      visibleProjects += Number(matches);
    });

    emptyState.hidden = visibleProjects > 0;
  });
}
