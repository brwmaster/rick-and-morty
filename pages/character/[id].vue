<script setup lang="ts">
import GET_CHARACTER from '@/graphql/queries/getCharacter.gql';
import type { CharacterResult } from '~/types/Character';

const route = useRoute();

const { data, pending, error } = await useAsyncQuery<CharacterResult>(
  GET_CHARACTER,
  {
    id: route.params.id
  }
);
</script>

<template>
  <div
    v-if="!pending && data"
    class="flex justify-center items-center h-screen"
  >
    <CharacterCard :character="data.character" to="/" />
  </div>
</template>
