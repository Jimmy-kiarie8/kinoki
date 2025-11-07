-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    county TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    package_type TEXT NOT NULL,
    total_amount INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS orders_status_idx ON orders(status);

-- Add RLS policies
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow insert for all authenticated users
CREATE POLICY "Allow insert for all users" ON orders
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Allow select for all authenticated users
CREATE POLICY "Allow select for all users" ON orders
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow update for all authenticated users
CREATE POLICY "Allow update for all users" ON orders
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true); 