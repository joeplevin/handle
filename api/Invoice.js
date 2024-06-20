import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function parseInvoice(invoice) {
  console.log('Parsing invoice...');
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `Parse this invoice data: ${invoice}. The invoice data should be returned in JSON format & include the following objects: invoice, supplier & invoice_item. The invoice object should have the following fields if they exist: invoice_number, invoice_date & total_cost. The supplier object should contain name, email, phone & address fields. Each invoice_item should contain item_name, quantity, weight & price_per_unit`,
      },
    ],
    model: 'gpt-3.5-turbo',
  });
  return response.choices[0].message.content;
}
