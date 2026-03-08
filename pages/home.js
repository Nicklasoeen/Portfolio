export function homePage() {
  return `
    <header class="hero" id="home">
      <div class="hero__overlay"></div>
      <div class="hero__introduction container">
        <p class="intro__text">
          Front-end developer focused on thoughtful design, clean code, and
          digital experiences that feel both intuitive and memorable.
        </p>
        <p class="fields__text">
          Web Design<br>
          UX / UI Design<br>
          Branding &amp; Identity<br>
          Development<br>
          SEO &amp; Analytics
        </p>
      </div>

      <div class="hero__content container">
        <p class="hero__eyebrow">Portfolio</p>
        <h1 class="hero__title">NICKLAS ØEN</h1>
        <p class="hero__subtitle">I build clean, modern web experiences.</p>
      </div>
    </header>

    <section class="section about" id="about">
        <div class="container section__header">
            <h2 class="section__title">About Me</h2>
      <div class="about__content">
        <p class="section__text">I’m a front-end developer who enjoys turning ideas into clear, engaging web experiences. 
        My work combines structure, visual detail, and usability to create websites that look strong and perform well. 
        This portfolio highlights selected projects that reflect my approach to design, development, and problem-solving.</p>
        <div class="about__document-links">
          <a href="assets/CV.pdf" target="_blank" rel="noopener" class="about__cv-link">View CV</a>
          <a href="assets/Cover Letter.pdf" target="_blank" rel="noopener" class="about__cv-link">View Cover Letter</a>
        </div>
      </div>
        </div>
    </section>

    <section class="services" id="fields">
      <div class="container">
        <h2 class="services__title">Fields</h2>
        <div class="accordion">
          <div class="accordion__item">
            <button class="accordion__header">
              <span>Web Design</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Designing clean, modern, and responsive interfaces with strong visual hierarchy, accessibility, and user-first structure.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>Development</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Building front-end solutions with HTML, CSS, and JavaScript, with focus on performance, maintainability, and responsive behavior.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>UX / UI Design</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Applying UX principles and UI systems to create intuitive digital experiences that are easy to navigate and pleasant to use.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>Branding &amp; Identity</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Working with brand direction, visual consistency, and identity elements to create cohesive digital expressions across touchpoints.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>SEO &amp; Analytics</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Understanding on-page SEO fundamentals and analytics insights to improve discoverability and support informed design decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section projects" id="projects">
        <div class="container section__header">
            <h2 class="section__title">Latest <br> projects</h2>
            <p class="section__text section__text--small">A thoughtfully curated portfolio demonstrating our <br> commitment to simplicity and purposeful design.</p>
        </div>

        <div class="projects__showcase container">
          <article class="project-item">
            <div class="project-card" data-project-url="https://nicklasoeen.github.io/html-css-nicklas/index.html">
              <img src="assets/images/rainy-days.jpg" alt="Rainy Days Project" class="project-card__image">
              <img src="assets/logos/rainy-logo.png" alt="Rainy Days Logo" class="project-card__logo">
            </div>
            <div class="project-card__info">
              <div class="project-card__details">
                <h3 class="project-card__title">Rainy Days</h3>
                <span class="project-card__tech">HTML &amp; CSS</span>
                <p class="project-card__description">An outdoor rain jacket e-commerce store built with semantic HTML and custom CSS. Focused on clean design, responsive layouts, and a modern shopping experience.</p>
              </div>
              <div class="project-card__links">
                <a href="https://github.com/nicklasoeen/html-css-nicklas" target="_blank" class="project-card__link">GitHub</a>
                <a href="https://nicklasoeen.github.io/html-css-nicklas/index.html" target="_blank" class="project-card__link">Live Site</a>
              </div>
            </div>
          </article>

          <article class="project-item">
            <div class="project-card" data-project-url="https://nicklasoeen.github.io/community-science-museum-project/index.html">
              <img src="assets/images/bergens-forskningsmuseum.jpg" alt="Community Science Museum Project" class="project-card__image">
              <img src="assets/logos/bf-museum-logo (1).svg" alt="Community Science Museum Logo" class="project-card__logo">
            </div>
            <div class="project-card__info">
              <div class="project-card__details">
                <h3 class="project-card__title">Community Science Museum</h3>
                <span class="project-card__tech">HTML &amp; CSS</span>
                <p class="project-card__description">An interactive science museum website built with HTML and CSS. Showcasing exhibits and educational programs with an engaging, accessible design.</p>
              </div>
              <div class="project-card__links">
                <a href="https://github.com/nicklasoeen/community-science-museum-project" target="_blank" class="project-card__link">GitHub</a>
                <a href="https://nicklasoeen.github.io/community-science-museum-project/index.html" target="_blank" class="project-card__link">Live Site</a>
              </div>
            </div>
          </article>

          <article class="project-item">
            <div class="project-card" data-project-url="https://nicklasoeen.github.io/html-css-nicklas/index.html">
              <img src="assets/images/rainydays-js.jpg" alt="Rainy Days JavaScript Project" class="project-card__image">
              <img src="assets/logos/rainy-logo.png" alt="Rainy Days Logo" class="project-card__logo">
            </div>
            <div class="project-card__info">
              <div class="project-card__details">
                <h3 class="project-card__title">Rainy Days JS</h3>
                <span class="project-card__tech">HTML, CSS, JavaScript &amp; API</span>
                <p class="project-card__description">An enhanced version of the Rainy Days store using JavaScript to fetch real product data from the Noroff API. Dynamic product rendering replaces static mock data.</p>
              </div>
              <div class="project-card__links">
                <a href="https://github.com/nicklasoeen/html-css-nicklas" target="_blank" class="project-card__link">GitHub</a>
                <a href="https://nicklasoeen.github.io/html-css-nicklas/index.html" target="_blank" class="project-card__link">Live Site</a>
              </div>
            </div>
          </article>
        </div>
    </section>

    <footer class="footer" id="contact">
      <div class="container footer__inner">
        <div class="footer__left">
          <a href="#home" class="footer__logo">NØ</a>
          <p class="footer__tagline">Building thoughtful digital experiences.</p>
        </div>
        <div class="footer__right">
          <div class="footer__links">
            <a href="https://github.com/nicklasoeen" target="_blank" class="footer__link">GitHub</a>
            <a href="https://www.linkedin.com/in/nicklas-%C3%B8en-55a654225/" target="_blank" class="footer__link">LinkedIn</a>
            <a href="#contact" class="footer__link">Contact</a>
          </div>
          <p class="footer__copy">&copy; 2026 Nicklas Øen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
