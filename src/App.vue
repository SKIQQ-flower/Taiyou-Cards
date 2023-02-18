<script setup>
import LinkButton from './components/LinkButton.vue'
</script>

<template>
  <h1 class="title">👋 ~ Welcome to Taiyou Cards</h1>
  <div class="buttons">
    <LinkButton color="green-200" size="big">New card</LinkButton>
    <span class="break"></span>
    <LinkButton color="blue-200" size="big">Start new game</LinkButton>
  </div>
</template>

<style>
  .break {
    display: block;
    margin-bottom: 0.5em;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  .background {
    width: 100%;
    height: 100%;
    position:absolute;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/7/77/Twemoji_1f3b4.svg);
  }

  #app {
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 10%;
  }

  .title {
    animation: slide-down 0.5s ease-in-out forwards;
    white-space: nowrap;
    font-size: 200%;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .title {
      font-size: 150%;
    }

    #app {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(-90px);
      filter: drop-shadow(0px 0px 0px var(--shadow));
    }

    to {
      transform: translateY(0);
      filter: drop-shadow(0px 0px 10px var(--shadow));
    }
  }
  
</style>
