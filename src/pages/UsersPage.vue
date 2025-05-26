<template>
  <div class="container py-4">
    <h2>사용자 목록</h2>

    <div v-if="loading" class="text-center py-5">Loading...</div>
    <div v-else>
      <UserTable :users="users" @row-click="goDetail" />
    </div>

    <div v-if="error" class="alert alert-danger mt-3">{{ error.message }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserService from '@/class/api/UserService'
import UserTable from '@/components/UserTable.vue'
import { useRouter } from 'vue-router'

const users = ref([])
const loading = ref(false)
const error = ref(null)

const router = useRouter()

const fetchUsers = async () => {
  loading.value = true
  error.value = null
  try {
    users.value = await UserService.list()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

const goDetail = (id) => {
  router.push(`/users/${id}`)
}

onMounted(fetchUsers)
</script>