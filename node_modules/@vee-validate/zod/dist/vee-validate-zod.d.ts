import { ZodTypeDef, ZodType, ZodEffects, ZodRawShape, ZodObject, TypeOf } from 'zod';

/**
 * Transforms a Zod's base type schema to yup's base type schema
 */
declare function toFieldValidator<TValue = unknown, TDef extends ZodTypeDef = ZodTypeDef, TInput = TValue>(zodSchema: ZodType<TValue, TDef, TInput> | ZodEffects<ZodType<TValue, TDef, TInput>>): any;
declare type ToBaseTypes<TShape extends ZodRawShape> = {
    [P in keyof TShape]: TypeOf<TShape[P]>;
};
/**
 * Transforms a Zod object schema to Yup's schema
 */
declare function toFormValidator<TShape extends ZodRawShape, TValues extends Record<string, unknown> = ToBaseTypes<TShape>>(zodSchema: ZodObject<TShape> | ZodEffects<ZodObject<TShape>>): any;

export { toFieldValidator, toFormValidator };
