<script setup lang="ts">
const { message, index } = defineProps({
  message: { type: Object, required: true },
  index: { type: Number, required: true }
})
const messageStyles = { alignSelf: 'right', backgroundColor: 'right-bg' }
if (index % 2 === 0) {
  messageStyles.alignSelf = 'left'
  messageStyles.backgroundColor = 'left-bg'
}
const date =
  new Date(message.createdAt).toLocaleDateString() +
  ', ' +
  new Date(message.createdAt).toLocaleTimeString()
</script>

<template>
  <section :class="['message']">
    <div :class="[messageStyles.alignSelf]">@{{ message.email }}</div>
    <div :class="[messageStyles.backgroundColor, 'message__text', messageStyles.alignSelf]">
      {{ message.text }}
    </div>
    <div :class="[messageStyles.alignSelf]">
      {{ date }}
    </div>
  </section>
</template>

<style scoped lang="scss">
.message {
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 80%;

  border-radius: 18px 18px 2px 18px;

  &__text {
    padding: 5px 10px;

    border-radius: 18px 18px 2px 18px;
  }
}

.left {
  align-self: flex-start;
}

.left-bg {
  background-color: #11348f;
}

.right {
  align-self: flex-end;
}

.right-bg {
  background-color: white;
  color: black;
}
</style>
