package com.github.invizible.products.web.rest;

import com.github.invizible.products.domain.Order;
import com.github.invizible.products.service.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class OrderResource {

    private final OrderService orderService;

    public OrderResource(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/orders")
    public Order saveOrder(@RequestBody @Valid Order order) {
        return orderService.saveOrder(order);
    }
}
