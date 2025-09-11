// Информация о достопримечательностях
const data = [
	{
		id: 1,
		imageUrl: "https://belokuriha-gorod.ru/_nw/143/08668388.jpg",
		title: "Старая водолечебница и городской музей",
		description: "Старая водолечебница — это первое каменное здание курорта Белокурихи, построенное в 1938 году в стиле сталинского ампира. Оно находится в самом знаковом месте, где появились первые деревянные сооружения для лечения целебными водами более 150 лет назад. В течении всего советского периода радоновая лечебница была ведущей здравницей в регионах Сибири и Дальнего Востока. Здесь отдыхали Аркадий Райкин, Константин Паустовский, Иосиф Кобзон и другие известные личности. Сейчас в здании расположен городской музей имени Гуляева, где можно узнать историю курорта и значение лечебных ресурсов.",
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8647847738175!2d84.97188469999999!3d51.991118099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c3774fad0f8cd1%3A0x49d92a9a4575a298!2z0KDQsNC00L7QvdC-0LvQtdGH0LXQsdC90LjRhtCw!5e0!3m2!1sru!2sru!4v1757507635210!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 2,
		imageUrl: "https://extraguide.ru/images/sp/0a401f47919d52251bede00948b9eb3d4063c391.jpg",
		title: "Гора Церковка",
		description: "Самая популярная достопримечательность Белокурихи — это вершина Чергинского хребта высотой 801 метр над уровнем моря с необычным названием Церковка. Наскальные выходы напоминают купол храма, отсюда название и установленный крест. Ранее на гору можно было подняться только пешком, а в 2002 года открыли двухместную кресельную канатную дорогу. Поэтому любой желающий в течении года может осмотреть живописные ландшафты с высоты. На вершине хребта есть еще два природных объекта, это отдельно стоящие скалы Четыре Сестры и Два Брата, до них проложена тропа. Также стоит подойти к скульптуре «Хозяин горы» и загадать желание.",
		price: 1000,
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.5532514763413!2d84.94622267657216!3d51.978569071924255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c3773d1ee326ab%3A0x9270496afe30bd51!2z0KDQvtC00L3QuNC6ICLQlNGD0L3Rj9GI0LrQuNC9INC60LvRjtGHIiDQsiDQsy4g0JHQtdC70L7QutGD0YDQuNGF0LA!5e0!3m2!1sru!2sru!4v1757507670961!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 3,
		imageUrl: "http://rasfokus.ru/images/photos/medium/6c88a4c07feccdfe6eb66f80cda4fc18.jpg",
		title: "Дуняшкин ключ",
		description: "На склоне горы Церковка, около нижней станции канатной дороги, пробился родник с целебной водой. В источнике большое содержание серебра, что придает воде особый вкус, полезные свойства и возможность долгого хранения. Дуняшкин ключ оформлен выстроенным над ним небольшим каменным сооружением. К источнику ведут указатели, а добраться сюда может любой человек. Здесь очень тихо и спокойно, прекрасное место для прогулок.",
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.5532514763413!2d84.94622267657216!3d51.978569071924255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c3773d1ee326ab%3A0x9270496afe30bd51!2z0KDQvtC00L3QuNC6ICLQlNGD0L3Rj9GI0LrQuNC9INC60LvRjtGHIiDQsiDQsy4g0JHQtdC70L7QutGD0YDQuNGF0LA!5e0!3m2!1sru!2sru!4v1757507670961!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 4,
		imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_682a26b79776f33311a671f3_682ae8c46b2239586e11fcfd/scale_1200",
		title: "Терренкур «Старая мельница»",
		description: "Терренкур — это особая тропа для лечебной ходьбы. Начинать такие прогулки лучше с непродолжительных маршрутов и без крутых перепадов. Такая тропа проложена к развалинам старой плотины, где установлена декоративная мельница. Протяженность в одну сторону — 2 км, набор высоты — 100 метров. Пешая дорожка ведет вдоль реки Белокурихи, поэтому всю прогулку сопровождает шум воды. По пути встретится подвесной мостик, скамейки, беседки. Летом здесь бегают бурундуки, которых можно покормить орешками и семечками.",
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.3535969280883!2d84.94202697657124!3d51.963978071920764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c377035ce5a29d%3A0x53476512bb0c4369!2z0KHRgtCw0YDQsNGPINCc0LXQu9GM0L3QuNGG0LA!5e0!3m2!1sru!2sru!4v1757507690272!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 5,
		imageUrl: "https://www.tury.ru/img.php?gid=330406&pid=2509261&v=1200&webp=1",
		title: "Горнолыжный комплекс «Благодать»",
		description: "Территория курорта «Белокуриха» очень обширна и разнообразна по рельефу, поэтому здесь несколько горнолыжных комплексов, независимых друг от друга. Самый крупный комплекс — это курорт «Благодать», где зимой действуют горнолыжные подъемники, прокат оборудования и школа инструкторов. Всего здесь 4 трассы общей протяженностью 7 км. Сезон катания начинается в середине декабря и длится до конца марта.",
		price: 400,
		mapUrl:  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.661422682156!2d84.99098117657317!3d51.99482447192824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c379766731704f%3A0xa8bf80351323b15b!2z0JHQu9Cw0LPQvtC00LDRgtGM!5e0!3m2!1sru!2sru!4v1757507717230!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 6,
		imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/%D0%A5%D1%80%D0%B0%D0%BC_%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B3%D0%BE_%D0%9F%D0%B0%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%B9%D0%BC%D0%BE%D0%BD%D0%B0_%D0%A3%D0%93%D0%9A%D0%A6._-_panoramio_%286%29.jpg",
		title: "Храм Святого Пантелеймона",
		description: "Помимо целебных ресурсов и природных объектов, есть еще духовная достопримечательность, вызывающая интерес у гостей Белокурихи. Это церковь Святого Великомученика Пантелеймона Целителя, построенная в 1991 году. Храм славится мозаичными иконами и редкими чудотворными образами с мощами святых. Таких храмов в азиатской части России не очень много. На территории церкви бьет источник с большим содержанием серебра, его назвали «Глазным». По легенде, вода из ключа исцелила когда-то боярина и его войско от болезни глаз..",
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.833896159119!2d84.99648537657302!3d51.99168107192749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c379fa8d4946b7%3A0x1a1cfb100ecee3b1!2z0J_QkNCd0KLQldCb0JXQmNCc0J7QndCe0JLQodCa0JDQryDQptCV0KDQmtCe0JLQrA!5e0!3m2!1sru!2sru!4v1757507772040!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
	},
	{
		id: 7,
		imageUrl: "https://a.d-cd.net/ef23c65s-1920.jpg",
		title: "Горный серпантин к Белокурихе-2",
		description: "В 15 км от Белокуриха, в предгорье Алтайских гор, на высоте 600-800 метров активно развивается новая курортная зона «Белокуриха-2». К ней ведет извилистая дорога с живописными пейзажами. Современная трасса, построенная в 2015 году, поднимается вдоль речки Березовки. На ней обустроены смотровые площадки и арт-объекты: стела «Алтайский край», Байкерский топор и верстовой столб, где можно сделать запоминающиеся фото. Протяженность серпантина — 7,7 км, набор высоты — 420 м.",
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.8594532527563!2d84.98405877657291!3d51.991215271927345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c37757cf875269%3A0xa419adbe517f31b4!2z0JPQvtGA0L3Ri9C5INC_0LXRgC4sIDcsINCR0LXQu9C-0LrRg9GA0LjRhdCwLCDQkNC70YLQsNC50YHQutC40Lkg0LrRgNCw0LksIDY1OTkwMA!5e0!3m2!1sru!2sru!4v1757507792056!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 8,
		imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66124b8432b52a388477466e_66125032565aca54245f8875/scale_1200",
		title: "Андреевская слобода",
		description: "Историко-архитектурный комплекс «Андреевская слобода» — это музей под открытым небом, где можно узнать, как жили в Сибири первые переселенцы. Основной объект слободы — настоящий деревянный дом купца Андреева, построенный больше 200 лет назад. В доме сейчас расположен ресторан «Гоголь», в его меню представлены блюда из гоголевских произведений. Также из разных деревень Сибири в музей привезены оригинальные строения и утварь XIX века.",
		price: 150,
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.8763655305556!2d84.88108557657067!3d51.95444597191837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c37754470dd4b3%3A0x23e554c0716cbeb0!2z0JDQvdC00YDQtdC10LLRgdC60LDRjyDRgdC70L7QsdC-0LTQsA!5e0!3m2!1sru!2sru!4v1757507833861!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 9,
		imageUrl: "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/2609178/7H6dehcJD6JiTaUO2zrKGw.jpg",
		title: "Музей шоколада",
		description: "Самая сладкая и ароматная достопримечательности Белокурихи — это мастерская авторских работ из шоколада художника-ювелира Владимира Войчишина. Для создания конфет и статуэток используется бельгийский шоколад. Здесь можно попробовать изделия из настоящих какао-бобов, приобрести сувениры, выпить чашечку кофе и съесть мороженое.",
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.9001876921407!2d84.8824536765706!3d51.95401157191832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c3794f62d08a55%3A0xe45c09d35c4cba77!2z0JzRg9C30LXQuSDQqNC-0LrQvtC70LDQtNCwLCDQkdC10LvQvtC60YPRgNC40YXQsC0y!5e0!3m2!1sru!2sru!4v1757507851854!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	},
	{
		id: 10,
		imageUrl: "https://avatars.mds.yandex.net/get-altay/6236523/2a00000180d049703beb1978368a9d99de4c/XXL_height",
		title: "Горнолыжный комплекс «Мишина гора»",
		description: "Ласковое название появилось у горы, когда в окрестностях не стало миролюбивого медведя. В память о косолапом друге жители деревень стали именовать безымянную вершину Мишиной горой. Высота горы 895 метров над уровнем моря. В 2018 году на склонах обустроили современный горнолыжный комплекс. Трассы прошли аттестацию международной федерацией FIS, но кататься здесь могут и начинающие. На курорте всего 2 трассы, каждая протяженностью 980 метров. Работает прокат снаряжения и кафе. Летом Мишина гора тоже не пустует, здесь ставят шезлонги, беседки и фотозоны.",
		price: 400,
		mapUrl: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.3213625395642!2d84.88891217657017!3d51.94633097191645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42c377a147fb854f%3A0x4765e5aaaf03dc54!2z0JPQvtGA0L3QvtC70YvQttC90LDRjyDRgtGA0LDRgdGB0LAg0L3QsCDQkdC10LvQvtC60YPRgNC40YXQtS0yLCDQnNC40YjQuNC90LAg0LPQvtGA0LA!5e0!3m2!1sru!2sru!4v1757507876984!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	}
];

// Репозиторий для управления данными достопримечательностей
class LandmarkRepository {
	// Возвращает все достопримечательности
	getLandmarks() {
		return data;
	}

	// Возращает достопримечательность по id
	getLandmarkById(id) {
		return data.find(landmark => landmark.id === id);
	}
}

export const landmarkRepository = new LandmarkRepository();