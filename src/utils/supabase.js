

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dgrcdqnosqpvcezizolw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRncmNkcW5vc3FwdmNleml6b2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyODUyMzEsImV4cCI6MjAxNjg2MTIzMX0.PYaFx1TujE6toJ20X4XUMPbHDHcqctdm5iLB49D4urI';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
