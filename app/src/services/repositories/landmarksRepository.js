// Информация о достопримечательностях
const data = [
	{
		id: 1,
		imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqepIWeBVFhJfBAiZGvBsciQTbQzg2tHZF3arU5exUJtbH87jWfmh9heZjHg_hs8-7OG1kFOJoKrgk0iVlVz4WLKxmrsrUE6RR-6x6q6gtRV2gkLoQtECNQeY3sq0oWbyBPdDsr=w540-h312-n-k-no",
		title: "Красивое место",
		description: "Нраиса, топ место, надо ехать, ща прям",
		price: 2999,
	},
	{
		id: 2,
		imageUrl: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRsOD06UDcRMScOp-QnNuTefsa312U_Dl0Ff5O_B1qAVqqZRdHPtTs0wVub-8eDvIONP6JTID5a9LfIQEt9ODWoyXzNBFMHIxd7MQ5lIw",
		title: "Снежный горка",
		description: "Очень нраиса, но не люблю снег, красиво",
		price: 4599,
	},
	{
		id: 3,
		imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4npExdwvW_YJOm1RRXPfuyBc1wf8SynPLpRVrVFqFiQzcUSK-revZf8Mb0j0W0tohHMtY4ctblrSUqmLupBWr5oJfmC-SzImogyaprriEwKU2wW9xTWxZFfs-hqkfhI7lNDQa9F7=w540-h312-n-k-no",
		title: "Аквапарк и усе",
		price: 1299,
	},
	{
		id: 4,
		imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqepIWeBVFhJfBAiZGvBsciQTbQzg2tHZF3arU5exUJtbH87jWfmh9heZjHg_hs8-7OG1kFOJoKrgk0iVlVz4WLKxmrsrUE6RR-6x6q6gtRV2gkLoQtECNQeY3sq0oWbyBPdDsr=w540-h312-n-k-no",
		title: "Повторка",
		description: "Номана, зачем опять это фото"
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