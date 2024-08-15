<template>
  <div class="users-component">
    <div
      class="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      v-background
    >
      <div
        class="w-full max-w-[623px] h-auto mx-auto p-4 bg-white-200 flex flex-col rounded-[5px] lg:w-[623px] md:w-[90%] sd:max-w-[523px] sm:w-[90%] sm:m-4 ss:w-[300px]"
      >
        <br />
        <p
          class="text-[34px] font-medium text-center text-blue-300 mb-10 font-fredoka ss:text-[20px]"
        >
          Requieres usuarios adicionales
          <br />
          para tu plan
        </p>
        <div
          class="flex flex-row justify-center gap-[40px] ss:flex-col ml-[20px]"
        >
          <ButtonComponent
            icon="bi bi-x-circle-fill"
            title="No"
            @click="navigateDownload"
          />
          <ButtonComponent
            icon="bi bi-check-circle-fill"
            title="Si"
            @click="next"
          />
        </div>
        <br />
        <br />
        <div class="flex flex-row ml-[60px] ss:ml-[20px]">
          <ButtonComponent icon="left" title="Anterior" @click="back" />
        </div>
      </div>
      <div>
        <img
          class="w-[337px] h-[91px] mt-20 ss:w-[200px] mt-5"
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

const navigateDownload = () => {
  router.push({ name: "download" });
};

const next = () => {
  router.push({ name: "additional-users" });
};

const back = () => {
  router.push({ name: "folios-additional" });
};
</script>
