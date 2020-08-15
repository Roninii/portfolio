import { ref } from '@vue/composition-api';

export default function useTheme() {
    const currentTheme = ref('light');

    const toggleTheme = () => {
        if (currentTheme.value === 'dark') {
            currentTheme.value = 'light';

            document.documentElement.style.setProperty('--primary', 'var(--purple)');
            document.documentElement.style.setProperty('--background', 'var(--bg--light)');
            document.documentElement.style.setProperty('--text', 'var(--text--light');
            document.documentElement.style.setProperty('--link-text', 'var(--link-text--light');
            document.documentElement.style.setProperty(
                '--active-link-text',
                'var(--active-link-text--light'
            );
            document.documentElement.style.setProperty('--shadow', 'var(--shadow--light');
            document.documentElement.style.setProperty('--quote-bg', 'var(--quote-bg--light');
        } else {
            currentTheme.value = 'dark';

            document.documentElement.style.setProperty('--primary', 'var(--teal)');
            document.documentElement.style.setProperty('--background', 'var(--bg--dark)');
            document.documentElement.style.setProperty('--text', 'var(--text--dark');
            document.documentElement.style.setProperty('--link-text', 'var(--link-text--dark');
            document.documentElement.style.setProperty(
                '--active-link-text',
                'var(--active-link-text--dark'
            );
            document.documentElement.style.setProperty('--shadow', 'var(--shadow--dark');
            document.documentElement.style.setProperty('--quote-bg', 'var(--quote-bg--dark');
        }
    };

    return {
        toggleTheme,
    };
}
