import { atom } from "recoil"
import book from "../assets/book.png"

const carouselAtom = atom({
    key: "carouselAtom",
    default:[{   
            id: 1,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 2,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 3,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 4,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 5,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 6,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 7,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 8,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 9,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        }, {
            id: 10,
            image: book,
            title: "Harry Potter and the Philospher's Stone",
            author: "J.K.Rowling"
        },
    ]
})

export default carouselAtom