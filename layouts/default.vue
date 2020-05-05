<template>
  <v-app>
    <v-app-bar fixed app color="primary" class="white--text">
      <v-app-bar-nav-icon class="white--text" />
      <v-toolbar-title text="入力" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; 2020 sakaryu</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped></style>
