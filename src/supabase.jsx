import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rnbtyqydrkbalujsypwr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuYnR5cXlkcmtiYWx1anN5cHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MjExNTQsImV4cCI6MjAzOTQ5NzE1NH0.-hNbeORo1lzuHh9hrodYxGcZzbEtt7wd0NDAHTkSD_I"
);

export default supabase;
