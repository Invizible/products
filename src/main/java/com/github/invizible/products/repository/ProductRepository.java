package com.github.invizible.products.repository;

import com.github.invizible.products.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface ProductRepository extends MongoRepository<Product, BigInteger> {
}
