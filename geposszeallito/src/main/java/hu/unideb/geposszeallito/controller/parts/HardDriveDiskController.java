package hu.unideb.geposszeallito.controller.parts;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import hu.unideb.geposszeallito.exception.ResourceNotFoundException;
import hu.unideb.geposszeallito.model.parts.HardDriveDisk;
import hu.unideb.geposszeallito.repository.parts.HardDriveDiskRepository;
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
public class HardDriveDiskController {

    @Autowired
    private HardDriveDiskRepository hardDriveDiskRepository;


    @GetMapping("/harddrivedisks")
    public List<HardDriveDisk> getAllHardDriveDisks(){
        return hardDriveDiskRepository.findAll();
    }


    @PostMapping("/harddrivedisks")
    public HardDriveDisk createHardDriveDisk(@RequestBody HardDriveDisk hardDriveDisk) {
        return hardDriveDiskRepository.save(hardDriveDisk);
    }


    @GetMapping("/harddrivedisks/{id}")
    public ResponseEntity<HardDriveDisk> getHardDriveDiskById(@PathVariable Long id) {
        HardDriveDisk hardDriveDisk = hardDriveDiskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("HardDriveDisk not exist with id :" + id));
        return ResponseEntity.ok(hardDriveDisk);
    }

    // update hardDriveDisk rest api

    @PutMapping("/harddrivedisks/{id}")
    public ResponseEntity<HardDriveDisk> updateHardDriveDisk(@PathVariable Long id, @RequestBody HardDriveDisk hardDriveDiskDetails){
        HardDriveDisk hardDriveDisk = hardDriveDiskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("HardDriveDisk not exist with id :" + id));

        hardDriveDisk.setModel(hardDriveDiskDetails.getModel());
        hardDriveDisk.setDetails(hardDriveDiskDetails.getDetails());
        hardDriveDisk.setPrice(hardDriveDiskDetails.getPrice());

        HardDriveDisk updatedHardDriveDisk = hardDriveDiskRepository.save(hardDriveDisk);
        return ResponseEntity.ok(updatedHardDriveDisk);
    }

    // delete hardDriveDisk rest api
    @DeleteMapping("/harddrivedisks/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteHardDriveDisk(@PathVariable Long id){
        HardDriveDisk hardDriveDisk = hardDriveDiskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("HardDriveDisk not exist with id :" + id));

        hardDriveDiskRepository.delete(hardDriveDisk);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}