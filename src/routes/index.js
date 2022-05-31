import SkillTree from "@/components/SkillTree/SkillTree.vue";
import Profile from "@/components/Profile/MainProfile.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: SkillTree, name: "SkillTree" },
  { path: "/profile", component: Profile, name: "Profile" },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
