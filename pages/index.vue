<script lang="ts" setup>
import CharacterCard from '@/components/CharacterCard.vue';
import GET_CHARACTERS from '@/graphql/queries/getCharacters.gql';
import type { CharactersResult } from '~/types/Character';

const { data, pending, error } = await useAsyncQuery<CharactersResult>(
  GET_CHARACTERS
);
</script>

<template>
  <div
    class=""
    v-for="character in data?.characters.results"
    :key="character.id"
  >
    <CharacterCard :character="character" />
  </div>
</template>
