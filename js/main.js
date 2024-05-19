console.log(`Main collegato`);

const { createApp } = Vue;

createApp({
	data() {
		return {
			// stringaSearch: false,
			inputSearchValue: "",
			inputValue: "",
			contactActive: 0,
			me: { name: "Davide", avatar: "https://i.pravatar.cc/400" },
			contacts: [
				{
					name: "Michele",
					avatar: "https://i.pravatar.cc/300",
					visible: true,
					messages: [
						{
							date: "10/01/2020",
							hour: "15:30",
							message: "Hai portato a spasso il cane?",
							status: "sent",
						},
						{
							date: "10/01/2020",
							hour: "15:50",
							message: "Ricordati di stendere i panni",
							status: "sent",
						},
						{
							date: "10/01/2020",
							hour: "16:15",
							message: "Tutto fatto!",
							status: "received",
						},
					],
				},
				{
					name: "Fabio",
					avatar: "https://i.pravatar.cc/310",
					visible: true,
					messages: [
						{
							date: "20/03/2020",
							hour: "16:30",
							message: "Ciao come stai?",
							status: "sent",
						},
						{
							date: "20/03/2020",
							hour: "16:30",
							message: "Bene grazie! Stasera ci vediamo?",
							status: "received",
						},
						{
							date: "20/03/2020",
							hour: "16:35",
							message:
								"Mi piacerebbe ma devo andare a fare la spesa.",
							status: "sent",
						},
					],
				},
				{
					name: "Samuele",
					avatar: "https://i.pravatar.cc/320",
					visible: true,
					messages: [
						{
							date: "28/03/2020",
							hour: "10:10",
							message: "La Marianna va in campagna",
							status: "received",
						},
						{
							date: "28/03/2020",
							hour: "10:20",
							message: "Sicuro di non aver sbagliato chat?",
							status: "sent",
						},
						{
							date: "28/03/2020",
							hour: "16:15",
							message: "Ah scusa!",
							status: "received",
						},
					],
				},
				{
					name: "Alessandro B.",
					avatar: "https://i.pravatar.cc/330",
					visible: true,
					messages: [
						{
							date: "10/01/2020",
							hour: "15:30",
							message: "Lo sai che ha aperto una nuova pizzeria?",
							status: "sent",
						},
						{
							date: "10/01/2020",
							hour: "15:50",
							message: "Si, ma preferirei andare al cinema",
							status: "received",
						},
					],
				},
				{
					name: "Alessandro L.",
					avatar: "https://i.pravatar.cc/340",
					visible: true,
					messages: [
						{
							date: "10/01/2020",
							hour: "15:30",
							message: "Ricordati di chiamare la nonna",
							status: "sent",
						},
						{
							date: "10/01/2020",
							hour: "15:50",
							message: "Va bene, stasera la sento",
							status: "received",
						},
					],
				},
				{
					name: "Claudia",
					avatar: "https://i.pravatar.cc/350",
					visible: true,
					messages: [
						{
							date: "10/01/2020",
							hour: "15:30",
							message: "Ciao Claudia, hai novità?",
							status: "sent",
						},
						{
							date: "10/01/2020",
							hour: "15:50",
							message: "Non ancora",
							status: "received",
						},
						{
							date: "10/01/2020",
							hour: "15:51",
							message: "Nessuna nuova, buona nuova",
							status: "sent",
						},
					],
				},
				{
					name: "Federico",
					avatar: "https://i.pravatar.cc/360",
					visible: true,
					messages: [
						{
							date: "10/01/2020",
							hour: "15:30",
							message:
								"Fai gli auguri a Martina che è il suo compleanno!",
							status: "sent",
						},
						{
							date: "10/01/2020",
							hour: "15:50",
							message:
								"Grazie per avermelo ricordato, le scrivo subito!",
							status: "received",
						},
					],
				},
				{
					name: "Davide",
					avatar: "https://i.pravatar.cc/370",
					visible: true,
					messages: [
						{
							date: "10/01/2020",
							hour: "15:30",
							message:
								"Ciao, andiamo a mangiare la pizza stasera?",
							status: "received",
						},
						{
							date: "10/01/2020",
							hour: "15:50",
							message:
								"No, l'ho già mangiata ieri, ordiniamo sushi!",
							status: "sent",
						},
						{
							date: "10/01/2020",
							hour: "15:51",
							message: "OK!!",
							status: "received",
						},
					],
				},
			],
		};
	},
	methods: {
		makeActive(index) {
			this.contactActive = index;
		},
		dinamicMessage() {
			this.contacts[this.contactActive].messages.push({
				message: this.inputValue,
				status: "sent",
				hour: this.getNow(),
			});
			this.inputValue = "";
			setTimeout(() => {
				this.contacts[this.contactActive].messages.push({
					message: "Ok",
					status: "received",
					hour: this.getNow(),
				});
			}, 1000);
		},
		getNow() {
			const today = new Date();
			const time = today.getHours() + ":" + today.getMinutes();
			return time;
		},
		// searchContact() {
		// 	for (let i = 0; i < this.contacts.length; i++) {
		// 		this.contacts[i].visible = false;
		// 		this.stringaSearch = this.contacts[i].name.includes(
		// 			this.inputSearchValue
		// 		);
		// 		if (this.stringaSearch == true) {
		// 			this.contacts[i].visible = true;
		// 		}
		// 	}
		// },
	},
	computed: {
		filteredSearch: function () {
			return this.contacts.filter((elemento) => {
				return elemento.name
					.toLowerCase()
					.match(this.inputSearchValue.toLowerCase());
			});
		},
	},
	mounted() {},
}).mount("#app");
