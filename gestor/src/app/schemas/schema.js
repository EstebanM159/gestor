import z from 'zod';

const taskSchema = z.object({
  titulo: z.string({
    invalid_type_error: 'Movie title must be a string',
    required_error: 'Movie title is required.'
  }),
  descripcion: z.string(),
  prioridad: z.number(),
  estado: z.string(),
  rate: z.number().min(0).max(10).default(5),
  favorito: z.number()
});

export function validateTask (input) {
  return taskSchema.safeParse(input);
}

export function validatePartialTask (input) {
  return taskSchema.partial().safeParse(input);
}
