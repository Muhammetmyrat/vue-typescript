<template>
  <h3>Album name : {{ album && album.collectionName }}</h3>
  <h5>Artwork</h5>
  <img :src="album && album.artworkUrl100" alt="inTunes image" />
  <h5>Price : {{ album && album.collectionPrice }}</h5>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from "vue"
  import { Result } from "../types/ItunesTypes.Interface"

  export default defineComponent({
    porps: {
      album: {
        type: Object as PropType<Result>,
        default: () => {},
      },
    },
    // emits: ["findSearchdata"],
    setup(props, { emit }) {
      // const data = prop
      // const searchClick = (text: string | number) => {
      //   emit("findSearchdata", text)
      // }
      // console.log(props.album)

      return {
        // data,
      }
    },
  })
</script>

<style scoped></style>
