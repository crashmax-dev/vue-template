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

export type FormFields = FormFieldInput | FormFieldTextarea | FormFieldCheckbox

export type FormFieldsRecord = Record<string, FormFields>
