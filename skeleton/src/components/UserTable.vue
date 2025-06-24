<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>이름</th>
        <th>이메일</th>
        <th>권한</th>
        <th>생성일</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="u in users" :key="u.id" @click="$emit('row-click', u.id)" style="cursor:pointer">
        <td>{{ u.id }}</td>
        <td>{{ u.name }}</td>
        <td>{{ u.email }}</td>
        <td>{{ u.role }}</td>
        <td>{{ new Date(u.createdAt).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  }
})
</script>