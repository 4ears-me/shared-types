import { z } from 'zod';
import { UserRoleSchema } from './enums.js';

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().nullable(),
  role: UserRoleSchema.default('user'),
  pocketId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  role: UserRoleSchema.optional(),
  pocketId: z.string().optional(),
});

export const UpdateUserSchema = z.object({
  email: z.string().email().optional(),
  name: z.string().nullable().optional(),
  role: UserRoleSchema.optional(),
  pocketId: z.string().nullable().optional(),
});

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
