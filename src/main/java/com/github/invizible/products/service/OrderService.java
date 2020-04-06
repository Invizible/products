package com.github.invizible.products.service;

import com.github.invizible.products.domain.Order;
import com.github.invizible.products.repository.OrderRepository;
import com.google.common.base.Preconditions;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(Order order) {
        Preconditions.checkNotNull(order);
        return orderRepository.save(order);
    }
}
