const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./button.story-Bv3Y87L9.js","./vendor-dvzGQhgd.js","./HomeView.vue-5g8kUVcK.js","./story-Bz4Gh3mt.js","./StoryView.vue-ChncFfDZ.js","./responsive-DnBmRY8u.js","./BaseEmpty.vue-CfncjCYS.js","./state-CtYMflcs.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload, O as defineAsyncComponent, P as useDark, Q as useToggle, k as watch, R as createRouter, S as createWebHistory, U as createWebHashHistory, d as defineComponent, n as ref, V as watchEffect, W as markRaw, y as createBlock, g as createCommentVNode, X as mergeProps, Y as resolveDynamicComponent, o as openBlock, A as reactive } from "./vendor-dvzGQhgd.js";
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./button.story-Bv3Y87L9.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url));
let files = [{ "id": "src-button-story-button-story-vue", "path": ["Button"], "filePath": "src/button/story/button.story.vue", "story": { "id": "src-button-story-button-story-vue", "title": "Button", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "src-button-story-button-story-vue-0", "title": "Variants" }, { "id": "src-button-story-button-story-vue-1", "title": "Sizes" }], "autoPropsDisabled": true, "responsiveDisabled": true }, "supportPluginId": "vue3", "docsFilePath": "src/button/story/button.story.md", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-button-story-button-story-vue-C_xq5dZh.js"), true ? [] : void 0, import.meta.url) }];
let tree = [{ "title": "Button", "index": 0 }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/runner/work/vue-template/vue-template/node_modules/.pnpm/histoire@1.0.0-alpha.5_@types+node@24.10.1_lightningcss@1.30.2_sass-embedded@1.93.3_sas_0ed18efe6d70a073c0fc59207b9c27e3/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/home/runner/work/vue-template/vue-template/packages/ui/dist", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc" }, "theme": { "title": "UI", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark" }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "setupFile": "./src/histoire.setup.ts", "defaultStoryProps": { "autoPropsDisabled": true, "responsiveDisabled": true } };
const logos = {};
const histoireConfig = config;
const customLogos = logos;
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  window.__hst_controls_dark?.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const base = "./";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-5g8kUVcK.js"), true ? __vite__mapDeps([2,3,1]) : void 0, import.meta.url)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-ChncFfDZ.js"), true ? __vite__mapDeps([4,1,3,5,6,7]) : void 0, import.meta.url)
    }
  ]
});
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-dvzGQhgd.js").then((n) => n.aI), true ? [] : void 0, import.meta.url),
  "vue3": () => __vitePreload(() => import("./vendor-dvzGQhgd.js").then((n) => n.aJ), true ? [] : void 0, import.meta.url)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      const clientPlugin = clientSupportPlugins[props.story.file?.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
function mapFile(file, existingFile) {
  let result;
  {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
export {
  _sfc_main as _,
  tree as a,
  clientSupportPlugins as b,
  customLogos as c,
  base as d,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
