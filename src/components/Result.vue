<template>
  <section class="grid result">
    <label for class="currency result-currency">BLR</label>
    <input disabled type="text" placeholder="1.00" class="input result-input" v-model="resultValue">
  </section>
</template>

<script>
export default {
  name: 'Result',
  props: ['resultValue'],
}
</script>

<style scoped>
.result {
  background: #fff;
  color: hsl(215, 50%, 60%);
}

.result-input {
  color: hsl(215, 50%, 60%);
  border-color: hsl(215, 50%, 60%);
  border-left: none;
  border-top: none;
  border-right: none;
}
</style>