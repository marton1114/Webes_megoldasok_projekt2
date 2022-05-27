package hu.unideb.geposszeallito.controller.parts;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import hu.unideb.geposszeallito.exception.ResourceNotFoundException;
import hu.unideb.geposszeallito.model.parts.Memory;
import hu.unideb.geposszeallito.repository.parts.MemoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class MemoryController {

    @Autowired
    private MemoryRepository memoryRepository;


    @GetMapping("/memories")
    public List<Memory> getAllMemories(){
        return memoryRepository.findAll();
    }


    @PostMapping("/memories")
    public Memory createMemory(@RequestBody Memory memory) {
        return memoryRepository.save(memory);
    }


    @GetMapping("/memories/{id}")
    public ResponseEntity<Memory> getMemoryById(@PathVariable Long id) {
        Memory memory = memoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Memory not exist with id :" + id));
        return ResponseEntity.ok(memory);
    }


    @PutMapping("/memories/{id}")
    public ResponseEntity<Memory> updateMemory(@PathVariable Long id, @RequestBody Memory memoryDetails){
        Memory memory = memoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Memory not exist with id :" + id));

        memory.setModel(memoryDetails.getModel());
        memory.setDetails(memoryDetails.getDetails());
        memory.setPrice(memoryDetails.getPrice());

        Memory updatedMemory = memoryRepository.save(memory);
        return ResponseEntity.ok(updatedMemory);
    }


    @DeleteMapping("/memories/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMemory(@PathVariable Long id){
        Memory memory = memoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Memory not exist with id :" + id));

        memoryRepository.delete(memory);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}