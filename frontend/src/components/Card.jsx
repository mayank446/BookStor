import Button from './Button'

function Card(props) {
    return (
        // <div className="relative">
        <div className='flex flex-shrink-1 relative min-w-96 md:min-w-[450px] mx-4 my-2 rounded-md overflow-hidden hover:scale-105 shadow-md'>
            <div className="flex absolute w-full h-full ease-in-out duration-100 z-10">
                <img src={props.image} />
                <div className='bg-gray-200 text-gray-950 w-full p-4'>
                    <p className='p-2 text-xl font-semibold'>#{props.id}. {props.title}</p>
                    <p className='p-2'>{props.author}</p>
                </div>
            </div>

            <div className="flex opacity-0 hover:opacity-100 z-10">
                <div className='bg-blue-600 text-slate-100 w-full p-4'>
                    <p className='p-2 text-xl font-semibold'>#{props.id}. {props.title}</p>
                    <p className='px-2 line-clamp-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam nobis ipsum quo vel hic magnam ullam repudiandae illo error quae corporis, ut rem repellat illum optio quasi blanditiis nemo accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quis sunt delectus, a harum architecto suscipit ut nihil exercitationem laudantium perferendis modi soluta eveniet id fugit dolor aperiam aliquam deleniti.</p>
                
                    <div className='flex mt-4 justify-end'>
                        <Button>Deatails</Button>
                    </div>
                </div>
            </div>
        </div>

        // </div>
    )
}

export default Card