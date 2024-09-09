package com.example.Ecommerce.exception;

import lombok.Builder;

@Builder
public record ErrorMessage(String message) {
}
