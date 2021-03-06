import { Processor } from './processor';
import { PowerSupply } from './powersupply';
import { Motherboard } from './motherboard';
import { Memory } from './memory';
import { HardDriveDisk } from './harddrivedisk';

export class Config {
    id: number = 0;
    name: string = '';
    price: number = 0;
    processor: Processor = new Processor();
    powerSupply: PowerSupply = new PowerSupply();
    motherboard: Motherboard = new Motherboard();
    memory: Memory = new Memory();
    hardDriveDisk: HardDriveDisk = new HardDriveDisk();
}
