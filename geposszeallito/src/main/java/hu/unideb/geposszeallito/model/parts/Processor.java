package hu.unideb.geposszeallito.model.parts;


import javax.persistence.*;

@Entity
@Table(name = "processors")
public class Processor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "model")
    private String model;

    @Column(name = "details")
    private String details;

    @Column(name = "price")
    private double price;


    public Processor() {
    }

    public Processor(String model, String details, double price) {
        this.model = model;
        this.details = details;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Modell: " + model + '\n' +
                "Specifikációk: " + details + '\n' +
                "Ár: " + price;
    }
}
