import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserInterfaceStore = defineStore('userInterface', () => {
  const mobileMenuOpen = ref(false);
  const navigation = ref([
    { name: 'Дашборд', href: '#' },
    { name: 'О компании', href: '#' },
  ]);

  function toggleMobileMenuOpen(value: boolean) {
    mobileMenuOpen.value = value;
  }

  function getMobileMenuOpen() {
    return mobileMenuOpen.value;
  }

  function getNavigation() {
    return navigation.value;
  }

  return {
    toggleMobileMenuOpen,
    getMobileMenuOpen,
    getNavigation,
  };
});
