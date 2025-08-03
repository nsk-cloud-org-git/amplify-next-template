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
export declare type NewTrainingFormUpdateFormInputValues = {
    name?: string;
    topic?: string;
    date?: string;
};
export declare type NewTrainingFormUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    topic?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewTrainingFormUpdateFormOverridesProps = {
    NewTrainingFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    topic?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewTrainingFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: NewTrainingFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    newTrainingForm?: any;
    onSubmit?: (fields: NewTrainingFormUpdateFormInputValues) => NewTrainingFormUpdateFormInputValues;
    onSuccess?: (fields: NewTrainingFormUpdateFormInputValues) => void;
    onError?: (fields: NewTrainingFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewTrainingFormUpdateFormInputValues) => NewTrainingFormUpdateFormInputValues;
    onValidate?: NewTrainingFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NewTrainingFormUpdateForm(props: NewTrainingFormUpdateFormProps): React.ReactElement;
