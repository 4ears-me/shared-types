import { z } from 'zod';

export const StorageUsageSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  totalBytes: z.number(),
  usedBytes: z.number(),
  volumeId: z.string().nullable(),
  volumeName: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const StorageBlockSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  sizeGB: z.number(),
  hetznerVolumeId: z.string().nullable(),
  mountPath: z.string(),
  status: z.enum(['pending', 'attached', 'error']),
  createdAt: z.coerce.date(),
});

export const AddStorageBlockSchema = z.object({
  sizeGB: z.number().min(50).max(1000).multipleOf(50),
});

export type StorageUsage = z.infer<typeof StorageUsageSchema>;
export type StorageBlock = z.infer<typeof StorageBlockSchema>;
export type AddStorageBlock = z.infer<typeof AddStorageBlockSchema>;
