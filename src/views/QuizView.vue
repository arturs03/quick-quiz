<template>
  <div class="container h-full flex flex-col justify-center">
    <QuisWrapper :currentQuestion="currentQuestion" />
    <button v-if="!isLastQuestion" class="w-2/6 mx-auto">Next question</button>
    <button v-else class="w-2/6 mx-auto outline">Finish</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'

export default defineComponent({
  data: () => ({
    quizQuestions: [
      {
        question: 'How many HTML elements there are?',
        answers: ['5', '4', '3', '2', '1']
      },
      {
        question: 'How many CSS classes there are?',
        answers: ['5', '4', '3', '2', '1']
      },
      {
        question: 'How many JavaScript functions there are?',
        answers: ['5', '4', '3', '2', '1']
      },
      {
        question: 'How many Vue components there are?',
        answers: ['5', '4', '3', '2', '1']
      },
      {
        question: 'How many Vue templates there are?',
        answers: ['5', '4', '3', '2', '1']
      }
    ],
    currentQuestion: 0,
    correctAnswers: 0,
    timer: 30
  }),
  computed: {
    isLastQuestion(): Boolean {
      return this.currentQuestion === this.quizQuestions.length - 1
    }
  },
  methods: {
    nextQuestion() {},
    startQuiz() {
      this.resetData()
      this.startTimer()
    },
    resetData() {
      this.currentQuestion = 0
      this.correctAnswers = 0
      this.timer = 30
    },
    startTimer() {
      setTimeout(() => {
        this.stopQuiz()
      }, this.timer * 1000)
    },
    stopQuiz() {
      router.push({
        name: 'quiz-results',
        params: { correctAnswers: this.correctAnswers, totalQuestions: this.quizQuestions.length }
      })
    }
  }
})
</script>
