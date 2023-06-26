export default {
	'0000001': {
		id: '0000001',
		name: 'Мария Твердых',
		karma: 30,
		reputation: 194,
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
				date: "2020"
			},
			{
				src: "sertificate-01.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-02.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
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
				images: ['sertificate-01.jpg', 'sertificate-02.jpg', 'sertificate-03.jpg'],
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
		]
	}, 
	'0000002': {
		id: '0000002',
		name: 'Не Мария Твердых',
		karma: 30,
		reputation: 194,
		isVerified: false,
		src: 'avatar-02.jpg',
		profession: 'Дизайн',
		job: 'Арт-Директор',
		company: 'Future Lab',
		address: 'Россия, Санкт-Петербург',
		interests: ['Управление командами','3d','Менторство','Продажи','Data science','Иностранные языки','Кадры', 'Gamedev'],
		achivements: ['crown', 'target', 'magnet'],
		groups: ['group 1', 'group 2', 'group 3'],
		events: ['event 1', 'event 2', 'event 3'],
		donars: ['0000002', '0000003', '0000004', '0000005', '0000006'],
		givingReputation: {
			'0000001': 10,
			'0000002': 10,
			'0000003': 100,
			'0000004': 20,
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
				date: "2020"
			},
			{
				src: "sertificate-01.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-02.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
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
				images: ['sertificate-01.jpg', 'sertificate-02.jpg', 'sertificate-03.jpg'],
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
		]
	}, 
	'0000003': {
		id: '0000003',
		name: 'Не Мария Твердых',
		karma: 10,
		reputation: 194,
		isVerified: true,
		src: 'avatar-03.jpg',
		profession: 'Дизайн',
		job: 'Арт-Директор',
		company: 'Future Lab',
		address: 'Россия, Санкт-Петербург',
		interests: ['Управление командами','3d','Менторство','Продажи','Data science','Иностранные языки','Кадры', 'Gamedev'],
		achivements: ['crown', 'target', 'magnet'],
		groups: ['group 1', 'group 2', 'group 3'],
		events: ['event 1', 'event 2', 'event 3'],
		donars: ['0000001','0000002', '0000004', '0000005', '0000006'],
		givingReputation: {
			'0000001': 10,
			'0000002': 20,
			'0000004': 20,
			'0000005': 20,
			'0000006': 20
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
				date: "2020"
			},
			{
				src: "sertificate-01.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-02.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
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
				images: ['sertificate-01.jpg', 'sertificate-02.jpg', 'sertificate-03.jpg'],
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
		]
	}, 
	'0000004': {
		id: '0000004',
		name: 'Не Мария Твердых',
		karma: 30,
		reputation: 194,
		isVerified: true,
		src: 'avatar-04.jpg',
		profession: 'Дизайн',
		job: 'Арт-Директор',
		company: 'Future Lab',
		address: 'Россия, Санкт-Петербург',
		interests: ['Управление командами','3d','Менторство','Продажи','Data science','Иностранные языки','Кадры', 'Gamedev'],
		achivements: ['crown', 'target', 'magnet'],
		groups: ['group 1', 'group 2', 'group 3'],
		events: ['event 1', 'event 2', 'event 3'],
		donars: ['0000002', '0000003', '0000004', '0000005', '0000006'],
		givingReputation: {
			'0000001': 110,
			'0000002': 10,
			'0000004': 20,
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
				date: "2020"
			},
			{
				src: "sertificate-01.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-02.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
			},
			{
				src: "sertificate-04.jpg",
				title: "HarvardX's Computer Science for Game Development",
				company: "edx",
				date: "2020"
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
				images: ['sertificate-01.jpg', 'sertificate-02.jpg', 'sertificate-03.jpg'],
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
		]
	}, 
	'0000005': {
		id: '0000005',
		name: 'Не Мария Твердых',
		karma: 30,
		reputation: 194,
		isVerified: true,
		src: 'avatar-04.jpg',
		profession: 'Дизайн',
		job: 'Арт-Директор',
		company: 'Future Lab',
		address: 'Россия, Санкт-Петербург',
		interests: ['Управление командами','3d','Менторство','Продажи','Data science','Иностранные языки','Кадры', 'Gamedev'],
		achivements: ['crown', 'target', 'magnet'],
		groups: ['group 1', 'group 2', 'group 3'],
		events: ['event 1', 'event 2', 'event 3'],
		donars: ['0000002', '0000003', '0000004', '0000005', '0000006'],
	}, 
	'0000006': {
		id: '0000006',
		name: 'Не Мария Твердых',
		karma: 30,
		reputation: 194,
		isVerified: true,
		src: 'avatar-04.jpg',
		profession: 'Дизайн',
		job: 'Арт-Директор',
		company: 'Future Lab',
		address: 'Россия, Санкт-Петербург',
		interests: ['Управление командами','3d','Менторство','Продажи','Data science','Иностранные языки','Кадры', 'Gamedev'],
		achivements: ['crown', 'target', 'magnet'],
		groups: ['group 1', 'group 2', 'group 3'],
		events: ['event 1', 'event 2', 'event 3'],
		donars: ['0000002', '0000003', '0000004', '0000005', '0000006'],
	},
}