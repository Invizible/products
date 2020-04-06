package com.github.invizible.products.domain;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigInteger;

@Data
public class OrderItem {
    @NotNull
    private BigInteger productId;
    @Min(1)
    private int quantity;
}
