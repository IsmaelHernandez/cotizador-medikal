<template>
  <div class="folios-component">
    <div
      class="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center"
      v-background
    >
      <div
        class="w-[1169px] h-[725px] bg-white-200 flex flex-col items-center justify-center rounded-[5px]"
      >
        <p
          class="text-[34px] font-normal text-center text-blue-300 mb-10 font-fredoka"
        >
          Elige la cantidad de folios que requieres
        </p>
        <div class="grid grid-cols-4 gap-4">
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
          <div class="w-[222px] h-[119px] bg-blue-200">
            <p
              class="text-center m-5 text-[20px] font-normal text-blue-300 mb-2 font-fredoka"
            >
              Test
            </p>
            <p class="text-[20px] text-center font-normal text-aqua-300">
              Test
            </p>
          </div>
        </div>
        <br />
        <div class="w-full flex flex-row justify-around">
          <div class="ml-5">
            <ButtonComponent icon="left" title="Anterior" @click="back" />
          </div>
          <div class="bg-aqua-200 w-[527px] h-[76px] rounded-[5px] mr-5">
            <input
              class="m-5 w-[20px] h-[24px]"
              type="checkbox"
              id="cbox2"
              value="second_checkbox"
            />
            <label
              class="text-[24px] font-medium text-blue-300 mb-10 font-fredoka"
              for="cbox2"
              >Requieres un paquete de mayor volúmen</label
            >
          </div>
        </div>
      </div>
      <div>
        <img
          class="w-[337px] h-[91px] mt-20"
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
  router.push({ name: "folios-additional" });
};
</script>
