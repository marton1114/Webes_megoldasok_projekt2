package hu.unideb.geposszeallito.repository.parts;

import hu.unideb.geposszeallito.model.parts.Processor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProcessorRepository extends JpaRepository<Processor, Long> {
}
