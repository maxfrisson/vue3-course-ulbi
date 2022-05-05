<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue test SPA</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')" id="navbar__btn"
        >Сообщения</my-button
      >
      <my-button @click="$router.push('/about')" id="navbar__btn"
        >О приложении</my-button
      >
      <my-button @click="$router.push('/store')" id="navbar__btn"
        >Store</my-button
      >
      <my-button @click="$router.push('/composition')" id="navbar__btn"
        >Composition Api</my-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  height: 50px;
  background: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

#navbar__btn {
  background: white;
  border-radius: 10px;
}
</style>