 
<script setup>
import { ref } from 'vue'

const form = ref({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
})

const enviar = () => {
  console.log(form.value)

  // Aquí conectarías tu API de envío
}
</script>

<template>
  <section class="contact-section">
    <div class="container">
      <div class="form-card mx-auto">

        <div class="mb-4">
          <span class="subtitle">CONTACTO</span>
          <h2>Hablemos de tu proyecto</h2>
          <p>Déjanos tu mensaje y nos pondremos en contacto.</p>
        </div>

        <form @submit.prevent="enviar">

          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input
              v-model="form.nombre"
              type="text"
              class="form-control"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Correo electrónico</label>
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Asunto</label>
            <select
              v-model="form.asunto"
              class="form-select"
              required
            >
              <option value="" disabled>Selecciona un asunto</option>
              <option value="informacion">Información</option>
              <option value="presupuesto">Presupuesto</option>
              <option value="soporte">Soporte</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="form-label">Mensaje</label>
            <textarea
              v-model="form.mensaje"
              class="form-control"
              rows="4"
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-submit">
            Enviar mensaje →
          </button>

        </form>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  min-height: 100vh;
 
  display: flex;
  align-items: center;
  padding: 50px 0;
}

.form-card {
  max-width: 550px;
  padding: 40px;
  background: #111a2e;
  border: 1px solid #29364c;
  border-radius: 18px;
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
}

.subtitle {
  color: #60a5fa;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

h2 {
  color: #f1f5f9;
  font-size: 27px;
  font-weight: 700;
  margin-top: 12px;
}

p {
  color: #94a3b8;
  font-size: 14px;
}

.form-label {
  color: #d4dbea;
  font-size: 13px;
  font-weight: 600;
}

.form-control,
.form-select {
  background-color: #151e31;
  border: 1px solid #29364c;
  color: #f1f5f9;
  border-radius: 9px;
  padding: 12px;
  font-size: 13px;
  color-scheme: dark;
}

.form-control::placeholder {
  color: #748198;
}

.form-control:focus,
.form-select:focus {
  background-color: #19253b;
  color: white;
  border-color: #3978ed;
  box-shadow: 0 0 0 3px rgba(57,120,237,.15);
}

.form-select option {
  background: #151e31;
  color: white;
}

.btn-submit {
  width: 100%;
  padding: 13px;
  background: #3978ed;
  color: white;
  border: none;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  transition: .2s;
}

.btn-submit:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

@media (max-width: 576px) {
  .form-card {
    padding: 25px 20px;
  }

  h2 {
    font-size: 23px;
  }
}
</style>
