<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconAccessibility from './components/icons/IconAccessibility.vue';
import IconMenu from './components/icons/IconMenu.vue';
import { ref } from 'vue';
import IconHome from './components/icons/IconHome.vue';
import IconRestaurant from './components/icons/IconRestaurant.vue';
import IconContact from './components/icons/IconContact.vue';
import IconAbout from './components/icons/IconAbout.vue';
import IconLocation from './components/icons/IconLocation.vue';
import IconCart from './components/icons/IconCart.vue';

const isMenuOpen = ref(false);

const toggleTheme = () => {console.log('toggle theme')}
</script> 

<template>
    <header>
        <h1>PADARIA<br/>SHEKINAH</h1>
        <div class="icons">
            <IconAccessibility @click="toggleTheme"/>
            <IconMenu @click="isMenuOpen = true"/>
        </div>
        <div class="navBg" :class="{open: isMenuOpen}" @click="isMenuOpen = false"></div>
        <nav :class="{open: isMenuOpen}">
            <ul>
                <li><RouterLink to="/"><IconHome/>Home</RouterLink></li>
                <li><RouterLink to="/cardapio"><IconRestaurant/>Cardápio</RouterLink></li>
                <li><RouterLink to="/contato"><IconContact/>Contato</RouterLink></li>
                <li><RouterLink to="/sobre"><IconAbout/>Sobre nós</RouterLink></li>
                <li><RouterLink to="/local"><IconLocation/>Localização</RouterLink></li>
                <li><RouterLink to="/carrinho"><IconCart/>Carrinho</RouterLink></li>
            </ul>
        </nav>
    </header>

    <main>
        <RouterView />
    </main>

    <footer>
        <div>
            <div class="footerTitle">CONTATO</div>
            <div>(99) 90000-0000</div>
        </div>
        <div>
            <div class="footerTitle">LOCALIZAÇÃO</div>
            <div></div>
        </div>
        <div>
            <div class="footerTitle">MÍDIAS SOCIAIS</div>
            <div class="socialIcons">
                <a href="#" target="_blank"><img src="@/assets/whatsapp.png"/></a>
                <a href="#" target="_blank"><img src="@/assets/instagram.png"/></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    gap: .4rem;
    div {
        color: var(--color-secundary);
        .footerTitle {
            margin-bottom: .5rem;
            text-align: center;
        }
        .socialIcons {
            display: flex;
            justify-content: center;
            gap: .5rem;
        }
    }
}

main {
    flex-grow: 1;
}

header {
    background-color: var(--color-primary);
    height: 12rem;
    color:  var(--color-secundary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    overflow: hidden;
    div.icons {
        display: flex;
        gap: 0.5rem;
    }
    svg {
        fill:  var(--color-secundary);
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
    }
    h1 {
        font-weight: bold;
        font-style: italic;
        line-height: 1.2;
    }
    div.navBg {
        background-color: rgba(0, 0, 0, 0);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: -100;
        transition: .3s;
    }
    div.navBg.open {
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        nav {
            z-index: 101;
            transform: translate(-100vw);
        }
    }
    nav {
        transition: .3s;
        position: fixed;
        width: 80vw;
        height: 100vh;
        top: 0;
        left: 100vw;
        background-color: var(--color-primary);
        padding: 2rem;
        font-size: 2rem;
        z-index: 101;
        ul {
            list-style-type: none;
            padding-inline-start: 0;
            li a {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            li a.router-link-exact-active {
                font-weight: bold;
                padding-inline-start: 1rem;
            }
        }
    }
    nav.open {
        transform: translate(-80vw);
    }
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
