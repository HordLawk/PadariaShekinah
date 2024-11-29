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
import IconIncrease from './components/icons/IconIncrease.vue';
import IconContrast from './components/icons/IconContrast.vue';
import IconDecrease from './components/icons/IconDecrease.vue';

const isMenuOpen = ref(false);

document.documentElement.setAttribute(
    'data-theme',
    window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light',
);

const toggleTheme = () => {
    document.documentElement.setAttribute(
        'data-theme',
        (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark',
    );
}
const incrementFontSize = (inc: number) => {
    const fontSize = parseFloat(window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size'));
    if((fontSize + inc) > 20) return;
    document.documentElement.style.fontSize = `${fontSize + inc}px`;
}
</script> 

<template>
    <header>
        <RouterLink to="/"><h1>PADARIA<br/>SHEKINAH</h1></RouterLink>
        <div class="icons">
            <div class="accessibility">
                <div>
                    <div>
                        <IconIncrease
                            tabindex="0"
                            @click="incrementFontSize(2)"
                            @keydown.enter.space="incrementFontSize(2)"
                        />
                        <IconContrast tabindex="0" @click="toggleTheme" @keydown.enter.space="toggleTheme" />
                        <IconDecrease
                            tabindex="0"
                            @click="incrementFontSize(-2)"
                            @keydown.enter.space="incrementFontSize(-2)"
                        />
                    </div>
                </div>
                <IconAccessibility />
            </div>
            <IconMenu class="menuIcon" @click="isMenuOpen = true"/>
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
    > div {
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
    height: 192px;
    color:  var(--color-secundary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    overflow: hidden;
    h1 {
        font-size: 32px;
    }
    .icons {
        display: flex;
        gap: 8px;
        .accessibility {
            height: 40px;
            position: relative;
            > div {
                background-color: var(--color-primary);
                overflow: hidden;
                height: 0px;
                transition-duration: .3s;
                transition-property: height, top;
                position: absolute;
                top: 20px;
                > div {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    svg {
                        transition: .3s;
                    }
                    > svg:hover {
                        opacity: .7;
                    }
                }
            }
        }
        .accessibility:hover > div {
            height: 136px;
            top: -48px;
        }
    }
    svg {
        fill:  var(--color-secundary);
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    h1 {
        font-weight: bold;
        font-style: italic;
        line-height: 1.2;
    }
    .navBg {
        background-color: rgba(0, 0, 0, 0);
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: -100;
        transition-duration: .3s;
        transition-property: background-color;
    }
    .navBg.open {
        background-color: rgba(0, 0, 0, .5);
        z-index: 100;
        nav {
            z-index: 101;
            transform: translate(-100vw);
        }
    }
    > nav {
        transition-duration: .3s;
        transition-property: transform;
        top: 0;
        left: 100vw;
        font-size: 32px;
        > ul {
            list-style-type: none;
            padding-inline-start: 0;
            > li > a {
                display: flex;
                align-items: center;
                gap: 16px;
                transition-property: padding-inline-start, opacity;
            }
            > li a:hover{
                opacity: .7;
            }
            > li .router-link-exact-active {
                font-weight: bold;
            }
        }
        @media (max-width: 1024px) {
            position: fixed;
            width: 80vw;
            height: 100vh;
            background-color: var(--color-primary);
            padding: 32px;
            z-index: 101;
            > ul > li .router-link-exact-active {
                padding-inline-start: 16px;
            }
        }
    }
    nav.open {
        transform: translate(-80vw);
    }
    @media (min-width: 1025px) {
        height: 128px;
        > nav {
            font-size: 24px;
            > ul {
                display: flex;
                gap: 16px;
                > li > a svg {
                    display: none;
                }
            }
        }
        .icons {
            margin-right: 16px;
            flex-grow: 1;
            justify-content: end;
            svg {
                width: 32px;
                height: 32px;
            }
            .accessibility {
                height: 32px;
                > div {
                    height: 32px;
                    top: 0;
                    right: 0;
                    > div {
                        flex-direction: row;
                    }
                }
            }
            .accessibility:hover > div {
                height: 40px;
                top: 0;
            }
        }
        .menuIcon {
            display: none;
        }
    }
}
</style>
