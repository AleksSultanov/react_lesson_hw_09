import { Field } from '../ui/Field/index.jsx';
import classes from './styles.module.css';
import PropTypes from 'prop-types';

export function ResultForm({info, error, isLoading}) {

  function setFieldHandler(event) {
    console.log(event);
  }  

  return (
    <div className={classes.box}>
      <div className={classes.rect}></div> 
      <h1 className={classes.title}>Результат поиска</h1>
        <br/>
        {info.map((items, index) => {
          return (
          <div key={index} >
            <Field
                name = {'div'+index}
                value={'Карточка '+ Number(index+1)}
                disabled
                onChange={setFieldHandler}
                fullWidth
              />
            {Object.keys(items).map((key) => {
            return (
              <div key  = {'idx1'+index+key} className={classes.form}>
                <Field
                  name = {'idx'+index+key}
                  value={key}
                  disabled
                  onChange={setFieldHandler}
                  fullWidth
                />
                <Field
                  name = {'idx'+index+key}
                  value={items[key]}
                  disabled
                  onChange={setFieldHandler}
                  fullWidth
                  grid_column = "2"
                />
              </div>  
                )})}
          </div>      
        )})}
        
        {error && (
          <div>
            <Field
                name="error" 
                label="Ошибка поиска"
                value={error}
                disabled
                error
                onChange={setFieldHandler}
              />
          </div>
        ) 
        }
        { isLoading && (
          <div>
            <Field
                name="isLoading" 
                label="Статус"
                value="Поиск ..."
                disabled
                onChange={setFieldHandler}
              />
          </div>
        ) 
        }
    </div>
  );
}

ResultForm.propTypes = {
  info: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};
