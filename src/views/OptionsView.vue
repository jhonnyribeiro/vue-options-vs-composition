<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>You have XXX Todos!</h3>
    <div>
      <input type="text" placeholder="Add a Todo">
    </div>
  </div>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span>{{ todo.name }}</span>
        <button>X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OptionsView',
  data() {
    return {
      todos: [
        {id: 1, name: 'One'},
        {id: 2, name: 'Two'},
        {id: 3, name: 'Three'},
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}

li {
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
}

li span {
  flex-grow: 1;
}
</style>
