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
          <div class="hero-copy" data-scroll-reveal>
            <p class="hero-kicker">Welcome to my</p>
            <h1 id="portfolio-title" aria-label="Portfolio" tabindex="-1">
              <img src="/assets/images/canva/portfolio-initial-clean.png" alt="" />
              <span>ortfolio</span>
            </h1>
          </div>
          <img class="hero-flower hero-flower--left" src="/assets/images/canva/hero-flower-attached.png" alt="" />
          <img class="hero-flower hero-flower--right" src="/assets/images/canva/hero-flower-attached.png" alt="" />
          <div
            class="hero-carousel"
            role="region"
            aria-label="Photos"
            aria-roledescription="carousel"
          >
            <img
              class="hero-carousel-slide is-active"
              src="/assets/images/carousel/memory-01-celebration.jpg"
              alt="Yanna celebrating a school achievement with a friend"
              aria-hidden="false"
            />
            <img
              class="hero-carousel-slide"
              src="/assets/images/carousel/memory-02-garden.jpg"
              alt="Yanna relaxing in a garden"
              aria-hidden="true"
            />
            <img
              class="hero-carousel-slide"
              src="/assets/images/carousel/memory-03-friends.jpg"
              alt="Yanna spending time with her friends"
              aria-hidden="true"
            />
            <img
              class="hero-carousel-slide"
              src="/assets/images/carousel/memory-04-campus.jpg"
              alt="Yanna posing by a campus window"
              aria-hidden="true"
            />
            <img
              class="hero-carousel-slide"
              src="/assets/images/carousel/memory-05-view.jpg"
              alt="Yanna enjoying a mountain view"
              aria-hidden="true"
            />
          </div>
        </section>

        <section class="about-section" id="about" aria-labelledby="about-title">
          <div class="profile-heading" data-scroll-reveal>
            <img
              class="profile-photo"
              src="/assets/images/canva/profile-photo.png"
              alt="Riyanna Jelaine E. Monte"
            />
            <svg class="profile-arrow" viewBox="0 0 128 72" aria-hidden="true">
              <path d="M4 20c7 18 17 38 33 30 15-8 5-20-4-13-9 8 9 22 30 19 17-3 34-18 50-37" />
              <path d="m95 20 19-4-2 20" />
            </svg>
            <div class="profile-name">
              <p>My name is</p>
              <h2>Riyanna Jelaine E. Monte</h2>
            </div>
          </div>

          <div class="about-grid" data-scroll-reveal>
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

          <section class="interests-section" aria-labelledby="interests-title" data-scroll-reveal>
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
            <a
              class="cv-download"
              href="/assets/cv/Riyanna-Monte-CV.png"
              download="Riyanna-Monte-CV.png"
            >
              Download CV
            </a>
          </div>
        </section>

        <section class="journey-section patterned-section" id="experiences" aria-labelledby="journey-title">
          <h2 id="journey-title" aria-label="My Journey">
            <span class="journey-title-text" data-scroll-reveal aria-hidden="true">My Journey</span>
          </h2>
          <div class="journey-spread" data-scroll-reveal>
            <img
              class="journey-book-art"
              src="/assets/images/canva/journey-open-book.png"
              alt=""
              aria-hidden="true"
            />
            <section class="journey-page journey-page--education" aria-labelledby="journey-education-title">
              <h3 id="journey-education-title">Education</h3>
              <div class="journey-timeline" role="region" tabindex="0" aria-label="Education timeline; scroll to see all entries">
                <ol class="journey-events">
                  <li class="journey-event">
                    <time datetime="2017-04-01">April 1, 2017</time>
                    <h4>Elementary Education</h4>
                    <p class="journey-organization">Golden Wisdom School of Calamba Inc.</p>
                    <p>Built firm foundations of my academic journey, developing curiosity, creativity, and a love for learning.</p>
                  </li>
                  <li class="journey-event">
                    <time datetime="2021-07-17">July 17, 2021</time>
                    <h4>Junior High School</h4>
                    <p class="journey-organization">Palo-Alto Integrated School</p>
                    <p>Explored new interests, strengthened my academic skills, and discovered my passion for creativity and technology.</p>
                  </li>
                  <li class="journey-event">
                    <time datetime="2021-07-17">July 17, 2021</time>
                    <h4>Senior High School</h4>
                    <p class="journey-organization">STI College Calamba</p>
                    <p>Gained foundational knowledge in business, information technology, and entrepreneurship while developing analytical and leadership skills.</p>
                  </li>
                  <li class="journey-event">
                    <time datetime="2024">Academic Year 2024–Ongoing</time>
                    <h4>Undergraduate – BS Information Technology</h4>
                    <p>Pursuing my passion for technology through software development, system analysis, and UI/UX design, combining technical knowledge with creative problem-solving.</p>
                  </li>
                  <li class="journey-event">
                    <time datetime="2026-07-18">July 18, 2026</time>
                    <h4>National Certificate II (CSS)</h4>
                    <p>Demonstrated practical skills and technical competencies through a nationally recognized certification, strengthening my professional qualifications.</p>
                  </li>
                </ol>
              </div>
            </section>
            <section class="journey-page journey-page--experience" aria-labelledby="journey-experience-title">
              <h3 id="journey-experience-title">Experience</h3>
              <div class="journey-timeline" role="region" tabindex="0" aria-label="Experience timeline; scroll to see all entries">
                <ol class="journey-events">
                  <li class="journey-event">
                    <time datetime="2024-11-18">November 18, 2024</time>
                    <h4>CCC Hackathon 2024</h4>
                    <p class="journey-organization">City College of Calamba</p>
                    <p>Participated in a competitive programming event that challenged my problem-solving, critical thinking, and teamwork skills while developing innovative solutions under time constraints.</p>
                  </li>
                  <li class="journey-event">
                    <time datetime="2025-06-01">June 1–3, 2025</time>
                    <h4>UPLB Game Jam 2025</h4>
                    <p class="journey-organization">Jeepney Jam</p>
                    <p>Collaborated in designing Jeepney Jam, a Tagalog-based game inspired by Filipino culture, combining creative game design, programming, and interactive gameplay.</p>
                  </li>
                  <li class="journey-event">
                    <time datetime="2025">Web Development (A.Y. 2025)</time>
                    <h4>EaterList</h4>
                    <p>Designed and developed <em>EaterList</em>, a dynamic restaurant discovery website featuring personalized search filters and database-driven functionality to enhance user experience.</p>
                  </li>
                  <li class="journey-event">
                    <time datetime="2026">Software Engineering I &amp; II (A.Y. 2026)</time>
                    <h4>Smart Kiosk System</h4>
                    <p>Contributed as a System Analyst in developing a Smart Kiosk System for Mango Royal Milkshake, integrating self-service ordering, POS, kitchen operations, and sales monitoring into one centralized system.</p>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </section>

        <section class="projects-section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Featured Projects</h2>
          <div class="project-filters" role="group" aria-label="Filter projects by category" data-scroll-reveal>
            <button type="button" data-project-filter="all" aria-pressed="true">All Projects</button>
            <button type="button" data-project-filter="prelims" aria-pressed="false">Prelims</button>
            <button type="button" data-project-filter="midterms" aria-pressed="false">Midterms</button>
            <button type="button" data-project-filter="finals" aria-pressed="false">Finals</button>
          </div>
          <div class="project-grid" data-scroll-reveal>
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
          <div class="skills-grid" data-scroll-reveal>
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

      <footer class="portfolio-contact" id="contact" data-scroll-reveal>
        <h2>Contact</h2>
        <p>Have a question or want to connect?</p>
        <a href="mailto:remonte@gmail.com">remonte@gmail.com</a>
      </footer>
    </div>
  `;

  const themeToggle = container.querySelector(".portfolio-theme");
  const themeLabel = container.querySelector(".theme-label");
  const themeIcon = container.querySelector(".theme-icon");
  const carousel = container.querySelector(".hero-carousel");
  const carouselSlides = [...container.querySelectorAll(".hero-carousel-slide")];
  const projectFilters = container.querySelector(".project-filters");
  const projectCards = [...container.querySelectorAll(".project-card")];
  const emptyState = container.querySelector(".project-empty-state");
  const navLinks = [...container.querySelectorAll(".portfolio-nav a")];
  const revealTargets = [...container.querySelectorAll("[data-scroll-reveal]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

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

  if (!(carousel instanceof HTMLElement) || carouselSlides.length < 2) {
    throw new Error("The portfolio photo carousel could not be initialized.");
  }

  let activeCarouselIndex = 0;
  let carouselTimer;

  function updateCarouselSlides() {
    carouselSlides.forEach((slide, index) => {
      let position = "is-hidden";
      const previousIndex = (activeCarouselIndex - 1 + carouselSlides.length) % carouselSlides.length;
      const nextIndex = (activeCarouselIndex + 1) % carouselSlides.length;

      if (index === activeCarouselIndex) {
        position = "is-active";
      } else if (index === previousIndex) {
        position = "is-previous";
      } else if (index === nextIndex) {
        position = "is-next";
      }

      slide.className = `hero-carousel-slide ${position}`;
      slide.setAttribute("aria-hidden", String(position !== "is-active"));
    });
  }

  function showNextPhoto() {
    activeCarouselIndex = (activeCarouselIndex + 1) % carouselSlides.length;
    updateCarouselSlides();
  }

  updateCarouselSlides();

  if (reducedMotion.matches) {
    revealTargets.forEach((target) => target.classList.add("is-revealed"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            if (entry.target.matches(".journey-title-text")) {
              entry.target.classList.add("is-typing");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-88px 0px -65% 0px", threshold: 0 },
  );

  ["home", "about", "experiences", "projects", "skills", "contact"].forEach((id) => {
    const section = container.querySelector(`#${id}`);
    if (section) {
      sectionObserver.observe(section);
    }
  });

  container.addEventListener("portfolio:visible", () => {
    if (!carouselTimer) {
      carouselTimer = window.setInterval(showNextPhoto, 6000);
    }
  });

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
