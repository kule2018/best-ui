<template>
  <div class="b-carousel">
    <slot></slot>
    
  </div>
</template>

<script>
import BIcon from "../icon";
export default {
    name: "BCarousel",
    componentName: "BCarousel",
    components: { BIcon },
    props: {
        height: String,
        trigger: {
            type: String,
            default: "click"
        },
        loop: {
            type: Boolean,
            default: true
        },
        interval: {
            type: Number,
            default: 5000
        },
        index: {
            type: Number,
            default: 0
        },
        autoplay: Boolean
    }
};
</script>

