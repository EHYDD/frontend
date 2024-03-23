<script setup>
import { Send } from 'lucide-vue-next'
import { ref } from 'vue'

const userInput = ref({ role: 'user', content: '' })
const conversation = ref([])

function getUserInput() {
  userInput.value.content = document.getElementById('userInput').value
  // console.log(userInput.value.content)
}

function sendUserInputToAI() {
  // GET USER INPUT
  var newUserInput = {
    role: 'user',
    content: document.getElementById('userInput').value.toString()
  }
  conversation.value.push(newUserInput)
  document.getElementById('userInput').value = ''
}
</script>

<template>
  <div class="flex h-full justify-between">
    <!-- SETTINGS -->
    <div class="w-full h-full bg-[#202020]">
      <div class="w-full border-b border-b-zinc-800 py-5">
        <h1 class="uppercase pl-10 font-bold text-white">Chat With AI</h1>
      </div>
      <div class="p-5">
        <!-- CHATS -->
        <div class="bg-[#181818] rounded-2xl h-[82vh] p-5">
          <!-- EACH MESSAGE -->

          <div v-for="messages in conversation" :key="messages.content" class="py-2">
            <div class="bg-zinc-800 rounded-full py-2 px-6">
              {{ messages.content }}
            </div>
          </div>
        </div>

        <!-- INPUT BOX -->
        <div class="pt-2 flex">
          <div class="w-full h-16 rounded-tl-3xl rounded-bl-3xl">
            <input
              id="userInput"
              className="w-full h-full bg-[#181818] placeholder-zinc-500 text-white pl-6 pr-4 outline-none rounded-tl-3xl rounded-bl-3xl"
              placeholder="Chat with AI..."
              @input="getUserInput"
              @keyup.enter="sendUserInputToAI"
            />
          </div>
          <div class="pl-2 h-16">
            <div
              class="h-full px-7 flex flex-col justify-center bg-[#181818] rounded-tr-3xl rounded-br-3xl"
              @click="sendUserInputToAI"
            >
              <Send :size="18" class="text-green-500" />
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
        <h1 class="uppercase pl-10 font-bold">AI OPTIONS AND SETTNIGS</h1>
      </div>
      <div class="p-5">
        <h1>This is chat page</h1>
      </div>
    </div>
  </div>
</template>

<style></style>
