/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TrainingFormInputValues = {
    Field0?: string;
    Field1?: string;
    Name?: string;
    Course?: string;
};
export declare type TrainingFormValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Course?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingFormOverridesProps = {
    TrainingFormGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<SelectFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Course?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingFormProps = React.PropsWithChildren<{
    overrides?: TrainingFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TrainingFormInputValues) => TrainingFormInputValues;
    onSuccess?: (fields: TrainingFormInputValues) => void;
    onError?: (fields: TrainingFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingFormInputValues) => TrainingFormInputValues;
    onValidate?: TrainingFormValidationValues;
} & React.CSSProperties>;
export default function TrainingForm(props: TrainingFormProps): React.ReactElement;
