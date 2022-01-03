package lm.book.controller;

import lm.book.model.Book;
import lm.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/books")
public class BookController {

    @Autowired
    private BookService bookService ;

    @GetMapping()
    public List<Book> getAll() {
        return this.bookService.getAll();
    }

    @GetMapping("{id}")
    public Book getOne(@PathVariable Long id) {
        return this.bookService.getOne(id);
    }

    @PostMapping()
    public Book create(@RequestBody Book book) {
        return bookService.create(book);
    }

    @PutMapping()
    public Book update(@RequestBody Book book) {
        return this.bookService.update(book);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        bookService.delete(id);
    }

}


