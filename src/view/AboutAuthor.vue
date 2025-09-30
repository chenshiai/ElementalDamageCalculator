<template>
  <TabTitle>关于作者</TabTitle>
  <div class="author-page">
    <!-- 顶部装饰区 -->
    <div class="author-header">
      <!-- 装饰性气泡元素 -->
      <div class="element-bubble bubble-1"></div>
      <div class="element-bubble bubble-2"></div>
      <div class="element-bubble bubble-3"></div>
    </div>

    <!-- 主要内容区 -->
    <div class="author-content">
      <!-- 左侧个人资料列 -->
      <div class="profile-column">
        <!-- 头像区域 -->
        <div class="avatar-container">
          <div class="avatar-wrapper">
            <img src="/img/yuanshang.png" alt="个人头像" class="avatar" />
          </div>
        </div>

        <!-- 昵称区域 -->
        <div class="nickname-section">
          <h1 class="nickname">ChenShiAi</h1>
          <div>一名原神爱好者</div>
          <p class="subtitle">
            <i>见证者，为见证而来</i>
            <br />
            <i>铭记者，因铭记而生</i>
          </p>
          <br />
          <p>致渊上：</p>
          「<span style="font-size: 40px">我</span
          >发现芬德尼尔的光辉在覆雪下闪烁，太阳之子于白夜中仍有期盼，破败的居尔城被淹没的真相...我感受过木簧笛声与孩童的歌谣，森林眷属在无忧节的歌唱，层岩巨渊重嶂不移的石冢...我知道沙漠的子民如何追寻着绿洲，不完全之人如何开始的救世史诗，雷穆利亚的遗志如何与现世斗争...我还知道奥奇卡纳塔那高天之上的秘辛，图兰火山下最后的抉择...在我知道的这一切一切中，每一个都烙印在我的记忆...它们就像行迹，在轧过来路的瞬间成型后铭刻与心。」
        </div>
      </div>

      <!-- 右侧内容列 -->
      <div class="content-column">
        <!-- 自我介绍区域 -->
        <div class="intro-section">
          <h2 class="section-title">关于我</h2>
          <div class="intro-content">
            <p>
              于2020年9月15日踏入了提瓦特的天地，对元素反应感到好奇并开始了研究。为了游戏上的便利同时锻炼自己的编码能力，就趁着玩原神后的第一个春节假期创建了这个工具，一直维护至今。
            </p>
          </div>
        </div>
        <div class="intro-section">
          <h2 class="section-title">关于本站</h2>
          <div class="intro-content">
            <p>
              这个网站是我在学生时期就建立的，是为上一个我所热爱的游戏制作的资料站，后来它关服了，干脆就留给下一个游戏用了2333。
            </p>
          </div>
        </div>

        <!-- 图片展示区域 -->
        <div class="gallery-section">
          <h2 class="section-title">作品展示</h2>
          <div class="gallery-grid">
            <div
              v-for="(img, index) in galleryImages"
              :key="index"
              class="gallery-item"
              :style="{ backgroundImage: `url(${img})` }"
              @click="openImage(img)"
            >
              <div class="gallery-overlay">
                <span class="gallery-caption">作品 {{ index + 1 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部装饰区 -->
    <div class="author-footer"></div>

    <!-- 图片预览浮层 -->
    <div v-if="previewImage" class="image-preview" @click="closePreview">
      <img :src="previewImage" alt="预览图片" class="preview-img" />
      <button class="close-btn" @click.stop="closePreview">×</button>
    </div>
  </div>
</template>

<script setup>
import TabTitle from "../component/TabTitle.vue";
import { ref } from "vue";

// 响应式数据
const previewImage = ref("");

// 图片数据
const galleryImages = ref([]);

// 打开图片预览
const openImage = (img) => {
  previewImage.value = img;
  document.body.style.overflow = "hidden";
};

// 关闭图片预览
const closePreview = () => {
  previewImage.value = "";
  document.body.style.overflow = "";
};
</script>

<style scoped>
.author-page {
  min-height: 100vh;
  background-color: var(--page-bg);
  color: var(--main-text);
  font-family: "eng", HYWenHei-85W, Avenir, Helvetica, Arial, sans-serif;
  padding-bottom: 50px;
}

/* 新版顶部装饰区样式 */
.author-header {
  height: 200px;
  background: linear-gradient(120deg, var(--bg-electro), var(--bg-hydro));
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 装饰性波浪效果 */
.author-header::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 60px;
  background: var(--stroke-0);
  border-radius: 50% 50% 0 0;
  transform: translateX(-50%);
  animation: wave-animation 8s ease-in-out infinite;
}

.author-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 40px;
  background: var(--page-bg);
  border-radius: 50% 50% 0 0;
  transform: translateX(-50%) translateY(20px);
  animation: wave-animation 6s ease-in-out infinite reverse;
}

/* 元素装饰气泡 */
.author-header .element-bubble {
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  filter: blur(10px);
  animation: float-animation 8s ease-in-out infinite;
}

.author-header .bubble-1 {
  width: 100px;
  height: 100px;
  background-color: var(--bg-pyro);
  top: 20px;
  left: 10%;
  animation-delay: 0s;
}

.author-header .bubble-2 {
  width: 150px;
  height: 150px;
  background-color: var(--bg-cryo);
  bottom: 40px;
  right: 15%;
  animation-delay: 2s;
}

.author-header .bubble-3 {
  width: 80px;
  height: 80px;
  background-color: var(--bg-dendro);
  top: 50px;
  right: 25%;
  animation-delay: 4s;
}

/* 动画关键帧 */
@keyframes wave-animation {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@keyframes float-animation {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
}

.author-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

/* 宽屏布局 - 当屏幕宽度大于1024px时使用 */
@media screen and (min-width: 1024px) {
  .author-content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 40px;
    align-items: start;
    max-width: 1200px;
  }

  .profile-column {
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-column {
    grid-row: 1 / 2;
  }

  .avatar-container {
    margin-bottom: 30px;
  }

  .nickname-section {
    margin-bottom: 30px;
    text-align: center;
  }

  .intro-section {
    margin-bottom: 40px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

.avatar-container {
  display: flex;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 20px;
}

.avatar-wrapper {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: var(--light-text);
  padding: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--stroke-0);
}

.nickname-section {
  text-align: center;
  margin-bottom: 40px;
}

.nickname {
  font-size: 28px;
  font-weight: bold;
  color: var(--main-text);
  margin: 0 0 10px 0;
}

.subtitle {
  font-size: 16px;
  color: var(--tip-text);
  margin: 0;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  color: var(--main-text);
  margin: 0 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--stroke-1);
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background-color: var(--button-bg);
}

.intro-section {
  margin-bottom: 50px;
  background-color: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.intro-content p {
  line-height: 1.8;
  font-size: 16px;
  margin: 0;
}

.gallery-section {
  margin-bottom: 50px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.gallery-item {
  aspect-ratio: 1;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-caption {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.author-footer {
  height: 100px;
  background-color: var(--stroke-0);
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
}

.preview-img {
  max-width: 90%;
  max-height: 90vh;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

/* 移动端适配 - 确保在小屏幕上使用竖屏布局 */
@media screen and (max-width: 1023px) {
  .author-content {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  .profile-column,
  .content-column {
    grid-row: auto !important;
  }
}

@media screen and (max-width: 768px) {
  .author-header {
    height: 120px;
  }

  .avatar-wrapper {
    width: 120px;
    height: 120px;
  }

  .nickname {
    font-size: 24px;
  }

  .subtitle {
    font-size: 14px;
  }

  .section-title {
    font-size: 18px;
  }

  .intro-section {
    padding: 20px;
  }

  .intro-content p {
    font-size: 15px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
  }

  .gallery-caption {
    font-size: 12px;
  }

  .close-btn {
    width: 35px;
    height: 35px;
    font-size: 20px;
    top: 15px;
    right: 15px;
  }
}

@media screen and (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .preview-img {
    max-width: 95%;
  }
}
</style>
