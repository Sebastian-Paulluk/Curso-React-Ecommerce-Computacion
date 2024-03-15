import './ImageList.scss'

const ImageList =({images, onClick})=>{

    return (
        <div className="image-list">
            {images && images.length > 0 &&(
                images.map((img, key) => {
                    return (
                        <div className='image-list__image-list-item' onClick={()=>onClick(img)}>
                            <img key={key} src={img}>
                            </img>
                        </div>
                    )
                })
            )}
        </div>
    )
}

export {ImageList};