<script setup lang="ts">
import { io } from 'socket.io-client'
import { ref, onMounted } from 'vue'
import MessageView from './MessageView.vue'

type TMessage = { id: String; email: String; text: String; createdAt: String }

const { username } = defineProps({ username: { type: String, required: true } })

const connection = io('ws://localhost:3000')

const message = ref('')
const messages = ref<TMessage[]>([])

const sendMessage = () => {
  const msg = { text: message.value, email: username }
  connection.emit('sendMessage', msg)
}

onMounted(() => {
  fetch('http://localhost:3000/api/chat').then((res) =>
    res.json().then((data) => (messages.value = data))
  )
})

connection.on('recMessage', (message: TMessage) => {
  messages.value.push(message)
})
</script>

<template>
  <section class="wrapper">
    <section v-if="messages.length" class="messages">
      <TransitionGroup name="list">
        <MessageView
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
          :index="index"
        />
      </TransitionGroup>
    </section>
    <section v-else>
      <span>There is no messages here... Yet.</span>
    </section>
    <div class="send-form">
      <input type="text" v-model="message" />
      <button @click="sendMessage">Send</button>
    </div>
  </section>
</template>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 15px;

  .messages {
    display: flex;
    flex-direction: column;

    width: 60%;
    height: 80vh;
    overflow-y: auto;
  }

  .send-form {
    align-self: flex-end;

    margin-top: 15px;
    padding: 10px;
    width: fit-content;

    border-radius: 8px;
    background: lightslategrey;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
