<script setup>
import { ListMinus } from 'lucide-vue-next'

defineProps({
  icon: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="py-1">
    <div
      class="group h-full pl-5 py-4 flex items-center rounded-xl hover:bg-zinc-800 hover:text-white"
    >
      <div>
        <ListMinus :size="20" class="text-zinc-400 group-hover:text-white" />
      </div>
      <div class="pl-5">
        <span class="text-zinc-400 font-bold group-hover:text-white">
          {{ label }}
        </span>
      </div>
    </div>
  </div>
</template>
