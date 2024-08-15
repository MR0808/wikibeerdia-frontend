const FormCheckbox = ({ label, name, defaultValue, size }) => {
    return (
        <>
            <input
                type="checkbox"
                name={name}
                defaultChecked={defaultValue}
                className={`checkbox checkbox-accent ${size}`}
            />
            <label htmlFor={name} className="label cursor-pointer ml-2">
                <span className="label-text capitalize">{label}</span>
            </label>
        </>
    );
};
export default FormCheckbox;
