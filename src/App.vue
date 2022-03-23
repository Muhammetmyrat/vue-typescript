<template>
  <button type="button" @click="handlecick('title')">Sort by title</button>
  <button type="button" @click="handlecick('description')">Sort by description</button>
  <button type="button" @click="handlecick('salary')">Sort by salary</button>
  <user-job :users="users" :order="order" />
  <!-- <button @click="changeName('Klark', '45')">Changen Name</button> -->
</template>

<script lang="ts">
  import UserJob from "@/components/Job.vue"
  import { defineComponent, ref, reactive, toRefs } from "vue"
  import Job from "./types/Jobs"
  import OrderTerm from "./types/OrderTerm"

  export default defineComponent({
    components: {
      UserJob,
    },
    setup() {
      //  const state = reactive({
      //    name: "Jon",
      //    age: 25 as number | string,
      //  });
      //  return { ...toRefs(state) };
      //  const name = ref("Klark");
      //  const age = ref<number | string>(26);
      //  return {
      //    name,
      //    age,
      //  };
      const users = ref<Job[]>([
        { title: "Klark", description: "lorem ipsum dolor set", salary: 100, id: 1 },
        { title: "Jon", description: "lorem ipsum dolor set amet", salary: 300, id: 2 },
        { title: "Jemys", description: "lorem ipsum dolor set amet dot", salary: 500, id: 3 },
        { title: "Deft", description: "lorem ipsum dolor set git", salary: 200, id: 4 },
      ])

      const order = ref<OrderTerm>("title")

      const handlecick = (term: OrderTerm) => {
        order.value = term
      }

      return {
        users,
        handlecick,
        order,
      }
    },
    //   methods: {
    //     changeName(name: string, age: number | string): void {
    //       this.name = name;
    //       this.age = 30;
    //     },
    //   },
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
