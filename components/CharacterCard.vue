<script setup lang="ts">
import type { Character } from '@/types/Character';

interface Props {
  character: Character;
}

defineProps<Props>();
</script>

<template>
  <div>
    <NuxtImg :src="character.image" :alt="`Image for {{ name }}`" />
    <div class="">
      <h3>{{ character.name }}</h3>
      <p>{{ character.status }}</p>
      <p>{{ character.species }}</p>
      <p>{{ character.location.name }}</p>
    </div>
  </div>
</template>
