import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Basir',
            email:'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name:'Thomas',
            email:'thomas@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
    ],
    products: [
        {
            // _id: '1',
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg', // 679px x 829px
            price: 120,
            countInStock: 10,
            brand:'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality shirt',
            branch: 'Totonicapán',
        },
        {
            // _id: '2',
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 25,
            countInStock: 0,
            brand:'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'High quality product',
            branch: 'Quetzaltenango',
        },
        {
            // _id: '3',
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 5,
            brand:'Adidas',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product',
            branch: 'Quiché',
        },
    ],            
};

export default data;