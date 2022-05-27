package hu.unideb.geposszeallito.controller.parts;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import hu.unideb.geposszeallito.exception.ResourceNotFoundException;
import hu.unideb.geposszeallito.model.parts.Motherboard;
import hu.unideb.geposszeallito.repository.parts.MotherboardRepository;
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
public class MotherboardController {

    @Autowired
    private MotherboardRepository motherboardRepository;


    @GetMapping("/motherboards")
    public List<Motherboard> getAllMotherboards(){
        return motherboardRepository.findAll();
    }


    @PostMapping("/motherboards")
    public Motherboard createMotherboard(@RequestBody Motherboard motherboard) {
        return motherboardRepository.save(motherboard);
    }


    @GetMapping("/motherboards/{id}")
    public ResponseEntity<Motherboard> getMotherboardById(@PathVariable Long id) {
        Motherboard motherboard = motherboardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Motherboard not exist with id :" + id));
        return ResponseEntity.ok(motherboard);
    }


    @PutMapping("/motherboards/{id}")
    public ResponseEntity<Motherboard> updateMotherboard(@PathVariable Long id, @RequestBody Motherboard motherboardDetails){
        Motherboard motherboard = motherboardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Motherboard not exist with id :" + id));

        motherboard.setModel(motherboardDetails.getModel());
        motherboard.setDetails(motherboardDetails.getDetails());
        motherboard.setPrice(motherboardDetails.getPrice());

        Motherboard updatedMotherboard = motherboardRepository.save(motherboard);
        return ResponseEntity.ok(updatedMotherboard);
    }


    @DeleteMapping("/motherboards/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMotherboard(@PathVariable Long id){
        Motherboard motherboard = motherboardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Motherboard not exist with id :" + id));

        motherboardRepository.delete(motherboard);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}