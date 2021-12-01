package org.Ketzal.User_Product.controller;

import org.Ketzal.User_Product.models.users;
import org.Ketzal.User_Product.usersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class usersController {
    private final usersService _usersService;
    //constructor
    @Autowired
    public usersController(usersService usersService) {
        this._usersService = usersService;
    }
    //todos los usuarios
    @GetMapping
    public List<users> getUsers(){
        return _usersService.getAllUsers();
    }
    //usuarios por id
    @GetMapping(path ="{userId}")
    public  users getUser(@PathVariable("userId") Long userId){
        return _usersService.getUser(userId);
    }
    //borrar usuarios
    @DeleteMapping(path ="{userId}")
    public void deleteUser(@PathVariable("userId") Long userId){
        _usersService.deleteUser(userId);
    }
    //agregar usuarios
    @PostMapping
    public void addUser(@RequestBody users user){
        _usersService.addUser(user);
    }
}
