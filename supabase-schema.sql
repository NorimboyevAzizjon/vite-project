-- Supabase Products table schema
-- Bu SQL ni Supabase dashboard > SQL Editor da ishga tushiring

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) ni yoqish
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Hamma o'qishi mumkin
CREATE POLICY "Allow public read access" ON products
  FOR SELECT USING (true);

-- Faqat authenticated users insert qila oladi
CREATE POLICY "Allow authenticated insert" ON products
  FOR INSERT TO authenticated
  WITH CHECK (true);

-- Faqat authenticated users delete qila oladi
CREATE POLICY "Allow authenticated delete" ON products
  FOR DELETE TO authenticated
  USING (true);

-- Faqat authenticated users update qila oladi
CREATE POLICY "Allow authenticated update" ON products
  FOR UPDATE TO authenticated
  USING (true);

-- Test mahsulotlar (ixtiyoriy)
INSERT INTO products (title, price, image_url, description) VALUES
  ('iPhone 15 Pro', 15000000, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708', 'Apple iPhone 15 Pro - eng zamonaviy smartfon'),
  ('Samsung Galaxy S24', 12000000, 'https://images.samsung.com/is/image/samsung/p6pim/uz/2401/gallery/uz-galaxy-s24-sm-s921blbgskz-thumb-539428051', 'Samsung Galaxy S24 - yuqori sifatli Android telefon'),
  ('MacBook Pro 14"', 35000000, 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697230830200', 'Apple MacBook Pro 14 dyuym - professional noutbuk');
