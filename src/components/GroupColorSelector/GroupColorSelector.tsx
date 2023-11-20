import {Dropdown} from "primereact/dropdown";

export const GroupColorSelector = () => {
    const selectedColor = {name: 'White', code: 'white'}
    return (
        <div style={{gridArea: 'groupColor'}}
             className='flex justify-content-between align-items-center'>
            <div>
                Цвет группы:
            </div>
            <div>
                <Dropdown
                    value={selectedColor}
                    options={[selectedColor]}
                    optionLabel="name"
                    valueTemplate={
                        (option) => {
                            return (
                                <div className="flex align-items-center">
                                    <div style={{width: 18, height: 16, backgroundColor: `${option.code}`, border: '1px solid black'}}/>
                                </div>
                            );
                        }
                    }
                    disabled
                />
            </div>
        </div>
    );
};