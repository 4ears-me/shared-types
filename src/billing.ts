import { z } from 'zod';
import { PaymentMethodTypeSchema } from './enums.js';

export const CustomerSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  stripeCustomerId: z.string(),
  email: z.string().email(),
  name: z.string().nullable(),
  defaultPaymentMethodId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const PaymentMethodSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  stripePaymentMethodId: z.string(),
  type: PaymentMethodTypeSchema,
  isDefault: z.boolean().default(false),
  cardBrand: z.string().nullable(),
  cardLast4: z.string().nullable(),
  cardExpiryMonth: z.number().nullable(),
  cardExpiryYear: z.number().nullable(),
  sepaBankName: z.string().nullable(),
  sepaLast4: z.string().nullable(),
  createdAt: z.coerce.date(),
});

export const SetupIntentSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  stripeSetupIntentId: z.string(),
  clientSecret: z.string(),
  status: z.enum(['requires_payment_method', 'requires_confirmation', 'requires_action', 'processing', 'succeeded', 'canceled']),
  createdAt: z.coerce.date(),
});

export const BillingAddressSchema = z.object({
  line1: z.string().optional(),
  line2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().length(2).optional(),
});

export type Customer = z.infer<typeof CustomerSchema>;
export type PaymentMethod = z.infer<typeof PaymentMethodSchema>;
export type SetupIntent = z.infer<typeof SetupIntentSchema>;
export type BillingAddress = z.infer<typeof BillingAddressSchema>;
