<template>
  <div class="hello">
    <section id="authorisation">
      <h2>Войти в аккаунт:</h2>
      <form method="post" action="/login/" class="container">
        <input id="loginField" type="text" name="login" placeholder="Логин">
        <input id="passwordField" type="password" name="password" placeholder="Пароль">
        <input type="submit" value="Войти" class="button">
      </form>
      <a href="#/masterclass/">Войти как гость</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-top: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  border-radius: 15px;
  border: 0.1rem solid #757575;
  height: 2rem;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 100%;
}

::-webkit-input-placeholder {
  padding: 1rem;
}

.button {
  background: #3498db;
  border: none;
  color: #fff;
}

.container {
  width: 20%;
  margin: 0 auto;
}

#authorisation {
  padding-bottom: 2rem;
}
</style>
