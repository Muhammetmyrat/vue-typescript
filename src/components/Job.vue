<template>
  <div>{{ order }}</div>
  <div v-for="user in orderSorted" :key="user.id">
    <div>{{ user.title }}</div>
    <div>{{ user.description }}</div>
    <div>{{ user.salary }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from "vue"
  import Job from "@/types/Jobs"
  import OrderTerm from "@/types/OrderTerm"

  export default defineComponent({
    props: {
      users: {
        type: Array as PropType<Job[]>,
        default: () => [],
      },
      order: {
        type: String as PropType<OrderTerm>,
        required: true,
      },
    },
    setup(props) {
      const orderSorted = computed(() => {
        return [...props.users].sort((a: Job, b: Job) => {
          // console.log("a :", a, "b :", b)

          return a[props.order] > b[props.order] ? 1 : -1
        })
      })
      return { orderSorted }
    },
  })
</script>

<style scoped></style>
