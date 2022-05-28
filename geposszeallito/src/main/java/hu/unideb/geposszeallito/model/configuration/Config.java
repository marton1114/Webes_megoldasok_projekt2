package hu.unideb.geposszeallito.model.configuration;

import hu.unideb.geposszeallito.model.parts.*;

import javax.persistence.*;

@Entity
@Table(name = "configs")
public class Config {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    private String name;
    private double price;

    @OneToOne
    @JoinColumn(name = "processor")
    private Processor processor;

    @OneToOne
    @JoinColumn(name = "powersupply")
    private PowerSupply powersupply;

    @OneToOne
    @JoinColumn(name = "motherboard")
    private Motherboard motherboard;

    @OneToOne
    @JoinColumn(name = "memory")
    private Memory memory;

    @OneToOne
    @JoinColumn(name = "harddrivedisk")
    private HardDriveDisk harddrivedisk;

	public Config() {
    }

    public Config(String name, Processor processor, PowerSupply powersupply, Motherboard motherboard, Memory memory, HardDriveDisk harddrivedisk, double price) {
        this.name = name;
		this.processor = processor;
		this.powersupply = powersupply;
		this.motherboard =  motherboard;
		this.memory = memory;
		this.harddrivedisk = harddrivedisk;
		this.price = price;
    }

    public String getHardDriveDisk() {
        return harddrivedisk.toString();
    }

    public void setHardDriveDisk(HardDriveDisk harddrivedisk) {
        this.harddrivedisk = harddrivedisk;
    }

    public String getMemory() {
        return memory.toString();
    }

    public void setMemory(Memory memory) {
        this.memory = memory;
    }

    public String getMotherboard() {
        return motherboard.toString();
    }

    public void setMotherboard(Motherboard motherboard) {
        this.motherboard = motherboard;
    }

    public String getPowerSupply() {
        return powersupply.toString();
    }

    public void setPowerSupply(PowerSupply powersupply) {
        this.powersupply = powersupply;
    }

    public void setProcessor(Processor processor) {
        this.processor = processor;
    }

    public String getProcessor() {
        return processor.toString();
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
