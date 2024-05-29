import React from "react"
import { useRecoilValue } from "recoil"
import { useRef } from "react"

import Card from "./Card"
import carouselAtom from '../store/atoms'

function Books() {
    const books = useRecoilValue(carouselAtom)
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative bg-gradient-to-rt from-slate-400 to-slate-700 p-2 w-screen h-80">
            <div className="h-12 py-3 pl-6 font-bold">
                <h2>Wizarding World</h2>
            </div>

            <div ref={scrollContainerRef} className="flex h-64 overflow-scroll scroll-smooth no-scrollbar">

                <button onClick={scrollLeft} className="absolute h-10 w-10 left-0 mt-28 ml-6 shadow-sm rounded-full z-30 opacity-20">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128"><path d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zm1.3-82.8L41.6 64l23.6 25.5h13.5L54.4 64l24.4-25.5H65.3z" /></svg>
                </button>

                {books.map(book => {
                    return <Card key={book.id} id={book.id} image={book.image} title={book.title} author={book.author} />
                })
                }

                <button onClick={scrollRight} className="absolute h-10 w-10 right-0 mt-28 mr-6 shadow-sm rounded-full z-30 opacity-20">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 128 128"><path d="M64,0C28.7,0,0,28.7,0,64s28.7,64,64,64c35.3,0,64-28.7,64-64S99.3,0,64,0z M64,121.6 C32.2,121.6,6.4,95.8,6.4,64S32.2,6.4,64,6.4c31.8,0,57.6,25.8,57.6,57.6S95.8,121.6,64,121.6z M49.2,38.4L73.6,64L49.2,89.6 h13.5L86.4,64L62.7,38.4H49.2z" /></svg>
                </button>
            </div>
        </div>

    )
}

export default Books