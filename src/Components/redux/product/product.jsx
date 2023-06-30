import image1 from '../Picture/pizza.jpg'
import image2 from '../Picture/Hamburger.jpg'
import image3 from '../Picture/bread.jpg'
import image4 from '../Picture/Cake.jpg'
const innitState=[
{
    productId: 100, 
        productName: 'Pizza',
        image: image1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
price:12,
quantity: 5
}, 
    {
        productId: 200,
        productName: 'Hamburger',
        image: image2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 16,
        quantity: 0
    },
    {
        productId: 300,
        productName: 'Bread',
        image: image3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 13,
        quantity: 10
    },
    {
        productId: 400,
        productName: 'Cake',
        image: image4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 14,
        quantity: 3
    },

]
const listProduct = (state=innitState, action)=>{
    return state
}
export default listProduct