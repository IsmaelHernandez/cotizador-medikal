<template>
  <div class="w-full flex flex-row justify-center min-h-64">
    <h1
      class="text-yellow-200 m-[90px] text-[128px] font-semibold font-fredoka ss:text-[70px] text-center ml-[80px]"
    >
      Nuestros Planes
    </h1>
  </div>
  <div
    class="w-full flex flex-row justify-center gap-[30px] ss:flex-col cursor-pointer"
  >
    <div @click="selectPlan(TYPE_PLANS.INITIAL)" :class="getPlanClass(TYPE_PLANS.INITIAL)">
      <div class="w-full min-h-24">
        <div
          v-if="medikalStore.infoUser === TYPE_PLANS.INITIAL"
          class="top-3 ligth-2 text-green-500 text-4xl"
        >
          <i class="bi bi-check-circle-fill icon lex justify-end"></i>
        </div>
        <h3
          class="text-yellow-300 font text-[64px] text-center font-normal font-fredoka"
        >
          Inicial
        </h3>
        <h3
          class="text-blue-300 text-center font-medium text-[48px] font-fredoka"
        >
          {{ medikalStore.priceInitial.initial }}
        </h3>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[459px] ml-5 bg-yellow-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col gap-[0px]"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-yellow-500 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            Médicas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-yellow-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.medicalTools"
          :key="index"
          class="w-full flex flex-col justify-center gap-[40px]"
        >
          <p
            class="text-[20px] font-normal text-center text-yellow-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[602.75px] ml-5 bg-aqua-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-aqua-500 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            administrativas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-aqua-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.administrativeTools"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-aqua-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[300px] ml-5 bg-yellow-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-yellow-500 font-fredoka ss:text-[20px] text-center"
          >
            Almacenamiento
            <br />
            y firmado
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-yellow-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.storageAndSignedInitial"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-yellow-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
    </div>
    <div @click="selectPlan(TYPE_PLANS.INTERMEDIATE)" :class="getPlanClass(TYPE_PLANS.INTERMEDIATE)">
      <div class="w-full min-h-24">
        <div
          v-if="medikalStore.infoUser === TYPE_PLANS.INTERMEDIATE"
          class="top-3 ligth-2 text-green-500 text-4xl"
        >
          <i class="bi bi-check-circle-fill"></i>
        </div>
        <h3
          class="text-aqua-300 font text-[64px] text-center font-normal font-fredoka"
        >
          Intermedio
        </h3>
        <h3
          class="text-blue-300 text-center font-medium text-[48px] font-fredoka"
        >
          {{ medikalStore.priceIntermediate.intermediate }}
        </h3>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[459px] ml-5 bg-yellow-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col gap-[0px]"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-yellow-500 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            Médicas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-yellow-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.medicalTools"
          :key="index"
          class="w-full flex flex-col justify-center gap-[40px]"
        >
          <p
            class="text-[20px] font-normal text-center text-yellow-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[602.75px] ml-5 bg-aqua-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-aqua-500 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            administrativas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-aqua-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.administrativeTools"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-aqua-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[300px] ml-5 bg-yellow-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-yellow-500 font-fredoka ss:text-[20px] text-center"
          >
            Almacenamiento
            <br />
            y firmado
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-yellow-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.storageAndSignedIntermediate"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-yellow-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[310.25px] ml-5 bg-white-200 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-blue-300 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            avanzadas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-blue-300 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.advancedToolsIntermediate"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-blue-300 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
    <div @click="selectPlan(TYPE_PLANS.ADVANCE)" :class="getPlanClass(TYPE_PLANS.ADVANCE)">
      <div class="w-full min-h-24">
        <div
          v-if="medikalStore.infoUser === TYPE_PLANS.ADVANCE"
          class="top-3 ligth-2 text-green-500 text-4xl"
        >
          <i class="bi bi-check-circle-fill"></i>
        </div>
        <h3
          class="text-blue-300 font text-[64px] text-center font-normal font-fredoka"
        >
          Avanzado
        </h3>
        <h3
          class="text-blue-300 text-center font-medium text-[48px] font-fredoka"
        >
          {{ medikalStore.priceAdvance.advance }}
        </h3>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[459px] ml-5 bg-yellow-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col gap-[0px]"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-yellow-500 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            Médicas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-yellow-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.medicalTools"
          :key="index"
          class="w-full flex flex-col justify-center gap-[40px]"
        >
          <p
            class="text-[20px] font-normal text-center text-yellow-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[602.75px] ml-5 bg-aqua-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-aqua-500 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            administrativas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-aqua-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.administrativeTools"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-aqua-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[459px] ml-5 bg-yellow-400 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-yellow-500 font-fredoka ss:text-[20px] text-center"
          >
            Almacenamiento
            <br />
            y firmado
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-yellow-500 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.storageAndSignedAdvanced"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-yellow-500 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <br />
      <div
        class="flex flex-col w-[459px] h-[350.25px] ml-5 bg-white-200 rounded-[10px] ss:w-[271px] ml-4"
      >
        <div
          class="w-full flex flex-row justify-center cursor-pointer ss:flex-col"
        >
          <p
            class="text-[30px] font-normal m-[20px] text-blue-300 font-fredoka ss:text-[20px] text-center"
          >
            Herramientas
            <br />
            avanzadas
          </p>
          <div
            class="w-[48px] h-[48px] m-[20px] rounded-[40px] bg-blue-300 flex justify-center items-center ss:ml-[110px]"
          >
            <i class="bi bi-cart-dash-fill text-center text-white-200"></i>
          </div>
        </div>
        <div
          v-for="(item, index) in medikalStore.advancedToolsAdvanced"
          :key="index"
          class="w-full flex flex-col justify-center gap-[10px]"
        >
          <p
            class="text-[20px] font-normal text-center text-blue-300 font-fredoka ss:text-[15px]"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <br />
  <div
    class="flex flex-row justify-center items-center gap-[20px] ss:flex-col ml-[1px] gap-2"
  >
    <ButtonComponent icon="left" title="Anterior" @click="back" />
    <ButtonComponent icon="right" title="Siguiente" @click="next" />
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/util/ButtonComponent.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useMedikalStore } from "../stores/medikalStore";
import { TYPE_PLANS } from '@/config/constants';

