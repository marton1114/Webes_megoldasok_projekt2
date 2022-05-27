package hu.unideb.geposszeallito.model.configuration;

import hu.unideb.geposszeallito.model.parts.*;

import javax.persistence.*;

@Entity
@Table(name = "configurations")
public class Config {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    private String name;
    private double price;

    @OneToOne
    @JoinColumn(name = "processor_id")
    private Processor processor;

    @OneToOne
    @JoinColumn(name = "power_supply_id")
    private PowerSupply powerSupply;

    @OneToOne
    @JoinColumn(name = "motherboard_id")
    private Motherboard motherboard;

    @OneToOne
    @JoinColumn(name = "memory_id")
    private Memory memory;

    @OneToOne
    @JoinColumn(name = "hard_drive_disk_id")
    private HardDriveDisk hardDriveDisk;


    public HardDriveDisk getHardDriveDisk() {
        return hardDriveDisk;
    }

    public void setHardDriveDisk(HardDriveDisk hardDriveDisk) {
        this.hardDriveDisk = hardDriveDisk;
    }

    public Memory getMemory() {
        return memory;
    }

    public void setMemory(Memory memory) {
        this.memory = memory;
    }

    public Motherboard getMotherboard() {
        return motherboard;
    }

    public void setMotherboard(Motherboard motherboard) {
        this.motherboard = motherboard;
    }

    public PowerSupply getPowerSupply() {
        return powerSupply;
    }

    public void setPowerSupply(PowerSupply powerSupply) {
        this.powerSupply = powerSupply;
    }

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    public Processor getProcessor() {
        return processor;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
