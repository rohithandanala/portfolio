<script setup>
import { ref, onMounted } from "vue";

const roles = ["AI Modeling", "Fullstack Projects", "Software Engineer"];
const currentText = ref("");
let index = 0;

const removeText = (text, callback) => {
  let length = text.length;
  const interval = setInterval(() => {
    if (length > 0) {
      currentText.value = text.substring(0, length - 1);
      length--;
    } else {
      clearInterval(interval);
      callback();
    }
  }, 100);
};

const scrambleText = (text, callback) => {
  let scrambled = "";
  let iterations = 0;
  const interval = setInterval(() => {
    scrambled = text
      .split("")
      .map(
        (char, i) =>
          iterations >= i ? char : String.fromCharCode(33 + Math.random() * 94) // Random ASCII character
      )
      .join("");

    currentText.value = scrambled;
    iterations++;

    if (iterations > text.length) {
      clearInterval(interval);
      setTimeout(callback, 1500); // Pause before switching text
    }
  }, 80); // Speed of scramble effect
};

// Function to switch roles continuously
const changeRole = () => {
  removeText(currentText.value, () => {
    index = (index + 1) % roles.length; // Move to the next role
    scrambleText(roles[index], changeRole);
  });
};

onMounted(() => {
  scrambleText(roles[index], changeRole); // Start with first role
});
</script>

<template>
  <div class="SectionBox" id="BannerContainer">
    <img src="/src/assets/my_pic.jpg" />
    <div id="BannerName">
      <h4>Hi! <br />I'm Rohith Andanala</h4>
      <a>I do </a>
      <a class="scramble-text">{{ currentText }}</a>
    </div>
  </div>
</template>

<style scoped>
.scramble-text {
  font-size: 30px;
  color: white; /* Set text color to white */
  text-decoration: none; /* Remove underline or any decoration */
  display: inline-block;
  min-width: 200px; /* Prevents text shifting */
  transition: opacity 0.3s ease-in-out; /* Smooth transition */
}
</style>
