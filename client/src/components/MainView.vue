<script setup lang="ts">
import { ref } from 'vue'
import ChatForm from './ChatForm.vue'

const username = ref('')
const inputText = ref('')

const saveName = () => {
  username.value = inputText.value
}
</script>

<template>
  <ChatForm v-if="username" :username="username" />
  <section v-else class="wrapper-form">
    <form @submit.prevent="saveName" class="form">
      <label class="form__label">Enter your name</label>
      <input type="text" v-model="inputText" />
    </form>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/main';
.wrapper-form {
  display: flex;
  justify-content: center;

  width: 100%;
  padding-top: 20%;

  .form {
    width: 30%;
    height: 40%;
    background-color: $border-color;

    padding: 100px 40px;

    border: 1px solid lightgrey;

    & * {
      background-color: transparent;
    }

    &__label {
      margin: 10px;
    }
  }
}
</style>
