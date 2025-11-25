import fs from 'fs';
import path from 'path';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SCHEMA_PATH = path.join(process.cwd(), 'supabase', 'schema.sql');

// Default local Supabase connection string
const DB_URL = process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:54322/postgres';

async function main() {
  console.log('Applying schema to database...');
  
  if (!fs.existsSync(SCHEMA_PATH)) {
    console.error('Schema file not found.');
    return;
  }

  const sql = fs.readFileSync(SCHEMA_PATH, 'utf-8');
  const client = new Client({ connectionString: DB_URL });

  try {
    await client.connect();
    console.log('Connected to database.');
    
    await client.query(sql);
    console.log('Schema applied successfully.');
    
    // Reload PostgREST schema cache
    await client.query("NOTIFY pgrst, 'reload config'");
    console.log('PostgREST schema cache reloaded.');
    
  } catch (error) {
    console.error('Error applying schema:', error);
  } finally {
    await client.end();
  }
}

main().catch(console.error);
