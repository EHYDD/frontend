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
  },
  labelHidden: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="py-1">
    <!-- LABELLED SIDE TAB -->
    <div
      class="group h-full pl-5 py-4 flex items-center rounded-xl hover:bg-zinc-800 hover:text-white"
    >
      <div>
        <ListMinus :size="20" class="text-zinc-400 group-hover:text-white" />
      </div>
      <div class="pl-5">
        <span v-if="labelHidden == false" class="text-zinc-400 font-bold group-hover:text-white">
          {{ label }}
        </span>
        <span v-else></span>
      </div>
    </div>

    <!-- HIDDEN LABEL SIDE TAB -->
    <!-- <div v-else class="hover:bg-zinc-800">
      <ListMinus :size="20" class="text-zinc-400 group-hover:text-white" />
    </div> -->
  </div>
</template>
