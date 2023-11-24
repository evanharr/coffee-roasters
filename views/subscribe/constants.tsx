// FormSchema.ts
import { z } from 'zod';

const CardSchema = z.object({
  cardTitle: z.string(), // Add any other properties you need for a card
});

const AccordianSchema = z.object({
  accordianId: z.string(),
  selectedCard: CardSchema,
});

const FormSchema = z.object({
  accordians: z.array(AccordianSchema),
});

export default FormSchema;