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
    iconName: "simple-icons:devdotto",
    iconTitle: "_ronini's DEV.to Profile",
  },
  {
    href: "https://github.com/roninii/",
    linkTitle: "GitHub",
    iconName: "simple-icons:github",
    iconTitle: "_ronini's GitHub Profile",
  },
  {
    href: "https://linkedin.com/in/ronnievillarini",
    linkTitle: "LinkedIn",
    iconName: "simple-icons:linkedin",
    iconTitle: "_ronini's LinkedIn Profile",
  },
  {
    href: "https://twitter.com/_ronini",
    linkTitle: "Twitter/X",
    iconName: "simple-icons:twitter",
    iconTitle: "_ronini's Twitter/X Profile",
  },
  {
    href: "mailto:ronnie@ronini.dev",
    linkTitle: "Email",
    iconName: "simple-icons:maildotru",
    iconTitle: "_ronini's Email Profile",
  },
]);
</script>
