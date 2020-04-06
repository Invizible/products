package com.github.invizible.products.service;

import com.github.invizible.products.domain.Product;
import com.github.invizible.products.repository.ProductRepository;
import com.google.common.base.Preconditions;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Page<Product> getProducts(Pageable pageable) {
        Preconditions.checkNotNull(pageable);
        return productRepository.findAll(pageable);
    }
}
