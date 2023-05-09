<script lang="ts" setup>
const query = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery(query);
</script>
<template>
  <div class="">{{ data }}</div>
</template>
