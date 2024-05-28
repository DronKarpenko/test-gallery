<!--<script setup>-->
<!--import { Swiper, SwiperSlide } from 'swiper/vue'-->
<!--import { register } from 'swiper/element/bundle'-->
<!--import { Navigation } from 'swiper/modules'-->

<!--import 'swiper/css'-->
<!--import 'swiper/css/navigation'-->

<!--const spaceBetween = 10-->

<!--const props = defineProps({-->
<!--  items: {-->
<!--    type: Array,-->
<!--    required: true,-->
<!--  },-->

<!--  initialSlide: {-->
<!--    type: Number,-->
<!--    default: 0,-->
<!--  },-->

<!--  onSlideChange: {-->
<!--    type: Function,-->
<!--    required: true,-->
<!--  }-->
<!--})-->

<!--const handleSlideChange = (swiper) => {-->
<!--  props.onSlideChange(swiper.activeIndex)-->
<!--}-->

<!--</script>-->

<!--<template>-->
<!--  <div class="slider">-->
<!--    <div class="slider__content">-->
<!--      <div-->
<!--       class="slider__swiper-container"-->
<!--      >-->
<!--        <Swiper-->
<!--         :slides-per-view="1"-->
<!--         :space-between="spaceBetween"-->
<!--         :initialSlide="initialSlide"-->
<!--         navigation-->
<!--         virtual-->
<!--         lazy-->
<!--         @slideChange="handleSlideChange"-->
<!--        >-->
<!--          <SwiperSlide-->
<!--           v-for="(item, index) in items"-->
<!--           :key="index"-->
<!--           class="slider__slide"-->
<!--          >-->
<!--            <slot :item="item" :index="index" />-->
<!--          </SwiperSlide>-->
<!--        </Swiper>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--@import 'base-swiper';-->
<!--</style>-->

<template>
  <div class="slider">
    <div class="slider__content">
      <div class="slider__swiper-container">
        <Swiper
         :slides-per-view="1"
         :space-between="spaceBetween"
         :initialSlide="initialSlide"
         navigation
         virtual
         lazy
         @slideChange="handleSlideChange"
        >
          <SwiperSlide
           v-for="(item, index) in items"
           :key="index"
           class="slider__slide"
          >
            <slot :item="item" :index="index" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { register } from 'swiper/element/bundle'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

register()

export default {
  name: 'SliderComponent',

  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
    initialSlide: {
      type: Number,
      default: 0,
    },
    onSlideChange: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      spaceBetween: 10,
    }
  },
  methods: {
    handleSlideChange(swiper) {
      this.onSlideChange(swiper.activeIndex)
    },
  },
}
</script>

<style scoped lang="scss">
@import 'base-swiper';
</style>
