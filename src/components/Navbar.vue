<template>
    <div class="w-full flex items-center justify-center mb-2">
        <Menubar :model="items" class="w-[98%] rounded-lg shadow-md overflow-hidden">
            <template #start>
                <div class="h-full">
                    <img class="h-full max-h-[50px]" src="/home/logo.png"
                        alt="Minimalistic Logo of Aleschopf Developer">
                </div>

            </template>
            <template #end>
                <ToggleSwitch v-model="darkMode" @click="toggleDarkMode">
                    <template #handle="{ checked }">
                        <i :class="['pi', checked ? 'pi-moon' : 'pi-sun']"></i>
                    </template>
                </ToggleSwitch>
            </template>
        </Menubar>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Menubar from 'primevue/menubar';
import ToggleSwitch from 'primevue/toggleswitch';
import { useRouter } from 'vue-router';

const darkMode = ref(false);

const router = useRouter();

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark', darkMode.value);
};

const items = ref([
    {
        label: 'Home',
        command: () => router.push('/'),
    },
    {
        label: 'About me',
        command: () => router.push('/about'),
    },
    {
        label: 'Projects',
        command: () => router.push('/projects'),
    },
]);

onMounted(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    darkMode.value = savedDarkMode === 'true';
    toggleDarkMode();
});

watch(darkMode, (newValue) => {
    localStorage.setItem('darkMode', newValue.toString());
    toggleDarkMode();
});
</script>

<style scoped>
.p-toggleswitch {
    --p-toggleswitch-checked-background: #7c7c7c;
    --p-toggleswitch-checked-hover-background: #575656;
}
</style>
