<script setup lang="ts">
useSeoMeta({
  title: "Juamaya26 | SEO",
  description:
    "Mejora la visibilidad de tu página web con nuestras estrategias de SEO.",
});

const config = useRuntimeConfig();

const seoImage = `${config.app.baseURL}images/seo.jpg`;

const seoFeatures = [
  {
    icon: "bi-search",
    title: "SEO On Page",
    description: "Optimizamos contenidos, encabezados y metadatos.",
  },
  {
    icon: "bi-speedometer2",
    title: "SEO Técnico",
    description: "Mejoramos rendimiento, indexación y estructura.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "SEO Estratégico",
    description: "Investigación de palabras clave y análisis.",
  },
];

const seoStats = [
  { value: "SEO", label: "Optimización" },
  { value: "UX", label: "Experiencia" },
  { value: "ROI", label: "Resultados" },
];
</script>

<template>
  <BaseSEO
    badge="SEO & Marketing Digital"
    title="Haz que tu negocio destaque en Google."
    subtitle="Posicionamiento web inteligente."
    description="Desarrollamos estrategias SEO para mejorar la visibilidad de tu página web y atraer visitantes interesados en tus servicios."
    secondary-description="Optimizamos cada detalle técnico y de contenido para conseguir una web más rápida, accesible y preparada para los motores de búsqueda."
    :image="seoImage"
    image-alt="Análisis y posicionamiento SEO"
    button-text="Solicitar asesoramiento"
    button-link="/contact"
    image-position="right"
    :features="seoFeatures"
    :stats="seoStats"
  />
</template>
