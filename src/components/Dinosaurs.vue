<script setup lang="ts">
import { Dinosaur } from '../models/Dinosaur.model';

const res = await fetch('http://localhost:8080/dinosaurs');
const dinosaurs = (await res.json()) as Dinosaur[];
</script>

<template>
  <div
    v-for="dino in dinosaurs"
    :key="dino.id">
    <RouterLink :to="{ name: 'Dinosaur', params: { id: `${dino.id}` } }">
      {{ dino.name }}
    </RouterLink>
  </div>
</template>
