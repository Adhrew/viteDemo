<template>
  <div class="basic">
    <header>
      <div class="box">
        <div class="flex row-v-c">
          <img src="src/assets/img/logo.png" class="logo"/>
          <div class="deal_dropdown">
            <a-dropdown class="buy dropdown">
              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">
                    1st menu item
                  </a-menu-item>
                </a-menu>
              </template>
              <a-button>
                {{ $t('Deal.buy') }}
                <DownOutlined/>
              </a-button>
            </a-dropdown>
            <a-dropdown class="sell dropdown">
              <template #overlay>
                <a-menu @click="handleMenuClick">
                  <a-menu-item key="1">
                    1st menu item
                  </a-menu-item>
                </a-menu>
              </template>
              <a-button>
                {{ $t('Deal.sell') }}
                <DownOutlined/>
              </a-button>
            </a-dropdown>
          </div>
          <div class="nav_group">
            <div v-for="item in $tm('Home')" class="nav">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="flex row-v-c">
          <div class="options">
            <div>{{ G_unit_show }}</div>
            <a-divider type="vertical" class="divider"/>
            <div>{{ lang }}</div>
          </div>
          <div class="login">
            <a-config-provider :auto-insert-space-in-button="false">
              <a-button class="btn">{{ $t('Login.login') }}</a-button>
            </a-config-provider>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import { defineComponent, toRefs } from 'vue'
  import { DownOutlined } from '@ant-design/icons-vue'
  import { useI18n } from "vue-i18n";
  import { lang_map } from '@/config/mapper'
  import { useStore } from 'vuex'
  export default defineComponent({
    setup() {
      const handleMenuClick = e => {
        console.log('click', e);
      };
      const store = useStore()
      const { locale } = useI18n();
      const { G_unit_show } = toRefs(store.getters)
      const lang = lang_map[locale.value]
      return {
        handleMenuClick,
        G_unit_show,
        lang
      };
    },
    components: {
      DownOutlined
    }
  })
</script>

<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
    height: 70px;
    width: 100%;
    background: $top_head_bg;
    color: $base_color;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 1200px;
    .logo {
      height: 39px;
      cursor: pointer;
    }
    .deal_dropdown {
      margin-left: 38px;
      margin-right: 38px;
      display: flex;
      .dropdown {
        height: 32px;
        border-radius: 4px;
        min-width: 90px;
        padding: 0 10px;
        text-align: initial;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(:first-child) {
          margin-left: 22px;
        }
        &.buy {
          background: $mostBtnBg;
          color: $base_color;
        }
        &.sell {
          background: transparent;
          color: $base_color;
          border: 1px solid $border_color1;
          .anticon-down {
            height: 100%;
            padding-left: 10px;
            border-left: 1px solid $border_color1;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .nav_group {
      display: flex;
      align-items: center;
      color: $head_nav_color;
      .nav {
        white-space: nowrap;
        cursor: pointer;
        &:not(:first-child) {
          margin-left: 49px;
        }
        &:hover {
          color: $base_color;
        }
      }
    }
    .options {
      margin-left: 38px;
      display: flex;
      align-items: center;
      font-weight: bold;
      white-space: nowrap;
      .divider {
        border-color: $base_color;
        top: 0;
      }
    }
    .login {
      margin-left: 54px;
      .btn {
        background-color: $mostBtnBg;
        border-radius: 6px;
        height: 32px;
        min-width: 60px;
        color: $base_color;
        border: none;
      }
    }
  }
</style>