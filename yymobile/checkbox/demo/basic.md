---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


````jsx
import { Checkbox } from 'yymobile';
import { List, Flex } from 'yymobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Test extends React.Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'college diploma' },
    ];
    return (<div>
      <List renderHeader={() => 'CheckboxItem demo'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
        <CheckboxItem prefixCls="yy-checkbox" key={666} multiSelect={true}>
          multiSelect
        </CheckboxItem>
      </List>

      <Flex>
        <Flex.Item>
          <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
            Agree <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>agreement</a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </div>);
  }
}

ReactDOM.render(<Test />, mountNode);
````
