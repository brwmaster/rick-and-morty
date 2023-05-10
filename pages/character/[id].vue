<script setup lang="ts">
import GET_CHARACTER from '@/graphql/queries/getCharacter.gql';
import type { CharactersResult } from '~/types/Character';

const route = useRoute();

const { data, pending, error } = await useAsyncQuery<CharactersResult>(
  GET_CHARACTER,
  { id: route.params.id }
);
</script>

<template>
  <div>{{ route.params.id }}</div>
  <div>{{ data }}</div>
</template>
