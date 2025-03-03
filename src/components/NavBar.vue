<script>
export default {
  name: "NavBar",
  data() {
    return {
      visible: false, // Controls navbar visibility
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2 fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Rohith Andanala</a>
      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="visible = !visible"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarNav"
        :class="{ show: visible }"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#BannerContainer" @click="visible = false"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#AboutMecontainer"
              @click="visible = false"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills" @click="visible = false"
              >Skills</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#WorkExperience" @click="visible = false"
              >Work Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ProjectBox" @click="visible = false"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Educationbox" @click="visible = false"
              >Education</a
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#ContactBox" @click="visible = false"
              >Contact</a
            >
          </li>
        </ul>

        <!-- Right-Aligned Download Button -->
        <div class="ms-auto">
          <button class="btn btn-outline-light my-2 my-sm-0">
            <a
              href="/ROHITHRESUMEV7.pdf"
              download
              style="text-decoration: none; color: white"
              >Download Resume</a
            >
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
