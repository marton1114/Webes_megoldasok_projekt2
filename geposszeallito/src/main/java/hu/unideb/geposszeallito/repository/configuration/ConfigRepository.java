package hu.unideb.geposszeallito.repository.configuration;

import hu.unideb.geposszeallito.model.configuration.Config;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfigRepository extends JpaRepository<Config, Long> {
}
