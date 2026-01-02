/*
  # Create OPENWAY database tables

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key)
      - `full_name` (text) - Student's full name
      - `email` (text) - Contact email
      - `phone` (text) - Phone number
      - `education_level` (text) - Current education level
      - `needs` (text) - Description of orientation needs
      - `created_at` (timestamptz) - Registration timestamp
    
    - `bookings`
      - `id` (uuid, primary key)
      - `full_name` (text) - Name for the appointment
      - `email` (text) - Contact email
      - `phone` (text) - Phone number
      - `preferred_date` (date) - Preferred appointment date
      - `preferred_time` (text) - Preferred time slot
      - `reason` (text) - Reason for consultation
      - `status` (text) - Booking status (pending/confirmed/cancelled)
      - `created_at` (timestamptz) - Booking creation timestamp
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public insert access (anyone can register/book)
    - Add policies for authenticated admin read access
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  education_level text NOT NULL,
  needs text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  reason text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit registration"
  ON registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit booking"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can view bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);