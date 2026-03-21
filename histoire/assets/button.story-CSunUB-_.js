import { Ba as createBlock, Ga as defineComponent, Ha as createTextVNode, Ja as renderSlot, Ka as openBlock, Qa as toDisplayString, Ua as createVNode, Va as createElementBlock, Xa as withCtx, Ya as resolveComponent, Za as normalizeClass, _a as _plugin_vue_export_helper_default, n as cva, qa as renderList, t as Primitive, za as Fragment } from "./vendor-BRroElKf.js";
//#region src/button/button.vue
var _sfc_main$1 = /* @__PURE__ */ defineComponent({
	name: "VButton",
	__name: "button",
	props: {
		variant: {
			type: null,
			required: false,
			default: "primary"
		},
		size: {
			type: null,
			required: false,
			default: "medium"
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props, { expose: __expose }) {
		__expose();
		const __returned__ = {
			buttonClasses: cva("button", { variants: {
				variant: {
					primary: "variant-primary",
					secondary: "variant-secondary",
					danger: "variant-danger"
				},
				size: {
					small: "size-small",
					medium: "size-medium"
				}
			} }),
			get Primitive() {
				return Primitive;
			}
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createBlock($setup["Primitive"], {
		as: $props.as,
		"as-child": $props.asChild,
		class: normalizeClass($setup.buttonClasses({
			variant: $props.variant,
			size: $props.size
		}))
	}, {
		default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, void 0, true)]),
		_: 3
	}, 8, [
		"as",
		"as-child",
		"class"
	]);
}
_sfc_main$1.__file = "src/button/button.vue";
var button_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [
	["render", _sfc_render$1],
	["__scopeId", "data-v-117fda88"],
	["__file", "/home/runner/work/vue-template/vue-template/packages/ui/src/button/button.vue"]
]);
//#endregion
//#region src/button/story/button.story.vue
var _sfc_main = /* @__PURE__ */ defineComponent({
	__name: "button.story",
	setup(__props, { expose: __expose }) {
		__expose();
		const __returned__ = {
			sizes: ["medium", "small"],
			VButton: button_default
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_Variant = resolveComponent("Variant");
	const _component_Story = resolveComponent("Story");
	return openBlock(), createBlock(_component_Story, { title: "Button" }, {
		default: withCtx(() => [createVNode(_component_Variant, { title: "Variants" }, {
			default: withCtx(() => [
				createVNode($setup["VButton"], { variant: "primary" }, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode(" Primary ", -1)])]),
					_: 1
				}),
				createVNode($setup["VButton"], { variant: "secondary" }, {
					default: withCtx(() => [..._cache[1] || (_cache[1] = [createTextVNode(" Secondary ", -1)])]),
					_: 1
				}),
				createVNode($setup["VButton"], { variant: "danger" }, {
					default: withCtx(() => [..._cache[2] || (_cache[2] = [createTextVNode(" Danger ", -1)])]),
					_: 1
				}),
				createVNode($setup["VButton"], {
					variant: "secondary",
					disabled: ""
				}, {
					default: withCtx(() => [..._cache[3] || (_cache[3] = [createTextVNode(" Disabled ", -1)])]),
					_: 1
				})
			]),
			_: 1
		}), createVNode(_component_Variant, { title: "Sizes" }, {
			default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList($setup.sizes, (size) => {
				return createVNode($setup["VButton"], {
					key: size,
					size
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(size), 1)]),
					_: 2
				}, 1032, ["size"]);
			}), 64))]),
			_: 1
		})]),
		_: 1
	});
}
_sfc_main.__file = "src/button/story/button.story.vue";
var button_story_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-template/vue-template/packages/ui/src/button/story/button.story.vue"]]);
//#endregion
export { button_story_default as default };
