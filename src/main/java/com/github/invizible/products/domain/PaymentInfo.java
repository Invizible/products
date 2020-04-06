package com.github.invizible.products.domain;

import lombok.Data;
import org.hibernate.validator.constraints.CreditCardNumber;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

//TODO: encrypt!
@Data
public class PaymentInfo {
    @CreditCardNumber
    private String cardNumber;
    @NotNull
    private ExpirationDate expirationDate;
    @Pattern(regexp = "\\d{3}")
    private String securityCode;

    @Data
    public static class ExpirationDate {
        @Pattern(regexp = "/d{2}")
        private String year;
        @Pattern(regexp = "/d{2}")
        private String month;
    }
}
