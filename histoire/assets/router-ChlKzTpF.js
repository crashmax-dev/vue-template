const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HomeView.vue-CIN6VxtY.js","./vendor-CJxuTU_T.js","./rolldown-runtime-D7D4PA-g.js","./story-C_j060cL.js","./StoryView.vue-MeJJJAd3.js","./plugin-Yyjcd29w.js","./responsive-DnY-x6gn.js","./BaseEmpty.vue-B7C9WCoc.js","./state-BRbLB5U6.js"])))=>i.map(i=>d[i]);
import { E as __vitePreload, b as createWebHashHistory, x as createWebHistory, y as createRouter } from "./vendor-CJxuTU_T.js";
//#region \0virtual:$histoire-config
var config = {
	"plugins": [
		{ "name": "builtin:tailwind-tokens" },
		{
			"name": "builtin:vanilla-support",
			"supportPlugin": {
				"id": "vanilla",
				"moduleName": "/home/runner/work/vue-template/vue-template/node_modules/.pnpm/histoire@1.0.0-beta.1_@types+node@26.0.0_lightningcss@1.32.0_sass-embedded@1.100.0_sass_a5463336cb7b5757ac6a783db2d383c2/node_modules/histoire/dist/node/builtin-plugins/vanilla-support",
				"setupFn": "setupVanilla"
			}
		},
		{
			"name": "@histoire/plugin-vue",
			"supportPlugin": {
				"id": "vue3",
				"moduleName": "@histoire/plugin-vue",
				"setupFn": "setupVue3",
				"importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'"
			},
			"commands": [{
				"id": "histoire:plugin-vue:generate-story",
				"label": "Generate Vue 3 story from component",
				"icon": "https://vuejs.org/logo.svg",
				"searchText": "generate create",
				"clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js"
			}]
		}
	],
	"outDir": "/home/runner/work/vue-template/vue-template/packages/ui/dist",
	"storyMatch": ["**/*.story.vue", "**/*.story.svelte"],
	"storyIgnored": ["**/node_modules/**", "**/dist/**"],
	"supportMatch": [{
		"id": "vanilla",
		"patterns": ["**/*.js"],
		"pluginIds": ["vanilla"]
	}, {
		"id": "vue",
		"patterns": ["**/*.vue"],
		"pluginIds": ["vue3"]
	}],
	"tree": {
		"file": "title",
		"order": "asc"
	},
	"theme": {
		"title": "UI",
		"colors": {
			"primary": {
				"50": "#ecfdf5",
				"100": "#d1fae5",
				"200": "#a7f3d0",
				"300": "#6ee7b7",
				"400": "#34d399",
				"500": "#10b981",
				"600": "#059669",
				"700": "#047857",
				"800": "#065f46",
				"900": "#064e3b"
			},
			"gray": {
				"50": "#fafafa",
				"100": "#f4f4f5",
				"200": "#e4e4e7",
				"300": "#d4d4d8",
				"400": "#a1a1aa",
				"500": "#71717a",
				"600": "#52525b",
				"700": "#3f3f46",
				"750": "#323238",
				"800": "#27272a",
				"850": "#1f1f21",
				"900": "#18181b",
				"950": "#101012"
			}
		},
		"defaultColorScheme": "auto",
		"storeColorScheme": true,
		"darkClass": "dark"
	},
	"responsivePresets": [
		{
			"label": "Mobile (Small)",
			"width": 320,
			"height": 560
		},
		{
			"label": "Mobile (Medium)",
			"width": 360,
			"height": 640
		},
		{
			"label": "Mobile (Large)",
			"width": 414,
			"height": 896
		},
		{
			"label": "Tablet",
			"width": 768,
			"height": 1024
		},
		{
			"label": "Laptop (Small)",
			"width": 1024,
			"height": null
		},
		{
			"label": "Laptop (Large)",
			"width": 1366,
			"height": null
		},
		{
			"label": "Desktop",
			"width": 1920,
			"height": null
		},
		{
			"label": "4K",
			"width": 3840,
			"height": null
		}
	],
	"backgroundPresets": [
		{
			"label": "Transparent",
			"color": "transparent",
			"contrastColor": "#333"
		},
		{
			"label": "White",
			"color": "#fff",
			"contrastColor": "#333"
		},
		{
			"label": "Light gray",
			"color": "#aaa",
			"contrastColor": "#000"
		},
		{
			"label": "Dark gray",
			"color": "#333",
			"contrastColor": "#fff"
		},
		{
			"label": "Black",
			"color": "#000",
			"contrastColor": "#eee"
		}
	],
	"sandboxDarkClass": "dark",
	"routerMode": "hash",
	"build": { "excludeFromVendorsChunk": [] },
	"viteIgnorePlugins": [],
	"setupFile": "./src/histoire.setup.ts",
	"defaultStoryProps": {
		"autoPropsDisabled": true,
		"responsiveDisabled": true
	}
};
var logos = {};
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/config.js
var histoireConfig = config;
var customLogos = logos;
function createRouterHistory() {
	switch (histoireConfig.routerMode) {
		case "hash": return createWebHashHistory("./");
		default: return createWebHistory("./");
	}
}
var router = createRouter({
	history: createRouterHistory(),
	routes: [{
		path: "/",
		name: "home",
		component: () => __vitePreload(() => import("./HomeView.vue-CIN6VxtY.js"), __vite__mapDeps([0,1,2,3]), import.meta.url)
	}, {
		path: "/story/:storyId",
		name: "story",
		component: () => __vitePreload(() => import("./StoryView.vue-MeJJJAd3.js"), __vite__mapDeps([4,1,2,5,6,7,8,3]), import.meta.url)
	}]
});
//#endregion
export { customLogos as n, histoireConfig as r, router as t };
