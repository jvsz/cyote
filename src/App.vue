<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <header class="header">
      <div class="header-wrapper">
        <div class="logo">Cyote</div>
        <div class="app-title">Currency Converter</div>
        <div class="menu">Menu</div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

html {
  font-size: responsive 12px 21px; /* min-size, max-size */
  font-range: 420px 1280px; /* viewport widths between which font-size is fluid */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
}

.header {
  background: hsl(215, 40%, 40%);
  color: #fff;
}

.header-wrapper {
  max-width: 50em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0.5em 0.5em;
}

.logo {
  display: none;
}

@media (min-width: 30em) {
  .logo {
    display: block;
    visibility: hidden;
  }
}

.app-title {
  font-size: 1.4rem;
}

.menu {
  text-align: right;
  visibility: hidden;
}

#app {
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

#nav {
  padding: 30px;
  position: absolute;
  right: 4em;
  display: none;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fff;
}

.currency {
  font-size: 2.5rem;
}

.grid {
  display: grid;
  grid-template-columns: auto minmax(100px, 350px);
  align-items: center;
  justify-content: center;
  grid-gap: 0.5em;
  padding: 2em;
}

.input {
  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  font-size: 2rem;
  padding: 0.25em 0.5em;
  text-align: right;
  width: auto;
}
</style>
