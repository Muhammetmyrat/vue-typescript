<template>
  <form>
    <input type="text" />
    <button type="submit">Search</button>
    <div>
      <div>
        <h3>Album name :</h3>
        <h5>Artwork</h5>
        <img src="" alt="inTunes image" />
        <h5>Price :</h5>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    porps: {
      searchText: {
        type: String,
        required: true,
      },
    },
    setup() {
      return {}
    },
  })
</script>

<style scoped></style>
