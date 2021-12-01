package org.Ketzal.User_Product.controller;

import org.Ketzal.User_Product.models.products;
import org.Ketzal.User_Product.models.users;
import org.Ketzal.User_Product.productService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class productsController {
    private final productService _productsService;
    @Autowired
    public productsController(productService productsService) {
        _productsService = productsService;
    }
    //constructor
    @GetMapping
    public List<products> getProducts(){
        return _productsService.getAllProducts();
    }
    //Productos por id
    @GetMapping(path ="{productId}")
    public products getProduct(@PathVariable("productId") Long productId){
        return _productsService.getProduct(productId);
    }

    //borrar producto

    @DeleteMapping(path ="{productId}")
    public void deleteProduct(@PathVariable("productId") Long productId){
        _productsService.deleteProduct(productId);
    }
    //agregar producto
    @PostMapping
    public void addUProduct(@RequestBody products product){
        _productsService.addUProduct(product);
    }
    //Actualizar producto
    @PutMapping(path = "{productId}")
    public void updateUser(@PathVariable("productId") Long productId,
                           @RequestParam(required = true) String originalNombre,
                           @RequestParam(required = true) String newNombre) {
        _productsService.updateProduct(productId, originalNombre, newNombre);
    }







}
