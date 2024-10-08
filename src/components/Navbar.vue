<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Menubar from 'primevue/menubar';
import ToggleButton from 'primevue/togglebutton';
import { useRouter } from 'vue-router';

const darkMode = ref(false);

const router = useRouter()

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

<template>
    <div class="w-full flex items-center justify-center mb-2">
        <Menubar :model="items" class="w-[98%] rounded-lg shadow-md overflow-hidden">
            <template #end>
                <ToggleButton v-model="darkMode" class="ml-4" onLabel="Dark" offLabel="Light" @click="toggleDarkMode" />
            </template>
        </Menubar>
    </div>
</template>

<style scoped></style>
