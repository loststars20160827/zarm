(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{569:function(e,n,t){"use strict";t.r(n),n.default="# Calendar \u65e5\u5386\n\n## \u5e73\u94fa\u9009\u62e9\n\n```jsx\nimport { Button, Select, Icon, Input, Cell, Calendar } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: false,\n      multiple: true,\n      defaultValue: ['2019-10-11', '2019-10-17'],\n      value: '',\n      min: '2019-9-12',\n      max: '2019-11-11',\n      dateRender: date => {\n        if (/(0|6)/.test(date.getDay())) {\n          return (\n            <div className=\"custom\">\n              <div className=\"custom__date\">{date.getDate()}</div>\n              <div className=\"custom__text\">\u4f11\u606f</div>\n            </div>\n          );\n        }\n        return date.getDate();\n      },\n      disabledDate: date => /(0|6)/.test(date.getDay())\n    };\n  }\n\n  render() {\n    const { multiple, min, max, visible } = this.state;\n\n    return (\n      <div>\n        <div>\n          <Cell hasArrow title=\"multiple\">\n            <Select\n              visible={visible}\n              placeholder=\"multiple\"\n              value={multiple ? 'true' : 'false'}\n              dataSource={[\n                {\n                  value: 'false',\n                  label: '\u5355\u9009'\n                },\n                {\n                  value: 'true',\n                  label: '\u53cc\u9009'\n                }\n              ]}\n              onOk={selected => {\n                this.setState({\n                  multiple: selected[0].value === 'true',\n                  visible: false\n                });\n              }}\n            />\n          </Cell>\n          <Cell title=\"min\">\n            <Input\n              type=\"text\"\n              placeholder=\"\u8bf7\u8f93\u5165\u65e5\u5386\u8d77\u59cb\u65e5\u671f\"\n              value={min}\n              onBlur={e => this.setState({ min: e })}\n            />\n          </Cell>\n          <Cell title=\"max\">\n            <Input\n              type=\"text\"\n              placeholder=\"\u8bf7\u8f93\u5165\u65e5\u5386\u7ec8\u6b62\u65e5\u671f\"\n              value={max}\n              onBlur={e => this.setState({ max: e })}\n            />\n          </Cell>\n        </div>\n        <div>\n          <Calendar\n            {...this.state}\n            onChange={value => {\n              // this.setState({ value });\n              console.log('onChange', value);\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| value | Date \\| Date[] | - | \u503c |\n| defaultValue | Date \\| Date[] | - | \u521d\u59cb\u503c |\n| min | Date | new Date() | \u6700\u5c0f\u53ef\u9009\u65e5\u671f |\n| max | Date | min + 1 \u5e74 | \u6700\u5927\u53ef\u9009\u65e5\u671f |\n| multiple | boolean | false | \u662f\u5426\u53cc\u9009 |\n| dateRender | (date?: Date) => void | date => date.getDate() | \u65e5\u671f\u6e32\u67d3\u51fd\u6570 |\n| disabledDate | (date?: Date) => boolean | () => false | \u65e5\u671f\u662f\u5426\u7981\u6b62\u9009\u62e9 |\n| onChange | (value?: Date[]) => void | - | \u65e5\u671f\u9009\u62e9\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570 |\n"}}]);
//# sourceMappingURL=37.386d587c.js.map