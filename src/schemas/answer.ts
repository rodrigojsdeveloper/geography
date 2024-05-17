import z from 'zod'

export const answerSchema = z.object({
  name: z.string().min(1, 'Enter the name of the country'),
})
