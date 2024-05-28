<!--<script setup>-->
<!--import BaseModal from '/components/base/base-modal/BaseModal.vue'-->
<!--import BaseSwiper from '/components/base/base-swiper/BaseSwiper.vue'-->
<!--import BaseLoader from '/components/base/BaseLoader.vue'-->

<!--import { gallery } from './gallery.js'-->

<!--import { Swiper, SwiperSlide } from 'swiper/vue'-->
<!--import { register } from 'swiper/element/bundle'-->
<!--import { Navigation } from 'swiper/modules'-->

<!--import 'swiper/css'-->
<!--import 'swiper/css/navigation';-->

<!--const showImagePreview = ref(false)-->
<!--const currentImageIndex = ref(0)-->
<!--const currentImage = ref(null)-->
<!--const imageLoadingStates = reactive(gallery.map(() => true))-->

<!--const isFullscreen = ref(false)-->

<!--watch(showImagePreview, (val) => {-->
<!--  if (val) {-->
<!--    document.body.classList.add('locked')-->
<!--  } else {-->
<!--    document.body.classList.remove('locked')-->
<!--  }-->
<!--})-->

<!--function openImagesPreview(index) {-->
<!--  currentImageIndex.value = index-->
<!--  showImagePreview.value = true-->
<!--}-->

<!--function closeGallery() {-->
<!--  showImagePreview.value = false-->
<!--  if (isFullscreen.value) {-->
<!--    fullScreen('exit')-->
<!--  }-->
<!--}-->

<!--function getImgInfo(img) {-->
<!--  console.log('IMAGE: ', img)-->
<!--}-->

<!--function handleImageLoad(index, item) {-->
<!--  imageLoadingStates[index] = false-->
<!--}-->

<!--function updateCurrentImage(index) {-->
<!--  currentImage.value = gallery[index]-->
<!--}-->

<!--function fullScreen(action = null) {-->
<!--  const elem = document.documentElement-->
<!--  if (-->
<!--   !document.fullscreenElement &&-->
<!--   !document.mozFullScreenElement &&-->
<!--   !document.webkitFullscreenElement &&-->
<!--   !document.msFullscreenElement &&-->
<!--   action !== 'exit'-->
<!--  ) {-->
<!--    if (elem.requestFullscreen) {-->
<!--      elem.requestFullscreen()-->
<!--    } else if (elem.msRequestFullscreen) {-->
<!--      elem.msRequestFullscreen()-->
<!--    } else if (elem.mozRequestFullScreen) {-->
<!--      elem.mozRequestFullScreen()-->
<!--    } else if (elem.webkitRequestFullscreen) {-->
<!--      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)-->
<!--    }-->

<!--    isFullscreen.value = true-->
<!--    return-->
<!--  } else if (document.exitFullscreen) {-->
<!--    document.exitFullscreen()-->
<!--  } else if (document.msExitFullscreen) {-->
<!--    document.msExitFullscreen()-->
<!--  } else if (document.mozCancelFullScreen) {-->
<!--    document.mozCancelFullScreen()-->
<!--  } else if (document.webkitExitFullscreen) {-->
<!--    document.webkitExitFullscreen()-->
<!--  }-->

<!--  isFullscreen.value = false-->
<!--}-->

<!--function addPhotoToFavorites() {-->
<!--  console.log('LIKE: ', currentImage.value.id)-->
<!--}-->

<!--function downloadImage() {-->
<!--  return window.open(currentImage.value.fullSizePhotoUrl)-->
<!--}-->

<!--function shareImage() {-->
<!--  console.log('SHARE: ', currentImage.value.id)-->
<!--  const url = `https://t.me/share/url?url=https://testaccountdomen.devstartlife.com.ua/gallery/241/${currentImage.value.id}`-->
<!--  window.open(url, '_blank')-->
<!--}-->

<!--</script>-->

<!--<template>-->
<!--  <div class="gallery">-->
<!--    <h1>Gallery</h1>-->

<!--    <div class="container">-->
<!--      <div class="gallery__images">-->
<!--        <div-->
<!--         v-for="(photo, index) in gallery"-->
<!--         :key="photo.id"-->
<!--         class="gallery__image"-->
<!--         @click="openImagesPreview(index, photo)"-->
<!--        >-->
<!--          <img-->
<!--           :src="photo.compressedPhotoUrl"-->
<!--           alt=""-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->

<!--      <BaseModal-->
<!--       v-if="showImagePreview"-->
<!--       @close="closeGallery"-->
<!--      >-->
<!--        <template #actions>-->
<!--          <div class="image-preview__actions actions">-->
<!--            <div class="actions__fullscreen actions__item" @click="fullScreen">-->
<!--              <svg class="actions__item-icon">-->
<!--                <use v-if="isFullscreen" href="#icon-fullscreen-exit"></use>-->
<!--                <use href="#icon-fullscreen"></use>-->
<!--              </svg>-->
<!--            </div>-->

<!--            <div-->
<!--             class="actions__likes actions__item"-->
<!--             @click="addPhotoToFavorites"-->
<!--            >-->
<!--              <svg class="actions__item-icon">-->
<!--                <use href="#icon-heart" />-->
<!--              </svg>-->
<!--            </div>-->

<!--            <div class="actions__download actions__item">-->
<!--              <svg-->
<!--               class="actions__item-icon"-->
<!--               @click="downloadImage"-->
<!--              >-->
<!--                <use href="#icon-download"></use>-->
<!--              </svg>-->
<!--            </div>-->

