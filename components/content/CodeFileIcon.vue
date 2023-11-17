<template>
  <Icon :name="iconName" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  language: string;
}>();

const iconName = computed(() => `vscode-icons:file-type-${props.language}`);
</script>

<style></style>
