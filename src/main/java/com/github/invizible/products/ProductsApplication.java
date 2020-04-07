package com.github.invizible.products;

import com.github.invizible.products.domain.Product;
import com.github.invizible.products.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Base64;
import java.util.LinkedList;
import java.util.List;

@SpringBootApplication
public class ProductsApplication implements CommandLineRunner {

    private final ProductRepository productRepository;

    public ProductsApplication(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(ProductsApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        long count = productRepository.count();

        if (count > 0) {
            return;
        }

        final List<Product> products = new ArrayList<>();

        products.add(Product.builder()
                .title("Tiramisu")
                .description("Tiramisu")
                .photo("https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg")
                .price(new BigDecimal("55.0"))
                .build());

        products.add(Product.builder()
                .title("Chocolate mousse")
                .description("Chocolate mousse")
                .photo("https://www.onceuponachef.com/images/2019/04/Chocolate-Mousse.jpg")
                .price(new BigDecimal("25.0"))
                .build());

        products.add(Product.builder()
                .title("Apple pie")
                .description("Apple pie")
                .photo("https://kristineskitchenblog.com/wp-content/uploads/2013/11/Apple-Pie-700-592.jpg")
                .price(new BigDecimal("105.0"))
                .build());

        products.add(Product.builder()
                .title("Cheesecake")
                .description("Cheesecake")
                .photo("https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg")
                .price(new BigDecimal("22.0"))
                .build());

        products.add(Product.builder()
                .title("Chocolate pie")
                .description("Chocolate pie")
                .photo("https://tastesbetterfromscratch.com/wp-content/uploads/2016/06/Chocolate-Cream-Pie-8.jpg")
                .price(new BigDecimal("105.0"))
                .build());

        products.add(Product.builder()
                .title("Molten chocolate puddings")
                .description("Molten chocolate puddings")
                .photo("https://cdn.donnahaycdn.com.au/images/content-images/magic_chocolate_molten_puddings.jpg")
                .price(new BigDecimal("99.0"))
                .build());

        products.add(Product.builder()
                .title("Apple & cherry strudel")
                .description("Apple & cherry strudel")
                .photo("https://img.taste.com.au/_HS24q6b/taste/2016/11/apple-cherry-strudel-80661-1.jpeg")
                .price(new BigDecimal("77.0"))
                .build());

        products.add(Product.builder()
                .title("\"Hot chocolate\" mousse")
                .description("\"Hot chocolate\" mousse")
                .photo("https://i.pinimg.com/originals/4b/0f/10/4b0f105ee0fbc60dafe14df491c27143.jpg")
                .price(new BigDecimal("33.0"))
                .build());

        products.add(Product.builder()
                .title("Amaretto brulee")
                .description("Amaretto brulee")
                .photo("https://img.taste.com.au/4EFXIEdY/taste/2016/11/amaretto-brulee-4613-1.jpeg")
                .price(new BigDecimal("76.5"))
                .build());

        productRepository.saveAll(products);
    }
}
