<template>
  <div class="bg-slate-400 w-100 h-50">
    <p>{{ question.question }}</p>
    <div class="flex flex-wrap gap-2">
      <button v-for="answer in question.asnwers" class="bg-slate-400 text-white font-bold py-2">
        {{ answer }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type IQuestion from '../types/IQuestion'

export default defineComponent({
  props: {
    question: {
      type: Object as PropType<IQuestion>,
      default: () => ({}),
      required: true
    }
  }
})
</script>
