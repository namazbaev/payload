import { useTranslation } from 'react-i18next';
import { Content, Div, Label, SummaryContent, Value, Amount } from './style';
export default () => {
  const { t } = useTranslation();
  return (
        <Content>
          <Div>
            <Label>Страхователь</Label>
            <SummaryContent>
              <Value>PERDESHOV ZULFUKAR NISHANBAYEVICH</Value>
              <Value>Пол: Муж.</Value>
              <Value>Дата рождения: 12.04.1985</Value>
              <Value>Паспорт: AA6127034</Value>
            </SummaryContent>
          </Div>
          <Div>
            <Label>Владелец</Label>
            <SummaryContent>
              <Value>31804890251524</Value>
              <Value>MIRZAYEV</Value>
              <Value>BAXTIYOR</Value>
              <Value>KABILDJANOVICH</Value>
            </SummaryContent>
          </Div>
          <Div>
            <Label>Транспортное средство</Label>
            <SummaryContent>
              <Value>SPARK - 01A252MB (Легковые автомобили)</Value>
              <Value>Тех паспорт: AAF 2579170</Value>
              <Value>XWBMA48N1KA545014/B12D212190777HB0658</Value>
              <Value>Г.ТАШКЕНТ И ТАШКЕНТСКАЯ ОБЛАСТЬ</Value>
            </SummaryContent>
          </Div>
          <Div>
            <Label>Водители/Родственники</Label>
            <SummaryContent>
              <Value>1. NURLAN NURALIYEV UMARBEKOVICH (НЕ РОДСТВЕННИК)</Value>
            </SummaryContent>
          </Div>
          <Div>
            <Label>Параметры страхования</Label>
            <SummaryContent>
              <Value>Страховая сумма:
                <Amount
                  value="40000000"
                  displayType='text'
                  thousandSeparator={true}
                  suffix={` ${t('currency')}`} /></Value>
              <Value>Премия: <Amount
                value="168000000"
                displayType='text'
                thousandSeparator={true}
                suffix={` ${t('currency')}`} /></Value>
              <Value>Сумма к оплате:
                <Amount
                value="168000000"
                displayType='text'
                thousandSeparator={true}
                suffix={` ${t('currency')}`} />
              </Value>
            </SummaryContent>
          </Div>
        </Content>
    )
}