const PRODUCTS = [
    {
      id: 1,
      img: 'https://img-a.udemycdn.com/course/240x135/2301356_5a35_2.jpg',
      name: 'Kursus Android Dasar Dari Nol Sampai Expert',
      price: 25,
      tags: ['android', 'mobile'],
    },
    {
      id: 2,
      img: 'https://img-a.udemycdn.com/course/240x135/2066137_22d7.jpg',
      name: 'Belajar Web Development Menggunakan Bahasa Pemrograman PHP',
      price: 30,
      tags: ['php', 'html', 'css', 'jquery', 'javascript', 'web'],
    },
    {
      id: 3,
      img: 'https://img-a.udemycdn.com/course/240x135/2913538_2123_2.jpg',
      name: 'Aplikasi CRUD News dengan Flutter dan Database MySQL',
      price: 20,
      tags: ['android', 'flutter', 'mobile'],
    },
    {
      id: 4,
      img: 'https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg',
      name: '2020 Complete Python Bootcamp: From Zero to Hero in Python',
      price: 115,
      tags: ['phyton'],
    },
    {
      id: 5,
      img: 'https://img-a.udemycdn.com/course/240x135/625204_436a_2.jpg',
      name: 'The Web Developer Bootcamp',
      price: 115,
      tags: ['html', 'css', 'jquery', 'javascript', 'web'],
    },
];

// 10. State Management Redux
const products = (state = PRODUCTS, action) => {
    switch (action.type) {
        case 'FILTER PRODUCT':
            let search = action.search;
            if(search && search.trim() !== ''){
              let filtered = PRODUCTS.filter(function(product) {
                return product.name.toLowerCase().includes(search.toLowerCase());
              });
              state = filtered
            } else {
              state = PRODUCTS
            }         
            return state
        default:
            return state;
    }
}

export default products;