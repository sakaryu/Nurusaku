<template>
  <v-layout column>
    <FormCard v-for="i in 11" :key="`${i}`" />
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    FormCard: () => import('~/components/FormCard.vue')
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
