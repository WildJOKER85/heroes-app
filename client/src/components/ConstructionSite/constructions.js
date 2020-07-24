export const Constructions = {
    name: 'Строительства',
    img: 'https://vignette.wikia.nocookie.net/the-long-dark/images/6/65/Ico_GearItem_Hummer.png/revision/latest?cb=20170802133557&path-prefix=ru',
    total: {
        info: [
            {
                name: 'Ферма',
                title: 'Фермы производят еду.',
                icon: 'https://4.bp.blogspot.com/--Xbtm-lsGx8/WORy9ekoLHI/AAAAAAAAFy8/8oqG2JsScGM9PNu1Sc5J24GmAbg4eCbeACK4B/s400/nong-trai.png'
            },
            {
                name: 'Каменоломня',
                title: 'Каменоломни производят камень.',
                icon: 'https://vikings.help/users/vikings/imgExtCatalog/big/m013.png'
            },
            {
                name: 'Лесопилка',
                title: 'Лесопилки производят дерево.',
                icon: 'https://i.pinimg.com/originals/9b/6b/22/9b6b22a22660974273a491952c8e595c.png'
            },
            {
                name: 'Шахты',
                title: 'Шахты производят руду.',
                icon: 'https://1.bp.blogspot.com/-eArIHrzXBME/XaZGg2otzaI/AAAAAAAAAyI/st3XifGv668tLMHf2HtNPAXnOabzIbI2ACK4BGAYYCw/s1600/Madenler.png'
            },
            {
                name: 'Поместье',
                title: 'Поместье дает золото и повышает скорость тренировки в Казармах.',
                icon: 'https://www.lordsmobileboard.de/wp-content/uploads/2018/03/herrenhaus.png'
            },
            {
                name: 'Подвал',
                title: 'Подвал защищает ваши ресурсы от атак врагов.',
                icon: 'https://cdn-www.bluestacks.com/bs-images/pic_326.jpg'
            },
            {
                name: 'Дозорная башня',
                title: 'Дозорная башня обнаруживает врагов, которые приближаются к вашим лагерям или Крепости.',
                icon: 'https://vignette.wikia.nocookie.net/lordsmobile/images/8/85/Watchtower.png/revision/latest/top-crop/width/360/height/450?cb=20200308191753'
            },
            {
                name: 'Фактория',
                title: 'Фактория позволяет обмениваться ресурсами с союзниками.',
                icon: 'https://vignette.wikia.nocookie.net/lordsmobile/images/c/cc/Trading_Post.png/revision/latest/top-crop/width/360/height/450?cb=20200308191429'
            },
            {
                name: 'Посольство',
                title: 'Посольство позволяет привлекать и держать у себя войска союза.',
                icon: 'https://1.bp.blogspot.com/-p8lsyg_nZTM/XaZGO07B2XI/AAAAAAAAAwg/xFdg-rPa3S4_AdySxCoX0fZiONZbv3VAwCK4BGAYYCw/s1600/El%25C3%25A7ilik.png'
            },
            {
                name: 'Тюрьма',
                title: 'Позволяет пленять лидеров.',
                icon: 'https://vignette.wikia.nocookie.net/lordsmobile/images/d/d0/Prison.png/revision/latest/top-crop/width/360/height/450?cb=20200308191409'
            },
            {
                name: 'Боевой зал',
                title: 'Позволяет организовывать группы или вступить в них.',
                icon: 'https://vignette.wikia.nocookie.net/lordsmobile/images/7/78/Battle_Hall.png/revision/latest/top-crop/width/360/height/450?cb=20200308191247'
            },
            {
                name: 'Алтарь',
                title: 'Бонус алтаря активируется после казни пленных лидеров.',
                icon: 'https://vignette.wikia.nocookie.net/lordsmobile/images/b/be/Altar.png/revision/latest?cb=20200308191231'
            }
        ],
        links:
            [
                {
                    route: '/barracks',
                    name: 'Казармы',
                    title: 'В Казармах тренируются солдаты.',
                    icon: 'https://w7.pngwing.com/pngs/520/499/png-transparent-elvenar-upgrade-innogames-building-others-miscellaneous-game-building.png'
                },
                {
                    route: '/hospital',
                    name: 'Больница',
                    title: 'В Больнице лечат раненых защитников.',
                    icon: 'data:image/jpeg;base64,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'
                }
            ]
    }
}


