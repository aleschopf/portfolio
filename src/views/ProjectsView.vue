<template>
    <div class="w-full flex flex-col gap-5">
        <Panel class="w-[98%] h-auto mx-auto" header="Locadora Team One">
            <div class="flex flex-col md:flex-row items-center justify-start gap-4">
                <Galleria :value="locadoraImages" :responsiveOptions="responsiveOptions" :numVisible="5"
                    :circular="true" containerClass="w-full md:w-[50vw] h-[50vh]" :showItemNavigators="true"
                    :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                            class="object-contain w-auto h-[45vh]" />
                    </template>
                    <template #caption="slotProps">
                        <div
                            class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-normal tracking-normal font-bold">
                            {{ slotProps.item.title }}</div>
                        <p class="text-white text-sm">{{ slotProps.item.alt }}</p>
                    </template>
                </Galleria>
                <div class="w-full md:w-[35vw]">
                    <p class="project-detail">
                        "Locadora Team One" is a vehicle rental project developed entirely in Java, featuring a web
                        interface for managing vehicles, users, and agencies. The system utilizes a RESTful API for
                        seamless
                        communication between the client and server, without the reliance on external libraries or
                        frameworks. It
                        incorporates business rules to ensure data integrity, such as preventing duplicate vehicles and
                        agencies, and
                        applying discounts based on rental duration for both individual and corporate clients.
                    </p>
                    <br>
                    <p class="project-detail">
                        The application provides functionalities for vehicle management, agency administration, and user
                        authentication, allowing registered users to reserve vehicles and receive rental receipts via
                        email.
                        The project emphasizes a well-structured codebase by adhering to SOLID principles, ensuring
                        scalability and maintainability while delivering a robust and user-friendly experience.
                    </p>
                    <div class="w-full flex items-center justify-center mt-8">
                        <Button label="Contrast" severity="contrast"
                            :class="['btn-access', darkMode ? 'btn-access-dark' : 'btn-access-light']"
                            onclick="window.open('https://github.com/Team-1-Santander-Coders/LocadoraTeam1', '_blank')"
                            raised>Go to repository!</Button>
                    </div>
                </div>
            </div>
        </Panel>
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import Galleria from 'primevue/galleria';

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

const locadoraImages = ref([
    {
        itemImageSrc: "locadora/landingpage.gif",
        title: "Landing Page",
        alt: 'Home page'
    },
    {
        itemImageSrc: "locadora/adminpage.png",
        title: "Admin page - Home",
        alt: 'Adminstrative Home Page With Graphs Informing About Vehicles Disponibility and Rentals Data'
    },
    {
        itemImageSrc: "locadora/admin_agency.png",
        title: "Admin page - Agencies",
        alt: 'Adminstrative Agency Page'
    },
    {
        itemImageSrc: "locadora/admin_vehicle.png",
        title: "Admin page - Vehicles",
        alt: 'Adminstrative Vehicles Page'
    },
    {
        itemImageSrc: "locadora/admin_rentals.png",
        title: "Admin page - Rentals",
        alt: 'Adminstrative Rentals Page'
    },
    {
        itemImageSrc: "locadora/userpage.png",
        title: "User page - Vehicles",
        alt: 'User Page To Select Vehicles to Rent'
    },
    {
        itemImageSrc: "locadora/filtro.png",
        title: "User page - Filtered vehicles",
        alt: 'User Page To Select Vehicles to Rent Filtered'
    },
    {
        itemImageSrc: "locadora/aluguel.png",
        title: "User page - Rent Modal",
        alt: 'User Page Modal To Rent Vehicles'
    },
    {
        itemImageSrc: "locadora/lista_alugueis.png",
        title: "User page - Rent List Modal",
        alt: 'User Page Modal List Rentals'
    },
])

const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<style scoped>
.btn-access {
    font-weight: bold;
}

.btn-access-light:hover {
    background-color: #211d2c;
}

.btn-access-dark:hover {
    background-color: #e0e0e0;
}

.p-galleria {
    --p-galleria-nav-button-background: #c3c3c3;
    --p-galleria-nav-button-color: #211d2c;
    --p-galleria-nav-button-hover-background: #333;
}
</style>