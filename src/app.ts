import { z } from 'zod';
import { AppStatusSchema } from './enums.js';

export const AppSchema = z.object({
  id: z.string(),
  name: z.string(),
  displayName: z.string(),
  description: z.string(),
  icon: z.string(),
  category: z.string(),
  requiresStorage: z.boolean().default(false),
  minRamMB: z.number().default(128),
  minStorageGB: z.number().default(0),
  isAvailable: z.boolean().default(true),
  configFields: z.array(z.object({
    key: z.string(),
    label: z.string(),
    type: z.enum(['text', 'number', 'boolean', 'password', 'select']),
    required: z.boolean().default(false),
    default: z.union([z.string(), z.number(), z.boolean()]).optional(),
    options: z.array(z.string()).optional(),
    description: z.string().optional(),
  })).optional(),
});

export const InstalledAppSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  appId: z.string(),
  status: AppStatusSchema,
  subdomain: z.string(),
  customDomain: z.string().nullable(),
  config: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])),
  storagePath: z.string().nullable(),
  installedAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  app: AppSchema.optional(),
});

export const InstallAppSchema = z.object({
  appId: z.string(),
  subdomain: z.string().min(3).max(63).regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/),
  customDomain: z.string().optional(),
  config: z.record(z.union([z.string(), z.number(), z.boolean()])).optional(),
});

export const UpdateInstalledAppSchema = z.object({
  config: z.record(z.union([z.string(), z.number(), z.boolean(), z.null()])).optional(),
  customDomain: z.string().nullable().optional(),
});

export type App = z.infer<typeof AppSchema>;
export type InstalledApp = z.infer<typeof InstalledAppSchema>;
export type InstallApp = z.infer<typeof InstallAppSchema>;
export type UpdateInstalledApp = z.infer<typeof UpdateInstalledAppSchema>;
