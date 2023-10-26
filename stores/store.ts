import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    isNavbarOpen: false
  }),
  actions: {
    toggleNavbar() {
      this.isNavbarOpen = window.innerWidth < 768 ? !this.isNavbarOpen : false;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    }
  }
});
