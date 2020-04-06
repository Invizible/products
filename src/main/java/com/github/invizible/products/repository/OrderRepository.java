package com.github.invizible.products.repository;

import com.github.invizible.products.domain.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface OrderRepository extends MongoRepository<Order, BigInteger> {
}
