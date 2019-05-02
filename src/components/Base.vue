<template>
  <section class="grid base">
    <label for class="currency base-currency">USD</label>

    <imask-input
      v-model="baseValue"
      v-on:input="updatebase"
      class="input base-input"
      :mask="Number"
      radix="."
      :unmask="true"
      placeholder="1.00"
    />
  </section>
</template>

<script>
import { IMaskComponent } from 'vue-imask'

export default {
  name: 'Base',
  data() {
    return {
      baseValue: '',
    }
  },
  components: {
    'imask-input': IMaskComponent,
  },
  methods: {
    updatebase() {
      this.$emit('change-base', this.baseValue)
    },
  },
}
</script>

<style scoped>
.base {
  background: hsl(215, 50%, 60%);
}

.base-currency {
  color: white;
}

.base-input {
  color: white;
  border-color: #fff;
}
</style>
