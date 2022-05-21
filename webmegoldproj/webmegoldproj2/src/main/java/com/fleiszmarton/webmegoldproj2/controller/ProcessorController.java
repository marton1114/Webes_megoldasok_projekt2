package com.fleiszmarton.webmegoldproj2.controller;


import com.fleiszmarton.webmegoldproj2.model.components.Processor;
import com.fleiszmarton.webmegoldproj2.repository.ProcessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProcessorController {

    @Autowired
    private ProcessorRepository processorRepository;

    @PostMapping(path = "/processors")
    public Processor createProcessor(@RequestBody Processor processor) {
        return processorRepository.save(processor);
    }

    @GetMapping(path = "/processors")
    public Iterable<Processor> getAllProcessors() {
        return processorRepository.findAll();
    }

}
