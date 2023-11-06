<template>
  <div class="contact__links">
    <a
      v-for="link in contactLinks"
      :key="link.linkTitle"
      :href="link.href"
      target="_blank"
      rel="noreferrer noopener"
      class="contact__link"
      :title="link.linkTitle"
    >
      <Icon :name="link.iconName" :title="link.iconTitle" />
    </a>
  </div>
</template>

<script lang="ts" setup>
interface ContactLink {
  href: string;
  linkTitle: string;
  iconName: string;
  iconTitle: string;
}
const contactLinks = ref<ContactLink[]>([
  {
    href: "https://dev.to/_ronini",
    linkTitle: "dev.to",
    iconName: "ph:dev-to-logo-bold",
    iconTitle: "_ronini's DEV.to Profile",
  },
  {
    href: "https://github.com/roninii/",
    linkTitle: "GitHub",
    iconName: "ph:github-logo-bold",
    iconTitle: "_ronini's GitHub Profile",
  },
  {
    href: "https://linkedin.com/in/ronnievillarini",
    linkTitle: "LinkedIn",
    iconName: "ph:linkedin-logo-bold",
    iconTitle: "_ronini's LinkedIn Profile",
  },
  {
    href: "https://twitter.com/_ronini",
    linkTitle: "Twitter/X",
    iconName: "ph:twitter-logo-bold",
    iconTitle: "_ronini's Twitter/X Profile",
  },
  {
    href: "mailto:ronnie@ronini.dev",
    linkTitle: "Email",
    iconName: "ph:envelope-open-bold",
    iconTitle: "_ronini's Email Profile",
  },
]);
</script>
