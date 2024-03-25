<script setup>
import { Send, Trash } from 'lucide-vue-next'
import { ref, reactive } from 'vue'
import { OpenAI } from 'openai'
import VueMarkdown from 'vue-markdown-render'

const userInput = ref({ role: 'user', content: '' })
const conversation = reactive([])
const aiSystemPrompt = "Answer precisely and short but don't hold back on important details."

function getUserInput() {
  userInput.value.content = document.getElementById('userInput').value
  // console.log(userInput.value.content)
}

async function sendUserInputToAI() {
  // GET USER INPUT
  var newUserInput = ref({
    role: 'user',
    content: document.getElementById('userInput').value.toString()
  })
  conversation.push(newUserInput)
  document.getElementById('userInput').value = ''

  // SEND TO AI
  let newAIOutput = ref({
    role: 'AI',
    content: ''
  })
  conversation.push(newAIOutput)

  let openAI = new OpenAI({
    baseURL: 'http://localhost:1234/v1',
    apiKey: 'myapikey',
    dangerouslyAllowBrowser: true
  })

  let aiResponse = await openAI.chat.completions.create({
    model: 'local-model',
    messages: [
      {
        role: 'system',
        content: aiSystemPrompt
      },
      { role: 'user', content: newUserInput.value.content.toString().trim() }
    ],
    stream: true
  })
  for await (const chunk of aiResponse) {
    newAIOutput.value.content += chunk.choices[0]?.delta?.content || ''
  }
}

function clearConversation() {
  let responseLength = conversation.length
  while (responseLength > 0) {
    conversation.pop()
    responseLength = conversation.length
  }
}
</script>

<template>
  <div class="flex h-full justify-between">
    <!-- SETTINGS -->
    <div class="w-full h-full bg-[#202020]">
      <div class="w-full flex justify-between border-b border-b-zinc-800 py-5">
        <h1 class="uppercase pl-10 font-bold text-white">Chat With AI</h1>
        <div class="pr-10 text-zinc-600 hover:text-zinc-300" @click="clearConversation">
          <Trash :size="16" />
        </div>
      </div>
      <div class="p-5">
        <!-- CHATS -->
        <div class="bg-[#181818] rounded-2xl h-[82vh] p-5 overflow-scroll">
          <!-- EACH MESSAGE -->
          <div v-if="conversation.length == 0">
            <span class="text-zinc-500">
              Say Hello to start chatting with your personal assistant...
            </span>
          </div>
          <div v-else>
            <div v-for="messages in conversation" :key="messages.content" class="py-0">
              <!-- USER INPUT -->
              <div
                v-if="messages.value.role == 'user'"
                class="bg-[#181818] text-white rounded-full py-2 px-6"
              >
                {{ messages.value.content }}
              </div>
              <!-- AI RESPONSES -->
              <div v-else class="pb-10 pl-10">
                <div
                  class="w-4/5 bg-[#181818] drop-shadow-xl rounded-3xl rounded-tl-none text-green-500 pt-2 pb-3 pl-4 py-1 px-3 border-dashed border-l border-b border-l-zinc-700 border-b-zinc-800"
                >
                  <!-- <div v-else class="bg-zinc-900 text-green-500 rounded-3xl pt-2 pl-4 py-1 px-3"> -->
                  <!-- {{ messages.value.content }} -->
                  <vue-markdown
                    :source="messages.value.content"
                    :option="{ typographer: true, hightlight: true }"
                  />
                </div>
              </div>
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
              autocomplete="off"
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

<style>
p {
  /* font-weight: bold; */
  padding-bottom: 10px;
}
pre {
  background-color: #202020;
  border-radius: 12px;
  color: rgb(3419794);
  padding: 10px 20px 14px;
  margin-top: 8px;
  margin-bottom: 5px;
  overflow-x: scroll;
}
</style>
