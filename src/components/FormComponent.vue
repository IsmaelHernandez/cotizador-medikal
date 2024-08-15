<template>
  <div class="folios-component">
    <div
      class="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-between"
      v-background
    >
      <div
        class="w-full max-w-[623px] h-auto mx-auto p-4 bg-white-200 flex flex-col rounded-[5px] lg:w-[623px] md:w-[90%] sd:max-w-[523px] sm:w-[90%] sm:m-4 ss:w-[300px]"
      >
        <p
          class="text-[34px] font-medium text-center text-blue-300 mb-10 font-fredoka ss:text-[20px]"
        >
          Información de contacto
        </p>
        <form class="flex flex-col mx-4 space-y-4" @submit.prevent="onSubmit">
          <TextInputComponent
            name="nit"
            type="text"
            label="NIT:"
            required
            autocomplete="off"
            autofocus
            success-message="&#10004;"
            icon="bi bi-cart-dash-fill"
          />
          <TextInputComponent
            name="nombre"
            type="text"
            label="Nombre / Razón social:"
            required
            autocomplete="off"
            autofocus
            success-message="&#10004;"
            icon="bi bi-check-circle-fill"
          />
          <TextInputComponent
            name="email"
            type="text"
            label="Correo Electrónico:"
            required
            autocomplete="off"
            autofocus
            success-message="&#10004;"
            icon="bi bi-check-circle-fill"
          />
          <TextInputComponent
            name="phone"
            type="text"
            label="Teléfono:"
            required
            autocomplete="off"
            autofocus
            success-message="&#10004;"
            icon="bi bi-check-circle-fill"
          />
          <TextInputComponent
            name="distribuidor"
            type="text"
            label="Clave de distribuidor:"
            required
            autocomplete="off"
            autofocus
            success-message="&#10004;"
            icon="bi bi-check-circle-fill"
          />
        </form>
        <div
          class="flex flex-row justify-center gap-[20px] ss:flex-col mt-10 ml-[20px]"
        >
          <ButtonComponent icon="left" title="Anterior" @click="back" />
          <ButtonComponent icon="right" title="Siguiente" @click="navigateTo" />
        </div>
      </div>
      <div class="mt-auto mb-4">
        <img
          class="w-[337px] h-[91px] ss:w-[200px]"
          src="@/assets/images/medikal-footer.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TextInputComponent from "@/components/util/TextInputComponent.vue";
import ButtonComponent from "@/components/util/ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = () => {
  router.push({ name: "plans-medikal" });
};

const back = () => {
  router.push({ name: "home" });
};
</script>
