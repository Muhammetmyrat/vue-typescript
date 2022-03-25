<template>
  <!-- <button type="button" @click="handlecick('title')">Sort by title</button>
  <button type="button" @click="handlecick('description')">Sort by description</button>
  <button type="button" @click="handlecick('salary')">Sort by salary</button> -->
  <!-- <user-job :users="users" :order="order" /> -->
  <!-- <button @click="changeName('Klark', '45')">Changen Name</button> -->
  <form>
    <input type="text" v-model="searchText" />
    <button type="submit" @click="searchClick(searchText)">Search</button>
    <div v-if="data.results">
      <div v-for="album in data.results" :key="album.artistId + album">
        <h3>Album name : {{ album.collectionName }}</h3>
        <h5>Artwork</h5>
        <img :src="album.artworkUrl100" alt="inTunes image" />
        <h5>Price : {{ album.collectionPrice }}</h5>
        <!-- <tunes-album :album="album"></tunes-album> -->
      </div>
    </div>
  </form>
</template>

<script lang="ts">
  // import UserJob from "@/components/Job.vue"
  import { defineComponent, ref, reactive, toRefs } from "vue"
  // import TunesAlbum from "@/components/TunesAlbum.vue"
  import { iTunesFetchSearchData } from "@/services/iTunesApi"
  import { ItunesTypes, Num } from "@/types/ItunesTypes.Interface"
  // import Job from "./types/Jobs"
  // import OrderTerm from "./types/OrderTerm"

  export default defineComponent({
    components: {
      // UserJob,
      // TunesAlbum,
    },
    // const data = ref({})

    //  const state = reactive({
    //    name: null as number,
    //    age: 25 as number | string,
    //  });
    //  return { ...toRefs(state) };
    //  const name = ref("Klark");
    //  const age = ref<number | string>(26);
    //  return {
    //    name,
    //    age,
    //  };
    // const users = ref<Job[]>([
    //   { title: "Klark", description: "lorem ipsum dolor set", salary: 100, id: 1 },
    //   { title: "Jon", description: "lorem ipsum dolor set amet", salary: 300, id: 2 },
    //   { title: "Jemys", description: "lorem ipsum dolor set amet dot", salary: 500, id: 3 },
    //   { title: "Deft", description: "lorem ipsum dolor set git", salary: 200, id: 4 },
    // ])

    // const order = ref<OrderTerm>("title")

    // const handlecick = (term: OrderTerm) => {
    //   order.value = term
    // }
    //   methods: {
    //     changeName(name: string, age: number | string): void {
    //       this.name = name;
    //       this.age = 30;
    //     },
    //   },
    setup() {
      let searchText = ref<string | number>("")
      let state = reactive<{ data: ItunesTypes }>({ data: {} })
      const searchClick = async (apiText: string | number): Promise<void> => {
        try {
          const res = await iTunesFetchSearchData(apiText)
          state.data = res
          console.log("res", state.data)
        } catch (e) {
          console.log(e)
        }
      }

      return {
        searchClick,
        ...toRefs(state),
        searchText,
        // users,
        // handlecick,
        // order,
      }
    },
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
