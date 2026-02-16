import { z } from 'zod';
import { TierSchema, SubscriptionStatusSchema } from './enums.js';

export const SubscriptionSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  tier: TierSchema,
  status: SubscriptionStatusSchema,
  stripeSubscriptionId: z.string().nullable(),
  stripeCustomerId: z.string().nullable(),
  currentPeriodStart: z.coerce.date(),
  currentPeriodEnd: z.coerce.date(),
  cancelAtPeriodEnd: z.boolean().default(false),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateSubscriptionSchema = z.object({
  userId: z.string().uuid(),
  tier: TierSchema,
  stripeSubscriptionId: z.string().optional(),
  stripeCustomerId: z.string().optional(),
});

export const UpdateSubscriptionSchema = z.object({
  tier: TierSchema.optional(),
  status: SubscriptionStatusSchema.optional(),
  stripeSubscriptionId: z.string().nullable().optional(),
  stripeCustomerId: z.string().nullable().optional(),
  currentPeriodStart: z.coerce.date().optional(),
  currentPeriodEnd: z.coerce.date().optional(),
  cancelAtPeriodEnd: z.boolean().optional(),
});

export const TierConfigSchema = z.object({
  name: TierSchema,
  displayName: z.string(),
  price: z.number(),
  ramMB: z.number(),
  cpuCores: z.number(),
  includedStorageGB: z.number(),
  description: z.string(),
});

export type Subscription = z.infer<typeof SubscriptionSchema>;
export type CreateSubscription = z.infer<typeof CreateSubscriptionSchema>;
export type UpdateSubscription = z.infer<typeof UpdateSubscriptionSchema>;
export type TierConfig = z.infer<typeof TierConfigSchema>;
