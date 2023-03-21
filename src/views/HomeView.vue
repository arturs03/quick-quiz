<template>
  <div class="container h-full flex flex-col justify-center">
    <h1 class="flex justify-center">
      Welcome to <span class="ml-3 animate-bounce text-sky-300">quick quiz!</span>
    </h1>
    <button class="w-2/6 mx-auto" @click="startQuiz">Start</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'

export default defineComponent({
  methods: {
    startQuiz() {
      router.push('/quiz')
    }
  }
})
</script>
