package org.generation.ketzal.models;

import javax.persistence.*;

@Entity
@Table(name = "clientes")
public class clientes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idcontacto", unique = true, nullable = false)
    private Long idcontacto;
    private String nombre;
    private String correo;
    private String telefono;
    private String contrasena;

    public clientes() {} // Constructor vacío

    public clientes(Long idcontacto, String nombre, String correo, String telefono, String contrasena) {
        this.idcontacto = idcontacto;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.contrasena = contrasena;
    }// Constructor general

    public Long getIdcontacto() {
        return idcontacto;
    } //getIdcontacto

    public void setIdcontacto(Long idcontacto) {
        this.idcontacto = idcontacto;
    }// setIdcontacto

    public String getNombre() {
        return nombre;
    }// getNombre

    public void setNombre(String nombre) {
        this.nombre = nombre;
    } // setNombre

    public String getCorreo() {
        return correo;
    } //getCorreo

    public void setCorreo(String correo) {
        this.correo = correo;
    } // setCorreo

    public String getTelefono() {
        return telefono;
    } // getTelefono

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    } // setTelefono

    public String getContrasena() {
        return contrasena;
    } // getContrasena

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }// setContrasena
}
