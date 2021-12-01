package org.Ketzal.User_Product;

import org.Ketzal.User_Product.models.products;
import org.Ketzal.User_Product.models.users;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class productService {
    public final ArrayList<products> listaProduct = new ArrayList<>();
    //productos por default
    public productService(){
        listaProduct.add(new products("Café Honduras",600,1,180,"../src/images/productos/cafeHonduras.jpeg", "Café 100% de café arábica, con una producción ecológicamente sostenible. Suelen ser dulces, achocolatados, con cuerpo redondo, acidez delicada y postgusto sostenido. Perfecto para esos días de descanso."));
        listaProduct.add(new products("Café Borundi",550,2,200,"../src/images/productos/cafeBorundi.jpeg", "\"Café de grano cosechado a mano y secado al sol en parihuelas elevadas. Se pueden identificar notas de frutas, flores y miel, acompañadas de consistencia, equilibrio y un cuerpo completo. Perfecto para iniciar tus mañanas."));

    }
    //obtener todos los productos
    public List<products> getAllProducts(){
        return listaProduct;
    }

    //obtener Productos por id
    public products getProduct(Long productId){
        if(productId<=listaProduct.size()){
            return listaProduct.get((productId.intValue()-1));
        }
        return new products("",0,0,0,"","");
    }
    //borrar productos
    public boolean deleteProduct(Long productId){
        if(productId<=listaProduct.size()){
            listaProduct.remove((productId.intValue()-1));
            return true;
        }
        return false;
    }
    //agregar productos
    public void addUProduct(products product) {
        listaProduct.add(product);
    }

    public void updateProduct(Long productId, String originalNombre, String newNombre) {
        if (productId<= listaProduct.size()) {
            products product = listaProduct.get((productId.intValue()-1));
            if (product.getNombre().equals(originalNombre)) {
                product.setNombre(newNombre);
            }// if original
        }// if userId <= size
    }// updateUser



}
