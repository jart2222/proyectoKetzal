package com.ketzal.ketzal;

import com.ketzal.ketzal.model.productos;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;


@SpringBootTest
@AutoConfigureMockMvc
class KetzalApplicationTests {

	@Autowired
	private MockMvc mockMvc;

//	@Test
//	void contextLoads() {
//	}

//	@Test
//	public void TesPut() throws Exception {
//		this.mockMvc.perform(put("/api/productos/5?nombre=Prueba de café&descripcion=Es un excelente café")).andDo(print()).andExpect(status().isOk());
//	}

	//@Test
	public void TestGet() throws Exception {
		this.mockMvc.perform(get("/api/productos/")).andDo(print()).andExpect(status().isOk()).andExpect(content().string(containsString(".jpeg")));

		this.mockMvc.perform(get("/api/productos/1")).andDo(print()).andExpect(status().isOk()).andExpect(content().string(containsString("Honduras")));
	}// TestGet

	//@Test
	public void TestDelete() throws Exception {
		this.mockMvc.perform(delete("/api/productos/10")).andDo(print()).andExpect(status().isOk());
	}// TestDelete

	@Test
	public void shouldReturn404Error() throws Exception {
		this.mockMvc.perform(get("/api/productos/11")).andDo(print()).andExpect(status().isOk()).andExpect(status().is5xxServerError());
	}// shouldReturn404Error

	//@Test
	public void TestPOST() throws Exception {
		productos producto = new productos();
		producto.setIdProductos(2l);
		producto.setNombre("Café Borundi");
		producto.setImagen("cafeBorundi.jpeg");
		producto.setDescripcion("Café de grano cosechado a mano y secado al sol en parihuelas elevadas. Se pueden identificar notas de frutas, flores y miel, acompañadas de consistencia, equilibrio y un cuerpo completo. Perfecto para iniciar tus mañanas.");
		producto.setPrecio(399.00);
		producto.setGramaje(200);
		this.mockMvc.perform(post("/api/productos/").contentType(MediaType.APPLICATION_JSON).content(asJSONString(producto)));
	}// TestPOST

	public static String asJSONString(final Object obj) {
		try {
			return new ObjectMapper().writeValueAsString(obj);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}//asJSONString

}// class KetzalApplicationTests

