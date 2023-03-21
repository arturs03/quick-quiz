import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', () => {
  state: () => ({
    answers: [] as string[],
    correctAnswers: 0,
    incorrect: 0,
    totalQuestions: 0,
  }),
  getters: {
    result: ({correctAnswers: Number, totalQuestions: Number}) => `${correctAnswers}/${totalQuestions}`,
  },
  actions: {
    addAnswer(answer: string) {
      this.answers.push(answer);
    }
  }
})