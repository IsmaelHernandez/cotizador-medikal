<template>
  <div class="flex flex-col space-y-1">
    <label
      :for="name"
      class="text-[22px] font-fredoka font-normal text-blue-300"
      >{{ label }}</label
    >
    <div class="relative">
      <div class="absolute left-0 top-0 flex items-center pl-0">
        <span
          class="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-300 rounded-[4px, 0px, 0px, 4px]"
        >
          <i :class="icon" class="w-[21px] h-[21px]"></i>
        </span>
      </div>
      <input
        :name="name"
        :id="name"
        :type="type"
        v-model="inputValue"
        autocomplete="off"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
        class="block w-[494px] pl-12 pr-3 py-2 text-gray-700 bg-aqua-100 rounded focus:outline-none focus:ring focus:ring-teal-200 ss:w-[200px]"
        :class="{ 'has-error': !!errorMessage, success: meta.valid }"
      />
      <p class="error-message" v-show="errorMessage">{{ errorMessage }}</p>
      <p class="success-message" v-show="meta.valid">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  value: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  autocomplete: {
    type: String,
    default: "off",
    required: false,
  },
  icon: {
    type: String,
    default: "fas fa-hashtag", // Default icon class
  },
});

const name = toRef(props, "name");

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.success-message {
  color: green;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.has-error {
  border-color: red;
}

.success {
  border-color: green;
}
</style>
