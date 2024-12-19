<script setup lang="ts">
import { DinosaurResponse } from '../models/Dinosaur.model';

const props = defineProps<{
  id: String;
}>();

const res = await fetch(`http://localhost:8080/dinosaurs/${props.id}`);
const dino: DinosaurResponse = await res.json();
</script>

<template>
  <div>
    <section v-if="dino.data">
      <h1>{{ dino.data.name }}</h1>
      <p>{{ dino.data.description }}</p>
    </section>
    <pre v-else>{{ dino.error }}</pre>

    <RouterLink to="/">Back to all dinos</RouterLink>
  </div>
</template>
