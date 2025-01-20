export interface ICalculationModeField {
  name: string;
  label: string;
  type: "number" | "digit" | "text";
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
}

export interface ICalculationMode {
  title: string;
  img?: string;
  children: {
    title: string;
    fields: ICalculationModeField[];
    getResult: (data: any) => number;
  }[];
}
