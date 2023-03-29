<template>
  <router-link :to="{ name: 'home' }">
    <nav>
      <div class="max__width">
        <div class="logo">
          <img src="../assets/cuisine_logo.png" alt="logo" />
        </div>
      </div>
    </nav>
  </router-link>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav {
  padding: 30px 0;
}
nav .logo {
  display: flex;
  justify-content: center;
}

nav .logo img {
  width: 160px;
}
</style>
