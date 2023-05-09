<script lang="ts" setup>
import CharacterCard from '@/components/CharacterCard.vue';
import GET_CHARACTERS from '@/graphql/queries/getCharacters.gql';
import type { CharactersResult } from '~/types/Character';

const { data, pending, error } = await useAsyncQuery<CharactersResult>(
  GET_CHARACTERS
);
</script>

<template>
  <div v-if="!pending" class="flex justify-center flex-wrap gap-4 p-8">
    <CharacterCard
      v-for="character in data?.characters.results"
      :key="character.id"
      :character="character"
    />
  </div>
</template>
