package hu.unideb.geposszeallito.controller.parts;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import hu.unideb.geposszeallito.exception.ResourceNotFoundException;
import hu.unideb.geposszeallito.model.parts.PowerSupply;
import hu.unideb.geposszeallito.repository.parts.PowerSupplyRepository;
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
public class PowerSupplyController {

    @Autowired
    private PowerSupplyRepository powerSupplyRepository;


    @GetMapping("/powerSupplies")
    public List<PowerSupply> getAllPowerSupplies(){
        return powerSupplyRepository.findAll();
    }


    @PostMapping("/powerSupplies")
    public PowerSupply createPowerSupply(@RequestBody PowerSupply powerSupply) {
        return powerSupplyRepository.save(powerSupply);
    }


    @GetMapping("/powerSupplies/{id}")
    public ResponseEntity<PowerSupply> getPowerSupplyById(@PathVariable Long id) {
        PowerSupply powerSupply = powerSupplyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("PowerSupply not exist with id :" + id));
        return ResponseEntity.ok(powerSupply);
    }


    @PutMapping("/powerSupplies/{id}")
    public ResponseEntity<PowerSupply> updatePowerSupply(@PathVariable Long id, @RequestBody PowerSupply powerSupplyDetails){
        PowerSupply powerSupply = powerSupplyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("PowerSupply not exist with id :" + id));

        powerSupply.setModel(powerSupplyDetails.getModel());
        powerSupply.setDetails(powerSupplyDetails.getDetails());
        powerSupply.setPrice(powerSupplyDetails.getPrice());

        PowerSupply updatedPowerSupply = powerSupplyRepository.save(powerSupply);
        return ResponseEntity.ok(updatedPowerSupply);
    }


    @DeleteMapping("/powerSupplies/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePowerSupply(@PathVariable Long id){
        PowerSupply powerSupply = powerSupplyRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("PowerSupply not exist with id :" + id));

        powerSupplyRepository.delete(powerSupply);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}