console.log(`Main collegato`);

const { createApp } = Vue;

createApp({
	data() {
		return {
			classeNone: "d-none",
			newContactInput: "",
			selectedMessage: {
				index: null,
				sottoIndex: null,
			},
			stringaSearch: false,
			inputSearchValue: null,
			inputValue: "",
			contactActive: 0,
			me: { name: "Davide", avatar: "./img/avatar_io.jpg" },
			contacts: [
				{
					name: "Michele",
					avatar: "./img/avatar_1.jpg",
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
					avatar: "./img/avatar_2.jpg",
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
					avatar: "./img/avatar_3.jpg",
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
					avatar: "./img/avatar_4.jpg",
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
					avatar: "./img/avatar_5.jpg",
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
					avatar: "./img/avatar_6.jpg",
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
					avatar: "./img/avatar_7.jpg",
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
					avatar: "./img/avatar_8.jpg",
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
		// metodo per impostare al click l'indice corrente alla chat cliccata
		makeActive(index) {
			this.contactActive = index;
		},
		// metodo per inviare i nuovi messaggi pushandoli in contacts e con timeout avere la risposta automatica sempre pushata
		dinamicMessage() {
			this.contacts[this.contactActive].messages.push({
				message: this.inputValue,
				status: "sent",
				hour: this.getNow(),
			});
			this.inputValue = "";
			setTimeout(() => {
				this.contacts[this.contactActive].messages.push({
					message: "Sta' senza pensier",
					status: "received",
					hour: this.getNow(),
				});
			}, 1000);
		},
		// metodo per prendere l'orario corrente all'invio del messaggio
		getNow() {
			const today = new Date();
			const hours = String(today.getHours()).padStart(2, "0");
			const minutes = String(today.getMinutes()).padStart(2, "0");
			return `${hours}:${minutes}`;
		},
		// metodo per fare la ricerca tramite input dei contatti e visualizzare solo quelli ricercati(alternativa a computed)
		searchContact() {
			for (let i = 0; i < this.contacts.length; i++) {
				this.contacts[i].visible = false;
				this.stringaSearch = this.contacts[i].name
					.toLowerCase()
					.includes(this.inputSearchValue.toLowerCase());
				if (this.stringaSearch == true) {
					this.contacts[i].visible = true;
				}
			}
		},
		// metodo per prendere l'ultimo elemento/oggetto di un array
		lastMsg(elemento) {
			return elemento.messages.length - 1;
		},
		// metodo per assegnare l'indice del messaggio cliccato per far apparire il piccolo box per l'eliminazione dei messaggi
		selectMessage(index, sottoIndex) {
			this.selectedMessage.index = index;
			this.selectedMessage.sottoIndex = sottoIndex;
		},
		// metodo per pulire il valore dei messaggi selezionati
		clearSelectedMessage() {
			this.selectedMessage.index = null;
			this.selectedMessage.sottoIndex = null;
		},
		// metodo per eliminare dall'array il messaggio selezionato e quindi cancellarlo dalla chat
		deleteMessage(index, sottoIndex) {
			if (confirm("Sei sicuro di voler eliminare questo messaggio?")) {
				this.contacts[index].messages.splice(sottoIndex, 1);
				this.clearSelectedMessage();
			}
		},
		// metodo per creare un nuovo contatto che viene pushato nell'array come oggetto
		newContact() {
			this.contacts.push({
				name: this.newContactInput,
				avatar: "./img/avatar_7.jpg",
				visible: true,
				messages: [],
			});
			this.classeNone = "d-none";
			this.newContactInput = "";
		},
		// metodi per aggiungere o rimuovere classe
		addClass() {
			this.classeNone = "d-none";
		},
		removeClass() {
			this.classeNone = "";
		},
	},
	// metodo per fare la ricerca tramite input dei contatti e visualizzare solo quelli ricercati
	// computed: {
	// 	filteredSearch() {
	// 		if (!this.inputSearchValue) {
	// 			return this.contacts;
	// 		}
	// 		return this.contacts.filter((contact) =>
	// 			contact.name
	// 				.toLowerCase()
	// 				.includes(this.inputSearchValue.toLowerCase())
	// 		);
	// 	},
	// },
	mounted() {},
}).mount("#app");
