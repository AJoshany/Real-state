<script setup></script>

<template>
  <router-view />
</template>

<style>
:root {
  --color-primary: #006eff;
  --color-primary-hover: #0057cc;
  --color-text-primary: #122d4d;
  --color-text-secondary: #8c8c8c;
  --color-gray-100: #b9b9b9;
  --color-gray-200: #989898;
  --color-gray-300: #95a2b0;
  --color-gray-400: #6a6a6a;
  --color-gray-500: #5c5c5c;
}
*,
::before,
::after {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

.Toastify__toast {
  font-size: 1.4rem;
}
</style>