const router = useRouter();
const medikalStore = useMedikalStore();
//const apiService = inject("apiService");
const selectedPrice = ref(null);

// onMounted(() => {
//   getPackagesMedikal();
// });

const selectPlan = (plan) => {
  medikalStore.infoUser = plan;
  console.log(medikalStore.infoUser);

  switch (plan) {
    case TYPE_PLANS.INITIAL:
      selectedPrice.value = medikalStore.priceInitial.initial;
      break;
    case TYPE_PLANS.INTERMEDIATE:
      selectedPrice.value = medikalStore.priceIntermediate.intermediate;
      break;
    case TYPE_PLANS.ADVANCE:
      selectedPrice.value = medikalStore.priceAdvance.advance;
      break;
    default:
      console.error("Plan no reconocido:", plan);
  }

  console.log(selectedPrice.value);
};

const getPlanClass = (plan) => [
  "flex flex-col w-[499px] h-[2150px] rounded-[20px] ss:w-[300px] ml-[10px] border-[3px] transition-all",
  plan === "intermedio"
    ? "bg-aqua-50"
    : plan === "avanzado"
    ? "bg-white-50"
    : "bg-yellow-100",
  medikalStore.infoUser === plan ? "border-green-100" : "border-transparent",
];

// const getPackagesMedikal = async () => {
//   try {
//     const { data: data } = await apiService.get("plans");
//     medikalStore.packagesMedikal = data;
//     console.log(medikalStore.packagesMedikal);
//   } catch (error) {
//     console.log(error);
//   }
// };

const next = () => {
  router.push({ name: "folios-additional" });
};

const back = () => {
  router.push({ name: "form-medikal" });
};
</script>

