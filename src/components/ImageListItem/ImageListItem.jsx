import './ImageListItem.scss';

const ImageListItem =({image, onClick})=>{
    return (
        <div className='image-list__image-list-item' onClick={()=>onClick(image)}>
            <img src={image}></img>
        </div>
    )
}

export {ImageListItem};