import PropTypes from "prop-types";
import { BoxField, Label, Finput } from "./styles";

export function Field({
    label,
    name,
    value,
    onChange,
    type = "text",
    grid_column = "1",
    error,
    disabled,
    fullWidth,
}) {
    return (
        <BoxField grid_column={grid_column} fullWidth={fullWidth}>
            <Label error={error}>{label}</Label>
            <Finput
                value={value}
                name={name}
                onChange={onChange}
                type={type}
                disabled={disabled}
            />
        </BoxField>
    );
}

Field.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    grid_column: PropTypes.string,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
};
