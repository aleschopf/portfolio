<template>
    <div class="h-full w-[98%] m-auto flex items-center justify-center pb-4">
        <Card class="w-full h-full flex items-center justify-center text-center"
            :class="['card', darkMode ? 'card-background-dark' : 'card-background-light']">
            <template #title>
                <span class="card-title m-0 select-none">HEY, I'M ALECSANDRO SCHOPF</span>
            </template>
            <template #content>
                <p class="card-text m-0 select-none">
                    A Fullstack Developer and DevOps enthusiast with a focus on building scalable systems and ensuring
                    robust security.
                </p>
                <p class="card-text m-0 select-none">
                    I’m passionate about leveraging technology to create solutions that make a difference. Explore my
                    work and let's connect!
                </p>
                <div class="relative flex items-end justify-center" style="height: 200px; margin-top: 16px;">
                    <SpeedDial :model="items" direction="down" :transitionDelay="80" :style="{ position: 'absolute' }"
                        pt:menuitem="m-2">
                        <template #button="{ toggleCallback }">
                            <Button class="text-w w-40 h-12 text-lg font-bold" @click="toggleCallback">
                                More details
                            </Button>
                        </template>
                        <template #item="{ item, toggleCallback }">
                            <Button
                                class="flex items-center p-2 justify-center border rounded border-surface-200 dark:border-surface-700 w-40 cursor-pointer"
                                :class="['speeddialbtn', darkMode ? 'speeddialbtn-dark' : 'speeddialbtn-light']"
                                @click="toggleCallback">
                                <span :class="item.icon + ' text-2xl mr-2'" />
                                <span class="text-lg">
                                    {{ item.label }}
                                </span>
                            </Button>
                        </template>
                    </SpeedDial>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { ref, onMounted, onUnmounted } from 'vue';
import SpeedDial from 'primevue/speeddial';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const darkMode = ref(document.documentElement.classList.contains('dark'));

const updateDarkMode = () => {
    darkMode.value = document.documentElement.classList.contains('dark');
};

let observer: MutationObserver;

onMounted(() => {
    updateDarkMode()

    observer = new MutationObserver(() => {
        updateDarkMode();
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
    });
});

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});

const router = useRouter();

const items = ref([
    {
        label: 'Projects',
        icon: 'pi pi-folder',
        command: () => {
            router.push('/projects');
        }
    },
    {
        label: 'About me',
        icon: 'pi pi-envelope',
        command: () => {
            router.push('/about');
        }
    }
]);
</script>

<style scoped>
.p-card {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.p-card-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.p-card-content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-speeddial-menuitem {
    width: 150px;
    height: 50px;
    font-size: 1.25rem;
}

.card {
    background-size: cover;
    background-position: center;
}

.card-background-light {
    background-image: url('/home/light.jpeg');
}

.card-background-dark {
    background-image: url('/home/dark.jpeg');
}

.speeddialbtn-dark {
    background-color: #f0ecec;
    border-color: #dbdada !important;
    color: #333;
}

.speeddialbtn-dark:hover {
    background-color: #dbdada !important;
    border-color: #c4c4c4 !important;
}

.speeddialbtn-light {
    background-color: #333;
    border-color: #222 !important;
    color: #f0ecec;
}

.speeddialbtn-light:hover {
    background-color: #222 !important;
    border-color: #111 !important;
}
</style>
