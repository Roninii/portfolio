<template>
  <div class="code-block">
    <template v-if="filename">
      <label class="file-name">
        <CodeFileIcon v-if="language" :language="language" />
        {{ filename || "" }}
      </label>
      <hr />
    </template>
    <div class="code">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
withDefaults(
  defineProps<{
    filename: string;
    language: string;
  }>(),
  {
    filename: "",
    language: "",
  }
);
</script>

<style>
.code-block {
  background: #282a36;
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
  margin-top: 1rem;
}
.file-name {
  color: #f8f8f2;
  padding: 0.5rem 1rem;
  display: block;
  width: 100%;
}
.code {
  padding: 1rem;
}
</style>
