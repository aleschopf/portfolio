<template>
  <div class="flex flex-col h-screen">
    <header>
      <Navbar />
    </header>
    <main class="flex-grow">
      <div class="h-full">
        <router-view />
      </div>
      <Card>
        <template #content>
          <div class="flex flex-row gap-4 items-center justify-center py-4">
            <div class="flex flex-row items-center justify-evenly space-x-4 select-none">
              <div class="w-[60%]">
                <p class="mb-3 footer-title">Alecsandro Schopf Auer Junior</p>
                <p class="footer-text mb-1">I'm a Fullstack Developer and DevOps enthusiast, focused on building
                  scalable
                  and
                  secure systems.</p>
                <p class="footer-text">I love using technology to create impactful solutions.
                </p>
              </div>
              <div>
              </div>
              <div class="w-[45%] justify-center flex flex-col gap-3">
                <div id="text-footer" class="ml-auto flex items-start">
                  <p class="ml-2 text-2xl font-bold select-none">Social</p>
                </div>
                <div id="icons-footer" class="flex flex-row ml-auto">
                  <div class="icons-footer">
                    <a href="https://www.linkedin.com/in/aleschopf/" target="_blank" rel="noopener noreferrer">
                      <i class="linkedin pi pi-linkedin" style="font-size: 1.6rem;"></i>
                    </a>
                    <a href="https://github.com/aleschopf" target="_blank" rel="noopener noreferrer">
                      <i class="github pi pi-github" style="font-size: 1.6rem;"></i>
                    </a>
                    <a href="https://www.instagram.com/aleschopf/" target="_blank" rel="noopener noreferrer">
                      <i class="instagram pi pi-instagram" style="font-size: 1.6rem;"></i>
                    </a>
                    <a href="mailto:alecsandroauer@gmail.com">
                      <i class="email pi pi-envelope" style="font-size: 1.6rem;"></i>
                    </a>
                    <a href="https://linktr.ee/aleschopf">
                      <i class="linktree pi pi-share-alt" style="font-size: 1.6rem;"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <p class="m-0 text-center text-xs select-none">&copy; 2024 Aleschopf. Todos os direitos reservados.</p>
        </template>
      </Card>
    </main>
  </div>

  <div class="dock-wrapper w-min">
    <Dock :class="['dock', darkMode ? 'dock-dark-mode' : 'dock-light-mode']" :model="items" :position="dockPosition">
      <template #itemicon="{ item }">
        <a :href="item.link" target="_blank"><i :class="item.icon" :style="{ fontSize: iconSize }"></i></a>
      </template>
    </Dock>
  </div>
  <ScrollTop />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted} from 'vue';
import Card from 'primevue/card';
import Navbar from './components/Navbar.vue';
import ScrollTop from 'primevue/scrolltop';
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';

const darkMode = ref(document.documentElement.classList.contains('dark'));

const updateDarkMode = () => {
  darkMode.value = document.documentElement.classList.contains('dark');
};

let observer: MutationObserver;

onMounted(() => {
  setTimeout(() => {
    ajustarLargura();
    window.addEventListener('resize', ajustarLargura);
  }, 150);

  updateDarkMode();
  updateDockPosition();
  window.addEventListener("resize", updateDockPosition);

  observer = new MutationObserver(() => {
    updateDarkMode();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', ajustarLargura);
  if (observer) {
    observer.disconnect();
  }
});

const ajustarLargura = () => {
  const textFooter = document.getElementById('text-footer');
  const iconsFooter = document.getElementById('icons-footer');

  if (textFooter && iconsFooter) {
    textFooter.style.width = `${iconsFooter.offsetWidth}px`;
  }
};

const items = ref([
  {
    icon: "linkedin pi pi-linkedin",
    label: "Linkedin",
    link: "https://www.linkedin.com/in/aleschopf/"
  },
  {
    icon: "github pi pi-github",
    label: "Github",
    link: "https://github.com/aleschopf"
  },
  {
    icon: "instagram pi pi-instagram",
    label: "instagram",
    link: "https://www.instagram.com/aleschopf/"
  },
  {
    icon: "email pi pi-envelope",
    label: "email",
    link: "mailto:alecsandroauer@gmail.com"
  },
  {
    icon: "linktree pi pi-share-alt",
    label: "linktree",
    link: "https://linktr.ee/aleschopf"
  },
])

const dockPosition = ref("left");
const iconSize = ref("2rem");

const updateDockPosition = () => {
  if (window.innerWidth <= 768) {
    dockPosition.value = "bottom";
    iconSize.value = "1.2rem";
  } else {
    dockPosition.value = "left";
    iconSize.value = "2rem";
  }
};
</script>

<style>
.icons-footer a {
  padding-left: 8px;
}

i {
user-select: none;
}

i:hover {
  transition: color 0.25s ease;
}

.linkedin:hover {
  color: #1064c4;
}

.github:hover {
  color: #f04c34;
}

.linktree:hover {
  color: #42e660;
}

.instagram {
  background-image: linear-gradient(45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.instagram:hover {
  color: transparent;
}

.email:hover {
  color: #fe9700;
}

.p-dock {
  height: min-content !important;
  bottom: 0;
  margin: auto 0;
}

.dock-wrapper {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}

@media (max-width: 768px) {
  .p-dock {
      width: min-content !important;
      height: 2vh !important;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

  .p-dock-list {
    display: flex;
    justify-content: center;
  }

  .dock-wrapper {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: min-content !important;
    top: 100%;
    transform: none;
  }
}

.dock-light-mode {
  --p-dock-background: rgba(51, 51, 51, 0.05) ;
  --p-dock-border-color: rgba(68, 68, 68, 0.5);
}
</style>