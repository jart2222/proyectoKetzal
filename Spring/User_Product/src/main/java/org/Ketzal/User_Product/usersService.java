package org.Ketzal.User_Product;

import org.Ketzal.User_Product.models.users;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class usersService {
    public final ArrayList<users> listaUsers = new ArrayList<>();
    //usuarios por default
    public usersService(){
        listaUsers.add(new users(1,"admin","ketzal1","admin@gmail.com"));
        listaUsers.add(new users(2,"usuario","usuario","usuario@gmail.com"));
    }
    //obtener todos los usuarios
    public List<users> getAllUsers(){
        return listaUsers;
    }
    //obtener usuario por id
    public users getUser(Long userId){
        if(userId<=listaUsers.size()){
            return listaUsers.get((userId.intValue()-1));
        }
        return new users(0,"not found","","");
    }
    //borrar usuario
    public boolean deleteUser(Long userId){
        if(userId<=listaUsers.size()){
            listaUsers.remove((userId.intValue()-1));
            return true;
        }
        return false;
    }
    //agregar usuario
    public void addUser(users user) {
        listaUsers.add(user);
    }


}
