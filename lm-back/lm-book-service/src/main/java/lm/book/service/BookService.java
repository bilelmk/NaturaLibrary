package lm.book.service;

import lm.book.model.Book;
import lm.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository ;

    public List<Book> getAll() {
       return bookRepository.findAll() ;
    }

    public Book getOne(Long id) {
        return bookRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public Book create(Book book) {
        return bookRepository.save(book) ;
    }

    public Book update(Book book) {
        Book toUpdateAdmin = getOne(book.getId()) ;
        toUpdateAdmin.setName(book.getName());
        return bookRepository.save(toUpdateAdmin) ;
    }

    public void delete(Long id) {
        bookRepository.deleteById(id);
    }
}
