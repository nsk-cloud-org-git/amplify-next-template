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
export declare type TrainingFormUpdateFormInputValues = {
    Name?: string;
    Course?: string;
};
export declare type TrainingFormUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Course?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TrainingFormUpdateFormOverridesProps = {
    TrainingFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Course?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TrainingFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: TrainingFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trainingForm?: any;
    onSubmit?: (fields: TrainingFormUpdateFormInputValues) => TrainingFormUpdateFormInputValues;
    onSuccess?: (fields: TrainingFormUpdateFormInputValues) => void;
    onError?: (fields: TrainingFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TrainingFormUpdateFormInputValues) => TrainingFormUpdateFormInputValues;
    onValidate?: TrainingFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TrainingFormUpdateForm(props: TrainingFormUpdateFormProps): React.ReactElement;
