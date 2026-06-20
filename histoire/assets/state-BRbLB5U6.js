import { Dt as reactive, Et as openBlock, Nt as resolveDynamicComponent, Ot as ref, Rt as unref, Ut as watchEffect, _t as isRef, ct as createBlock, ht as defineComponent, lt as createCommentVNode, vt as markRaw, yt as mergeProps } from "./vendor-CJxuTU_T.js";
import { r as clientSupportPlugins } from "./plugin-Yyjcd29w.js";
import { r as histoireConfig } from "./router-ChlKzTpF.js";
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/components/story/GenericRenderStory.vue2.js
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
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/const.js
var STATE_SYNC = "__histoire:state-sync";
var SANDBOX_READY = "__histoire:sandbox-ready";
var EVENT_SEND = "__histoire:event";
var PREVIEW_SETTINGS_SYNC = "__histoire:preview-settings-sync";
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/preview-settings.js
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
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/state.js
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
export { PREVIEW_SETTINGS_SYNC as a, _sfc_main as c, EVENT_SEND as i, applyPreviewSettings as n, SANDBOX_READY as o, getContrastColor as r, STATE_SYNC as s, toRawDeep as t };
