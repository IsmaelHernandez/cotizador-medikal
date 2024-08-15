<template>
  <div
    class="relative w-full h-screen bg-center bg-[url('/home/ismael/Escritorio/facturatech/cotizador-medical/src/assets/images/image-background2.webp')] bg-no-repeat bg-cover bg-blue-800"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b flex flex-col justify-center items-center"
    >
      <div
        class="w-full max-w-[700px] bg-white-200 sm:m-4 p-4 rounded-[15px] ss:w-[320px]"
      >
        <p class="text-center text-[34px] font-medium mt-12 font-roboto">
          Qué proveedor quieres utilizar
        </p>
        <div class="flex flex-row justify-center my-12 gap-[10px]">
          <button
            @click="next"
            class="w-[230px] h-[66px] rounded-[15px] bg-blue-500 text-white-200 text-[30px] font-bold font-roboto"
          >
            Medik
          </button>
          <button
            @click="next"
            class="w-[230px] h-[66px] rounded-[15px] bg-white-200 text-blue-500 text-[30px] font-bold border-2 border-blue-500 font-roboto"
          >
            Vital
          </button>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full flex justify-center pb-4">
        <img
          src="@/assets/images/logo1.svg"
          class="w-[315px] h-[111px]"
          alt="Logo"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const next = () => {
  router.push({ name: "form-medikal" });
};
</script>
