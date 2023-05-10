<script setup lang="ts">
import type { Character } from '@/types/Character';

interface Props {
  character: Character;
  to: string;
}

const props = defineProps<Props>();
const { id, name, image, status, species, location } = toRefs(props.character);
</script>

<template>
  <div>
    <NuxtLink
      :to="props.to"
      class="flex items-center gap-4 w-[375px] md:w-[550px] bg-gray-100 rounded-xl shadow-xl"
    >
      <NuxtImg
        :src="image"
        :alt="`Image for ${name}`"
        width="200"
        height="200"
        class="rounded-tl-xl rounded-bl-xl"
      />
      <div>
        <h3 class="text-xl md:text-2xl mb-2">{{ name }}</h3>
        <p class="text-sm md:text-base">
          Status: <span>{{ status }}</span>
        </p>
        <p class="text-sm md:text-base">
          Species: <span>{{ species }}</span>
        </p>
        <p class="text-sm md:text-base">
          Location: <span>{{ location.name }}</span>
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
