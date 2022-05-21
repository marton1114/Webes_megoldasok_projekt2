package com.fleiszmarton.webmegoldproj2.repository;

import com.fleiszmarton.webmegoldproj2.model.components.Processor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProcessorRepository extends CrudRepository<Processor, Integer> {
}
