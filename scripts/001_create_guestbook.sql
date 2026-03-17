-- Create guestbook table for Idul Fitri wishes
CREATE TABLE IF NOT EXISTS public.guestbook (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE public.guestbook ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to view guestbook messages
CREATE POLICY "Allow public to view guestbook" ON public.guestbook
  FOR SELECT
  USING (true);

-- Create policy to allow anyone to insert guestbook messages
CREATE POLICY "Allow public to insert guestbook" ON public.guestbook
  FOR INSERT
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS guestbook_created_at_idx ON public.guestbook(created_at DESC);
