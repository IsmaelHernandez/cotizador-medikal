<template>
  <div class="folios-component">
    <div
      class="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      v-background
    >
      <div
        class="w-full max-w-[623px] h-auto mx-auto p-4 bg-white-200 flex flex-col rounded-[5px] lg:w-[623px] md:w-[90%] sd:max-w-[523px] sm:w-[90%] sm:m-4 ss:w-[300px]"
      >
        <br />
        <br />
        <p
          class="text-[34px] font-medium text-center text-blue-300 mb-10 font-fredoka ss:text-[20px]"
        >
          Usuarios adicionales
        </p>
        <div class="flex flex-row justify-center items-center gap-[40px]">
          <div
            class="w-[279] h-[50px] flex flex-row justify-center items-center"
          >
            <button class="w-[50px] h-[50px] bg-blue-300">
              <i class="bi bi-person-fill-dash text-white-200"></i>
            </button>
            <div class="w-[179px] h-[50px] bg-blue-200 text-center">
              <p class="mt-3">Test</p>
            </div>
            <button class="w-[50px] h-[50px] bg-blue-300">
              <i class="bi bi-person-fill-add text-white-200"></i>
            </button>
          </div>
        </div>
        <br />
        <br />
        <div
          class="flex flex-row ml-[60px] gap-[20px] lg:ml-[60px] flex-row sm:ml-[60px] sx:flex-col ml-[130px] sd:ml-[10px] ss:flex-col ml-[15px]"
        >
          <ButtonComponent
            icon="bi bi-x-circle-fill"
            title="Anterior"
            @click="back"
          />
          <ButtonComponent
            icon="bi bi-check-circle-fill"
            title="Siguiente"
            @click="next"
          />
        </div>
      </div>
      <div>
        <img
          class="w-[337px] h-[91px] mt-20 ss:w-[200px] m-10"
          src="@/assets/images/medikal-footer.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/util/ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const back = () => {
  router.push({ name: "users-additional" });
};

const next = () => {
  router.push({ name: "download" });
};
</script>
