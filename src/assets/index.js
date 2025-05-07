export const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        category: "Classic",
        description: "A story of wealth, love, and the American Dream in the 1920s through the eyes of the mysterious Jay Gatsby and narrator Nick Carraway.",
        coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.5,
        stock: 10,
        pages: 180,
        publishedYear: 1925,
        isbn: "9780743273565",
        language: "English",
        publisher: "Scribner"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 10.99,
        category: "Classic",
        description: "Set in the Depression-era South, this novel follows young Scout Finch as her father, Atticus, defends a Black man wrongly accused of assault.",
        coverImage: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.8,
        stock: 15,
        pages: 281,
        publishedYear: 1960,
        isbn: "9780061120084",
        language: "English",
        publisher: "J. B. Lippincott & Co."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 9.99,
        category: "Dystopian",
        description: "Winston Smith navigates life under the totalitarian regime of Big Brother in a world of perpetual war, omnipresent government surveillance, and public manipulation.",
        coverImage: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.7,
        stock: 8,
        pages: 328,
        publishedYear: 1949,
        isbn: "9780451524935",
        language: "English",
        publisher: "Secker & Warburg"
    },
    {
        id: 4,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 14.99,
        category: "Fantasy",
        description: "Bilbo Baggins, a hobbit, embarks on an unexpected journey with a group of dwarves to reclaim their mountain home from the dragon Smaug.",
        coverImage: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        rating: 4.9,
        stock: 20,
        pages: 310,
        publishedYear: 1937,
        isbn: "9780547928227",
        language: "English",
        publisher: "Allen & Unwin"
    },
    {
        id: 5,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        price: 15.99,
        category: "Fantasy",
        description: "Harry Potter discovers he's a wizard and begins his education at Hogwarts School of Witchcraft and Wizardry, uncovering secrets about his past.",
        coverImage: "https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UF1000,1000_QL80_.jpg",
        rating: 4.9,
        stock: 25,
        pages: 223,
        publishedYear: 1997,
        isbn: "9780747532699",
        language: "English",
        publisher: "Bloomsbury"
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 11.99,
        category: "Literary Fiction",
        description: "Holden Caulfield recounts his experiences in New York City after being expelled from prep school, exploring themes of alienation and identity.",
        coverImage: "https://m.media-amazon.com/images/I/71JP7A4KDLL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.0,
        stock: 12,
        pages: 234,
        publishedYear: 1951,
        isbn: "9780316769488",
        language: "English",
        publisher: "Little, Brown and Company"
    },
    {
        id: 7,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 8.99,
        category: "Classic",
        description: "The romantic clash between the opinionated Elizabeth Bennet and the proud Mr. Darcy in 19th century England.",
        coverImage: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.6,
        stock: 18,
        pages: 279,
        publishedYear: 1813,
        isbn: "9780141439518",
        language: "English",
        publisher: "T. Egerton, Whitehall"
    },
    {
        id: 8,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: 24.99,
        category: "Fantasy",
        description: "Frodo Baggins and the Fellowship embark on a quest to destroy the One Ring and defeat the Dark Lord Sauron.",
        coverImage: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.9,
        stock: 15,
        pages: 1178,
        publishedYear: 1954,
        isbn: "9780544003415",
        language: "English",
        publisher: "Allen & Unwin"
    },
    {
        id: 9,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: 13.99,
        category: "Mystery",
        description: "Harvard symbologist Robert Langdon uncovers clues in Leonardo da Vinci's works that lead to a religious mystery protected for centuries.",
        coverImage: "https://m.media-amazon.com/images/I/71YHjVXyR0L._AC_UF1000,1000_QL80_.jpg",
        rating: 4.2,
        stock: 7,
        pages: 489,
        publishedYear: 2003,
        isbn: "9780307474278",
        language: "English",
        publisher: "Doubleday"
    },
    {
        id: 10,
        title: "Dune",
        author: "Frank Herbert",
        price: 16.99,
        category: "Science Fiction",
        description: "Paul Atreides leads a rebellion on the desert planet Arrakis while grappling with his prescient visions and the planet's valuable spice.",
        coverImage: "https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_UF1000,1000_QL80_.jpg",
        rating: 4.7,
        stock: 9,
        pages: 412,
        publishedYear: 1965,
        isbn: "9780441172719",
        language: "English",
        publisher: "Chilton Books"
    }
];

export const categories = [
    { id: 1, name: "Classic" },
    { id: 2, name: "Fantasy" },
    { id: 3, name: "Dystopian" },
    { id: 4, name: "Literary Fiction" },
    { id: 5, name: "Science Fiction" },
    { id: 6, name: "Mystery" },
    { id: 7, name: "Romance" },
    { id: 8, name: "Horror" },
    { id: 9, name: "Biography" },
    { id: 10, name: "History" }
];

export const storeInfo = {
    name: "Book Haven",
    address: "123 Reading Lane, Bookville, BV 12345",
    phone: "(555) 123-4567",
    email: "contact@bookhaven.com",
    hours: "Mon-Fri: 9am-8pm, Sat-Sun: 10am-6pm",
    about: "Book Haven has been serving the community for over 20 years, providing a wide selection of books for all ages and interests. Our knowledgeable staff is always ready to help you find your next great read!",
    socialMedia: {
        facebook: "https://facebook.com/bookhaven",
        twitter: "https://twitter.com/bookhaven",
        instagram: "https://instagram.com/bookhaven"
    },
    policies: {
        returns: "30-day return policy with receipt",
        shipping: "Free shipping on orders over $50",
        privacy: "We never share your personal information"
    }
};

export const featuredBooks = [1, 2, 5, 8]; // IDs of featured books

export const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        comment: "Best bookstore in town! The staff recommendations are always spot on.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        comment: "Great selection and cozy atmosphere. My favorite weekend spot.",
        rating: 4
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        comment: "Found rare editions here that I couldn't find anywhere else. Highly recommend!",
        rating: 5
    }
];

export const upcomingReleases = [
    {
        id: 101,
        title: "The Midnight Library",
        author: "Matt Haig",
        releaseDate: "2023-11-15",
        coverImage: "https://m.media-amazon.com/images/I/81Jc4s6pRaL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 102,
        title: "Project Hail Mary",
        author: "Andy Weir",
        releaseDate: "2023-12-01",
        coverImage: "https://m.media-amazon.com/images/I/91XSPJL3YVL._AC_UF1000,1000_QL80_.jpg"
    }
];

export const staffPicks = [3, 4, 7, 10]; // IDs of staff pick books