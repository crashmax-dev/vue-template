import { $ as defineStore, Ot as ref, at as computed } from "./vendor-CJxuTU_T.js";
import { t as router } from "./router-ChlKzTpF.js";
//#region ../../node_modules/.pnpm/@histoire+app@1.0.0-beta.1_vite@8.0.16_@types+node@26.0.0_esbuild@0.28.1_jiti@2.6.1_sas_690491dbda3e433e52880ee04a3c8e64/node_modules/@histoire/app/dist/bundled/stores/story.js
var useStoryStore = defineStore("story", () => {
	const stories = ref([]);
	function setStories(value) {
		stories.value = value;
	}
	const currentStory = computed(() => stories.value.find((s) => s.id === router.currentRoute.value.params.storyId));
	const currentVariant = computed(() => currentStory.value?.variants.find((v) => v.id === router.currentRoute.value.query.variantId));
	const maps = computed(() => {
		const storyMap = /* @__PURE__ */ new Map();
		const variantMap = /* @__PURE__ */ new Map();
		for (const story of stories.value) {
			storyMap.set(story.id, story);
			for (const variant of story.variants) variantMap.set(`${story.id}:${variant.id}`, variant);
		}
		return {
			stories: storyMap,
			variants: variantMap
		};
	});
	function getStoryById(id) {
		return maps.value.stories.get(id);
	}
	function getVariantById(idWithStoryId) {
		return maps.value.variants.get(idWithStoryId);
	}
	return {
		stories,
		setStories,
		currentStory,
		currentVariant,
		getStoryById,
		getVariantById
	};
});
//#endregion
export { useStoryStore as t };
