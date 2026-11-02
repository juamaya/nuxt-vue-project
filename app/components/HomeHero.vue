
<template>
  <section class="home-hero">
    <div class="container">
      <div class="row align-items-center min-vh-100">

        <!-- Texto principal -->
        <div class="col-lg-6 hero-content">

          <span class="hero-badge">
            <span class="pulse"></span>
            DESARROLLO DIGITAL & TECNOLOGÍA
          </span>

          <h1>
            Transformamos ideas
            en <span>experiencias digitales.</span>
          </h1>

          <p class="hero-description">
            Diseñamos y desarrollamos páginas web modernas,
            rápidas y personalizadas para llevar tu negocio
            al siguiente nivel.
          </p>

          <div class="hero-actions">
            <NuxtLink to="/contact" class="btn-main">
              Empezar proyecto →
            </NuxtLink>

            <NuxtLink to="/services/web" class="btn-outline">
              Descubrir servicios
            </NuxtLink>
          </div>

          <div class="hero-stats">
            <div>
              <strong>100%</strong>
              <small>Responsive</small>
            </div>

            <div>
              <strong>SEO</strong>
              <small>Optimizado</small>
            </div>

            <div>
              <strong>24/7</strong>
              <small>Disponible online</small>
            </div>
          </div>

        </div>

        <!-- Visual -->
        <div class="col-lg-6">
          <div class="hero-visual">

            <div class="glow"></div>

            <div class="code-card">

              <div class="code-header">
                <div class="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>website.vue</span>
              </div>

              <div class="code-body">
                <p><span class="purple">const</span> website = {</p>
                <p class="indent">
                  design:
                  <span class="green">'Modern'</span>,
                </p>
                <p class="indent">
                  performance:
                  <span class="green">'Fast'</span>,
                </p>
                <p class="indent">
                  responsive:
                  <span class="blue">true</span>,
                </p>
                <p class="indent">
                  seo:
                  <span class="blue">true</span>
                </p>
                <p>}</p>
                <br />
                <p>
                  <span class="purple">export default</span>
                  website
                </p>
              </div>

              <div class="code-footer">
                <span class="online-dot"></span>
                Proyecto optimizado
                <span class="footer-check">✓</span>
              </div>

            </div>

            <div class="floating-tech tech-one">
              <span>⚡</span>
              <div>
                <strong>Alto rendimiento</strong>
                <small>Web optimizada</small>
              </div>
            </div>

            <div class="floating-tech tech-two">
              <span>✦</span>
              <div>
                <strong>Diseño moderno</strong>
                <small>Experiencia premium</small>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  background: #0b1020;
  color: #f8fafc;
  overflow: hidden;
  position: relative;
}

.home-hero::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(37,99,235,.12);
  filter: blur(120px);
  border-radius: 50%;
  top: 10%;
  right: -150px;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 80px 15px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 14px;
  border: 1px solid #293d60;
  border-radius: 50px;
  color: #93c5fd;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  background: rgba(37,99,235,.08);
}

.pulse,
.online-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
}

.pulse {
  box-shadow: 0 0 12px #4ade80;
}

.hero-content h1 {
  font-size: clamp(38px, 5vw, 60px);
  line-height: 1.12;
  font-weight: 800;
  letter-spacing: -2px;
  margin-top: 30px;
}

.hero-content h1 span {
  color: #60a5fa;
}

.hero-description {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.9;
  max-width: 500px;
  margin-top: 25px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 35px;
}

.btn-main,
.btn-outline {
  padding: 14px 22px;
  border-radius: 9px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 650;
  transition: .25s;
}

.btn-main {
  background: #3978ed;
  color: white;
}

.btn-main:hover {
  background: #2563eb;
  color: white;
  transform: translateY(-3px);
}

.btn-outline {
  border: 1px solid #334155;
  color: #e2e8f0;
}

.btn-outline:hover {
  border-color: #60a5fa;
  color: #60a5fa;
}

.hero-stats {
  display: flex;
  gap: 45px;
  margin-top: 65px;
}

.hero-stats strong {
  display: block;
  font-size: 23px;
  color: #f8fafc;
}

.hero-stats small {
  color: #64748b;
  font-size: 12px;
}

/* Visual código */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  padding: 30px;
}

.glow {
  position: absolute;
  width: 320px;
  height: 320px;
  background: #2563eb;
  filter: blur(140px);
  opacity: .22;
}

.code-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 430px;
  background: #111a2e;
  border: 1px solid #334155;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,.4);
  transform: rotate(-3deg);
}

.code-header {
  height: 50px;
  background: #1e293b;
  display: flex;
  align-items: center;
  padding: 0 18px;
  gap: 25px;
  color: #94a3b8;
  font-size: 11px;
}

.dots {
  display: flex;
  gap: 6px;
}

.dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #64748b;
}

.dots span:first-child {
  background: #f87171;
}

.dots span:nth-child(2) {
  background: #fbbf24;
}

.dots span:last-child {
  background: #4ade80;
}

.code-body {
  padding: 30px;
  font-family: monospace;
  font-size: 13px;
  color: #cbd5e1;
}

.code-body p {
  margin-bottom: 12px;
}

.indent {
  padding-left: 25px;
}

.purple {
  color: #c084fc;
}

.green {
  color: #4ade80;
}

.blue {
  color: #60a5fa;
}

.code-footer {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 13px 20px;
  border-top: 1px solid #29364c;
  color: #94a3b8;
  font-size: 10px;
}

.footer-check {
  margin-left: auto;
  color: #4ade80;
}

.floating-tech {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 16px;
  border-radius: 12px;
  background: #19253b;
  border: 1px solid #334155;
  box-shadow: 0 15px 35px rgba(0,0,0,.3);
}

.floating-tech > span {
  font-size: 22px;
  color: #60a5fa;
}

.floating-tech strong {
  display: block;
  font-size: 11px;
}

.floating-tech small {
  color: #94a3b8;
  font-size: 10px;
}

.tech-one {
  top: 15%;
  right: 0;
}

.tech-two {
  bottom: 15%;
  left: 0;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-content {
    text-align: center;
    padding: 100px 15px 30px;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions,
  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    min-height: 430px;
  }
}

@media (max-width: 576px) {
  .hero-content h1 {
    font-size: 39px;
    letter-spacing: -1px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn-main,
  .btn-outline {
    width: 100%;
  }

  .hero-stats {
    gap: 25px;
    margin-top: 45px;
  }

  .hero-stats strong {
    font-size: 19px;
  }

  .hero-visual {
    min-height: 350px;
    padding: 20px 5px;
  }

  .code-body {
    padding: 20px;
    font-size: 11px;
  }

  .floating-tech {
    padding: 9px 11px;
  }

  .tech-one {
    right: 0;
    top: 5%;
  }

  .tech-two {
    left: 0;
    bottom: 5%;
  }
}
</style>
