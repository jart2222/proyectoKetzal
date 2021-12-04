package org.generation.ketzal;

import org.generation.ketzal.models.clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface ClientesRepository extends JpaRepository<clientes, Long> {
    @Query("SELECT c FROM clientes c WHERE c.nombre = ?1")
    Optional<clientes> findByName(String name);
}
