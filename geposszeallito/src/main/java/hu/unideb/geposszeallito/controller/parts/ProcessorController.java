package hu.unideb.geposszeallito.controller.parts;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import hu.unideb.geposszeallito.exception.ResourceNotFoundException;
import hu.unideb.geposszeallito.model.parts.Processor;
import hu.unideb.geposszeallito.repository.parts.ProcessorRepository;
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
public class ProcessorController {

    @Autowired
    private ProcessorRepository processorRepository;


    @GetMapping("/processors")
    public List<Processor> getAllProcessors(){
        return processorRepository.findAll();
    }


    @PostMapping("/processors")
    public Processor createProcessor(@RequestBody Processor processor) {
        return processorRepository.save(processor);
    }


    @GetMapping("/processors/{id}")
    public ResponseEntity<Processor> getProcessorById(@PathVariable Long id) {
        Processor processor = processorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Processor not exist with id :" + id));
        return ResponseEntity.ok(processor);
    }

    // update processor rest api

    @PutMapping("/processors/{id}")
    public ResponseEntity<Processor> updateProcessor(@PathVariable Long id, @RequestBody Processor processorDetails){
        Processor processor = processorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Processor not exist with id :" + id));

        processor.setModel(processorDetails.getModel());
        processor.setDetails(processorDetails.getDetails());
        processor.setPrice(processorDetails.getPrice());

        Processor updatedProcessor = processorRepository.save(processor);
        return ResponseEntity.ok(updatedProcessor);
    }

    // delete processor rest api
    @DeleteMapping("/processors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProcessor(@PathVariable Long id){
        Processor processor = processorRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Processor not exist with id :" + id));

        processorRepository.delete(processor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}