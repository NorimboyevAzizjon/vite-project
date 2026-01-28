import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface SupabaseProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image_url: string;
  created_at: string;
}

export const getProducts = async (): Promise<SupabaseProduct[]> => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return [];
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
};

export const getProductById = async (id: number): Promise<SupabaseProduct | null> => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return null;
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data;
};

export const addProduct = async (product: Omit<SupabaseProduct, 'id' | 'created_at'>): Promise<SupabaseProduct | null> => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return null;
  }

  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single();

  if (error) {
    console.error('Error adding product:', error);
    return null;
  }

  return data;
};

export const deleteProduct = async (id: number): Promise<boolean> => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return false;
  }

  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    return false;
  }

  return true;
};

export const updateProduct = async (
  id: number, 
  product: Partial<Omit<SupabaseProduct, 'id' | 'created_at'>>
): Promise<SupabaseProduct | null> => {
  if (!isSupabaseConfigured || !supabase) {
    console.warn('Supabase is not configured');
    return null;
  }

  const { data, error } = await supabase
    .from('products')
    .update(product)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating product:', error);
    return null;
  }

  return data;
};
