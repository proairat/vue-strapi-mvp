<template>
  <Dialog as="div" class="lg:hidden" @close="toggleMobileMenuOpen(false)" :open="getMobileMenuOpen()">
    <div class="fixed inset-0 z-50" />
    <DialogPanel
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <router-link to="#" class="-m-1.5 p-1.5">
          <span class="sr-only">АГИМА</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </router-link>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="toggleMobileMenuOpen(false)">
          <span class="sr-only">Закрыть меню</span>
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <router-link
              v-for="item in getNavigation()"
              :key="item.name"
              :to="item.href"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >{{ item.name }}</router-link
            >
          </div>
          <div class="py-6">
            <router-link
              to="#"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Войти</router-link
            >
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useUserInterfaceStore } from '@/stores';

const userInterfaceStore = useUserInterfaceStore();
const { toggleMobileMenuOpen, getMobileMenuOpen, getNavigation } = userInterfaceStore;
</script>
