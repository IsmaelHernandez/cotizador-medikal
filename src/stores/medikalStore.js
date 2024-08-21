import { defineStore } from "pinia";
import { ref } from "vue";

export const useMedikalStore = defineStore("medikalStore", () => {
  const packagesMedikal = ref([]);
  const type_package_medikal = ref("");
  const infoUser = ref("");
  const medicalTools = ref([
    "Historia Clínica Electrónica Incluye formatos",
    "Agenda y confirmación vía correo electrónico",
    "Personalización de logo y firma",
    "Ordenes Médicas",
    "Formulación Médica",
    "Realización procedimientos",
  ]);

  const administrativeTools = ref([
    "Cotizaciones",
    "Cuentas de cobro / Facturación básica",
    "Manejo de caja",
    "Consentimientos informados digitales",
    "Encuesta Bioseguridad",
    "Módulo gestion de tareas",
    "Usuarios Asistenciales / Administrativos 0",
    "Formatos de historia clínica personalizable",
  ]);

  const storageAndSignedInitial = ref([
    "Almacenamiento para archivos adjuntos 1GB",
    "Pacientes y formatos Ilimitados",
    "Usuarios 1",
    "Folios 1000",
  ]);

  const storageAndSignedIntermediate = ref([
    "Almacenamiento para archivos adjuntos 1GB",
    "Pacientes y formatos Ilimitados",
    "Usuarios 2+",
    "Folios 3000",
  ]);

  const storageAndSignedAdvanced = ref([
    "Almacenamiento para archivos adjuntos 1GB",
    "Pacientes y formatos Ilimitados",
    "Usuarios 3+",
    "Folios 5000",
  ]);

  const advancedToolsIntermediate = ref([
    "Formato Escalas Médicas Personalizable",
    "Formato Exámenes Diagnóstico Personalizable",
    "Encuestas Personalizables",
  ]);

  const advancedToolsAdvanced = ref([
    "Formato Escalas Médicas Personalizable",
    "Formato Exámenes Diagnóstico Personalizable",
    "Encuestas Personalizables",
    "Información paciente personalizable",
    "Exámen Diagnóstico con conexión a cámara",
    "Integración plataformas Teleconsulta",
    "Integración pasarelas de pago",
  ]);

  const priceIntermediate = ref({
    intermediate: "$1’493,000",
  });
  const priceInitial = ref({
    initial: "$884,000",
  });
  const priceAdvance = ref({
    advance: "$1’927,000",
  });

  return {
    packagesMedikal,
    medicalTools,
    administrativeTools,
    storageAndSignedInitial,
    storageAndSignedIntermediate,
    storageAndSignedAdvanced,
    advancedToolsIntermediate,
    advancedToolsAdvanced,
    infoUser,
    priceIntermediate,
    priceInitial,
    priceAdvance,
    type_package_medikal
  };
});
