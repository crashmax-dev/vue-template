import { Ht as watch, Ot as ref, Q as createPinia, S as parseQuery, at as computed, gt as h, m as applyState, ot as createApp, wt as onMounted } from "./vendor-CJxuTU_T.js";
import { i as isDark, n as _sfc_main, o as files, t as mapFile } from "./plugin-Yyjcd29w.js";
import { r as histoireConfig } from "./router-ChlKzTpF.js";
import { c as _sfc_main$1, n as applyPreviewSettings, o as SANDBOX_READY, s as STATE_SYNC, t as toRawDeep } from "./state-BRbLB5U6.js";
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/sandbox.js
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
		return [h("div", { class: "htw-sandbox-hidden" }, [h(_sfc_main, {
			key: file.value.story.id,
			story: file.value.story
		})]), this.story && this.variant ? h(_sfc_main$1, {
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
