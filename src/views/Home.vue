<template>
  <div class="main-content">
    <Base v-on:change-base="getCurrencyQuote"/>
    <Result v-bind:result-value="resultValue"/>
  </div>
</template>

<script>
import Base from '../components/Base.vue'
import Result from '../components/Result.vue'
import api from '../lib/api'

export default {
  name: 'home',
  components: { Base, Result },
  data() {
    return {
      rate: 0,
      resultValue: '',
    }
  },
  methods: {
    getCurrencyQuote(value = 1) {
      if (value) this.resultValue = (Number(value) * this.rate).toFixed(2)
      else this.resultValue = (1 * this.rate).toFixed(2)
    },
  },

  async created() {
    try {
      const response = await fetch(api(), {
        // mode: 'no-cors',
      })
      const json = await response.json()
      this.rate = Number(json.rates['BRL'])
      this.getCurrencyQuote(1)
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
.main-content {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
}
</style>
