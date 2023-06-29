import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserInterfaceStore = defineStore('userInterface', () => {
  const mobileMenuOpen = ref(false);
  const navigation = ref([
    { id: 1, title: 'Дашборд', route: '/dashboard', componentName: 'ViewDashboardRoute' },
    { id: 2, title: 'О компании', route: '/about', componentName: 'ViewAboutRoute' },
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
