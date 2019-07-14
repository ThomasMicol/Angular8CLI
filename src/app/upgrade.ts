import { EffectTargetEnum } from './effect-target-enum.enum';

export class Upgrade {
    Name : string;
    Cost : number;
    public EffectTarget : EffectTargetEnum;
    public EffectNumber : number;

    constructor(name: string, 
        cost: number, 
        target: EffectTargetEnum, 
        effectNumber: number)
        {
        this.Name = name;
        this.Cost= cost;
        this.EffectTarget = target;
        this.EffectNumber = effectNumber;
    }
}
