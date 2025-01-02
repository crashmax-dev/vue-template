import { aq as defineComponent, ar as _export_sfc, as as O, at as openBlock, au as createBlock, av as withCtx, aw as renderSlot, ax as normalizeClass, ay as cva, az as resolveComponent, aA as createVNode, aB as createTextVNode } from "./vendor-tB-bb4qY.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VButton"
  },
  __name: "button",
  props: {
    variant: { type: null, required: false, default: "primary" },
    size: { type: null, required: false, default: "medium" },
    asChild: { type: Boolean, required: false },
    as: { type: null, required: false, default: "button" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const buttonClasses = cva("button", {
      variants: {
        variant: {
          primary: "variant-primary",
          secondary: "variant-secondary",
          danger: "variant-danger"
        },
        size: {
          small: "size-small",
          medium: "size-medium"
        }
      }
    });
    const __returned__ = { buttonClasses, get Primitive() {
      return O;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["Primitive"], {
    as: $props.as,
    "as-child": $props.asChild,
    class: normalizeClass($setup.buttonClasses({ variant: $props.variant, size: $props.size }))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["as", "as-child", "class"]);
}
_sfc_main$1.__file = "src/components/button/button.vue";
const VButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-7a9642c5"], ["__file", "/home/runner/work/vue-template/vue-template/packages/ui/src/components/button/button.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { VButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    "auto-props-disabled": ""
  }, {
    default: withCtx(() => [
      createVNode($setup["VButton"], { variant: "primary" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode(" Primary ")
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["VButton"], { variant: "secondary" }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(" Secondary ")
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["VButton"], { variant: "danger" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode(" Danger ")
        ])),
        _: 1
        /* STABLE */
      }),
      createVNode($setup["VButton"], {
        variant: "secondary",
        disabled: ""
      }, {
        default: withCtx(() => _cache[3] || (_cache[3] = [
          createTextVNode(" Disabled ")
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/button/button.story.vue";
const button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-template/vue-template/packages/ui/src/components/button/button.story.vue"]]);
export {
  button_story as default
};
