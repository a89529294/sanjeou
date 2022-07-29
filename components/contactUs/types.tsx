interface GenericFormInput {
  required?: boolean;
}

export interface RegInput extends GenericFormInput {
  type: "reg";
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export interface SelectStringInput extends GenericFormInput {
  label: string;
  type: "selectString";
  value: { label: string; value: string };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: string;
      label: string;
    }>
  >;
  options: { label: string; value: string }[];
  placeholder: string;
}

export interface SelectNumberInput extends GenericFormInput {
  label: string;
  type: "selectNumber";
  value: { label: string; value: number };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: number;
      label: string;
    }>
  >;
  options: { label: string; value: number }[];
  placeholder: string;
}

export type ModelElement = {
  product_type: number;
  product: number;
  fileName: string;
  attachment: string;
  id: string;
};
