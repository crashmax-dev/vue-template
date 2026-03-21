const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./button.story-CSunUB-_.js","./vendor-BRroElKf.js","./rolldown-runtime-D9VfunvA.js"])))=>i.map(i=>d[i]);
import { Ao as markRaw, Bo as ref, Do as defineComponent, Go as resolveDynamicComponent, Ra as __vitePreload, Ro as openBlock, Wa as defineAsyncComponent, bo as createBlock, jo as mergeProps, ts as watchEffect, xo as createCommentVNode, zo as reactive } from "./vendor-BRroElKf.js";
import { t as clientSupportPlugins } from "./_virtual__histoire-support-plugins-client-CfbNpnLM.js";
//#region ../../../../../../../__resolved__virtual:$histoire-stories
var Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./button.story-CSunUB-_.js"), __vite__mapDeps([0,1,2]), import.meta.url));
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
	component: Comp0,
	source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-button-story-button-story-vue-UD6x61AK.js"), [], import.meta.url)
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
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/components/story/GenericMountStory.vue2.js
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
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/util/mapping.js
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
export { tree as a, onUpdate as i, _sfc_main as n, files as r, mapFile as t };
