import { z } from 'zod';
import { InvoiceStatusSchema } from './enums.js';

export const InvoiceSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  stripeInvoiceId: z.string(),
  number: z.string().nullable(),
  status: InvoiceStatusSchema,
  amountDue: z.number(),
  amountPaid: z.number(),
  currency: z.string().default('usd'),
  dueDate: z.coerce.date().nullable(),
  paidAt: z.coerce.date().nullable(),
  hostedInvoiceUrl: z.string().nullable(),
  invoicePdf: z.string().nullable(),
  createdAt: z.coerce.date(),
});

export const InvoiceLineItemSchema = z.object({
  id: z.string(),
  invoiceId: z.string().uuid(),
  description: z.string(),
  amount: z.number(),
  currency: z.string().default('usd'),
  quantity: z.number().default(1),
  periodStart: z.coerce.date().nullable(),
  periodEnd: z.coerce.date().nullable(),
});

export type Invoice = z.infer<typeof InvoiceSchema>;
export type InvoiceLineItem = z.infer<typeof InvoiceLineItemSchema>;
