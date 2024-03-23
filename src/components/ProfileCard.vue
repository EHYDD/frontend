<script setup>
import { Settings, LogOut } from 'lucide-vue-next'

defineProps({
  isMinimized: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div v-if="isMinimized == 'false'" class="group pb-5">
    <div class="rounded-2xl bg-zinc-800 p-5 group-hover:bg-zinc-700">
      <div class="flex justify-between">
        <div class="flex items-center">
          <!-- PROFILE PIC -->
          <div class="w-14 h-14 bg-zinc-700 rounded-full group-hover:bg-zinc-600 overflow-clip">
            <img src="https://dagmawibabi.com/static/media/me.b4b941897136a2959e33.png" />
          </div>

          <!-- NAME AND ID -->
          <div class="pl-4">
            <div>
              <span class=""> Dagmawi Babi </span>
            </div>
            <div>
              <span class="text-zinc-400 group-hover:text-zinc-300"> ETS1234/12 </span>
            </div>
          </div>
        </div>

        <div class="pt-2">
          <Settings :size="15" class="text-zinc-400 hover:text-white" />
        </div>
      </div>

      <!-- SIGNOUT BUTTON -->
      <div class="pt-5">
        <div
          class="rounded-xl border border-zinc-600 py-1 pb-2 text-center group-hover:border-zinc-500 hover:bg-blue-500"
        >
          <span class="text-lg uppercase"> Sign Out </span>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="group pl-2 flex flex-col items-center py-2 pr-2 border border-zinc-800 hover:bg-zinc-800 rounded-tr-full rounded-tl-full"
  >
    <!-- PROFILE PIC -->
    <div class="w-12 h-12 bg-zinc-700 rounded-full overflow-clip">
      <img src="https://dagmawibabi.com/static/media/me.b4b941897136a2959e33.png" />
    </div>
    <!-- LOGOUT BUTTON -->
    <div class="pt-5 pb-2">
      <LogOut :size="18" class="text-zinc-600 group-hover:text-zinc-400" />
    </div>
  </div>
</template>
