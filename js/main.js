console.log(`Main collegato`);

const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Hello New Project!",
		};
	},
	methods: {},
	mounted() {
		console.log("Applicazione montata");
	},
}).mount("#app");