<!--            <div class="actions__share actions__item">-->
<!--              <svg-->
<!--               class="actions__item-icon"-->
<!--               @click="shareImage"-->
<!--              >-->
<!--                <use href="#icon-share"></use>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </template>-->

<!--        <div class="image-preview">-->
<!--          <BaseSwiper-->
<!--           :items="gallery"-->
<!--           :initialSlide="currentImageIndex"-->
<!--           @slideChange="updateCurrentImage"-->
<!--          >-->
<!--            <template #default="{ item, index }">-->
<!--              <div class="images-preview__item">-->
<!--                <div class="image">-->
<!--                  <div class="image__img">-->
<!--                    <BaseLoader v-if="imageLoadingStates[index]" />-->

<!--                    <img-->
<!--                     :src="item.sourcePhotoUrl"-->
<!--                     alt=""-->
<!--                     class="image__img-component"-->
<!--                     loading="lazy"-->
<!--                     :class="{ 'image__img&#45;&#45;loading': imageLoadingStates[index] }"-->
<!--                     @load="handleImageLoad(index, item)"-->
<!--                     @click="getImgInfo(item)"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </template>-->
<!--          </BaseSwiper>-->
<!--        </div>-->
<!--      </BaseModal>-->
<!--    </div>-->

<!--  </div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->

<!--</style>-->

<template>
  <div class="gallery">
    <h1>Gallery</h1>

    <div class="container">
      <div class="gallery__images">
        <div
         v-for="(photo, index) in gallery"
         :key="photo.id"
         class="gallery__image"
         @click="openImagesPreview(index, photo)"
        >
          <img :src="photo.compressedPhotoUrl" alt="" />
        </div>
      </div>

      <BaseModal v-if="showImagePreview" @close="closeGallery">
        <template #actions>
          <div class="image-preview__actions actions">
            <div class="actions__fullscreen actions__item" @click="fullScreen">
              <svg class="actions__item-icon">
                <use v-if="isFullscreen" href="#icon-fullscreen-exit"></use>
                <use href="#icon-fullscreen"></use>
              </svg>
            </div>
            <div class="actions__likes actions__item" @click="addPhotoToFavorites">
              <svg class="actions__item-icon">
                <use href="#icon-heart" />
              </svg>
            </div>
            <div class="actions__download actions__item">
              <svg class="actions__item-icon" @click="downloadImage">
                <use href="#icon-download"></use>
              </svg>
            </div>
            <div class="actions__share actions__item">
              <svg class="actions__item-icon" @click="shareImage">
                <use href="#icon-share"></use>
              </svg>
            </div>
          </div>
        </template>

        <div class="image-preview">
          <BaseSwiper :items="gallery" :initialSlide="currentImageIndex" @slideChange="updateCurrentImage">
            <template #default="{ item, index }">
              <div class="images-preview__item">
                <div class="image">
                  <div class="image__img">
                    <BaseLoader v-if="imageLoadingStates[index]" />
                    <img
                     :src="item.sourcePhotoUrl"
                     alt=""
                     class="image__img-component"
                     loading="lazy"
                     :class="{ 'image__img--loading': imageLoadingStates[index] }"
                     @load="handleImageLoad(index, item)"
                     @click="getImgInfo(item)"
                    />
                  </div>
                </div>
              </div>
            </template>
          </BaseSwiper>
        </div>
      </BaseModal>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
import BaseModal from '/components/base/base-modal/BaseModal.vue'
import BaseSwiper from '/components/base/base-swiper/BaseSwiper.vue'
import BaseLoader from '/components/base/BaseLoader.vue'

import { gallery } from './gallery.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { register } from 'swiper/element/bundle'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

register()

export default {
  name: 'GalleryComponent',
  components: {
    BaseModal,
    BaseSwiper,
    BaseLoader,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showImagePreview: false,
      currentImageIndex: 0,
      currentImage: null,
      imageLoadingStates: reactive(gallery.map(() => true)),
      isFullscreen: false,
      gallery,
    }
  },
  watch: {
    showImagePreview(val) {
      if (val) {
        document.body.classList.add('locked')
      } else {
        document.body.classList.remove('locked')
      }
    },
  },
  methods: {
    openImagesPreview(index) {
      this.currentImageIndex = index
      this.showImagePreview = true
    },
    closeGallery() {
      this.showImagePreview = false
      if (this.isFullscreen) {
        this.fullScreen('exit')
      }
    },
    getImgInfo(img) {
      console.log('IMAGE: ', img)
    },
    handleImageLoad(index, item) {
      this.imageLoadingStates[index] = false
    },
    updateCurrentImage(index) {
      this.currentImage = this.gallery[index]
    },
    fullScreen(action = null) {
      const elem = document.documentElement
      if (
       !document.fullscreenElement &&
       !document.mozFullScreenElement &&
       !document.webkitFullscreenElement &&
       !document.msFullscreenElement &&
       action !== 'exit'
      ) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen()
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen()
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen()
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }
        this.isFullscreen = true
        return
      } else if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      this.isFullscreen = false
    },
    addPhotoToFavorites() {
      console.log('LIKE: ', this.currentImage.id)
    },
    downloadImage() {
      window.open(this.currentImage.fullSizePhotoUrl)
    },
    shareImage() {
      console.log('SHARE: ', this.currentImage.id)
      const url = `https://t.me/share/url?url=https://testaccountdomen.devstartlife.com.ua/gallery/241/${this.currentImage.id}`
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped lang="scss">

</style>
