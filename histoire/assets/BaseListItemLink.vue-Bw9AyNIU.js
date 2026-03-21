import { Aa as e, Do as defineComponent, Ho as renderSlot, Io as onMounted, No as normalizeClass, Ro as openBlock, Uo as resolveComponent, bo as createBlock, es as watch, is as withKeys, jo as mergeProps, ns as withCtx, yo as createBaseVNode } from "./vendor-BRroElKf.js";
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/util/scroll.js
function useScrollOnActive(active, el) {
	watch(active, (value) => {
		if (value) autoScroll();
	});
	function autoScroll() {
		if (el.value) e(el.value, {
			scrollMode: "if-needed",
			block: "center",
			inline: "nearest",
			behavior: "smooth"
		});
	}
	onMounted(() => {
		if (active.value) autoScroll();
	});
	return { autoScroll };
}
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/components/base/BaseListItemLink.vue2.js
var _sfc_main = defineComponent({
	inheritAttrs: false,
	props: { isActive: {
		type: Boolean,
		default: void 0
	} },
	emits: { navigate: () => true },
	setup(props, { emit }) {
		function handleNavigate(event, navigate) {
			emit("navigate");
			navigate(event);
		}
		return { handleNavigate };
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/_virtual/_plugin-vue_export-helper.js
var _export_sfc = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/components/base/BaseListItemLink.vue.js
var _hoisted_1 = [
	"href",
	"onClick",
	"onKeyup"
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_RouterLink = resolveComponent("RouterLink");
	return openBlock(), createBlock(_component_RouterLink, mergeProps({ class: "histoire-base-list-item-link" }, _ctx.$attrs, { custom: "" }), {
		default: withCtx(({ isActive: linkIsActive, href, navigate }) => [createBaseVNode("a", {
			href,
			class: normalizeClass(["htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [_ctx.$attrs.class, (_ctx.isActive != null ? _ctx.isActive : linkIsActive) ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"]]),
			onClick: ($event) => _ctx.handleNavigate($event, navigate),
			onKeyup: [withKeys(($event) => _ctx.handleNavigate($event, navigate), ["enter"]), withKeys(($event) => _ctx.handleNavigate($event, navigate), ["space"])]
		}, [renderSlot(_ctx.$slots, "default", { active: _ctx.isActive != null ? _ctx.isActive : linkIsActive })], 42, _hoisted_1)]),
		_: 3
	}, 16);
}
var BaseListItemLink = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
//#endregion
export { _export_sfc as n, useScrollOnActive as r, BaseListItemLink as t };
