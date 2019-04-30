<template>
  <section class="grid origin">
    <label for class="currency origin-currency">BLR</label>

    <imask-input
      v-model="originValue"
      v-on:input="updateOrigin"
      class="input origin-input"
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
  name: 'Origin',
  data() {
    return {
      originValue: '',
    }
  },
  components: {
    'imask-input': IMaskComponent,
  },
  methods: {
    updateOrigin() {
      this.$emit('change-origin', this.originValue)
    },
  },
}
</script>

<style scoped>
.origin {
  background: hsl(215, 50%, 60%);
}

.origin-currency {
  color: white;
}

.origin-input {
  color: white;
  border-color: #fff;
}
</style>
