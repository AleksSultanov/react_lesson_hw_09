import {Title} from '../ui/Title/index.jsx';
import classes from './styles.module.css';

export function TitleBox() {
  return (
    <div className={classes.box}>
        <Title
          title="Домашнее задание по React №9"
        />
        <Title
          title="Султанов А"
          caption="Вывести данные с публичного API в react приложение."
        />
    </div>
  );
}

export function BottomBox() {
  return (
    <div className={classes.box}>
        <Title
          caption="Краткое описание:"
        />
        <Title
          caption='Координаты города или адреса через ресурс nominatim.openstreetmap.org'
        />
        <Title
          caption="Используются компоненты : TitleBox, BottomBox, AtributeForm, Title, Button, Field"
        />
        <Title
          caption="Компоненты взяты из предыдущих уроков"
        />
    </div>
  );
}

