import React from 'react'
import './CoffeeNews.css'
import img1 from '../../assets/CoffeeNewsImg/img1.png'
import img2 from '../../assets/CoffeeNewsImg/img2.png'
import img3 from '../../assets/CoffeeNewsImg/img3.png'
import img4 from '../../assets/CoffeeNewsImg/img4.png'


const CoffeeNews = () => {
  return (
    <div>
        <div className="coffeeNewsContainer">
            <div className="coffeeNewsHeader">
                <h1>Enjoy a new blend of coffee style</h1>
                <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
            </div>
            <div className="coffeeNewsCards">
                <div className="coffeeNewsCard">
                    <img src={img1} alt="img1" />
                    <h3>Cappuccino</h3>
                    <p>Coffee 50% | Milk 50%</p>
                    <p>$8.50</p>
                    <button>Order Now</button>
                </div>

                <div className="coffeeNewsCard">
                    <img src={img2} alt="img1" />
                    <h3>Chai Latte</h3>
                    <p>Coffee 50% | Milk 50%</p>
                    <p>$8.50</p>
                    <button>Order Now</button>
                </div>

                <div className="coffeeNewsCard">
                    <img src={img3} alt="img1" />
                    <h3>Macchiato</h3>
                    <p>Coffee 50% | Milk 50%</p>
                    <p>$8.50</p>
                    <button>Order Now</button>
                </div>

                <div className="coffeeNewsCard">
                    <img src={img4} alt="img1" />
                    <h3>Expresso</h3>
                    <p>Coffee 50% | Milk 50%</p>
                    <p>$8.50</p>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoffeeNews