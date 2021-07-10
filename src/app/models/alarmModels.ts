export interface IAlarm {
    id: number;
    time: string;
    initiator: string;
    description: string;
    severity: number;
    treshold: number;
    condition: string;
    acked: boolean;
    color: string;
}

export enum AlarmConditiontype {
    HighHigh,
    High,
    Low,
    LowLow,
    Default
}

export interface IAlarmCondition {
    value: number;
    color: string;
    severity: number;
    type: AlarmConditiontype;
}
