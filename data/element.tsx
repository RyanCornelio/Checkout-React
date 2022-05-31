import Rose from '../images/Rose.jpg'
import Lily from '../images/Lily.jpg'
import Sunflower from '../images/Sunflower.jpg'
import Bonsaitree from '../images/Bonsaitree.jpg'
import Gardenia from '../images/Gardenia.jpg'


export interface flowers {
    id: number,
    name: string,
    image: string
}


export const elements: flowers[] = [
    {
        id: 0,
        name: "Rose",
        image: Rose
    }, {
        id: 1,
        name: "Lily",
        image: Lily
    }, {
        id: 2,
        name: "Sunflower",
        image: Sunflower
    }, {
        id: 3,
        name: "Bonsaitree",
        image: Bonsaitree
    }, {
        id: 4,
        name: "Gardenia",
        image: Gardenia
    },

]