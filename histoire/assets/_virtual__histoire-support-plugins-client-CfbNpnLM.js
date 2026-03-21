const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./vendor-BRroElKf.js","./rolldown-runtime-D9VfunvA.js"])))=>i.map(i=>d[i]);
import { Ra as __vitePreload, es as watch, lo as useToggle, to as useDark } from "./vendor-BRroElKf.js";
import { r as histoireConfig } from "./router-C_GbisOD.js";
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.1_@types+node@24.10.9_esbuild@0.27.4_jiti@2.6.1_sas_389380d3ddddce5fc0b85d07c8154589/node_modules/@histoire/app/dist/bundled/util/dark.js
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
	"vanilla": () => __vitePreload(() => import("./vendor-BRroElKf.js").then((n) => n.i), __vite__mapDeps([0,1]), import.meta.url),
	"vue3": () => __vitePreload(() => import("./vendor-BRroElKf.js").then((n) => n.ga), __vite__mapDeps([0,1]), import.meta.url)
};
//#endregion
export { isDark as n, toggleDark as r, clientSupportPlugins as t };
