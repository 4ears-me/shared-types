import { z } from 'zod';
import { BackupStatusSchema } from './enums.js';

export const BackupJobSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  type: z.enum(['full', 'incremental', 'database']),
  status: BackupStatusSchema,
  scheduledAt: z.coerce.date(),
  startedAt: z.coerce.date().nullable(),
  completedAt: z.coerce.date().nullable(),
  sizeBytes: z.number().nullable(),
  storagePath: z.string().nullable(),
  errorMessage: z.string().nullable(),
  retentionDays: z.number().default(30),
  createdAt: z.coerce.date(),
});

export const BackupConfigSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  enabled: z.boolean().default(true),
  schedule: z.string().default('0 2 * * *'),
  retentionDays: z.number().min(1).max(365).default(30),
  includeDatabases: z.boolean().default(true),
  includeFiles: z.boolean().default(true),
  lastBackupAt: z.coerce.date().nullable(),
  nextBackupAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const BackupRestoreSchema = z.object({
  backupJobId: z.string().uuid(),
  restoreDatabases: z.boolean().default(true),
  restoreFiles: z.boolean().default(true),
});

export const CreateBackupJobSchema = z.object({
  userId: z.string().uuid(),
  type: z.enum(['full', 'incremental', 'database']),
  scheduledAt: z.coerce.date().optional(),
});

export type BackupJob = z.infer<typeof BackupJobSchema>;
export type BackupConfig = z.infer<typeof BackupConfigSchema>;
export type BackupRestore = z.infer<typeof BackupRestoreSchema>;
export type CreateBackupJob = z.infer<typeof CreateBackupJobSchema>;
