const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./button.story-sBIih3tb.js","./vendor-CJxuTU_T.js","./rolldown-runtime-D7D4PA-g.js"])))=>i.map(i=>d[i]);
import { Dt as reactive, E as __vitePreload, Et as openBlock, Ht as watch, M as defineAsyncComponent, Nt as resolveDynamicComponent, Ot as ref, U as useDark, Ut as watchEffect, Z as useToggle, ct as createBlock, ht as defineComponent, lt as createCommentVNode, vt as markRaw, yt as mergeProps } from "./vendor-CJxuTU_T.js";
import { r as histoireConfig } from "./router-ChlKzTpF.js";
var files = [{
	"id": "src-button-story-button-story-vue",
	"path": ["Button"],
	"filePath": "src/button/story/button.story.vue",
	"story": {
		"id": "src-button-story-button-story-vue",
		"title": "Button",
		"layout": {
			"type": "single",
			"iframe": true
		},
		"docsOnly": false,
		"variants": [{
			"id": "src-button-story-button-story-vue-0",
			"title": "Variants"
		}, {
			"id": "src-button-story-button-story-vue-1",
			"title": "Sizes"
		}],
		"autoPropsDisabled": true,
		"responsiveDisabled": true
	},
	"supportPluginId": "vue3",
	"docsFilePath": "src/button/story/button.story.md",
	"index": 0,
	component: defineAsyncComponent(() => __vitePreload(() => import("./button.story-sBIih3tb.js"), __vite__mapDeps([0,1,2]), import.meta.url)),
	source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-button-story-button-story-vue-JvhaDEmQ.js"), [], import.meta.url)
}];
var tree = [{
	"title": "Button",
	"index": 0
}];
var handlers = [];
function onUpdate(cb) {
	handlers.push(cb);
}
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/dark.js
var isDark = useDark({
	valueDark: "htw-dark",
	initialValue: histoireConfig.theme.defaultColorScheme,
	storageKey: "histoire-color-scheme",
	storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
var toggleDark = useToggle(isDark);
function applyDarkToControls() {
	window.__hst_controls_dark?.forEach((ref) => {
		ref.value = isDark.value;
	});
}
watch(isDark, () => {
	applyDarkToControls();
}, { immediate: true });
window.__hst_controls_dark_ready = () => {
	applyDarkToControls();
};
//#endregion
//#region \0virtual:$histoire-support-plugins-client
var clientSupportPlugins = {
	"vanilla": () => __vitePreload(() => import("./vendor-CJxuTU_T.js").then((n) => n.r), __vite__mapDeps([1,2]), import.meta.url),
	"vue3": () => __vitePreload(() => import("./vendor-CJxuTU_T.js").then((n) => n.i), __vite__mapDeps([1,2]), import.meta.url)
};
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/components/story/GenericMountStory.vue2.js
var _sfc_main = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "GenericMountStory",
	props: { story: {} },
	setup(__props) {
		const props = __props;
		const mountComponent = ref(null);
		watchEffect(async () => {
			const clientPlugin = clientSupportPlugins[props.story.file?.supportPluginId];
			if (clientPlugin) mountComponent.value = markRaw((await clientPlugin()).MountStory);
		});
		return (_ctx, _cache) => {
			return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
				key: 0,
				class: "histoire-generic-mount-story",
				story: __props.story
			}, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/mapping.js
var copiedFromExistingVariant = [
	"state",
	"slots",
	"source",
	"responsiveDisabled",
	"autoPropsDisabled",
	"setupApp",
	"configReady",
	"previewReady"
];
function mapFile(file, existingFile) {
	let result;
	if (existingFile) {
		result = existingFile;
		for (const key in file) if (key === "story") result.story = {
			...result.story,
			...file.story,
			file: markRaw(result),
			variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
		};
		else if (key !== "component") result[key] = file[key];
	} else result = {
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
	return result;
}
function mapVariant(variant, existingVariant) {
	let result;
	if (existingVariant) {
		result = existingVariant;
		for (const key in variant) if (!copiedFromExistingVariant.includes(key)) result[key] = variant[key];
	} else result = {
		...variant,
		state: reactive({
			_hPropState: {},
			_hPropDefs: {}
		}),
		setupApp: null,
		slots: () => ({}),
		previewReady: false
	};
	return result;
}
//#endregion
export { toggleDark as a, tree as c, isDark as i, _sfc_main as n, files as o, clientSupportPlugins as r, onUpdate as s, mapFile as t };
