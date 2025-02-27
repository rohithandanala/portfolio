<script>
export default {
  name: "contact",
};
</script>

<template>
  <form id="Contact" class="SectionBox">
    <h4 class="SectionHeading" style="color: black !important">Contact Me</h4>
    <div class="form-group">
      <label for="exampleFormControlInput1">Name</label>
      <input type="text" class="form-control" placeholder="John Wick" />
    </div>

    <div class="form-group">
      <label for="exampleFormControlInput1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Message</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <button type="button" class="btn btn-dark">Submit</button>
  </form>
</template>

<style></style>
