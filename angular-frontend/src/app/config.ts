import { Processor } from './processor';
import { PowerSupply } from './powersupply';
import { Motherboard } from './motherboard';
import { Memory } from './memory';
import { HardDriveDisk } from './harddrivedisk';

export class Config {
    name: string;
    price: number;
    processor: Processor;
    powersupply: PowerSupply;
    motherboard: Motherboard;
    memory: Memory;
    harddrivedisk: HardDriveDisk;
}
