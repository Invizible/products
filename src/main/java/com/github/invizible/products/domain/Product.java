package com.github.invizible.products.domain;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.math.BigInteger;

@Document("products")
@Data
@Builder
@EqualsAndHashCode(exclude = {"id"})
@ToString(exclude = {"photo"})
public class Product {

    @Id
    private BigInteger id;
    @Indexed(unique = true)
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    @NotNull
    @Min(0)
    private BigDecimal price;
    @NotBlank
    private String photo;
}
