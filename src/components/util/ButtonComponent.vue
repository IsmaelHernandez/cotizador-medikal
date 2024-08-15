<template>
  <button
    :class="buttonClasses"
    class="btn-plans flex items-center justify-center gap-[10px]"
  >
    <i
      v-if="hasLeftIcon"
      class="w-[30px] text-[30px] bi bi-arrow-left mr-2 text-blue-300"
    >
    </i>
    <span class="ml-2">
      {{ title }}
    </span>
    <i
      v-if="hasRightIcon"
      class="w-[30px] text-[30px] bi bi-arrow-right ml-2 text-blue-300"
    >
    </i>
    <i v-if="customIcon" :class="customIconClass"> </i>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  icon: {
    type: String,
    default: true,
  },
  title: {
    type: String,
    default: true,
  },
});

const buttonClasses = computed(() => {
  return {
    "bg-aqua-200": true,
    "rounded-[5px]": true,
    "h-[66px]": true,
    "w-[230px]": true,
    "text-[24px]": true,
    "font-medium": true,
    "text-blue-300": true,
    "font-fredoka": true,
  };
});

const hasLeftIcon = computed(() => props.icon === "left");
const hasRightIcon = computed(() => props.icon === "right");
const customIcon = computed(
  () => props.icon !== "left" && props.icon !== "right"
);
const customIconClass = computed(() => {
  return customIcon.value ? props.icon : "";
});
</script>
