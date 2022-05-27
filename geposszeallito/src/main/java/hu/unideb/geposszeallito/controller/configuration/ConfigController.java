package hu.unideb.geposszeallito.controller.configuration;


import hu.unideb.geposszeallito.exception.ResourceNotFoundException;
import hu.unideb.geposszeallito.model.configuration.Config;
import hu.unideb.geposszeallito.repository.configuration.ConfigRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ConfigController {
    @Autowired
    private ConfigRepository configRepository;

    @GetMapping("/configs")
    public List<Config> getAllConfigs(){
        return configRepository.findAll();
    }

    @PostMapping("/configs")
    public Config createConfig(@RequestBody Config config) {
        return configRepository.save(config);
    }

    @GetMapping("/configs/{id}")
    public ResponseEntity<Config> getConfigById(@PathVariable Long id) {
        Config config = configRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Config not exist with id :" + id));
        return ResponseEntity.ok(config);
    }

    @DeleteMapping("/configs/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteConfig(@PathVariable Long id){
        Config config = configRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Config not exist with id :" + id));

        configRepository.delete(config);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
