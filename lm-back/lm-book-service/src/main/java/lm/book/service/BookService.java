package lm.book.service;

import lm.book.dto.BorrowRequest;
import lm.book.model.Book;
import lm.book.model.User;
import lm.book.repository.BookRepository;
import lm.book.repository.UserRepository;
import lm.book.util.UploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository ;

    @Autowired
    private UserRepository userRepository ;

    @Autowired
    private UploadUtil uploadUtil ;

    public List<Book> getAll() {
       return bookRepository.findAll() ;
    }

    public Book getOne(Long id) {
        return bookRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public Book create(Book book, MultipartFile image) {
        String newFileName = uploadUtil.upload(image);
        book.setImage("images/" + newFileName);
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

    public List<Book> getByUser(Long id) {
        return bookRepository.findAllByBorrowerUserId(id) ;
    }

    public Book borrow(BorrowRequest request) {
        Book book = bookRepository.findById(request.getBookId()).orElseThrow(IllegalArgumentException::new);
        User user = userRepository.findById(request.getUserId()).orElseThrow(IllegalArgumentException::new);
        book.setBorrowerUser(user);
        return bookRepository.save(book);
    }

    public Book returnBook(Long id) {
        Book book = bookRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        book.setBorrowerUser(null);
        return bookRepository.save(book);
    }
}
