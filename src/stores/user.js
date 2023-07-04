import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
	const userInfo = ref({
		id: '0000001',
		name: 'Мария Твердых',
		karma: 30,
		reputation: 3072,
		isVerified: true,
		src: 'avatar-01.jpg',
		profession: 'Дизайн',
		job: 'Арт-Директор',
		company: 'Future Lab',
		address: 'Россия, Санкт-Петербург',
		interests: ['Управление командами','3d','Менторство','Продажи','Data science','Иностранные языки','Кадры', 'Gamedev'],
		groups: ['group 1', 'group 2', 'group 3'],
		events: ['event 1', 'event 2', 'event 3'],
		achivements: ['crown', 'target', 'magnet'],
		donars: ['0000002', '0000003', '0000004', '0000005', '0000006'],
		description: 'Создаю Hyper casual игры с охватом пользователей свыше 10 тысяч. Последний проект Jam-Ko. Проект запустили на международный рынок. Большой опыт в управлении кросс-функциональными командами. Создаю Hyper casual игры с охватом пользователей свыше 10 тысяч. Последний проект Jam-Ko. Проект запустили на международный рынок. Большой опыт в управлении кросс-функциональными командами. ',
		givingReputation: {
			'0000002': 20,
			'0000003': 100,
			'0000004': 20,
			'0000005': 10,
		},
		reviews: [
			{
				text: 'Мария поделилась полезным опытом в создании кросс-функциональной команды при ограниченном бюдж... Мария поделилась полезным опытом...',
				id: '0000002',
			},
			{
				text: 'Мария поделилась полезным опытом в создании кросс-функциональной команды при ограниченном бюдж... Мария поделилась полезным опытом...',
				id: '0000003',
			},
			{
				text: 'Мария поделилась полезным опытом в создании кросс-функциональной команды при ограниченном бюдж... Мария поделилась полезным опытом...',
				id: '0000004',
			},
		],
		videoReviews: [
			{
				id: '0000002',
			},
			{
				id: '0000003',
			},
			{
				id: '0000004',
			},
			{
				id: '0000005',
			},
			{
				id: '0000006',
			},
		],
		sertificates: [
			{
				src: "sertificate-03.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020",
				height: '120'
			},
			{
				src: "sertificate-01.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020",
				height: '120'
			},
			{
				src: "sertificate-02.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020",
				height: '240'
			},
			{
				src: "sertificate-03.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020",
				height: '240'
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020",
				height: '120'
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020",
				height: '120'
			},
		],
		notes: {
			'0000002': 'Заметка о человеке с id 0000002'
		},
		projects: [
			{
				title: 'Проект 1',
				date: '2020',
				results: [
					'Вот так сделали',
					'Вот так сделали',
					'Вот так сделали',
				],
				images: ['sertificate-01.jpg', 'sertificate-02.jpg', 'sertificate-03.jpg', 'sertificate-03.jpg', 'sertificate-03.jpg'],
				members: ['0000001', '0000002', '0000003', '0000004', '0000005'],
				description: 'какие мы крутышки сделали проектик запустились и не просрали бюджет',
				link: 'www.testlinks.com'
			},
			{
				title: 'Проект 2',
				date: '2020',
				results: [
					'Вот так сделали',
					'Вот так сделали',
					'Вот так сделали',
				],
				images: ['sertificate-02.jpg', 'sertificate-03.jpg'],
				members: ['0000002', '0000003', '0000004', '0000005'],
				description: 'какие мы крутышки сделали проектик запустились и не просрали бюджет',
				link: 'www.testlinks.com'
			},
			{
				title: 'Проект 3',
				date: '2020',
				results: [
					'Вот так сделали',
					'Вот так сделали',
					'Вот так сделали',
				],
				images: ['sertificate-01.jpg', 'sertificate-02.jpg', 'sertificate-03.jpg'],
				members: ['0000001', '0000002', '0000003'],
				description: 'какие мы крутышки сделали проектик запустились и не просрали бюджет',
				link: 'www.testlinks.com'
			},
		],
		works: [
			{
				isVerified: false,
				title: 'Место работы',
				src: 'logo-01.png',
				reputation: 194,
				dateStart: '2020',
				dateEnd: '2021',
				job: 'Должность',
				description: 'Я имею большой опыт работы в компании, где я занимался задачами связанными с созданием новых проектов и их управлением. В процессе работы, я успешно руководил командой из различных отделов, включая софт и хард разработчиков, маркетологов и менеджеров по продажам... Мой опыт также включает работу с множеством программных обеспечений и платформ, в том числе с SAP, Oracle, Salesforce и другими. Я обладаю навыками в области анализа и оптимизации бизнес-процессов, а также в области бюджетирования и управления проектами. Кроме того, я обладаю навыками в области настройки и разработки больших и сложных систем управления данных'
			},
			{
				isVerified: true,
				title: 'Место работы 2',
				src: 'logo-01.png',
				reputation: 300,
				dateStart: '2021',
				dateEnd: '2023',
				job: 'Должность 2',
				description: 'Я имею большой опыт работы в компании, где я занимался задачами связанными с созданием новых проектов и их управлением. В процессе работы, я успешно руководил командой из различных отделов, включая софт и хард разработчиков, маркетологов и менеджеров по продажам... Мой опыт также включает работу с множеством программных обеспечений и платформ, в том числе с SAP, Oracle, Salesforce и другими. Я обладаю навыками в области анализа и оптимизации бизнес-процессов, а также в области бюджетирования и управления проектами. Кроме того, я обладаю навыками в области настройки и разработки больших и сложных систем управления данных'
			},
		],
		reputationInfo: {
			activity: [],
			profile: [
				{title: 'Заполнен', value: 250},
				{title: 'Подтвержден email', value: 200},
				{title: 'Подтвержден телефон', value: 100},
			],
			popular: [
				{title: 'Что-то сказал', value: 250},
				{title: 'Что-то написал', value: 250},
			],
			contribution: [
				{title: 'В МММ', value: 690},
				{title: 'Завод по производству пирамидок', value: 10},
			],
			achivements: [
				{title: 'Каменный век', value: 10},
				{title: 'Обновка!', value: 10},
				{title: 'Куй железо...', value: 10},
			],
			others: [
				{title: 'Другая 1', value: 10},
				{title: 'Другая 2', value: 10},
				{title: 'Другая 3', value: 10},
			],
		}
	})

	const setNote = (id, notes) => {
		userInfo.value.notes[id] = notes
	}

	const isAuth = computed(() => {
		return localStorage.getItem('auth') === 'true' ? true : false
	})

	const setAuth = () => {
		isAuth.value = true
	}

  return { userInfo, isAuth, setAuth, setNote }
})