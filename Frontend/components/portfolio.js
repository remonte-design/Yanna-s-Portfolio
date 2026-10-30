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

        <div class="portfolio-divider" aria-hidden="true">
          <div class="portfolio-divider__track">
            <img class="portfolio-divider__image" src="/assets/images/canva/portfolio-border.png" alt="" />
            <img class="portfolio-divider__image" src="/assets/images/canva/portfolio-border.png" alt="" />
          </div>
        </div>

        <section class="projects-section" id="projects" aria-labelledby="projects-title">
          <div class="project-heading-row">
            <div>
              <p class="project-eyebrow">A collection of my work</p>
              <h2 id="projects-title">Featured Projects</h2>
            </div>
          </div>
          <div class="project-toolbar" data-scroll-reveal>
            <div class="project-filters" role="group" aria-label="Filter projects by category">
              <button type="button" data-project-filter="all" aria-pressed="false">View All</button>
              <button type="button" data-project-filter="prelims" aria-pressed="true">Prelims</button>
              <button type="button" data-project-filter="midterms" aria-pressed="false">Midterms</button>
              <button type="button" data-project-filter="finals" aria-pressed="false">Finals</button>
            </div>
            <label class="project-search">
              <span class="visually-hidden">Search projects</span>
              <input type="search" data-project-search placeholder="Search all projects..." />
            </label>
          </div>
          <div class="project-grid" data-scroll-reveal>
            <article
              class="project-card"
              data-project-category="finals"
              data-project-activity="Activity 5"
              data-project-section="3-IT11"
              data-project-date="October 21, 2026"
              data-project-drive="https://drive.google.com/drive/folders/1wpHA-P2tJNP-yfIEiv8OQJ8mGxw43Urt?usp=sharing"
              data-project-description="Created a low-fidelity prototype for my portfolio website, mapping out the landing page and the key sections visitors can explore. This early wireframe helped me organize the content and plan a clear path through the site, from the introduction and About Me section to featured projects, technical skills, and contact information. Sketching the layout first gave me a simple way to explore the page structure and navigation before moving on to the finished visual design."
              data-project-gallery='[{"src":"/assets/images/projects/portfolio-low-fidelity-wireframe.jpg","label":"Low-Fidelity Wireframe","alt":"Hand-drawn low-fidelity portfolio website prototype showing the landing page and sections for education, featured projects, technical skills, contact, and footer"}]'
            >
              <img src="/assets/images/projects/portfolio-low-fidelity-wireframe.jpg" alt="Hand-drawn low-fidelity portfolio website prototype" />
              <div class="project-card-copy">
                <span class="project-tag">Finals</span>
                <h3>Portfolio Low-Fidelity Prototype</h3>
                <p>Planned the portfolio's page structure and key sections in a hand-drawn wireframe.</p>
                <button class="project-card-arrow" type="button" aria-label="View Portfolio Low-Fidelity Prototype activity details">→</button>
              </div>
            </article>
            <article
              class="project-card"
              data-project-category="midterms"
              data-project-activity="Activity 3"
              data-project-section="3-IT11"
              data-project-date="September 02, 2026"
              data-project-drive="https://drive.google.com/drive/folders/1GEgbeHpo9PvaFRS7ZSlwefSZS3LfmlQC?usp=sharing"
              data-project-description="This activity allowed me to explore how creativity and visual communication work together in advertising. I wanted to capture the cozy feeling of autumn while making the featured product the center of attention. Through the combination of illustration, color harmony, and typography, I learned how thoughtful design choices can transform a simple product promotion into an engaging visual experience. It reminded me that effective design is not just about making something attractive, but also about communicating a message that connects with its intended audience."
              data-project-gallery='[{"src":"/assets/images/projects/brewhaven-sketch.jpg","label":"Traditional Sketch","alt":"Traditional sketch of the BrewHaven Cafe pumpkin-shaped cup and saucer"},{"src":"/assets/images/projects/brewhaven-photoshop.png","label":"Photoshop Artwork","alt":"Digital BrewHaven pumpkin cup artwork open in Photoshop"},{"src":"/assets/images/projects/brewhaven-social-post.png","label":"Social Media Advertisement","alt":"Finished BrewHaven Cafe Pumpkin Spice Latte social media advertisement"},{"src":"/assets/images/projects/brewhaven-landing-page.png","label":"Landing Page Design","alt":"BrewCafe landing page promoting its Pumpkin Spice Latte"},{"src":"/assets/images/projects/brewhaven-newspaper-graphics.png","label":"Newspaper Graphics","alt":"BrewCafe Daily Roast News newspaper graphics featuring autumn coffee"}]'
            >
              <img src="/assets/images/projects/brewhaven-social-post.png" alt="Autumn-themed BrewHaven Cafe Pumpkin Spice Latte social media advertisement" />
              <div class="project-card-copy">
                <span class="project-tag">Midterms</span>
                <h3>BrewHaven Cafe</h3>
                <p>Designed an autumn-inspired social media advertisement featuring BrewHaven Café's Pumpkin Spice Latte, combining warm colors, playful typography, and creative illustrations to create an inviting promotional design.</p>
                <button class="project-card-arrow" type="button" aria-label="View BrewHaven Cafe activity details">→</button>
              </div>
            </article>
            <article
              class="project-card"
              data-project-category="midterms"
              data-project-activity="Activity 4"
              data-project-section="3-IT11"
              data-project-date="September 09, 2026"
              data-project-drive="https://drive.google.com/drive/folders/1pqdgn0mkFeL_bV05VmYzgVCAlQzemrtd?usp=sharing"
              data-project-description="This activity challenged me to explore a more adventurous and expressive approach to digital design. Through Trick or Treat, I wanted to capture the excitement, mystery, and playful spirit of Halloween while creating a visually engaging composition. I experimented with contrasting colors, decorative illustrations, and different typography styles to establish a distinct atmosphere. Beyond improving my technical and creative skills, this experience taught me the importance of visual storytelling and how even the smallest design elements can contribute to a larger concept. It reminded me that creativity has no single style or limitation, and that exploring unfamiliar themes can open doors to new ideas and artistic possibilities."
              data-project-gallery='[{"src":"/assets/images/projects/trick-or-treat-sketch.jpg","label":"Traditional Sketch","alt":"Traditional Trick or Treat Candy Shop poster sketch with green and red lettering"},{"src":"/assets/images/projects/trick-or-treat-digital-poster.png","label":"Digital Poster","alt":"Finished purple Trick or Treat Candy Shop digital poster"}]'
            >
              <img src="/assets/images/projects/trick-or-treat-digital-poster.png" alt="Halloween-themed Trick or Treat Candy Shop digital poster" />
              <div class="project-card-copy">
                <span class="project-tag">Midterms</span>
                <h3>Trick or Treat</h3>
                <p>Created a Halloween-themed digital poster featuring bold typography, vibrant colors, and playful spooky elements to capture the festive spirit of Halloween.</p>
                <button class="project-card-arrow" type="button" aria-label="View Trick or Treat activity details">→</button>
              </div>
            </article>
            <article
              class="project-card"
              data-project-category="others"
              data-project-activity="EaterList Project"
              data-project-section="Web Development"
              data-project-date="A.Y. 2025"
              data-project-description="Designed and developed EaterList, a dynamic restaurant discovery website featuring personalized search filters and database-driven functionality to enhance user experience."
              data-project-gallery='[{"src":"/assets/images/canva/project-eatenlist-card.png","label":"Website Preview","alt":"EaterList restaurant discovery website preview"}]'
            >
              <img src="/assets/images/canva/project-eatenlist-card.png" alt="EaterList project website preview" />
              <div class="project-card-copy">
                <span class="project-tag">Others</span>
                <h3>EaterList</h3>
                <p>Restaurant discovery with personalized filters and database-driven search.</p>
                <button class="project-card-arrow" type="button" aria-label="View EaterList project details">→</button>
              </div>
            </article>
            <article
              class="project-card"
              data-project-category="prelims"
              data-project-activity="Activity 1"
              data-project-section="3-IT11"
              data-project-date="August 05, 2026"
              data-project-drive="https://drive.google.com/drive/folders/13p6zKQNli5kJ_QEYJgUiZ_uNRbAwX80F?usp=sharing"
              data-project-description="“Berry in Bloom” is more than a simple illustration of strawberries and flowers. It represents the beauty of growth and the journey of becoming. Just like a strawberry begins as a small flower before blossoming into a fruit, I believe that every dream, achievement, and meaningful change starts with something small.&#10;&#10;Through this artwork, I wanted to express that growth is not always immediate or visible. Sometimes, it happens quietly through the lessons we learn, the challenges we overcome, and the courage we find to keep moving forward. Every stage of life has its own beauty, and every small step contributes to the person we are becoming."
              data-project-gallery='[{"src":"/assets/images/projects/berry-in-bloom-traditional.jpg","label":"Traditional Drawing","alt":"Traditional colored-pencil drawing of strawberries, leaves, and blossoms"}]'
            >
              <img src="/assets/images/projects/berry-in-bloom-traditional.jpg" alt="Traditional drawing of Berry in Bloom" />
              <div class="project-card-copy">
                <span class="project-tag">Prelims</span>
                <h3>Berry in Bloom</h3>
                <p>A traditional strawberry drawing with leafy details and blossoms.</p>
                <button class="project-card-arrow" type="button" aria-label="View Berry in Bloom activity details">→</button>
              </div>
            </article>
            <article
              class="project-card"
              data-project-category="prelims"
              data-project-activity="Activity 2"
              data-project-section="3-IT11"
              data-project-date="August 17, 2026"
              data-project-drive="https://drive.google.com/drive/folders/1inBC-U2iRCou4FBq7cyl9TaWCm43rWQo?usp=sharing"
              data-project-description="Strawcat is more than just a character I created; it is a little reflection of who I am. Behind its cheerful appearance and playful personality lies a representation of my curiosity, imagination, and passion for creating things that bring joy to others.&#10;&#10;I designed Strawcat to embody the parts of myself that I hope to carry throughout my journey: a heart that finds happiness in the simplest things, a mind that never stops exploring possibilities, and the courage to pursue dreams even when the path ahead is uncertain.&#10;&#10;As the little companion guiding visitors through my portfolio, Strawcat symbolizes my journey as both a creative individual and an aspiring professional. Every step it takes represents my willingness to learn, grow, and discover new opportunities. Like Strawcat, I may still be finding my way, but I believe that even the smallest steps can lead to extraordinary destinations."
              data-project-gallery='[{"src":"/assets/images/projects/strawcat-traditional.jpg","label":"Traditional Drawing","alt":"Traditional Strawcat character and logo sketches"},{"src":"/assets/images/projects/strawcat-photoshop.png","label":"Photoshop Screenshot","alt":"Strawcat badge artwork open in Adobe Photoshop"},{"src":"/assets/images/projects/strawcat-badge-logo.png","label":"Badge Logo","alt":"Finished circular Strawcat badge logo"},{"src":"/assets/images/projects/strawcat-horizontal-logo.png","label":"Horizontal Logo","alt":"Finished horizontal Strawcat logo for Yanna"},{"src":"/assets/images/projects/strawcat-vertical-logo.png","label":"Vertical Logo","alt":"Finished vertical Strawcat logo for Yanna"}]'
            >
              <img src="/assets/images/projects/strawcat-traditional.jpg" alt="Traditional Strawcat character and logo sketches" />
              <div class="project-card-copy">
                <span class="project-tag">Prelims</span>
                <h3>Strawcat</h3>
                <p>A strawberry-inspired character with a complete logo set.</p>
                <button class="project-card-arrow" type="button" aria-label="View Strawcat activity details">→</button>
              </div>
            </article>
          </div>
          <p class="project-empty-state" role="status" hidden>No projects match your filters. Try another category or search.</p>
          <dialog class="project-modal" aria-labelledby="project-modal-activity">
            <div class="project-modal__panel">
              <header class="project-modal__header">
                <h3 id="project-modal-activity" data-project-modal-activity>Activity One</h3>
                <button class="project-modal__close" type="button" aria-label="Close project details">×</button>
              </header>
              <div class="project-modal__content">
                <button class="project-modal__arrow" type="button" data-project-modal-previous aria-label="Previous picture">‹</button>
                <article class="project-modal__details">
                  <h4 data-project-modal-title></h4>
                  <img data-project-modal-image src="" alt="" />
                  <p class="project-modal__image-caption" data-project-modal-image-caption></p>
                  <div class="project-modal__thumbnails" role="group" aria-label="Project images" data-project-modal-thumbnails></div>
                  <div class="project-modal__summary">
                    <p class="project-modal__section"><strong>Section:</strong> <span data-project-modal-section></span></p>
                    <p class="project-modal__category" data-project-modal-category></p>
                    <a class="project-modal__drive-link" data-project-modal-drive target="_blank" rel="noopener noreferrer">See GDrive ↗</a>
                    <p class="project-modal__date"><strong>Date:</strong> <span data-project-modal-date></span></p>
                    <p><strong>Explanation:</strong><br /><span data-project-modal-description></span></p>
                  </div>
                </article>
                <button class="project-modal__arrow" type="button" data-project-modal-next aria-label="Next picture">›</button>
              </div>
              <p class="visually-hidden" data-project-modal-status aria-live="polite"></p>
            </div>
          </dialog>
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
        <div class="portfolio-contact__inner">
          <section class="portfolio-contact__links" aria-labelledby="contact-title">
            <h2 id="contact-title">Contact Me:</h2>
            <div class="portfolio-contact__link-grid">
              <a class="portfolio-contact__link" href="https://www.facebook.com/riyannajelaine.monte.3/" target="_blank" rel="noopener noreferrer">
                <span class="portfolio-contact__icon portfolio-contact__icon--facebook" aria-hidden="true">f</span>
                <span>riyannajelaine.monte.3</span>
              </a>
              <a class="portfolio-contact__link" href="mailto:remonte@ccc.edu.ph">
                <svg class="portfolio-contact__icon portfolio-contact__icon--email" aria-hidden="true" viewBox="0 0 40 32">
                  <rect x="1.5" y="1.5" width="37" height="29" rx="3" />
                  <path d="m3 4 17 14L37 4" />
                </svg>
                <span>remonte@ccc.edu.ph</span>
              </a>
              <a class="portfolio-contact__link" href="https://www.instagram.com/imriyanna_/" target="_blank" rel="noopener noreferrer">
                <span class="portfolio-contact__icon portfolio-contact__icon--instagram" aria-hidden="true">
                  <svg viewBox="0 0 32 32">
                    <rect x="3" y="3" width="26" height="26" rx="7" />
                    <circle cx="16" cy="16" r="6" />
                    <circle class="portfolio-contact__instagram-dot" cx="23.5" cy="8.8" r="1.5" />
                  </svg>
                </span>
                <span>imriyanna_</span>
              </a>
              <a class="portfolio-contact__link" href="https://github.com/remonte-design" target="_blank" rel="noopener noreferrer">
                <span class="portfolio-contact__icon portfolio-contact__icon--github" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .9a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.17 1.72 1.17 1 .1.76 2.45 3.35 1.76.1-.73.4-1.22.72-1.5-2.48-.28-5.1-1.25-5.1-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.1-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.13-1.45 3.08-1.15 3.08-1.15.6 1.55.22 2.7.1 2.98.72.8 1.16 1.8 1.16 3.02 0 4.31-2.63 5.27-5.12 5.55.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .9z" />
                  </svg>
                </span>
                <span>remonte-design</span>
              </a>
            </div>
          </section>
          <blockquote class="portfolio-contact__verse">
            <h3>Psalm 73:26</h3>
            <p>“My flesh and my heart may fail, but God is the strength of my heart and my portion forever.”</p>
          </blockquote>
        </div>
        <a class="portfolio-contact__back-top" href="#home">Back on top ↑</a>
      </footer>
    </div>
  `;

  const themeToggle = container.querySelector(".portfolio-theme");
  const themeLabel = container.querySelector(".theme-label");
  const themeIcon = container.querySelector(".theme-icon");
  const carousel = container.querySelector(".hero-carousel");
  const carouselSlides = [...container.querySelectorAll(".hero-carousel-slide")];
  const projectFilters = container.querySelector(".project-filters");
  const projectSearch = container.querySelector("[data-project-search]");
  const projectGrid = container.querySelector(".project-grid");
  const projectCards = [...container.querySelectorAll(".project-card")];
  const emptyState = container.querySelector(".project-empty-state");
  const projectModal = container.querySelector(".project-modal");
  const projectModalClose = container.querySelector(".project-modal__close");
  const projectModalPrevious = container.querySelector("[data-project-modal-previous]");
  const projectModalNext = container.querySelector("[data-project-modal-next]");
  const projectModalActivity = container.querySelector("[data-project-modal-activity]");
  const projectModalTitle = container.querySelector("[data-project-modal-title]");
  const projectModalImage = container.querySelector("[data-project-modal-image]");
  const projectModalImageCaption = container.querySelector("[data-project-modal-image-caption]");
  const projectModalThumbnails = container.querySelector("[data-project-modal-thumbnails]");
  const projectModalSection = container.querySelector("[data-project-modal-section]");
  const projectModalDate = container.querySelector("[data-project-modal-date]");
  const projectModalCategory = container.querySelector("[data-project-modal-category]");
  const projectModalDrive = container.querySelector("[data-project-modal-drive]");
  const projectModalDescription = container.querySelector("[data-project-modal-description]");
  const projectModalStatus = container.querySelector("[data-project-modal-status]");
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

  if (
    !(projectFilters instanceof HTMLElement) ||
    !(projectSearch instanceof HTMLInputElement) ||
    !(projectGrid instanceof HTMLElement) ||
    !(emptyState instanceof HTMLElement) ||
    !(projectModal instanceof HTMLDialogElement) ||
    !(projectModalClose instanceof HTMLButtonElement) ||
    !(projectModalPrevious instanceof HTMLButtonElement) ||
    !(projectModalNext instanceof HTMLButtonElement) ||
    !(projectModalActivity instanceof HTMLElement) ||
    !(projectModalTitle instanceof HTMLElement) ||
    !(projectModalImage instanceof HTMLImageElement) ||
    !(projectModalImageCaption instanceof HTMLElement) ||
    !(projectModalThumbnails instanceof HTMLElement) ||
    !(projectModalSection instanceof HTMLElement) ||
    !(projectModalDate instanceof HTMLElement) ||
    !(projectModalCategory instanceof HTMLElement) ||
    !(projectModalDescription instanceof HTMLElement) ||
    !(projectModalStatus instanceof HTMLElement)
  ) {
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

  let activeProjectCategory = "prelims";

  function updateVisibleProjects() {
    const searchTerm = projectSearch.value.trim().toLocaleLowerCase();
    let visibleProjects = 0;

    projectCards.forEach((card) => {
      const matchesCategory =
        activeProjectCategory === "all" ||
        card.dataset.projectCategory === activeProjectCategory;
      const searchableContent = [
        card.textContent,
        card.dataset.projectActivity,
        card.dataset.projectDate,
        card.dataset.projectSection,
        card.dataset.projectCategory,
        card.dataset.projectDescription,
      ]
        .join(" ")
        .toLocaleLowerCase();
      const matchesSearch = searchableContent.includes(searchTerm);
      const isVisible = matchesCategory && matchesSearch;
      card.hidden = !isVisible;
      visibleProjects += Number(isVisible);
    });

    emptyState.hidden = visibleProjects > 0;
  }

  updateVisibleProjects();

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

    activeProjectCategory = category;
    if (category === "all") {
      projectSearch.value = "";
    }
    projectFilters.querySelectorAll("button[data-project-filter]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button === filter));
    });

    updateVisibleProjects();
  });

  projectSearch.addEventListener("input", () => {
    activeProjectCategory = "all";
    projectFilters.querySelectorAll("button[data-project-filter]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.projectFilter === "all"));
    });
    updateVisibleProjects();
  });

  let activeProjectIndex = 0;
  let activeGalleryIndex = 0;
  let activeProjectGallery = [];
  let projectModalTrigger;

  function showProjectGalleryImage(index) {
    if (activeProjectGallery.length === 0) {
      throw new Error("The selected activity has no gallery images.");
    }

    activeGalleryIndex = (index + activeProjectGallery.length) % activeProjectGallery.length;
    const image = activeProjectGallery[activeGalleryIndex];
    projectModalImage.src = image.src;
    projectModalImage.alt = image.alt;
    projectModalImageCaption.textContent = image.label;

    [...projectModalThumbnails.children].forEach((thumbnail, thumbnailIndex) => {
      thumbnail.setAttribute("aria-pressed", String(thumbnailIndex === activeGalleryIndex));
    });
    projectModalPrevious.disabled = activeProjectGallery.length <= 1;
    projectModalNext.disabled = activeProjectGallery.length <= 1;

    projectModalStatus.textContent =
      `Showing ${projectModalActivity.textContent}, picture ${activeGalleryIndex + 1} of ` +
      `${activeProjectGallery.length}: ${image.label}.`;
  }

  function showProjectDetails(index) {
    if (projectCards.length === 0) {
      throw new Error("Project details cannot be opened because no projects are available.");
    }

    activeProjectIndex = (index + projectCards.length) % projectCards.length;
    const card = projectCards[activeProjectIndex];
    const title = card.querySelector("h3");
    const category = card.querySelector(".project-tag");
    const galleryJson = card.dataset.projectGallery;
    const activity = card.dataset.projectActivity;
    const section = card.dataset.projectSection;
    const date = card.dataset.projectDate;
    const driveLink = card.dataset.projectDrive;
    const description = card.dataset.projectDescription;

    if (
      !(title instanceof HTMLElement) ||
      !(category instanceof HTMLElement) ||
      !galleryJson ||
      !activity ||
      !section ||
      !date ||
      !description
    ) {
      throw new Error("The selected project is missing details required by the modal.");
    }

    const gallery = JSON.parse(galleryJson);
    if (
      !Array.isArray(gallery) ||
      gallery.length === 0 ||
      !gallery.every(
        (image) =>
          typeof image.src === "string" &&
          typeof image.label === "string" &&
          typeof image.alt === "string",
      )
    ) {
      throw new Error("The selected activity has an invalid image gallery.");
    }

    activeProjectGallery = gallery;
    activeGalleryIndex = 0;
    projectModalActivity.textContent = activity;
    projectModalTitle.textContent = title.textContent;
    projectModalSection.textContent = section;
    projectModalDate.textContent = date;
    projectModalCategory.textContent = category.textContent;
    if (driveLink) {
      projectModalDrive.href = driveLink;
      projectModalDrive.setAttribute("aria-label", `Open ${activity} Google Drive folder in a new tab`);
      projectModalDrive.hidden = false;
    } else {
      projectModalDrive.removeAttribute("href");
      projectModalDrive.hidden = true;
    }
    projectModalDescription.textContent = description;
    projectModalThumbnails.replaceChildren();

    activeProjectGallery.forEach((image, imageIndex) => {
      const thumbnail = document.createElement("button");
      thumbnail.type = "button";
      thumbnail.className = "project-modal__thumbnail";
      thumbnail.setAttribute("aria-label", `Show ${image.label}`);
      thumbnail.setAttribute("aria-pressed", String(imageIndex === activeGalleryIndex));

      const thumbnailImage = document.createElement("img");
      thumbnailImage.src = image.src;
      thumbnailImage.alt = "";
      thumbnail.append(thumbnailImage);
      thumbnail.addEventListener("click", () => showProjectGalleryImage(imageIndex));
      projectModalThumbnails.append(thumbnail);
    });

    showProjectGalleryImage(0);
  }

  projectGrid.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const trigger = event.target.closest(".project-card-arrow");
    if (!(trigger instanceof HTMLButtonElement)) {
      return;
    }

    const card = trigger.closest(".project-card");
    const index = projectCards.indexOf(card);
    if (index < 0) {
      throw new Error("The selected project card could not be found.");
    }

    projectModalTrigger = trigger;
    showProjectDetails(index);
    projectModal.showModal();
    document.documentElement.classList.add("project-modal-open");
  });

  projectModalClose.addEventListener("click", () => {
    projectModal.close();
  });

  projectModalPrevious.addEventListener("click", () => {
    showProjectGalleryImage(activeGalleryIndex - 1);
  });

  projectModalNext.addEventListener("click", () => {
    showProjectGalleryImage(activeGalleryIndex + 1);
  });

  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      projectModal.close();
    }
  });

  projectModal.addEventListener("close", () => {
    document.documentElement.classList.remove("project-modal-open");
    projectModalTrigger?.focus();
    projectModalTrigger = undefined;
  });

  projectModal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      projectModal.close();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (activeProjectGallery.length > 1) {
        showProjectGalleryImage(activeGalleryIndex - 1);
      }
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      if (activeProjectGallery.length > 1) {
        showProjectGalleryImage(activeGalleryIndex + 1);
      }
    }
  });

  projectModal.addEventListener("cancel", (event) => {
    event.preventDefault();
    projectModal.close();
  });

}
