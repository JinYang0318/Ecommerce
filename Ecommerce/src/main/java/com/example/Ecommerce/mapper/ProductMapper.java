package com.example.Ecommerce.mapper;

import com.example.Ecommerce.dto.ProductDTO;
import com.example.Ecommerce.model.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {
    public ProductDTO mapToDTO(Product product){
        return ProductDTO.builder()
                .productId(product.getProductId())
                .productName(product.getProductName())
                .productPrice(product.getProductPrice())
                .productQuantity(product.getProductQuantity())
                .build();
    }

    public Product mapToEntity(ProductDTO productDTO){
        return Product.builder()
                .productName(productDTO.productName())
                .productPrice(productDTO.productPrice())
                .productQuantity(productDTO.productQuantity())
                .build();
    }
}
