import { ImageListItem } from '../ImageListItem/ImageListItem';
import './ImageList.scss'

const ImageList =({images, onClick})=>{

    return (
        <div className="image-list">
            {images && images.length > 0 &&(
                images.map( img => {
                    return (
                        <ImageListItem 
                            key={img}
                            image={img}
                            onClick={onClick}
                        />
                    )
                })
            )}
        </div>
    )
}

export {ImageList};