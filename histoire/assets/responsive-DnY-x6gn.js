import { At as renderSlot, Et as openBlock, Ft as toDisplayString, Ht as watch, K as useMediaQuery, Kt as withKeys, Ot as ref, Rt as unref, St as normalizeStyle, T as Icon, Tt as onUnmounted, Wt as withCtx, at as computed, ct as createBlock, ht as defineComponent, it as Transition, jt as resolveComponent, lt as createCommentVNode, pt as createVNode, qt as withModifiers, st as createBaseVNode, ut as createElementBlock, v as e, wt as onMounted, xt as normalizeClass, yt as mergeProps } from "./vendor-CJxuTU_T.js";
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/scroll.js
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
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/components/base/BaseListItemLink.vue2.js
var _sfc_main$2 = defineComponent({
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
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/_virtual/_plugin-vue_export-helper.js
var _export_sfc = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/components/base/BaseListItemLink.vue.js
var _hoisted_1$1 = [
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
		}, [renderSlot(_ctx.$slots, "default", { active: _ctx.isActive != null ? _ctx.isActive : linkIsActive })], 42, _hoisted_1$1)]),
		_: 3
	}, 16);
}
var BaseListItemLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/components/app/MobileOverlay.vue2.js
var _hoisted_1 = {
	key: 0,
	class: "histoire-mobile-overlay htw-absolute htw-z-10 htw-bg-white dark:htw-bg-gray-700 htw-w-screen htw-h-screen htw-inset-0 htw-overflow-hidden htw-flex htw-flex-col"
};
var _hoisted_2 = { class: "htw-p-4 htw-h-16 htw-flex htw-border-b htw-border-gray-100 dark:htw-border-gray-800 htw-items-center htw-place-content-between" };
var _hoisted_3 = { class: "htw-text-gray-500" };
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
	__name: "MobileOverlay",
	props: {
		title: {},
		opened: { type: Boolean }
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Transition, { name: "__histoire-fade-bottom" }, {
				default: withCtx(() => [__props.opened ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createBaseVNode("span", _hoisted_3, toDisplayString(__props.title), 1), createBaseVNode("a", {
					class: "htw-p-1 hover:htw-text-primary-500 dark:hover:htw-text-primary-400 htw-cursor-pointer",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
				}, [createVNode(unref(Icon), {
					icon: "carbon:close",
					class: "htw-w-8 htw-h-8 htw-shrink-0"
				})])]), renderSlot(_ctx.$slots, "default")])) : createCommentVNode("", true)]),
				_: 3
			});
		};
	}
});
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/components/base/BaseSplitPane.vue2.js
var SAVE_PREFIX = "__histoire";
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/components/base/BaseSplitPane.vue.js
var BaseSplitPane = /* @__PURE__ */ _export_sfc(/* @__PURE__ */ defineComponent({
	__name: "BaseSplitPane",
	props: {
		orientation: {
			type: String,
			default: "landscape",
			validator: (value) => ["landscape", "portrait"].includes(value)
		},
		defaultSplit: {
			type: Number,
			default: 50
		},
		split: {
			type: Number,
			default: void 0
		},
		min: {
			type: Number,
			default: 20
		},
		max: {
			type: Number,
			default: 80
		},
		draggerOffset: {
			type: String,
			default: "center",
			validator: (value) => [
				"before",
				"center",
				"after"
			].includes(value)
		},
		saveId: {
			type: String,
			default: null
		},
		fixed: {
			type: Boolean,
			default: false
		}
	},
	emits: { "update:split": (_value) => true },
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const currentSplit = ref(props.defaultSplit);
		watch(() => props.split, (value) => {
			if (value !== void 0) currentSplit.value = value;
		}, { immediate: true });
		if (props.saveId) {
			const storageKey = `${SAVE_PREFIX}-split-pane-${props.saveId}`;
			const savedValue = localStorage.getItem(storageKey);
			if (savedValue != null) {
				let parsedValue;
				try {
					parsedValue = JSON.parse(savedValue);
				} catch (e) {
					console.error(e);
				}
				if (typeof parsedValue === "number") currentSplit.value = parsedValue;
			}
			watch(currentSplit, (value) => {
				localStorage.setItem(storageKey, JSON.stringify(value));
			});
			watch(currentSplit, (value) => {
				if (value !== props.split) emit("update:split", value);
			}, { immediate: true });
		}
		const boundSplit = computed(() => {
			if (currentSplit.value < props.min) return props.min;
			else if (currentSplit.value > props.max) return props.max;
			else return currentSplit.value;
		});
		const leftStyle = computed(() => ({ [props.orientation === "landscape" ? "width" : "height"]: props.fixed ? `${boundSplit.value}px` : `${boundSplit.value}%` }));
		const rightStyle = computed(() => ({ [props.orientation === "landscape" ? "width" : "height"]: props.fixed ? null : `${100 - boundSplit.value}%` }));
		const dragging = ref(false);
		let startPosition = 0;
		let startSplit = 0;
		const el = ref(null);
		function dragStart(e) {
			dragging.value = true;
			startPosition = props.orientation === "landscape" ? e.pageX : e.pageY;
			startSplit = boundSplit.value;
			window.addEventListener("mousemove", dragMove);
			window.addEventListener("mouseup", dragEnd);
		}
		function dragMove(e) {
			if (dragging.value) {
				let position;
				let totalSize;
				if (props.orientation === "landscape") {
					position = e.pageX;
					totalSize = el.value.offsetWidth;
				} else {
					position = e.pageY;
					totalSize = el.value.offsetHeight;
				}
				const dPosition = position - startPosition;
				if (props.fixed) currentSplit.value = startSplit + dPosition;
				else currentSplit.value = startSplit + ~~(dPosition / totalSize * 200) / 2;
			}
		}
		function dragEnd() {
			dragging.value = false;
			removeDragListeners();
		}
		function removeDragListeners() {
			window.removeEventListener("mousemove", dragMove);
			window.removeEventListener("mouseup", dragEnd);
		}
		onUnmounted(() => {
			removeDragListeners();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "el",
				ref: el,
				class: normalizeClass(["histoire-base-split-pane htw-flex htw-h-full htw-isolate htw-overflow-auto", {
					"htw-flex-col": __props.orientation === "portrait",
					"htw-cursor-ew-resize": dragging.value && __props.orientation === "landscape",
					"htw-cursor-ns-resize": dragging.value && __props.orientation === "portrait",
					[__props.orientation]: true
				}])
			}, [createBaseVNode("div", {
				class: normalizeClass(["htw-relative htw-top-0 htw-left-0 htw-z-20", {
					"htw-pointer-events-none": dragging.value,
					"htw-border-r htw-border-gray-300/30 dark:htw-border-gray-800": __props.orientation === "landscape",
					"htw-flex-none": __props.fixed
				}]),
				style: normalizeStyle(leftStyle.value)
			}, [renderSlot(_ctx.$slots, "first", {}, void 0, true), createBaseVNode("div", {
				class: normalizeClass(["dragger htw-absolute htw-z-100 hover:htw-bg-primary-500/50 htw-transition-colors htw-duration-150 htw-delay-150", {
					"htw-top-0 htw-bottom-0 htw-cursor-ew-resize": __props.orientation === "landscape",
					"htw-left-0 htw-right-0 htw-cursor-ns-resize": __props.orientation === "portrait",
					[`dragger-offset-${__props.draggerOffset}`]: true,
					"htw-bg-primary-500/25": dragging.value
				}]),
				onMousedown: withModifiers(dragStart, ["prevent"])
			}, null, 34)], 6), createBaseVNode("div", {
				class: normalizeClass(["htw-relative htw-bottom-0 htw-right-0", {
					"htw-pointer-events-none": dragging.value,
					"htw-border-t htw-border-gray-300/30 dark:htw-border-gray-800": __props.orientation === "portrait",
					"htw-flex-1": __props.fixed
				}]),
				style: normalizeStyle(rightStyle.value)
			}, [renderSlot(_ctx.$slots, "last", {}, void 0, true)], 6)], 2);
		};
	}
}), [["__scopeId", "data-v-4f40a1bb"]]);
//#endregion
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/util/responsive.js
var isMobile = useMediaQuery("(max-width: 640px)");
//#endregion
export { _export_sfc as a, BaseListItemLink as i, BaseSplitPane as n, useScrollOnActive as o, _sfc_main$1 as r, isMobile as t };
