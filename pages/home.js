export function homePage() {
  return `
    <header class="hero">
      <div class="hero__overlay"></div>
      <div class="hero__introduction container">
        <p class="intro__text">
          I help businesses transform outdated websites into modern digital
          experiences.
        </p>
        <p class="fields__text">
          Webdesign<br>
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

    <section class="section about">
        <div class="container section__header">
            <h2 class="section__title">About Me</h2>
            <p class="section__text">I work closely with my clients and place great emphasis on understanding their business, 
            their goals and what makes them unique. This allows me to tailor solutions that are not only technically 
            sound, but also well thought out, user-friendly and visually clear.</p>
        </div>
    </section>

    <section class="services">
      <div class="container">
        <h2 class="services__title">Services</h2>
        <div class="accordion">
          <div class="accordion__item">
            <button class="accordion__header">
              <span>Web Design</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Custom web design tailored to your brand. I create modern, user-friendly interfaces that engage visitors and drive conversions.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>Development</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Front-end development with HTML, CSS, and JavaScript. Building responsive, fast-loading websites optimized for all devices.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>UX / UI Design</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>User experience and interface design focused on usability. Creating intuitive designs that solve real user problems.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>Branding &amp; Identity</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Complete branding solutions including logo design, color palettes, and brand guidelines. Building a cohesive visual identity.</p>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header">
              <span>SEO &amp; Analytics</span>
              <span class="accordion__icon">+</span>
            </button>
            <div class="accordion__content">
              <p>Search engine optimization and analytics setup to increase visibility and track performance. Data-driven strategies for growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section projects">
        <div class="container section__header">
            <h2 class="section__title">Latest <br> projects</h2>
            <p class="section__text section__text--small">A thoughtfully curated portfolio demonstrating our <br> commitment to simplicity and purposeful design.</p>
        </div>

        <div class="projects__showcase container">
          <div class="project-card" data-project-url="https://nicklasoeen.github.io/html-css-nicklas/index.html">
            <img src="assets/images/rainy-days.png" alt="Rainy Days Project" class="project-card__image">
            <img src="assets/logos/rainy-logo.png" alt="Rainy Days Logo" class="project-card__logo">
          </div>
          <div class="project-card__info">
            <div class="project-card__details">
              <h3 class="project-card__title">Rainy Days</h3>
              <p class="project-card__description">An outdoor rain jacket e-commerce store with a clean, modern shopping experience.</p>
            </div>
            <div class="project-card__links">
              <a href="https://github.com/nicklasoeen/html-css-nicklas" target="_blank" class="project-card__link">GitHub</a>
              <a href="https://nicklasoeen.github.io/html-css-nicklas/index.html" target="_blank" class="project-card__link">Live Site</a>
            </div>
          </div>
        </div>

        <div class="projects__showcase container" style="margin-top: 6rem;">
          <div class="project-card" data-project-url="https://nicklasoeen.github.io/community-science-museum-project/index.html">
            <img src="assets/images/bergens-forskningsmuseum.png" alt="Community Science Museum Project" class="project-card__image">
            <img src="assets/logos/bf-museum-logo (1).svg" alt="Community Science Museum Logo" class="project-card__logo">
          </div>
          <div class="project-card__info">
            <div class="project-card__details">
              <h3 class="project-card__title">Community Science Museum</h3>
              <p class="project-card__description">An interactive science museum website showcasing exhibits and educational programs.</p>
            </div>
            <div class="project-card__links">
              <a href="https://github.com/nicklasoeen/community-science-museum-project" target="_blank" class="project-card__link">GitHub</a>
              <a href="https://nicklasoeen.github.io/community-science-museum-project/index.html" target="_blank" class="project-card__link">Live Site</a>
            </div>
          </div>
        </div>
    </section>
  `;
}
