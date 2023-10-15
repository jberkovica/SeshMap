import { modules } from '../module/utils';
import { ChangeEventHandler } from 'react';

export type LevelSelectorProps = {
    onSelectLevel(level: string): void;
};

export function LevelSelector({ onSelectLevel }: LevelSelectorProps) {
    const handleLevelChange: ChangeEventHandler<HTMLSelectElement> = (
        event
    ) => {
        const selectedLevel = event.target.value;
        onSelectLevel(selectedLevel);
    };

    const levels = Object.keys(modules);

    return (
        <div>
            <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleLevelChange}
            >
                <option value="">Select Level</option>
                {levels.map((element) => (
                    <option key={element} value={element}>
                        {element}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default LevelSelector;
