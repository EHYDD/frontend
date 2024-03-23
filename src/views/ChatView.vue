<script setup>
import { Send } from 'lucide-vue-next'
</script>

<template>
  <div class="flex h-full justify-between">
    <!-- SETTINGS -->
    <div class="w-full h-full bg-zinc-700">
      <div class="w-full border-b border-b-zinc-800 py-5">
        <h1 class="uppercase pl-10 font-bold text-black">Chat With AI</h1>
      </div>
      <div class="p-5">
        <!-- CHATS -->
        <div class="bg-[#181818] rounded-2xl h-[82vh]">
          <span>a</span>
        </div>

        <!-- INPUT BOX -->
        <div class="pt-2 flex">
          <div class="w-full bg-[#181818] rounded-tl-3xl rounded-bl-3xl py-5">
            <span>a</span>
          </div>
          <div class="pl-2">
            <div class="px-7 flex justify-center bg-[#181818] rounded-tr-3xl rounded-br-3xl py-6">
              <Send :size="18" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SHADOW -->
    <!-- <div class="w-2 h-full bg-black drop-shadow-2xl blur"></div> -->

    <!-- AI OPTIONS -->
    <div class="w-2/5 h-full bg-zinc-800">
      <div class="w-full border-b border-b-zinc-700 py-5">
        <h1 class="uppercase pl-10 font-bold">Chat With AI</h1>
      </div>
      <div class="p-5">
        <h1>This is chat page</h1>
      </div>
    </div>
  </div>
</template>

<style></style>
