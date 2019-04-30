<template>
  <div class="main-content">
    <Origin v-on:change-origin="getCurrencyQuote"/>
    <Result v-bind:result-value="resultValue"/>
  </div>
</template>

<script>
import Origin from '../components/Origin.vue'
import Result from '../components/Result.vue'
import Mode from '../constants/Mode'
import envMode from '../lib/env-mode'

const UrlAPI = {
  Production: 'https://www.freeforexapi.com/api/live?pairs=USDBRL',
  Development: 'http://localhost:1300/rates?title=usdblr',
}

export default {
  name: 'home',
  components: { Origin, Result },
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
    let apiUrl
    switch (envMode()) {
      case Mode.Development:
        apiUrl = UrlAPI.Development
        break
      case Mode.Production:
        apiUrl = UrlAPI.Production
      default:
        break
    }
    try {
      const response = await fetch(apiUrl, {
        // mode: 'no-cors',
      })
      const json = await response.json()
      this.rate = Number(json[0].rate)
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
