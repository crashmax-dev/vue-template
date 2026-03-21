import { Ao as markRaw, Bo as ref, Do as defineComponent, Ea as applyState, Go as resolveDynamicComponent, Io as onMounted, Oo as h, Pa as parseQuery, Ro as openBlock, Xo as unref, _o as computed, bo as createBlock, es as watch, jo as mergeProps, ko as isRef, ts as watchEffect, uo as createPinia, vo as createApp, xo as createCommentVNode, zo as reactive } from "./vendor-BRroElKf.js";
import { n as _sfc_main$1, r as files, t as mapFile } from "./plugin-BtXcQfze.js";
import { r as histoireConfig } from "./router-C_GbisOD.js";
import { n as isDark, t as clientSupportPlugins } from "./_virtual__histoire-support-plugins-client-CfbNpnLM.js";
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/components/story/GenericRenderStory.vue2.js
var _sfc_main = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	__name: "GenericRenderStory",
	props: { story: {} },
	setup(__props) {
		const props = __props;
		const mountComponent = ref(null);
		watchEffect(async () => {
			const clientPlugin = clientSupportPlugins[props.story.file?.supportPluginId];
			if (clientPlugin) try {
				mountComponent.value = markRaw((await clientPlugin()).RenderStory);
			} catch (e) {
				console.error(e);
				throw e;
			}
		});
		return (_ctx, _cache) => {
			return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
				key: 0,
				class: "histoire-generic-render-story __histoire-render-story",
				story: __props.story
			}, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/util/const.js
var STATE_SYNC = "__histoire:state-sync";
var SANDBOX_READY = "__histoire:sandbox-ready";
var EVENT_SEND = "__histoire:event";
var PREVIEW_SETTINGS_SYNC = "__histoire:preview-settings-sync";
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/util/preview-settings.js
var receivedSettings = reactive({});
function applyPreviewSettings(settings) {
	Object.assign(receivedSettings, settings);
	document.documentElement.setAttribute("dir", settings.textDirection);
	const contrastColor = getContrastColor(settings);
	document.documentElement.style.setProperty("--histoire-contrast-color", contrastColor);
	if (histoireConfig.autoApplyContrastColor) document.documentElement.style.color = contrastColor;
}
function getContrastColor(setting) {
	return histoireConfig.backgroundPresets.find((preset) => preset.color === setting.backgroundColor)?.contrastColor ?? "unset";
}
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/util/state.js
var isObject = (val) => val !== null && typeof val === "object";
function toRawDeep(val, clean = false, seen = /* @__PURE__ */ new WeakMap()) {
	const unwrappedValue = isRef(val) ? unref(val) : val;
	if (typeof unwrappedValue === "symbol") return unwrappedValue.toString();
	if (!isObject(unwrappedValue)) return unwrappedValue;
	if (seen.has(unwrappedValue)) return seen.get(unwrappedValue);
	if (Array.isArray(unwrappedValue)) {
		const result = [];
		seen.set(unwrappedValue, result);
		let list = unwrappedValue.map((value) => toRawDeep(value, clean, seen));
		if (clean) list = list.filter((value) => typeof value !== "function");
		result.push(...list);
		return result;
	} else {
		const result = {};
		seen.set(unwrappedValue, result);
		toRawObject(unwrappedValue, result, clean, seen);
		return result;
	}
}
function toRawObject(obj, target, clean = false, seen = /* @__PURE__ */ new WeakMap()) {
	Object.keys(obj).forEach((key) => {
		if (clean && typeof obj[key] === "function") return;
		target[key] = toRawDeep(obj[key], clean, seen);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/sandbox.js
var query = parseQuery(window.location.search);
var file = ref(mapFile(files.find((f) => f.id === query.storyId)));
var app = createApp({
	name: "SandboxApp",
	setup() {
		const story = computed(() => file.value.story);
		const variant = computed(() => story.value?.variants.find((v) => v.id === query.variantId));
		let synced = false;
		let mounted = false;
		window.addEventListener("message", (event) => {
			if (event.data?.type === "__histoire:state-sync") {
				if (!mounted) return;
				synced = true;
				applyState(variant.value.state, event.data.state);
			} else if (event.data?.type === "__histoire:preview-settings-sync") applyPreviewSettings(event.data.settings);
		});
		watch(() => variant.value.state, (value) => {
			if (synced && mounted) {
				synced = false;
				return;
			}
			window.parent?.postMessage({
				type: STATE_SYNC,
				state: toRawDeep(value, true)
			});
		}, { deep: true });
		onMounted(() => {
			mounted = true;
		});
		return {
			story,
			variant
		};
	},
	render() {
		return [h("div", { class: "htw-sandbox-hidden" }, [h(_sfc_main$1, {
			key: file.value.story.id,
			story: file.value.story
		})]), this.story && this.variant ? h(_sfc_main, {
			story: this.story,
			variant: this.variant,
			onReady: () => {
				window.parent?.postMessage({ type: SANDBOX_READY });
			}
		}) : null];
	}
});
app.use(createPinia());
app.mount("#app");
watch(isDark, (value) => {
	if (value) {
		document.documentElement.classList.add(histoireConfig.sandboxDarkClass);
		document.documentElement.classList.add(histoireConfig.theme.darkClass);
	} else {
		document.documentElement.classList.remove(histoireConfig.sandboxDarkClass);
		document.documentElement.classList.remove(histoireConfig.theme.darkClass);
	}
}, { immediate: true });
//#endregion
export { SANDBOX_READY as a, PREVIEW_SETTINGS_SYNC as i, getContrastColor as n, STATE_SYNC as o, EVENT_SEND as r, _sfc_main as s, toRawDeep as t };
