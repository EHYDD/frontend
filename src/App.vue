<script setup>
import { ListMinus, ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-vue-next'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import SideBarTabs from './components/SideBarTabs.vue'
import ProfileCard from './components/ProfileCard.vue'
import LightDarkMode from './components/LightDarkMode.vue'

const hideSidePanel = ref(true)
let isSidePanelHidden = true
function toggleSidePanel() {
  isSidePanelHidden = !isSidePanelHidden
  hideSidePanel.value = isSidePanelHidden
}
</script>

<template>
  <div class="flex p-5 text-white">
    <!-- SIDE PANEL -->
    <div v-if="hideSidePanel" class="w-1/5 h-[97vh] pr-5">
      <!-- NAME -->
      <div class="flex justify-between items-center">
        <!-- LOGO AND HOME -->
        <RouterLink to="/">
          <div class="flex">
            <ListMinus :size="28" />
            <span class="font-bold text-2xl pl-4"> EHYDD </span>
          </div>
        </RouterLink>
        <!-- MINIMIZE SIDE PANEL -->
        <ArrowLeftFromLine
          @click="toggleSidePanel"
          class="text-zinc-700 hover:text-zinc-400"
          :size="20"
        />
      </div>

      <!-- TABS AND PROFILE -->
      <div class="h-[92vh] flex flex-col justify-between">
        <!-- TABS -->
        <div class="py-10">
          <RouterLink to="/chat">
            <SideBarTabs label="Chat" />
          </RouterLink>
          <RouterLink to="/grades">
            <SideBarTabs label="Grades" />
          </RouterLink>

          <SideBarTabs label="Insights" />
          <SideBarTabs label="Settings" />
          <SideBarTabs label="Help" />
        </div>

        <div>
          <!-- Profile -->
          <ProfileCard isMinimized="false" />

          <!-- Light/Dark Mode -->
          <LightDarkMode isLightMode="false" isMinimized="false" />
        </div>
      </div>
    </div>

    <!-- HIDDEN SIDE PANEL -->
    <div v-else class="pr-5">
      <!-- MAXIMIZE SIDE PANEL -->
      <div class="pl-5 pt-4">
        <ArrowRightFromLine
          @click="toggleSidePanel"
          class="text-zinc-700 hover:text-zinc-400"
          :size="20"
        />
      </div>

      <!-- TABS AND PROFILE -->
      <div class="h-[92vh] flex flex-col justify-between">
        <!-- TABS -->
        <div class="py-10">
          <RouterLink to="/chat">
            <SideBarTabs label="Chat" labelHidden="true" />
          </RouterLink>
          <RouterLink to="/grades">
            <SideBarTabs label="Grades" labelHidden="true" />
          </RouterLink>

          <SideBarTabs label="Insights" labelHidden="true" />
          <SideBarTabs label="Settings" labelHidden="true" />
          <SideBarTabs label="Help" labelHidden="true" />
        </div>

        <div>
          <!-- Profile -->
          <ProfileCard isMinimized="true" />

          <!-- Light/Dark Mode -->
          <LightDarkMode isLightMode="true" isMinimized="true" />
        </div>
      </div>
    </div>

    <!-- MAIN PANEL -->
    <div class="w-full h-[97vh] overflow-hidden">
      <div class="w-full h-full bg-[#202020] rounded-3xl overflow-clip">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template> -->
