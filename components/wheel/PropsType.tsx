export interface BaseWheelProps {
  value?: string | number;
  defaultValue?: string | number;
  valueMember?: string;
  dataSource: Array<{ [key: string]: any }>;
  onChange?: (value?: string | number) => void;
  itemRender?: (item?: { [key: string]: any }) => string;
  disabled?: boolean;
  onTransition?: (value: boolean) => void;
}
