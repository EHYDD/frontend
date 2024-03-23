<script setup>
import { Sun, Moon } from 'lucide-vue-next'

defineProps({
  isLightMode: {
    type: Boolean,
    required: true
  },
  isMinimized: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div
    v-if="isMinimized == 'false'"
    class="w-full flex justify-between border border-zinc-800 rounded-xl"
  >
    <!-- LIGHT MODE -->
    <div v-if="isLightMode == 'true'" class="w-full flex">
      <div
        class="w-full flex justify-center items-center py-2 rounded-tl-xl rounded-bl-xl bg-zinc-800"
      >
        <Sun :size="18" />
        <span class="pl-3"> Light </span>
      </div>
      <div
        class="w-full flex justify-center items-center py-2 rounded-tr-xl rounded-br-xl hover:bg-zinc-700"
      >
        <Moon :size="18" />
        <span class="pl-3"> Dark </span>
      </div>
    </div>

    <!-- DARK MODE -->
    <div v-else-if="isLightMode == 'false'" class="w-full flex">
      <div class="w-full flex justify-center items-center py-2 rounded-xl hover:bg-zinc-700">
        <Sun :size="18" />
        <span class="pl-3"> Light </span>
      </div>
      <div class="w-full flex justify-center items-center py-2 rounded-xl bg-zinc-800">
        <Moon :size="18" />
        <span class="pl-3"> Dark </span>
      </div>
    </div>
  </div>
  <div v-else class="pt-2">
    <div
      class="group flex justify-center py-2 items-center border border-zinc-800 hover:bg-zinc-800 rounded-bl-xl rounded-br-xl"
    >
      <Sun v-if="isLightMode == 'true'" :size="18" class="text-zinc-600 group-hover:text-white" />
      <Moon v-else :size="18" />
    </div>
  </div>
</template>
