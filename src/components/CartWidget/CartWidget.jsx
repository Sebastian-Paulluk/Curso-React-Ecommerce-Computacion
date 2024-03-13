import cartImg from '../../assets/images/cartImg.png'

const CartWidget =()=>{
    return (
        <div className='cart-widget'>
            <img src={cartImg} className='cart-img' alt="Cart"></img>
            <span className='cart-items-counter'>0</span>
        </div>
    )
}

export { CartWidget };