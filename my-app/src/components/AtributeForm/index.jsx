import { useState } from "react";

import { Field } from "../ui/Field/index.jsx";
import { Button } from "../ui/Button/index.jsx";
import classes from "./styles.module.css";
import { useAdress } from "../../api/hooks/useAdress.js";
import { ResultForm } from "../ResultForm/index.jsx";
export function AtributeForm() {
    const [formState, setFormState] = useState({
        address: "",
        message: "",
    });

    const { info, error, isLoading, getAdressInfoRequest } = useAdress();

    function setField(key, value) {
        setFormState({
            ...formState,
            [key]: value,
        });
    }

    function setFieldHandler(event) {
        const { name, value } = event.target;
        setField(name, value);
    }

    function clearFields() {
        setField("message", "");
    }

    function validField(fielval, fieldname) {
        if (fielval.trim() === "") {
            setField("message", `Ввведите ${fieldname}`);
            return 1;
        }
        return 0;
    }

    function validFields() {
        let res = 0;
        setField("message", "");
        res += validField(formState["address"], "адрес");
        return res;
    }

    function onSubmit(event) {
        event.preventDefault();
        if (validFields() === 0) {
            getAdressInfoRequest(formState.address);
            clearFields();
        }
    }

    return (
        <div>
            <div className={classes.box}>
                <div className={classes.rect}></div>
                <form className={classes.form} onSubmit={onSubmit}>
                    <h1 className={classes.title}>Поиск адреса</h1>
                    <Field
                        name="address"
                        label="Адрес"
                        value={formState.address}
                        onChange={setFieldHandler}
                        grid_column="1"
                    />
                    <br />
                    <div className={classes.aright}>
                        <Button>Поиск</Button>
                    </div>
                    <br />
                    {formState.message && (
                        <div>
                            <Field
                                name="message"
                                label="Проверка валидации"
                                value={formState.message}
                                onChange={setFieldHandler}
                                grid_column="1"
                                disabled
                                error
                            />
                        </div>
                    )}
                </form>
            </div>
            <ResultForm info={info} error={error} isLoading={isLoading} />
        </div>
    );
}
