package com.github.invizible.products.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Set;

@Document("orders")
@Data
@EqualsAndHashCode(exclude = {"id"})
@ToString(exclude = {"paymentInfo"})
public class Order {

    @Id
    private BigInteger id;
    @NotNull
    private PaymentInfo paymentInfo;
    @NotNull
    @Size(min = 1)
    private Set<OrderItem> items = new HashSet<>();
}
