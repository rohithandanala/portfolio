<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2 fixed-top">
    <a class="navbar-brand" href="#">Rohith Andanala</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Works Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <form class="form-inline">
        <button class="btn btn-outline-light my-2 my-sm-0">
          <a
            href="/public/ROHITHRESUMEV6.pdf"
            download
            style="text-decoration: none; color: white"
            >Download Resume</a
          >
        </button>
      </form>
    </div>
  </nav>
</template>
