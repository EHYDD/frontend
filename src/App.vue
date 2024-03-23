<script setup>
import { ListMinus, ArrowLeftFromLine } from 'lucide-vue-next'
import SideBarTabs from './components/SideBarTabs.vue'
import ProfileCard from './components/ProfileCard.vue'
</script>

<template>
  <div class="flex p-5 text-white">
    <div class="w-1/5 h-[97vh] pr-5">
      <!-- NAME -->
      <div class="flex justify-between items-center">
        <div class="flex">
          <ListMinus :size="28" />
          <span class="font-bold text-2xl pl-4"> EHYDD </span>
        </div>
        <ArrowLeftFromLine class="text-zinc-700 hover:text-zinc-400" :size="20" />
      </div>

      <!-- TABS AND PROFILE -->
      <div class="h-[92vh] flex flex-col justify-between">
        <!-- TABS -->
        <div class="py-10">
          <SideBarTabs label="Chat" />
          <SideBarTabs label="Grades" />
          <SideBarTabs label="Insights" />
          <SideBarTabs label="Settings" />
          <SideBarTabs label="Help" />
        </div>

        <!-- Profile -->
        <ProfileCard />
      </div>
    </div>

    <div class="w-full h-[97vh]">
      <div class="w-full h-full bg-slate-800 rounded-3xl">
        <span class="font-bold text-blue-600"> There </span>
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
