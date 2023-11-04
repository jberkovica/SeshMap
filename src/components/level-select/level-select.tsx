import { Level } from '@/consts/course';
import { Select } from '@/lib/select';

export type LevelSelectProps = {
    handleChange(newLevel: Level): void;
    value: Level;
};

export function LevelSelect({ handleChange, value }: LevelSelectProps) {
    return (
        <Select
            aria-label="Select a level"
            onChange={(e) => handleChange(e.target.value as Level)}
            value={value}
        >
            <option value={Level.Four}>{Level.Four}</option>
            <option value={Level.Five}>{Level.Five}</option>
            <option value={Level.Six}>{Level.Six}</option>
        </Select>
    );
}
