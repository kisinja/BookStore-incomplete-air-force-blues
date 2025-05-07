import BookCard from "./BookCard";

const BookList = ({ books }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {
                books && books.length > 0 ? (
                    books.map(b => (
                        <BookCard key={books.id} book={b} />
                    ))
                ) : (
                    <div className="col-span-4 text-center py-10">
                        <h2 className="text-2xl font-bold text-gray-700">No books found</h2>
                        <p className="text-gray-500">Please check back later.</p>
                    </div>
                )
            }
        </div>
    );
};

export default BookList;