/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewTrainingFormCreateFormInputValues = {
    name?: string;
    topic?: string;
    date?: string;
};
export declare type NewTrainingFormCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    topic?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewTrainingFormCreateFormOverridesProps = {
    NewTrainingFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    topic?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewTrainingFormCreateFormProps = React.PropsWithChildren<{
    overrides?: NewTrainingFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewTrainingFormCreateFormInputValues) => NewTrainingFormCreateFormInputValues;
    onSuccess?: (fields: NewTrainingFormCreateFormInputValues) => void;
    onError?: (fields: NewTrainingFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewTrainingFormCreateFormInputValues) => NewTrainingFormCreateFormInputValues;
    onValidate?: NewTrainingFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewTrainingFormCreateForm(props: NewTrainingFormCreateFormProps): React.ReactElement;
