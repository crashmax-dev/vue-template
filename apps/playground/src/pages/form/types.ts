export type FormSlotPosition = 'prepend' | 'append'

export interface FormFieldBase {
  label: string
  placeholder?: string
}

interface FormFieldInput extends FormFieldBase {
  type: 'text'
  value?: string
}

interface FormFieldTextarea extends FormFieldBase {
  type: 'textarea'
}

interface FormFieldCheckbox extends FormFieldBase {
  type: 'checkbox'
  indeterminate?: boolean
}

interface FormFieldSelect extends FormFieldBase {
  type: 'select'
  options: ReadonlyArray<{ value: string, label: string }>
  value?: string
}

export type FormFields
  = | FormFieldInput
    | FormFieldTextarea
    | FormFieldCheckbox
    | FormFieldSelect

export type FormFieldsRecord = Record<string, FormFields>
