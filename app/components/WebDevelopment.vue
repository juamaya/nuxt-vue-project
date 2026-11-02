
<template>
  <section class="web-section py-5">
    <div class="container py-lg-5">
      <div class="row align-items-center g-5">

        <!-- Contenido -->
        <div class="col-lg-6">

          <span class="section-tag">
            DESARROLLO WEB
          </span>

          <h1 class="section-title mt-3">
            Creamos páginas web
            <span>modernas y funcionales.</span>
          </h1>

          <p class="section-description mt-4">
            Desarrollamos soluciones web a medida, combinando
            diseño, tecnología y rendimiento para impulsar
            tu negocio en el mundo digital.
          </p>

          <div class="features mt-4">
            <div class="feature">
              <span>✓</span>
              Diseño moderno y responsive
            </div>

            <div class="feature">
              <span>✓</span>
              Optimización SEO y velocidad
            </div>

            <div class="feature">
              <span>✓</span>
              Desarrollo personalizado
            </div>
          </div>

          <div class="d-flex flex-wrap gap-3 mt-5">
            <NuxtLink to="/contact" class="btn-secondary-custom">
              Solicitar presupuesto →
            </NuxtLink>
 
          </div>

        </div>

        <!-- Imagen / Visual -->
        <div class="col-lg-6">
          <div class="web-visual">

            <div class="browser">
              <div class="browser-header">
                <div class="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="browser-address">
                  www.tuproyecto.com
                </div>
              </div>

              <div class="browser-content">
                <div class="mock-navbar">
                  <div class="mock-logo"></div>
                  <div class="mock-links">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div class="mock-hero">
                  <div class="mock-title"></div>
                  <div class="mock-title short"></div>
                  <div class="mock-text"></div>
                  <div class="mock-button"></div>
                </div>

                <div class="mock-cards">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>

            <div class="floating-card">
              <span class="status-dot"></span>
              <div>
                <strong>100% Responsive</strong>
                <small>Adaptado a todos los dispositivos</small>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.web-section {
 
  color: #f1f5f9;
  overflow: hidden;
  min-height: 650px;
  display: flex;
  align-items: center;
}

.section-tag {
  color: #60a5fa;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-title {
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -1.5px;
}

.section-title span {
  display: block;
  color: #60a5fa;
}

.section-description {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.8;
  max-width: 510px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #cbd5e1;
  font-size: 14px;
  margin-bottom: 15px;
}

.feature span {
  color: #60a5fa;
  font-weight: bold;
}

.btn-primary-custom,
.btn-secondary-custom {
  text-decoration: none;
  padding: 13px 22px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  transition: .25s;
}

.btn-primary-custom {
  color: white;
  background: #3978ed;
}

.btn-primary-custom:hover {
  background: #2563eb;
  transform: translateY(-3px);
}

.btn-secondary-custom {
  color: #e2e8f0;
  border: 1px solid #334155;
}

.btn-secondary-custom:hover {
  border-color: #60a5fa;
  color: #60a5fa;
}

/* Visual navegador */
.web-visual {
  position: relative;
  padding: 25px;
}

.browser {
  background: #151e31;
  border: 1px solid #334155;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,.4);
  transform: perspective(1000px) rotateY(-5deg);
}

.browser-header {
  height: 45px;
  background: #1e293b;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 25px;
}

.browser-dots {
  display: flex;
  gap: 5px;
}

.browser-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #64748b;
}

.browser-dots span:first-child {
  background: #f87171;
}

.browser-dots span:nth-child(2) {
  background: #fbbf24;
}

.browser-dots span:last-child {
  background: #4ade80;
}

.browser-address {
  background: #0f172a;
  border-radius: 5px;
  padding: 5px 25px;
  color: #94a3b8;
  font-size: 10px;
  flex: 1;
  text-align: center;
}

.browser-content {
  padding: 25px;
  min-height: 330px;
}

.mock-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mock-logo {
  width: 65px;
  height: 13px;
  background: #60a5fa;
  border-radius: 4px;
}

.mock-links {
  display: flex;
  gap: 12px;
}

.mock-links span {
  width: 28px;
  height: 5px;
  background: #475569;
  border-radius: 5px;
}

.mock-hero {
  margin-top: 55px;
}

.mock-title {
  height: 19px;
  width: 75%;
  background: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 10px;
}

.mock-title.short {
  width: 48%;
  background: #60a5fa;
}

.mock-text {
  width: 65%;
  height: 7px;
  background: #475569;
  border-radius: 4px;
  margin-top: 20px;
}

.mock-button {
  width: 100px;
  height: 30px;
  background: #3978ed;
  border-radius: 6px;
  margin-top: 22px;
}

.mock-cards {
  display: flex;
  gap: 12px;
  margin-top: 45px;
}

.mock-cards div {
  height: 65px;
  flex: 1;
  border-radius: 7px;
  background: #253653;
  border: 1px solid #334155;
}

.floating-card {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: #19253b;
  border: 1px solid #334155;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,.3);
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #4ade80;
  border-radius: 50%;
}

.floating-card strong {
  display: block;
  color: #f1f5f9;
  font-size: 12px;
}

.floating-card small {
  display: block;
  color: #94a3b8;
  font-size: 10px;
  margin-top: 3px;
}

/* Responsive */
@media (max-width: 991px) {
  .web-section {
    text-align: center;
  }

  .section-description {
    margin-left: auto;
    margin-right: auto;
  }

  .features {
    display: inline-block;
    text-align: left;
  }

  .web-visual {
    max-width: 600px;
    margin: 20px auto 0;
  }

  .browser {
    transform: none;
  }
}

@media (max-width: 576px) {
  .section-title {
    font-size: 34px;
  }

  .section-description {
    font-size: 14px;
  }

  .web-visual {
    padding: 15px 5px;
  }

  .browser-content {
    padding: 15px;
    min-height: 260px;
  }

  .mock-hero {
    margin-top: 40px;
  }

  .mock-cards {
    margin-top: 30px;
  }

  .floating-card {
    left: 0;
    bottom: -10px;
    padding: 10px;
  }

  .btn-primary-custom,
  .btn-secondary-custom {
    width: 100%;
  }
}
</style>
