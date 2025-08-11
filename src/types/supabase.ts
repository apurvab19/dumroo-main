export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          user_type: 'teacher' | 'student' | 'admin' | 'parent';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          name: string;
          user_type: 'teacher' | 'student' | 'admin' | 'parent';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          user_type?: 'teacher' | 'student' | 'admin' | 'parent';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}