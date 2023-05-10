<script setup lang="ts">
import type { Character } from '@/types/Character';

interface Props {
  character: Character;
}

const props = defineProps<Props>();
const { id, name, image, status, species, location } = toRefs(props.character);

const isDead = computed(() => {
  return props.character.status === 'Dead'
    ? { modifiers: { grayscale: true } }
    : {};
});
</script>

<template>
  <div>
    <NuxtLink
      :to="`/character/${id}`"
      class="flex items-center gap-4 w-[550px] bg-gray-100 rounded-xl shadow-xl"
    >
      <NuxtImg
        :src="image"
        :alt="`Image for ${name}`"
        width="200"
        height="200"
        v-bind="isDead"
        class="rounded-tl-xl rounded-bl-xl"
      />
      <div class="">
        <h3 class="text-2xl mb-2">{{ name }}</h3>
        <p>
          Status: <span>{{ status }}</span>
        </p>
        <p>
          Species: <span>{{ species }}</span>
        </p>
        <p>
          Location: <span>{{ location.name }}</span>
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
