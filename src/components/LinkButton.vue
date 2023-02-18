<script setup>
    import { useUtilsStore } from '@/stores/utils'

    const props = defineProps({
        link: String,
        size: String,
        color: String
    })

    const utils = useUtilsStore()

    var styles = {
        '--color': utils.material(props.color),
        '--size': utils.size(props.size)
    }
</script>

<template>
    <button class="linkbutton" :style="styles">
        <a>
            <slot>
            </slot>
        </a>
    </button>
</template>

<style scoped>
    .linkbutton {
        display: inherit;
        background-color: var(--color);
        color: rgba(0, 0, 0, 0.65);
        filter: drop-shadow(0px 0px 10px var(--color));
        border: none;
        border-radius: 5px;
        font-size: var(--size);
        padding-top: 0%;
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        .linkbutton {
            font-size: 100%;
        }
    }
</style>