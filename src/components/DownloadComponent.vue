<template>
  <div class="download-component">
    <div
      class="w-full h-screen bg-cover bg-center flex items-center justify-center"
      v-background
    >
      <div
        class="w-[761px] h-[521px] bg-blue-600 rounded-[6px] flex flex-col items-center justify-center p-10 lg:w-[761px] sm:w-[600px] sd:w-[400px] ss:w-[300px]"
      >
        <img
          class="w-[226px] h-[60px] mb-10"
          src="@/assets/images/logo-white-medikal.png"
          alt=""
        />
        <p
          class="text-[24px] font-normal text-center text-white-200 mb-10 font-fredoka ss:text-[20px]"
        >
          La cotización se ha enviado a su correo
          <br />
          electrónico, gracias por preferir
          <span class="font-extrabold">medik</span>
        </p>
        <button
          class="w-[230px] h-[66px] rounded-[5px] text-[24px] font-normal text-blue-300 bg-aqua-200 font-fredoka"
        >
          Descargar <i class="bi bi-file-earmark-arrow-down-fill"></i>
        </button>
        <p
          class="text-[16px] font-normal text-white-200 font-fredoka mt-10 ss:text-center"
        >
          La cotización solo puede descargarse una vez
        </p>
      </div>
    </div>
  </div>
</template>
