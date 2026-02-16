import { z } from 'zod';

export const TierSchema = z.enum(['starter', 'power', 'suite', 'dedicated']);
export type Tier = z.infer<typeof TierSchema>;

export const SubscriptionStatusSchema = z.enum(['active', 'past_due', 'canceled', 'incomplete', 'trialing']);
export type SubscriptionStatus = z.infer<typeof SubscriptionStatusSchema>;

export const AppStatusSchema = z.enum(['pending', 'installing', 'running', 'stopped', 'error', 'uninstalling']);
export type AppStatus = z.infer<typeof AppStatusSchema>;

export const BackupStatusSchema = z.enum(['pending', 'running', 'completed', 'failed', 'cancelled']);
export type BackupStatus = z.infer<typeof BackupStatusSchema>;

export const InvoiceStatusSchema = z.enum(['draft', 'open', 'paid', 'void', 'uncollectible']);
export type InvoiceStatus = z.infer<typeof InvoiceStatusSchema>;

export const PaymentMethodTypeSchema = z.enum(['card', 'sepa_debit', 'us_bank_account']);
export type PaymentMethodType = z.infer<typeof PaymentMethodTypeSchema>;

export const UserRoleSchema = z.enum(['user', 'admin']);
export type UserRole = z.infer<typeof UserRoleSchema>;
