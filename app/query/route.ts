import postgres from 'postgres';

const databaseUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('Missing POSTGRES_URL or DATABASE_URL environment variable');
}
const sql = postgres(databaseUrl, { ssl: 'require' });

 async function listInvoices() {
 	const data = await sql`
     SELECT invoices.amount, customers.name
     FROM invoices
     JOIN customers ON invoices.customer_id = customers.id
     WHERE invoices.amount = 666;
   `;

 	return data;
 }

export async function GET() {
   try {
   	return Response.json(await listInvoices());
   } catch (error) {
  	return Response.json({ error }, { status: 500 });
   }
  
}
